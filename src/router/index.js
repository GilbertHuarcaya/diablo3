import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// Configuración rutas
const routerOptions = [
  { path: "/", name: "Home" },
  { path: "/region/:region/profile/:battleTag", name: "Profile" },
  { path: "/region/:region/profile/:battleTag/hero/:heroId", name: "Hero" },
  { path: "/about", name: "About" },
  { path: "/error", name: "Error" },
  { path: "*", redirect: { name: "Home" } },
];

// Rutas
const routes = routerOptions.map((r) => {
  return {
    ...r,
    // Lazy load> solo carga el componente de pagina que vamos a ver en ese momento
    component: () => import(`@/views/${r.name}/Index.vue`),
  };
});

const router = new Router({
  routes,
});

export default router;
