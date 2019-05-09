import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Income from '@/components/Income.vue'


describe('Income.vue', () => {
    let wrapper;
    beforeEach(function(){
        wrapper = shallowMount(Income)

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
})
