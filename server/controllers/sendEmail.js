const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
exports.sendStoreNotification =(caseID)=>{
    let body = {
        // "email": [{'email' :'sandeep.k@ingka.ikea.com'},{'email':'nagalakshmi.rajagopalan@ingka.ikea.com'}],
        "email": 'sandeep.k@ingka.ikea.com',
        "subject" :'QSC- requesting for more information',
        "link":'/case/add_qty/QSC-2023-35150658_01522216445285',
        "caseID" : caseID
    };
    let req = new XMLHttpRequest();
    let URL ='https://prod-164.westeurope.logic.azure.com:443/workflows/0e407c0338eb4acc928ecb7676486e24/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=sNMwjGnIgcV1aHmS3eEXH6XplujvPFG1dIStpyoraKA';
    // let URL ='https://prod-196.westeurope.logic.azure.com:443/workflows/9f90b05f32ce4321bdd5b023b30ad534/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=vz6lomOT7Vt5Rd9Iq1PQJ9YBsb9OqhwD8v8UwleeXUQ';
    req.open('POST',URL,true)
    req.setRequestHeader("Content-Type", "application/json");
    req.onreadystatechange = function () {
        if (this.readyState === 4) {
            req.onreadystatechange = null;
            if (this.status === 200) {
                let resultJson = JSON.parse(this.response);
                console.log(resultJson)
            } else {
                console.log(this.statusText);
            }
        }
    };
    console.log(caseID)
    req.send(JSON.stringify(body));
}