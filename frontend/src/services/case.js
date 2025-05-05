import api from './api'
export const postCase = (data) => {
    return api
        .post("/case/create", data, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
        })
}
export const postUpdateCase = (data) => {
  return api
      .post("/case/update", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
}
export const postCaseStatus = (data) => {
    return api
        .post("/case/update/status", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
}
export const fetchCases = (type=null) =>{
  let q = type ? type:'all'
  return api.get('/case/fetch',{
    params: {'q':q}
    });
}
export const fetchCaseData =(caseID)=>{
  return api.get('/case/fetchOne',{
    params: {'caseID':caseID}
    });
}
export const getCaseData =(caseID)=>{
  return api.get('/case/get',{
    params: {'caseID':caseID}
    });
}
export const generateBCPdf= (caseID)=>{
  return api.get('/generate/buyer_claim',{
    params: {'caseID':caseID},
    responseType: 'blob'
    });
}
export const getSupportingFileView= (fileName,path)=>{
  return api.get('/generate/supporting_files',{
    params: {'fileName':fileName,'path':path},
    responseType: 'blob'
    });
}
export const requestOtherStores=(data)=>{
  return api.post('/case/request_stores',data);
}
export const requestMoreInfoSingleStore=(data)=>{
  return api.post('/case/request_single_store',data);
}
export const fetchAssociatedCases=(q=null)=>{
  return api.get('/case/associated_store_list',{ params: {'q':q}});
}
export const assignCase=(data)=>{
  return api.post("/case/assign_to_me", data)
}