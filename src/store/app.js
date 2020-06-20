import cookie from "cookie_js";
import { login } from "../api/login";
import { setToKen, setUserName, getUserName, removeToKen, removeUserName } from "../utils/app"
const state = {
    isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false,
    to_ken: "",
    username: getUserName() || ''
}
const getters = {
    isCollapse: state => state.isCollapse,
    username: state => state.username
};
const mutations = {
    SET_COLLAPSE(state) {
        state.isCollapse = !state.isCollapse;
        sessionStorage.getItem("isCollapse", JSON.stringify(state.isCollapse));
    },
    SET_TOKEN(state, value) {
        state.to_ken = value;
    },
    SET_USERNAME(state, value) {
        state.username = value;
    },
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
                    let data = response.data.data;
                    content.commit("SET_TOKEN", data.token);
                    content.commit("SET_USERNAME", data.username);
                    setToKen(data.token);
                    setUserName(data.username);
                    resolve(response.data);
                }
            ).catch((error) => { reject(); })
        })
    },
    Exit(context) {
        return new Promise((resolve, reject) => {
            removeToKen();
            removeUserName();
            console.log(context);
            context.commit("SET_TOKEN", "");
            context.commit("SET_USERNAME", "");
            resolve();
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
