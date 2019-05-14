import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

  export const state = {
    ACCOUNTS: [], 
    EXPENSE_CATEGORIES: [{name:'Add...'},{name:'Expenses'},{name:'Transference'},{name:'Other'}],
    INCOME_CATEGORIES:[{name:'Add...'},{name:'Salary'},{name:'Other'}],
    INCOMES : [],
    EXPENSES: [],
    CURRENT_ITEM:"",
    CURRENT_ACCOUNT:{},
    count: 0
  };
export const mutations = {
    setCurrentAccount(context,currentAccount){
    context.CURRENT_ACCOUNT = currentAccount;
    },
    addAccount(context, newAccount){
      context.ACCOUNTS.push(newAccount);
    },   
  
  deleteAccount(context, accountId) {
    context.ACCOUNTS.forEach(function(element) {
      let indexofElement = context.ACCOUNTS.indexOf(element);
      if (element.id === accountId) {
        context.ACCOUNTS.splice(indexofElement, 1);
      }
    });
  },

    addIncomeCategory(context, newCategory) {
        context.INCOME_CATEGORIES.push(newCategory);
    },

    addExpenseCategory(context, newCategory) {
      context.EXPENSE_CATEGORIES.push(newCategory);
    },
  
  addIncomeCategory(context, newCategory) {
    context.INCOME_CATEGORIES.push(newCategory);
  },
  
    addExpense(context, newExpense){
      context.EXPENSES.push(newExpense);
    },
    addIncome(context, newIncome){
      context.INCOMES.push(newIncome);
    },
    
    editIncome(context,incomeName,editedIncome){
      context.INCOMES.forEach(
        function(element){
          let indexofElement = context.INCOMES.indexOf(element);
          if(element.name === incomeName){
            context.INCOMES[indexofElement].name=editedIncome.name;
            context.INCOMES[indexofElement].category=editedIncome.category;
            context.INCOMES[indexofElement].amount=editedIncome.amount;
          }
        })
    },
    editExpense(context,expenseName,editedExpense){
      context.EXPENSES.forEach(
        function(element){
          let indexofElement = context.EXPENSES.indexOf(element);
          if(element.name === expenseName){
            context.EXPENSES[indexofElement].name=editedExpense.name;
            context.EXPENSES[indexofElement].category=editedExpense.category;
            context.EXPENSES[indexofElement].amount=editedExpense.amount;
          }
        })
    },
    editAccount(context,accountName,editedAccount){
      context.ACCOUNTS.forEach(
        function(element){
          let indexofElement = context.ACCOUNTS.indexOf(element);
          if(element.name === accountName){
            context.ACCOUNTS[indexofElement].name=editedAccount.name;
            context.ACCOUNTS[indexofElement].description=editedAccount.description;            
          }
        })
    },    
    deleteIncome(context,incomeName){
      context.INCOMES.forEach(
        function(element){
          let indexofElement = context.INCOME_CATEGORIES.indexOf(element);
          if(element.name === incomeName){
            context.INCOMES.splice(indexofElement,1)
          }
        }
      )
    },
    deleteExpense(context,expenseName){
      context.EXPENSES.forEach(
        function(element){
          let indexofElement = context.EXPENSES.indexOf(element);
          if(element.name === expenseName){
            context.EXPENSES.splice(indexofElement,1)
          }
        }
      )
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
    },
    saveAllData(){
      window.localStorage.clear();    
      window.localStorage.setItem('storage',JSON.stringify(state));
      console.log(window.localStorage.length); 
  },
  eraseAllData(){      
      window.localStorage.clear();
  }, 
  increment() {
    state.count = state.count+1;
  },
  };  
  export const actions = {
    setCurrentAccount(context,currentAccount){
      context.commit('setCurrentAccount',currentAccount)
    },
    addAccount(context, newAccount) {
      context.commit('addAccount', newAccount);
    },
    
  deleteAccount(context, accountName) {
    context.commit("deleteAccount", accountName);
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
    editIncome(context,incomeName,editedIncome){
      context.commit('editIncome',incomeName,editedIncome)
    },
    editExpense(context,expenseName,editedExpense){
      context.commit('editExpense',expenseName,editedExpense)
    },
    editAccount(context,accountName,editedAccount){
      context.commit('editAccount',accountName,editedAccount)
    },
    deleteIncome(context,incomeName){
      context.commit('deleteIncome',incomeName)
    },    
    deleteExpense(context,expenseName){
      context.commit('deleteExpense',expenseName)
    },
    deleteIncomeCategory(context,categoryName){
      context.commit('deleteIncomeCategory',categoryName);
    },  
    deleteExpenseCategory(context,categoryName){
      context.commit('deleteExpenseCategory',categoryName);
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
