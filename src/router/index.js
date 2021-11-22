import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login";
import Register from "@/views/Register";
import Home from "@/views/Home";
import Profile from "@/views/Profile";
import Bedroom from "@/views/Bedroom";

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
  {
    path: "/quartos",
    name: "Bedroom",
    component: Bedroom,
  },
];

let router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
