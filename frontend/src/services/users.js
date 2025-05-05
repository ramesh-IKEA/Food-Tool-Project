import api from './api'
export const postCretaeUsers = (data) => {
    return api.post("/auth/user/create", data)
}
export const getUsers = () => {
    return api.get("/auth/user/get",{params: {'q':'all'}});
}
export const ResetPassword = (data) => {
    return api.post("/auth/user/reset/password",data);
}
export const statusUpdate = (data) => {
    return api.post("/auth/user/status",data);
}
