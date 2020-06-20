import router from "./index";
import {getToKen, removeToKen, removeUserName } from "../utils/app";
import store from "../store/index";

const whiteRouter =["/login"];

router.beforeEach( (to,from,next)=>{
    if(getToKen()){
        if(to.path === '/login'){
            removeToKen();
            removeUserName();
            store.commit("app/SET_USERNAME",'');
            store.commit("app/SET_TOKEN",'');
            next();
        }else{
            //获取用户角色
            //动态分配路由权限
            next();
        }
    }else{
        //登录成功 to.path  == index
        if(whiteRouter.indexOf(to.path) !==-1 ){
            next();
        }else{
            next('/login')
        }
    }
})