import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Account from '@/components/Account.vue'
import { wrap } from 'module'

describe('Account.vue', () => {
  let wrapper
  const object = [{ name: 'Savings', description: 'Ordinary Savings' }]

  beforeEach(function() {
    wrapper = shallowMount(Account)
  })

  it('Account has 3 buttons: add, edit, delete', () => {
    const buttonArray = wrapper.findAll('button')
    const firstButton = buttonArray.at(0)
    const secondButton = buttonArray.at(1)
    const thirdButton = buttonArray.at(2)
    expect(buttonArray.length).to.equal(3)
    expect(firstButton.text()).to.equal('Add')
    expect(secondButton.text()).to.equal('Edit')
    expect(thirdButton.text()).to.equal('Delete')
  })

  it('Table has 2 columns: name, description', () => {
    const fieldArray = wrapper.vm.fields
    const firstColumn = fieldArray[0]
    const secondColumn = fieldArray[1]
    expect(fieldArray.length).to.equal(2)
    expect(firstColumn).to.equal('name')
    expect(secondColumn).to.equal('description')
  })

  it('At button click, at least 1 object exists in array', () => {
    const initialLength = wrapper.vm.accountArray.length
    wrapper.find('button.add')
    wrapper.vm.add(object)
    expect(wrapper.vm.accountArray.length).to.equal(initialLength + 1)
  })
})
