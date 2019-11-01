import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/services",
      name: "Services",
      component: () => import("./views/Services.vue")
    },
    {
      path: "/products",
      name: "Products",
      component: () => import("./views/Products.vue")
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("./views/Contact.vue")
    },
    { path: "*", redirect: "/" }
  ]
});
