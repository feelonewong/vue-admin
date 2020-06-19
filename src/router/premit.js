import router from "./index";
import {getToKen} from "../utils/app";

const whiteRouter =["/login"];

router.beforeEach( (to,from,next)=>{
    if(getToKen()){

    }else{
        console.log('router-beforeEach')
        if(whiteRouter.indexOf(to.path) !==-1 ){
            console.log('chenggong')
            next();
        }else{
            console.log('error')
            next("/login");
        }
    }
})