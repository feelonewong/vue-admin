/**
 * get user QRcode
 * */
// eslint-disable-next-line no-unused-vars
import service from "../utils/request";

export function GetSms(data) {
    return service.request({
        method:"post",
        url:"/getSms/",
        data
    })
}

/**
 * get user information
 **/
export function getUserRole(data){
    return service.request({
        method:"post",
        url:"/userRole",
        data
    })
}

/**
 * register
 **/
export function register(data){
    return service.request({
        method:"post",
        url:"/register/",
        data
    })
}


/**
 * login
 **/
export function login(data){
    return service.request({
        method: "post",
        url:"/login/",
        data
    })
}