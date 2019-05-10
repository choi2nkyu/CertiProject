import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import reportes from '@/views/reportes.vue'

function getRenderedText (Component, propsData) {
    const Ctor = Vue.extend(Component)
    const vm = new Ctor({ propsData }).$mount()
    return vm.$el.textContent
  }
  describe('reportes.vue', () => {
    it('renders correctly with different props', () => {
      expect(getRenderedText(reportes, {
        motivo: 'viaje'
      })).to.equal('viaje')
      expect(getRenderedText(reportes, {
        categoria: 'Cachorras'
      })).to.equal('Cachorras')
    })
  })