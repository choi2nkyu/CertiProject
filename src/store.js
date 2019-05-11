import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ACCOUNTS: [], 
    EXPENSE_CATEGORIES: [{name:'Add...'},{name:'Expenses'},{name:'Transference'},{name:'Other'}],
    INCOME_CATEGORIES:[{name:'Add...'},{name:'Salary'},{name:'Transference'},{name:'Other'}],
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
    deleteIncomeCategory(context,categoryName){
      context.INCOME_CATEGORIES.forEach(
        function(element){
          let indexofElement = context.INCOME_CATEGORIES.indexOf(element);
          if(element.name === categoryName){
            context.INCOME_CATEGORIES.splice(indexofElement,1)
          }
        }
      )

    },
    deleteExpenseCategory(context,categoryName){
      context.EXPENSE_CATEGORIES.forEach(
        function(element){
          let indexofElement = context.EXPENSE_CATEGORIES.indexOf(element);
          if(element.name === categoryName){
            context.EXPENSE_CATEGORIES.splice(indexofElement,1)
          }
        }
      )

    }
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
    },
    deleteIncomeCategory(context,categoryName){
      context.commit('deleteIncomeCategory',categoryName);
    },  
    deleteExpenseCategory(context,categoryName){
      context.commit('deleteExpenseCategory',categoryName);
    }    

  }
})