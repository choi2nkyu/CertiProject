import { expect } from 'chai'
import { assert } from 'chai'
import { shallowMount } from '@vue/test-utils'
import store from '@/store.js'
import { mutations } from '@/store.js' 
import {state} from '@/store.js'


const { increment } = mutations
const { addIncome} = mutations
const { addExpenseCategory} = mutations


describe('mutations', () => {
  it('Mutations are Testable', () => {
    increment()
    expect(state.count).to.equal(1)
  }),

  it('add INCOME ', () => {
    const income = {name: 'income', amount: '10' }; 
    assert.isEmpty(state.INCOMES, 'Array de Incomes vacio');
    addIncome(state,income);
    assert.isNotEmpty(state.INCOMES, 'Array de Incomes vacio');
  }),

  it('add CATEGORY ', () => {
    const category = {name: 'category' }; 
    assert.isEmpty(state.EXPENSE_CATEGORIES, 'Array de Categorias vacio');
    addExpenseCategory(state,category);
    assert.isNotEmpty(state.EXPENSE_CATEGORIES, 'Array de Categorias vacio');
  })

})
