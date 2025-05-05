const caseID = require('../config/caseID');
const dbConnection = require('../utils/DbConnection')
exports.getCaseJson=async(caseID)=>{
  casedata ="SELECT row_to_json(j) FROM (SELECT c.*, json_agg(json_build_object('id',a.id,'articel_number',a.articel_number,'case_id',a.case_id,'article_value',a.article_value,'hsn_code',a.hsn_code,'consingnment_id',a.consingnment_id,'invoice_quantity',a.invoice_quantity,'received_quantity',a.received_quantity,'damaged_quantity',a.damaged_quantity,'over_delivery',a.over_delivery,'suggested_action',a.suggested_action,'nc_codes',a.nc_codes,'labor_hours',a.labor_hours,'other_cost',a.other_cost,'manufacturing_date',a.manufacturing_date,'dispatch_date',a.dispatch_date,'best_before_date',a.best_before_date,'expiry_date',a.expiry_date,'supplier_number',a.supplier_number,'damage_type',a.damage_type,'uniquie_id',a.uniquie_id,'store_id',a.store_id,'action_confirmation',a.action_confirmation,'status',a.status,'created_at',a.created_at)) AS articles FROM tbl_case c LEFT JOIN tbl_case_articles a ON c.case_id = a.case_id   WHERE c.case_id='"+caseID+"'  GROUP BY  c.case_id,c.name,c.id,c.type,c.case_id,c.name,c.receiving_unit_code,c.safty_alaram_number,c.carrier_name,c.invoice_number,c.unique_shipment_id,c.consingnment_id,c.transport_id,c.invoice_date,c.sender_name,c.dispatch_date,c.shipment_type,c.truck_temprature,c.store_notes,c.qsc_notes,c.status) j";
  try {
    const caseDbData = await dbConnection.query(casedata);
    return caseDbData.rows[0].row_to_json;
  } catch (err) {
    return false;
  }
}
exports.InsertFiles = async (CaseID, files) => {
  const query = {
    text: 'INSERT INTO tbl_supporting_files(case_id,field_name,file_name,path,size) VALUES($1,$2,$3,$4,$5)',
    values: [CaseID, files.field_name, files.file_name, files.path, files.size],
  }
  try {
    await dbConnection.query(query);
    return true;
  } catch (err) {
    return false;
  }
}
exports.UpdateCase = async (data) => {
  let carrier_name =data.carrier_name ? data.carrier_name :'NA';
  const query = `UPDATE tbl_case  SET name = $1, invoice_date = $3 ,receiving_unit_code = $4, safty_alaram_number = $5, carrier_name = $6, invoice_number = $7,  unique_shipment_id = $8,  consingnment_id = $9, transport_id = $10, sender_name = $11, dispatch_date = $12, shipment_type = $13, truck_temprature = $14, store_notes = $15, qsc_notes = $16,action_confirmation=$17,causing_party_code=$18,unloading_date=$19,seal_number=$20,status=$21 WHERE case_id = $2`;
  try {
    await dbConnection.query(query, [data.name,data.case_id,data.invoice_date,data.receiving_unit_code,data.safty_alaram_number,carrier_name,data.invoice_number,data.unique_shipment_id,data.consingnment_id,data.transport_id,data.sender_name,data.dispatch_date,data.shipment_type,data.truck_temprature,data.store_notes,data.qsc_notes,data.action_confirmation,data.causing_party_code,data.unloading_date,data.seal_number,data.status]);
    return true;
  } catch (err) {
    return false;
  }
}
exports.UpadateCaseStatus = async (caseID, status,notes,rca_file) => {
  const query = `UPDATE tbl_case  SET status = $1 , case_notes=$3 ,rca_file =$4 WHERE case_id = $2`;
  try {
    await dbConnection.query(query, [status, caseID,notes,rca_file]);
    return true;
  } catch (err) {
    return false;
  }
}
exports.UpadateAssignCase = async (caseID, assign_to,name) => {
  const query = `UPDATE tbl_case  SET assign_to = $1, assign_to_name=$3  WHERE case_id = $2`;
  try {
    await dbConnection.query(query, [assign_to, caseID,name]);
    return true;
  } catch (err) {
    return false;
  }
}
exports.InsertAssociatedStores = async (caseID, store_id,articles,request_by,notes) => {
  const query = `INSERT INTO tbl_case_assosiated_stores(case_id,store_id,article_is,requested_by,status,notes) VALUES($1,$2,$3,$4,$5,$6)`;
  try {
    await dbConnection.query(query, [caseID, store_id,articles,request_by,'open',notes]);
    return true;
  } catch (err) {
    return false;
  }
}
exports.getAssociatedStores = async (store_id) => {
  try {
    const userQuery = "SELECT * FROM tbl_case_assosiated_stores t1, tbl_case t2 WHERE t1.case_id = t2.case_id AND t1.store_id = '" + store_id + "' ORDER BY t1.created_at DESC";
    const user = await dbConnection.query(userQuery);
    return user.rows;
  } catch (err) {
    return false;
  }
}
exports.checkAssociatedCase = async (case_id) => {
  try {
    const Query = "SELECT COUNT(*) FROM tbl_case_assosiated_stores  WHERE case_id='"+case_id+"'";
    const data= await dbConnection.query(Query);
    return data.rows[0].count;
  } catch (err) {
    return false;
  }
}
