import axios from "axios";
import { getToKen, getUserName } from "@/utils/app";
import { Message } from "element-ui";
/**
 * 用于创建axios拦截器
 * */
const BASEURL = process.env.NODE_ENV === 'production' ? '' : '/devApi';
// eslint-disable-next-line no-unused-vars
const service = axios.create({
    baseURL: BASEURL,
    timeout: 1000
});

/**
 * 请求拦截器
 * 请求接口之前，做一些数据处理
 * */
service.interceptors.request.use(function (config) {
    config.headers['Tokey'] = getToKen();
    config.headers['UserName'] = getUserName(); 
    return config;
}, function (error) {
    return Promise.reject(error);
});

/**
 * 响应拦截器
 * */
service.interceptors.response.use(function (response) {
    let data = response.data;
    if(data.resCode!=0){
        Message.error(data.message);
        return Promise.reject(data);
    }else{
        return response;
    }
}, function (error) {
    return Promise.reject(error);
});


export default service;

/**
 * 使用export default 时候，不需要引入花括号;
 *
 * */