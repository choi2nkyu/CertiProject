<template>
  <div>
    <h1>Reportes</h1>
    <div class="row">
      
      <div class="col-lg-6">
        
        <div class="row">
        <h3 style = "margin-left:7%; font-size:1em">Filtrar por categoria</h3>
        <select value=''  style = "margin-left:10%" v-model="currentCategory">

            <option
              v-for="category in Income_categories"
              :key="category.name"
              :value="category.name"
            >{{category.name}}</option>

        </select> 
      </div>
      
        <h2>Ingresos</h2>
        <b-table striped hover :items="items" :fields="fields"></b-table>
        <div>
          <b-button
            variant="outline-primary"
            style="margin-left: 10px"
            @click="navigateToIncome"
          >Add</b-button>
          <b-button
            variant="outline-primary"
            style="margin-left: 10px"
            @click="navigateToIncome"
          >Edit</b-button>
          <b-button variant="outline-danger" style="margin-left: 10px">Delete</b-button>
        </div>
      </div>
      <div class="col-lg-6">

                <div class="row">
        <h3 style = "margin-left:7%; font-size:1em">Filtrar por categoria</h3>
        <select style = "margin-left:10%" v-model="currentCategory">

            <option
              v-for="category in Expense_categories"
              :key="category.name"
              :value="category.name"
            >{{category.name}}</option>

        </select> 
      </div>

        <h2>Egresos</h2>
        <b-table striped hover :items="items2" :fields="fields"></b-table>

        <div>
          <b-button
            variant="outline-primary"
            style="margin-left: 10px"
            @click="navigateToExpense"
          >Add</b-button>
          <b-button
            variant="outline-primary"
            style="margin-left: 10px"
            @click="navigateToExpense"
          >Edit</b-button>
          <b-button variant="outline-danger" style="margin-left: 10px">Delete</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { truncate } from 'fs';
export default {

  data() {
    return {
      fields: ["name", "category", "amount", "date"],
      currentCategory:'',

    
    };
  },
  methods: {
    navigateToIncome() {
      this.$router.push("income");
    },
    navigateToExpense() {
      this.$router.push("expense");
    },
    filterByCategories(){
      var auxItems;
    
    }

  },

  computed: {
      items: function(){
        var objects =[];

       if(this.currentCategory==''){
              return this.$store.state.INCOMES;
            }
      else{
        for (var element of this.$store.state.INCOMES){

            if(this.currentCategory==element.category)
              objects.push(element)
        }
      }    
         return objects;
      },
      items2: function(){
        var objects =[];

       if(this.currentCategory==''){
              return this.$store.state.EXPENSES;
            }
      else{
        for (var element of this.$store.state.EXPENSES){

            if(this.currentCategory==element.category)
              objects.push(element)
        }
      }    
         return objects;

    },
      Income_categories: function(){
        return this.$store.state.INCOME_CATEGORIES;
      },
      Expense_categories: function(){
        return this.$store.state.EXPENSE_CATEGORIES;
      } 



  }
};
</script>

