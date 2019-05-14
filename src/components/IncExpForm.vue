<template>
  <div class="IncExpForm">
    <div class="col-lg-5">
      <button type="button" class="btn btn-outline-secondary" @click="navigate">Back</button>
      <form>
        <div class="form-group">
          <label for="Name" id="lblName">{{formType}} Name</label>
          <input type="text" class="form-control" v-model="currentName" id="Name">
          <label for="Category" id="lblCategory">{{formType}} Category</label>
          <select class="form-control" v-model="currentCategory" id="Category">
            <option
              v-for="category in categories"
              :key="category.name"
              :value="category.name"
            >{{category.name}}</option>
          </select>
          <button
            type="button"
            class="btn btn-primary"
            @click="deleteCategory"
            id="deleteButton"
          >Delete Selected Category</button>
          <br>
          <label for="newCategoryName" v-if="categoryBool">New Category Name</label>
          <input
            type="text"
            class="form-control"
            v-if="categoryBool"
            v-model="newCategoryName"
            id="newCategoryName"
          >
          <button
            type="button"
            class="btn btn-primary"
            v-if="categoryBool"
            @click="saveCategory"
          >Create Category</button>
          <br>
          <label for="destinationAccount" v-if="transferenceBool">Account to Transfer Amount</label>
          <select class="form-control" v-model="destinationAccount" v-if="transferenceBool" id="destinationAccount">
            <option
              v-for="account in accounts"
              :key="account.name"
              :value="account.name"
            >{{account.name}}</option>
          </select>
          <br>
          <label for="Amount" id="lblAmount">{{formType}} Amount</label>
          <input type="text" class="form-control" v-model="currentAmount" id="Amount">
        </div>
      </form>
    </div>
    <div class="col-lg-5">
      <button type="button" class="btn btn-primary" @click="saveReg">Create</button>            
    </div>
  </div>
</template>

<script>
export default {
  name: "IncExpForm",
  data() {
    return {      
      currentName: "",
      currentCategory: "",
      currentAmount: "",
      currentAccount:this.$store.state.CURRENT_ACCOUNT,
      newCategoryName: "",
      destinationAccount:"",
          
    };
  },
  props: {
    formType: String,
    
   
  },
  computed: {
    accounts: function(){
      return this.$store.state.ACCOUNTS;
    },
    categories: function() {
      if (this.formType === "Income") {
        return this.$store.state.INCOME_CATEGORIES;
      } else {
        return this.$store.state.EXPENSE_CATEGORIES;
      }
    },
    categoryBool: function() {
      if (this.currentCategory === "Add...") {
        return true;
      } else {
        return false;
      }
    },
    transferenceBool: function(){
      if(this.currentCategory === "Transference" && this.formType === 'Expense'){
        return true;
      }
      else {
        return false;
      }
    }
  },
  methods: {    
    saveReg() {
      let formObject = {
        name: this.currentName,
        category: this.currentCategory,
        amount: this.currentAmount,
        account: this.currentAccount 

      };
      this.$store.dispatch("add" + this.formType, formObject);
      if(this.transferenceBool){
        formObject.account = this.destinationAccount;
        this.$store.dispatch("addIncome", formObject);
      }
     console.log(this.$store.state.INCOMES)
    },
    saveCategory() {
      this.$store.dispatch("add" + this.formType + "Category", {
        name: this.newCategoryName
      });
    },
    deleteCategory() {
      this.$store.dispatch(
        "delete" + this.formType + "Category",
        this.currentCategory
      );
    },
    deleteForm() {
      this.$store.dispatch("delete" + this.formType, this.currentName);
    },
    navigate() {
      this.$router.push("reportes");
    }
  }
};
</script>
<style scoped>
.leftColumn {
  margin: 20px 20px;
}
</style>