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
          <label for="Amount" id="lblAmount">{{formType}} Amount</label>
          <input type="text" class="form-control" v-model="currentAmount" id="Amount">
        </div>
      </form>
    </div>
    <div class="col-lg-5">
      <button type="button" class="btn btn-primary" @click="saveReg">Create</button>
      <button type="button" class="btn btn-primary" @click="showMoreStuff">Show</button>
      <button type="button" class="btn btn-primary" @click="deleteForm">Delete Object</button>
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
      newCategoryName: ""
    };
  },
  props: {
    formType: String
  },
  computed: {
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
    }
  },
  methods: {
    showMoreStuff() {
      if (this.formType === "Income") {
        console.log(this.$store.state.INCOMES);
      } else {
        console.log(this.$store.state.EXPENSES);
      }
    },
    saveReg() {
      let formObject = {
        name: this.currentName,
        category: this.currentCategory,
        amount: this.currentAmount
      };
      this.$store.dispatch("add" + this.formType, formObject);
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