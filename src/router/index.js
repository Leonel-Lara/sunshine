import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login";
import Register from "@/views/Register";
import Home from "@/views/Home";
import Profile from "@/views/Profile";
import ListBedroom from "@/views/ListBedroom";

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
    name: "ListBedroom",
    component: ListBedroom,
  },
];

let router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
