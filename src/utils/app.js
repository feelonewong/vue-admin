import cookie from "cookie_js";

const adminToKen = "admin_toKen";
const usernameKey = "username";

export function getToKen(){
    return cookie.get(adminToKen);
}

export function getUserName(){
    return cookie.get(usernameKey);
}