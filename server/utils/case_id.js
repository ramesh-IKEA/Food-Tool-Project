const dbConnection = require('./DbConnection');
const moment = require('moment');
const zeroPad = (num, places) => String(num).padStart(places, '0')
exports.generate_case_id = async (type) => {
    query = "SELECT count FROM tbl_case_id WHERE slug='" + type + "'";
    const CasesID = await dbConnection.query(query);
    let caseSerialNumber = zeroPad(CasesID.rows[0]['count'], 4);
    let case_id = type + moment().format('MMYY') + caseSerialNumber;
    const updateQuery = `UPDATE tbl_case_id  SET count = $1  WHERE slug = $2`;
    await dbConnection.query(updateQuery, [parseInt(caseSerialNumber)+1, type]);
    return case_id;
}