
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Income from "./views/Income.vue";
import Expense from "./views/Expense.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'reportes',
      component: Home
    },
    {
      path: '/reportes',
      name: 'reportes',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: 'about' */ './views/reportes.vue')
      }
    }
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
})
