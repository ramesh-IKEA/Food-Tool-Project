const caseData = require('../config/TempCaseData.json')
const { getKey } = require('../utils/array')
const { uploadImage } = require('../utils/uploadFiles')
const { InserCaseArticles, UpdateCaseArticles, CaseArticle } = require('../models/CaseArticles')
const { UpadateCaseStatus } = require('../models/CaseModel')
const { updateAssociatedArticleStatus } = require('../utils/common')
const fs = require('fs');
//post create case
exports.postCreateArticle = async (req, res, next) => {
  try {

    const { caseId, articles } = JSON.parse(req.body.data);
    articles.map(async (list, index) => {
      list['uniquie_id'] = caseId + '_' + Math.random().toString().substring(5);
      list['store_id'] = list.receiving_unit;
      list['status'] = 'open';
      let tempFiles = [];
      if (req.body.file_names) {
        const supportingFiles = req.files;
        list.damage_picture.forEach(async (pic, key) => {
          let name = index + list.articel_number + key;
          let filteredfile = supportingFiles.filter((file) => {
            return file.fieldname === name;
          });
          let fileName = await uploadImage(...filteredfile);
          console.log(fileName);
          tempFiles.push({ 'field_name': 'damage_picture_' + key, 'file_name': fileName, 'path': '', 'size': '' });
        })
        await delay(3000)
        list['damage_picture'] = JSON.stringify(tempFiles);
      }
      await delay(3000)
     await InserCaseArticles(caseId, list);
     await UpadateCaseStatus(caseId,'open',null,null)
    })
    res.send({ 'message': 'Sucessfully created the case' }).status(200)
  }
  catch (error) {
    next(error);
  }

}
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
exports.postArticleStatus = (req, res, next) => {
  const { caseId, status, article } = req.body;
  const selecteKey = getKey(caseData, 'caseID', caseId);
  article.map(list => {
    caseData[selecteKey].articles[list.article_index].status = status
  })
  res.send(caseData).status(200)
}
exports.getArticle = async (req, res, next) => {
  const { caseID, article_unique_id } = req.body;
  const result = await CaseArticle(caseID, article_unique_id);
  res.send(result).status(200)
}
exports.postArticleQty = async (req, res, next) => {
  const data = JSON.parse(req.body.data);
  let tempFiles = data.request_type === 'update' && data.damage_picture!==null ?JSON.parse(data.damage_picture) : [] ;
  let article = data;
  const MasterUniqueID = article.uniquie_id;
  article['master_article_id'] = MasterUniqueID;
  article['uniquie_id'] = data.caseId + '_' + Math.random().toString().substring(5);
  article['status'] = 'open';
  if (req.body.file_names) {
    const myFile = req.files
    Object.keys(myFile).map(async function (key, val) {
      let fileName = await uploadImage(myFile[key]);
      tempFiles.push({ 'field_name': 'damage_picture_' + key, 'file_name': fileName, 'path': '', 'size': '' });
    });
    await delay(3000)
    article['damage_picture'] = JSON.stringify(tempFiles);
  }
  await delay(3000);
  const response = data.request_type === 'create' ? await InserCaseArticles(article.caseId, article) : await UpdateCaseArticles(article);// insert or update based on the request type
  await updateAssociatedArticleStatus(article.store_id, article.caseId, MasterUniqueID, 'updated');
  res.send({ 'status': response }).status(200)
}
exports.postUpdateArticle = async (req, res, next) => {
  try {
    const data = JSON.parse(req.body.data);
    let tempFiles = data.request_type === 'update' && data.damage_picture!==null ? JSON.parse(data.damage_picture) : [] ;
    let article = data;
    if (req.body.file_names) {
        const myFile = req.files
        Object.keys(myFile).map(async function (key, val) {
            let fileName = await uploadImage(myFile[key]);
            tempFiles.push({ 'field_name': 'damage_picture_' + key, 'file_name': fileName, 'path': '', 'size': '' });
          });
          await delay(3000)
        }
    article['damage_picture'] = JSON.stringify(tempFiles);
    await delay(3000);
    await UpdateCaseArticles(article);
    res.send({ 'message': 'Sucessfully update the article' }).status(200)
  }
  catch (error) {
    next(error);
  }
}
