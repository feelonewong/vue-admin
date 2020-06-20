import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/Layout/"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
    hide: true,
    meta: {
      name: "主页"
    }
  },
  {
    path: "/login",
    name: "Login",
    hide: true,
    component: () => import("../views/Login/index.vue"),
    meta: {
      name: "登录"
    }
  },
  {
    path: "/console",
    name: "Console",
    redirect: "index",
    component: Layout,
    meta: {
      name: "首页",
      icon:"console",
    },
    children: [
      {
        path: "/index",
        name: "Index",
        component: () => import("../views/Console/index.vue"),
        meta: {
          name: "控制台"
        },
      }
    ]
  },
  {
    path: "/info",
    name: "Info",
    component: Layout,
    meta: {
      name: "信息管理",
      icon:"info",
    },
    children: [
      {
        path: "/InfoIndex",
        name: "InfoIndex",
        component: () => import("../views/Info/index.vue"),
        meta: {
          name: "信息分类"
        }
      },
      {
        path: "/InfoList",
        name: "InfoList",
        component: () => import("../views/Info/list.vue"),
        meta: {
          name: "信息列表"
        }
      }
    ]
  },
  {
    //clockapplay.inputout1
    path: "/user",
    name: "User",
    component: Layout,
    meta: {
      name: "用户管理",
      icon:"user",
    },
    children: [
      {
        path: "/userInfo",
        name: "userInfo",
        component: () => import("../views/User/index.vue"),
        meta: {
          name: "用户列表"
        },
      }
    ]
  },
];

const router = new VueRouter({
  routes
});

export default router;
