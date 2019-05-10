import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state =  {
  ACCOUNTS: [], 
  EXPENSE_CATEGORIES: [],
  INCOME_CATEGORIES:[],
  INCOMES : [],
  EXPENSES: [],
  count:0
  };

export const mutations = {
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

    increment() {
      state.count = state.count+1;
    },

    saveAllData(){

      window.localStorage.clear();
    
      window.localStorage.setItem('storage',JSON.stringify(state));

      console.log(window.localStorage.length);
 

  },
  eraseAllData(){
      
      window.localStorage.clear();

  }

   
  };

export const actions = {

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
  },
  saveAllData(){
    mutations.saveAllData();
  },
  eraseAllData(){
    mutations.eraseAllData();
  }
  
 
};

export default new Vuex.Store({
  state,
  mutations,
  actions

});