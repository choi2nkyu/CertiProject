import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Income from "./views/Income.vue";
import Expense from "./views/Expense.vue";
import Reportes from "./views/reportes.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/reportes",
      name: "reportes",
      component: Reportes
    },
    {
      path: "/income",
      name: "income",
      component: Income
    },
    {
      path: "/expense",
      name: "expense",
      component: Expense
    }
  ]
});
