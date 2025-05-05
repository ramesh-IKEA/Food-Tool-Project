//post create case
const { generate_case_id } = require('../utils/case_id');
const caseData = require('../config/TempCaseData.json')
const { getKey, filterData } = require('../utils/array')
const { uploadImage, dowloadFile } = require('../utils/uploadFiles')
const dbConnection = require('../utils/DbConnection')
const {updateAssociatedArticleStatus} = require('../utils/common');
const { InsertFiles, UpadateCaseStatus, UpdateCase, UpadateAssignCase, InsertAssociatedStores, getAssociatedStores,UpdateAssociatedSigngleStore,checkAssociatedCase } = require('../models/CaseModel')
const path = require("path");
const fs = require('fs');
exports.postCreateCase = async (req, res, next) => {
  const newCaseData = {
    type, carrier_name,
    receiving_unit_code,
    safty_alaram_number,
    invoice_number,
    unique_shipment_id,
    transport_id,
    invoice_date,
    sender_name,
    dispatch_date,
    shipment_type,
    truck_temprature,
    store_notes,
    qsc_notes, created_by,
    unloading_date,
    seal_number,
    consingnment_id
  } = JSON.parse(req.body.data);
  const CaseID = await generate_case_id(type);
  let sender = sender_name.split('-');
  let receiving_unit = receiving_unit_code.split('-');
  newCaseData['caseID'] = CaseID;
  newCaseData['status'] = 'submit';
  newCaseData['type'] = type;
  newCaseData['receiving_unit'] = receiving_unit[0];
  const query = {
    text: 'INSERT INTO tbl_case(type,case_id,name,receiving_unit_code,safty_alaram_number,carrier_name,invoice_number,unique_shipment_id,consingnment_id,transport_id,invoice_date,sender_name,dispatch_date,shipment_type,truck_temprature,store_notes,qsc_notes,status,sender_code,created_by,unloading_date,seal_number) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22)',
    values: [type, CaseID, newCaseData.name, receiving_unit[0], safty_alaram_number, carrier_name, invoice_number, unique_shipment_id, consingnment_id, transport_id, invoice_date, sender_name, dispatch_date, shipment_type, truck_temprature, store_notes, qsc_notes, newCaseData.status, sender[0], created_by,unloading_date,seal_number],
  }
  const caseDbData = await dbConnection.query(query);
  // retrive uploaded file names
  if (req.body.file_names) {
    const myFile = req.files
    saveSupportingFiles(CaseID, myFile)
  }
  res.send(newCaseData).status(200)
}
exports.getCases = async (req, res, next) => {
  const { store_id, q } = req.query;
  let query;
  if (q === 'all') {
    query = "SELECT * FROM tbl_case WHERE receiving_unit_code='" + store_id + "' AND status IN ('open','AI','RJ','AP') ORDER BY created_at DESC";
  } else {
    if (store_id === 'SO' && q === 'open') {
      query = "SELECT * FROM tbl_case WHERE status IN ('open','AI') ORDER BY created_at DESC";
    } else {
      query = "SELECT * FROM tbl_case WHERE status='" + q + "' ORDER BY created_at DESC";
    }
  }
  const openCases = await dbConnection.query(query);
  res.send({ 'records': openCases.rows, 'req': req.query }).status(200);
}
exports.getOneCase = async (req, res, next) => {
  const { store_id, caseID } = req.query;
  Casequery = "SELECT * FROM tbl_case WHERE case_id='" + caseID + "'  ";
  ArticlesQuery = "SELECT * FROM tbl_case_articles WHERE case_id='" + caseID + "'  ";
  const Cases = await dbConnection.query(Casequery);
  const CaseArticles = await dbConnection.query(ArticlesQuery);
  const Response = { 'case': Cases.rows[0], 'articles': CaseArticles.rows, 'req': req.query }
  res.send(Response).status(200)
}
exports.getCase = async (req, res, next) => {
  const { store_id, caseID } = req.query;
  Casequery = "SELECT * FROM tbl_case WHERE case_id='" + caseID + "'  ";
  ArticlesQuery = "SELECT * FROM tbl_case_articles WHERE case_id='" + caseID + "'  ";
  FilesQuery = "SELECT * FROM tbl_supporting_files WHERE case_id='" + caseID + "'  ";
  const Cases = await dbConnection.query(Casequery);
  const CaseArticles = await dbConnection.query(ArticlesQuery);
  const CaseFiles = await dbConnection.query(FilesQuery);
  const Response = { 'case': Cases.rows[0], 'articles': CaseArticles.rows, 'supporting_files': CaseFiles.rows, 'req': req.query }
  res.send(Response).status(200)
}
exports.postStatusUpdate =async (req, res, next) => {
  const { caseId, status,existing_notes,qsc_notes ,user,old_rca_file} = JSON.parse(req.body.data);
  let note= null;
  let rca_file= old_rca_file;
  if(qsc_notes!=''){
   note=JSON.stringify(caseNotes(qsc_notes,existing_notes,status,user));
  }
  if (req.body.file_names) {
    const myFile = req.files
    rca_file =await uploadImage(myFile[0]);
  }
  UpadateCaseStatus(caseId, status,note,rca_file)
  res.send({ 'message': 'Status updated' }).status(200);
}
const caseNotes =(qsc_notes,case_notes,status,user)=>{
  let note =[]
  let curent_note={'date':Date(),'notes':qsc_notes,'status':status,'user':user}
    if(case_notes==null){
       note.push(curent_note)
    }
    else{
      let existinNotes=JSON.parse(case_notes);
      note=[...existinNotes];
     note.push(curent_note);
    }
    return note;
}

exports.postUpdateCase = async (req, res, next) => {
  const data =JSON.parse(req.body.data);
  const response = await UpdateCase(data);
  if (response) {
    // retrive uploaded file names
    if (req.body.file_names) {
      const myFile = req.files
      saveSupportingFiles(data.case_id, myFile)
    }
    res.send({ 'message': 'Updated Sucessfully' }).status(200);
  } else {
    res.send({ 'message': 'Something went wrong' }).status(400)
  }
}
exports.postAssign = async (req, res, next) => {
  try {
    const { case_id, user_email } = req.body;
    const userQuery = "SELECT * FROM tbl_users WHERE email='" + user_email + "'";
    const user = await dbConnection.query(userQuery);
    let name = user.rows[0]['name']
    await UpadateAssignCase(case_id, user_email, name);
    res.send({ 'message': 'Status updated' }).status(200);
  } catch (error) {
    next(error)
  }

}
const saveSupportingFiles = (CaseID, myFile) => {
  Object.keys(myFile).map(async function (key, val) {
    let fileName = await uploadImage(myFile[key]);
    InsertFiles(CaseID, { 'field_name': myFile[key].fieldname, 'file_name': fileName, 'path': '', 'size': myFile[key].size });
  });
}
exports.Upload = async (req, res, next) => {
  try {
    const filenames = req.body.file_names;
    const myFile = req.files;
    Object.keys(myFile).map(async function (key, val) {
      let imageUrl = await uploadImage(myFile[key]);
    });

  } catch (error) {
    next(error)
  }
}

exports.requestStores = async (req, res, next) => {
  try {
    const { case_id, stores, user_email, article,notes } = req.body;
    const checkCaseExist = await checkAssociatedCase(case_id);
    if(checkCaseExist==='0'){
      stores.map(async (val) => {
        await InsertAssociatedStores(case_id, val, JSON.stringify(article), user_email,notes);
      })
      res.send({ 'message': 'Sucessfully Requested' }).status(200);
    }else{
      res.send({ 'message': 'This case is already shared with stores for the update' }).status(200);
    }
   
  } catch (error) {
    next(error)
  }
}
exports.requestSingleStore=async(req,res,next)=>{
  try{
    const { case_id, storeId, user_email, article ,notes} = req.body;
    await updateAssociatedArticleStatus(storeId,case_id, article[0].master_id,'open',notes);
    res.send({ 'message': 'Sucessfully Requested' }).status(200);
  }catch (error) {
    next(error)
  }
}
exports.getAssociatedStores = async (req, res, next) => {
  const { store_id } = req.query;
  const data = await getAssociatedStores(store_id);
  res.send(data);

}

