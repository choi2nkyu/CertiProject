<template>
  <div>
    <h1>Reportes</h1>
    <div class="row">
      <div class="col-lg-6">
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
export default {

  
  data() {
    return {
      fields: ["name", "category", "amount", "date"],
    
    };
  },
  methods: {
    navigateToIncome() {
      this.$router.push("income");
    },
    navigateToExpense() {
      this.$router.push("expense");
    },

  },

  computed: {
      items: function(){
        return this.$store.state.INCOMES;
      },
      items2: function(){
        return this.$store.state.EXPENSES;
      }


  }
};
</script>
