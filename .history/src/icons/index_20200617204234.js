import Vue from "vue";
import SvgIcon from "./SvgIcon.vue"

Vue.component("svg-icon",SvgIcon);

/**
 * 解析svg图标
*/

const req = require.context("./svg",false,/\.svg$/)
const requireAll = requireContext =>{
    return require
}