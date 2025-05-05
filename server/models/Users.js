const dbConnection = require('../utils/DbConnection')

exports.InsertUser =async(data)=>{
  let userFunction = data.user_function.split('-');
  let userUnit = data.unit_id.split('-');
  let functioName,unitId='';
    if(userFunction[0]!='PQ' && userFunction[0]!='SQ'){
      functioName='store';
      unit_name='store';
      unitId=userFunction[0];
    }else{
      functioName=userFunction[0]
      unitId='SO';
      unit_name='SO';
    }
    const query = {
        text: 'INSERT INTO tbl_users(name,email,user_function,unit_id,password,short_id,unit_name) VALUES($1,$2,$3,$4,$5,$6,$7)',
        values: [data.name,data.email, functioName,unitId,data.short_id,data.short_id,unit_name],
      }
      try {
        await dbConnection.query(query);
        return true;
      } catch (err) {
        return false;
      }
}

exports.getUsers =async()=>{
    try {
        const query ='SELECT name,email,short_id,user_function,unit_id,is_active,created_at FROM tbl_users ORDER BY created_at DESC';
        const data = await dbConnection.query(query);
        return data.rows;
      } catch (err) {
        return false;
      }
}
exports.resetPassword =async(email,short_id)=>{
    try {
        const query ='UPDATE tbl_users SET password=$2 WHERE email=$1';
        await dbConnection.query(query,[email,short_id]);
        return true;
      } catch (err) {
        return false;
      }
}
exports.updateStatus =async(email,status)=>{
    try {
        const query ='UPDATE tbl_users SET is_active=$2 WHERE email=$1';
        await dbConnection.query(query,[email,status]);
        return true;
      } catch (err) {
        return false;
      }
}