import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login";
import Home from "@/views/Home";
import Register from "@/views/Register";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/cadastro",
    name: "Register",
    component: Register,
  },
];

let router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
