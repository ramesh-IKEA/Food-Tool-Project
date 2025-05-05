const dbConnection = require('../utils/DbConnection')

exports.InserCaseArticles = async(CaseID,article)=>{
  let article_selected =article.articel_number.split('-');
  let supplier =article.supplier_number.split('-');
    let artValue =article.article_value ? article.article_value : 'NA';
    let hsn_code = article.hsn_code ? article.hsn_code : 'NA';
    let invoice_quantity = article.invoice_quantity ? article.invoice_quantity : 'NA';
    let received_quantity = article.received_quantity ? article.received_quantity : 'NA';
    let damage_picture = article.damage_picture ? article.damage_picture :'{}';
    const query = {
        text: 'INSERT INTO tbl_case_articles(store_id,case_id,articel_number,article_value,hsn_code,consingnment_id,invoice_quantity,received_quantity,damaged_quantity,over_delivery,suggested_action,nc_codes,labor_hours,other_cost,manufacturing_date,dispatch_date,best_before_date,expiry_date,supplier_number,damage_type,uniquie_id,action_confirmation,status,batch_number,affected_quantity,available_stock,article_name,supplier_name,damage_picture) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29)',
        values: [article.store_id,CaseID,article_selected[0],artValue,hsn_code,article.consingnment_id,invoice_quantity,received_quantity,article.damaged_quantity,article.over_delivery,article.suggested_action,article.nc_codes,article.labor_hours,article.other_cost,article.manufacturing_date,article.dispatch_date,article.best_before_date,article.expiry_date,supplier[0],article.damage_type,article.uniquie_id,article.action_confirmation,article.status,article.batch_number,article.affected_quantity,article.available_stock,article_selected[1],supplier[1],damage_picture],
      }
      const articles = await dbConnection.query(query);
      return articles;
}
exports.UpdateCaseArticles =async(article)=>{
  let causing_party =article.causing_party_code ? article.causing_party_code.split('-') : ['NA','NA'];
  let artValue =article.article_value ? article.article_value : 'NA';
  let hsn_code = article.hsn_code ? article.hsn_code : 'NA';
  let invoice_quantity = article.invoice_quantity ? article.invoice_quantity : 'NA';
  let received_quantity = article.received_quantity ? article.received_quantity : 'NA';
  let damage_picture = article.damage_picture ? article.damage_picture :'{}';
  const query = `UPDATE tbl_case_articles  SET article_value =$1 ,hsn_code=$2,consingnment_id=$3,invoice_quantity=$4,received_quantity=$5,damaged_quantity=$6,over_delivery=$7,suggested_action=$8,nc_codes=$9,labor_hours=$10,other_cost=$11,manufacturing_date=$12,dispatch_date=$13,best_before_date=$14,expiry_date=$15,supplier_number=$16,damage_type=$17,action_confirmation=$18,batch_number=$19,affected_quantity=$20,available_stock=$21,causing_party_code=$23, causing_party_name=$24 ,damage_picture =$25 WHERE id = $22`;
  try {
    await dbConnection.query(query, [artValue,hsn_code,article.consingnment_id,invoice_quantity,received_quantity,article.damaged_quantity,article.over_delivery,article.suggested_action,article.nc_codes,article.labor_hours,article.other_cost,article.manufacturing_date,article.dispatch_date,article.best_before_date,article.expiry_date,article.supplier_number,article.damage_type,article.action_confirmation,article.batch_number,article.affected_quantity,article.available_stock,article.articleID,causing_party[0],causing_party[1],damage_picture]);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
exports.InserCaseArticlesQty = async(CaseID,article)=>{
  let article_selected =article.articel_number.split('-');
  let supplier =article.supplier_number.split('-');
    let artValue =article.article_value ? article.article_value : 'NA';
    let hsn_code = article.hsn_code ? article.hsn_code : 'NA';
    let invoice_quantity = article.invoice_quantity ? article.invoice_quantity : 'NA';
    let received_quantity = article.received_quantity ? article.received_quantity : 'NA';
    let damage_picture = article.damage_picture ? article.damage_picture :'{}';
    const query = {
        text: 'INSERT INTO tbl_case_articles(store_id,case_id,articel_number,article_value,hsn_code,invoice_quantity,received_quantity,manufacturing_date,dispatch_date,best_before_date,expiry_date,supplier_number,uniquie_id,status,batch_number,article_name,supplier_name,damage_picture,master_article_id,damaged_quantity,available_stock) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21)',
        values: [article.store_id,CaseID,article_selected[0],artValue,hsn_code,invoice_quantity,received_quantity,article.manufacturing_date,article.dispatch_date,article.best_before_date,article.expiry_date,supplier[0],article.uniquie_id,article.status,article.batch_number,article_selected[1],supplier[1],damage_picture,article.master_article_id,article.damaged_quantity,article.available_stock],
      }
      const articles = await dbConnection.query(query);
      return articles;
}
exports.CaseArticle=async(caseID,article_unique_id)=>{
 const Casequery = "SELECT * FROM tbl_case WHERE case_id='"+caseID+"'  ";
 const ArticlesQuery = "SELECT * FROM tbl_case_articles WHERE case_id='"+caseID+"'  ";
  const Cases = await dbConnection.query(Casequery);
  const CaseArticles = await dbConnection.query(ArticlesQuery);
  return {'case': Cases.rows[0],'articles':CaseArticles.rows}
}
exports.getAssociatedStoresData = async (store_id,case_id) => {
  try {
    const Query = "SELECT * FROM tbl_case_assosiated_stores WHERE store_id = '" + store_id + "' AND case_id='"+case_id+"'";
    const {rows} = await dbConnection.query(Query);
    return rows[0];
  } catch (err) {
    return false;
  }
}
exports.updateAssociatedStoresData = async (articles,id,notes) => {
  try {
    const Query = " UPDATE tbl_case_assosiated_stores  SET article_is =$1 , notes=$3 WHERE id = $2";
     await dbConnection.query(Query,[articles,id,notes]);
    return true;
  } catch (err) {
    return false;
  }
}
