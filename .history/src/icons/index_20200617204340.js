import Vue from "vue";
import SvgIcon from "./SvgIcon.vue"

Vue.component("svg-icon",SvgIcon);

/**
 * 解析svg图标
 * 读取目录所有文件。是否遍历自己
*/
const req = require.context("./svg",false,/\.svg$/)
const requireAll = requireContext =>{
    return requireContext.keys().map(requireContext)
}
requireAll(req);