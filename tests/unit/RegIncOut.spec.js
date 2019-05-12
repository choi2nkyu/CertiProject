import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import IncExpForm from '@/components/IncExpForm.vue'
import Vuex from 'vuex'

const localVue = createLocalVue();
localVue.use(Vuex)

describe('IncExpForm.vue', () => {
  let actions
  let store
  let state
  let mutations
  let wrapper
  const formType = 'Expense'

  beforeEach(function(){
    mutations = {
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
    actions = {
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

    },
    state = {
      ACCOUNTS: [], 
      EXPENSE_CATEGORIES: [{name:'Add...'},{name:'Expenses'},{name:'Transference'},{name:'Other'}],
      INCOME_CATEGORIES:[{name:'Add...'},{name:'Salary'},{name:'Transference'},{name:'Other'}],
      INCOMES : [],
      EXPENSES: []
    },
       
      store = new Vuex.Store({
        actions,state,mutations
      })  
      wrapper = shallowMount(IncExpForm, {store,localVue,
      propsData : {formType}})      
    })
  it('renders Name input', () => {  
   
    expect(wrapper.find('#Name').exists());
  })
  it('renders Category label', () => {  
   
    expect(wrapper.find('#LblCategory').exists());
  })
  it('renders Amount input', () => {  
   
    expect(wrapper.find('#Amount').exists());
  })
  it('renders expense in the titles when the formType is expense', () => {
    const title1 = wrapper.find('#lblName');
    const title2 = wrapper.find('#lblCategory');
    const title3 = wrapper.find('#lblAmount');
    expect(title1.text()).to.equal('Expense Name');
    expect(title2.text()).to.equal('Expense Category');
    expect(title3.text()).to.equal('Expense Amount');
  }),
  it('Category has 4 default options', () => {  
  const optionArray = wrapper.findAll("option");
  expect(optionArray.at(0).text()).to.equal('Add...');
  expect(optionArray.at(1).text()).to.equal('Expenses');
  expect(optionArray.at(2).text()).to.equal('Transference');
  expect(optionArray.at(3).text()).to.equal('Other') ;
})
it('Deletes the Selected Category', () => {
  const deleteButton = wrapper.find('#deleteButton');
  wrapper.vm.currentCategory = 'Transference';
  deleteButton.trigger('click');
  const optionArray = wrapper.findAll("option");
  expect(optionArray.length).to.equal(3);

})
})
