import api from './api'
export const postCaseArticles = (data) => {
    return api.post("/article/create", data ,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
}
export const postArticleStatus=(data)=>{
    return api.post("/article/status/update", data)
}
export const getSingleArticleData=(data)=>{
    return api.post('/article/get',data)
}
export const postStoreArticleQty=(data)=>{
    return api.post('/article/store_qty',data,{
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
}
export const postUpdateArticles = (data) => {
    return api.post("/article/update", data ,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
}