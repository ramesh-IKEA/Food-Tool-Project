import api from './api'
export const postLogin = (data) => {
    return api.post("/auth/login", data)
}
export const postUpdatePassord = (data) => {
    return api.post("/auth/update_password", data)
}