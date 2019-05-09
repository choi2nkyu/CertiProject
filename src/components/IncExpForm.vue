<template>
  <div class="IncExpForm">   
    <div class="col-lg-5">
      <form>
        <div class="form-group">
          <label for="Name">{{formType}} Name</label>
          <input type="text" class="form-control" v-model = "currentName" id="Name">
            <label for="Category" id="LblCategory">{{formType}} Category</label>
          <input type="text" class="form-control" v-model = "currentCategory" id="Category">
            <label for="Amount">{{formType}} Amount</label>
          <input type="text" class="form-control" v-model = "currentAmount" id="Amount">          
        </div>
      </form>
    </div>
    <div class="col-lg-5">
      <button type="button" class="btn btn-primary" @click = "saveReg" >Create</button>
      <button type="button" class="btn btn-primary" @click = "showMoreStuff" >Show</button>
      <button type="button" class="btn btn-primary" @click = "deleteForm" >Delete Object</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "IncExpForm", 
 data() {
    return {
    currentName:'',
    currentCategory:'',
    currentAmount: ''
    }
  },     
  props:{
    formType: String
  },
  methods: {    
    showMoreStuff(){
      if(this.formType === 'Income'){
      console.log(this.$store.state.INCOMES);
      }
      else{
        console.log(this.$store.state.EXPENSES);
      }
    },
    saveReg(){
      let formObject= {
        name: this.currentName,
        category: this.currentCategory,
        amount: this.currentAmount
      }
     this.$store.dispatch('add'+this.formType,formObject);
    },
    deleteForm(){
      this.$store.dispatch('delete'+this.formType,this.currentName)
    }  
  }
};
</script>
<style scoped>
.leftColumn {
  margin: 20px 20px;
}
</style>