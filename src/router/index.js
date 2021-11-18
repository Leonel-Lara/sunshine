import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login";
import Register from "@/views/Register";
import Home from "@/views/Home";
import Profile from "@/views/Profile";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/cadastro",
    name: "Register",
    component: Register,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/perfil",
    name: "Profile",
    component: Profile,
  },
];

let router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
