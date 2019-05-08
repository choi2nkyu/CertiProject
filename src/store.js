import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ACCOUNTS: [], 
    EXPENSE_CATEGORIES: [],
    INCOME_CATEGORIES:[],
    INCOMES : [],
    EXPENSES: []
  },
  mutations: {
    addAccount(context, newAccount){
      context.ACCOUNTS.push(newAccount);
    },

    addIncomeCategory(context, newCategory) {
        context.INCOME_CATEGORIES.push(newCategory);
    },

    addExpenseCategory(context, newCategory) {
      context.EXPENSE_CATEGORIES.push(newCategory);
    },

    addIncome(context, newIncome){
      context.INCOMES.push(newIncome);
    },

    addExpense(context, newExpense){
      context.EXPENSES.push(newExpense);
    },
  },
  actions: {
    addAccount(context, newAccount) {
      context.commit('addAccount', newAccount);
    },
    addIncomeCategory(context, newCategory) {
        context.commit('addIncomeCategory', newCategory);
    },
    addExpenseCategory(context, newCategory) {
      context.commit('addExpenseCategory', newCategory);
    },
    addIncome(context, newIncome) {
      context.commit('addIncome', newIncome);
    },
    addExpense(context, newExpense) {
      context.commit('addExpense', newExpense);
    }    

  }
})