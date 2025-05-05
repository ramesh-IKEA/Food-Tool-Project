const buyer_claim = require('../document_templates/buyer_claim')
const { getCaseJson } = require('../models/CaseModel')
const { dowloadFile } = require('../utils/uploadFiles')
const hbs =require('hbs');
const PuppeteerHTMLPDF = require('puppeteer-html-pdf');
const moment =require('moment');
const laber_hour_cost=300;
exports.getGeneratePDFOld = async (req, res, next) => {
    const { caseID } = req.query;
    const caseData = await getCaseJson(caseID);
    let html = buyer_claim(caseData);
    res.send({ 'html': html }).status(200);
}
exports.getSupportingFiles = async (req, res, next) => {
    const { fileName } = req.query
    // const file =await dowloadFile(fileName);
    // res.send({'link':file});
    const file =await dowloadFile(fileName);
    res.download(file);
}
exports.generatePdf = async (req, res,next) => {
    try {
        const { caseID } = req.query;
        const caseData = await getCaseJson(caseID);
        let articles =caseData.articles;
        let total=0;
        articles.map((value,index)=>{
            let laber_hours =parseInt(value.other_cost)+(parseInt(laber_hour_cost)*parseInt(value.labor_hours));
            let line_total=laber_hours;
            value['labor_hours_other_cost']=laber_hours;
            value['line_total']=line_total;
            total=parseInt(total)+parseInt(line_total)
        })
        caseData['articles']=articles;
        const pdfData = {
            data :caseData,
            total: total,
            date:moment(new Date()).format('DD-MM-YYYY'),
            baseUrl: `${req.protocol}://${req.get('host')}` // http://localhost:3000
        }
        const htmlPDF = new PuppeteerHTMLPDF();
        htmlPDF.setOptions({ margin: { top: '50px', right: '50px', bottom: '50px', left: '50px' },
        printBackground: true,
        format: 'A4', });
        const html = await htmlPDF.readFile('views/buyer_claim.hbs', 'utf8');
        const template = await hbs.compile(html);
        const content = template(pdfData);
        const pdfBuffer = await htmlPDF.create(content); 
        res.attachment('../')
        res.end(pdfBuffer);
    } catch (error) {
        next(error)
    }
};