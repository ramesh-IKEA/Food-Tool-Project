const { getAssociatedStoresData, updateAssociatedStoresData } = require('../models/CaseArticles')
exports.updateAssociatedArticleStatus = async (store_id, caseId, MasterUniqueID,status,notes=null) => {
    const AssociatedStoreRecord = await getAssociatedStoresData(store_id, caseId)
    const articlesList = JSON.parse(AssociatedStoreRecord.article_is);
    articlesList.forEach((list) => {
      if (list.article === MasterUniqueID) {
        list['status'] = status
      }
    })
    await updateAssociatedStoresData(JSON.stringify(articlesList), AssociatedStoreRecord.id,notes);
  }