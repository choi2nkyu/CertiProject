import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import reportes from '@/views/reportes.vue'

  describe('reportes.vue', () => {

    let wrapper; 
    beforeEach(function() {
      wrapper = shallowMount(reportes);
    });
    it('buttons add, edit, delete in Ingresos', () => {
      const buttonArray = wrapper.findAll("button");
      const firstButton = buttonArray.at(0);
      const secondButton = buttonArray.at(1);
      const thirdButton = buttonArray.at(2);
      expect(buttonArray.length).to.equal(6);
      expect(firstButton.text()).to.equal("Add");
      expect(secondButton.text()).to.equal("Edit");
      expect(thirdButton.text()).to.equal("Delete");
    });

    it("Table has 4 columns: motivo, categoria, monto, cuenta", () => {
      const fieldArray = wrapper.vm.fields;
      const firstColumn = fieldArray[0];
      const secondColumn = fieldArray[1];
      const thirdColumn = fieldArray[2];
      const fourthColumn = fieldArray[3];
      expect(fieldArray.length).to.equal(4);
      expect(firstColumn).to.equal("motivo");
      expect(secondColumn).to.equal("categoria");
      expect(thirdColumn).to.equal("monto");
      expect(fourthColumn).to.equal("cuenta");

    });

    it("Ensure that there is more than one data", () => {
      const itemArray = wrapper.vm.items;
      expect(itemArray.length).to.greaterThan(0);
    });
  })

