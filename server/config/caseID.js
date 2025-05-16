const moment= require('moment');
let serialNumber ={
    "PQ": 1,
    "SQ": 1
}
const zeroPad = (num, places) => String(num).padStart(places, '0')
exports.case_id =(type) =>{
    let caseSerialNumber =zeroPad(serialNumber[type], 4);
        serialNumber[type] = parseInt(caseSerialNumber)+1;
    return type+moment().format('MMYY')+caseSerialNumber;
}
//....