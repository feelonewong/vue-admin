import Cookie from "cookie_js";
import {login} from "../api/login";
const state= {
        isCollapse: false,
        // JSON.parse(Cookie.get("isCollapse"))||
    }
    const getters = {};
const  mutations = {
        SET_COLLAPSE(state) {
            state.isCollapse = !state.isCollapse;
            Cookie.set("isCollapse", JSON.stringify(state.isCollapse));
        }
    }
const actions = {
        /** 适合异步操作
           * context 是上下文表示state里面的值
           * data 表示你传入的值
           * */
        Login(content, data) {
            return new Promise((resolve, reject) => {
                login(data).then(
                    response => {
                        //console.log(response);
                        let data = response.data
                        resolve(data);
                    }
                ).catch((error) => { reject(); })
            })
        }
    }


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
