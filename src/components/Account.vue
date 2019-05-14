<template>
  <div class="account">
    <h1>{{ msg }}</h1>
    <div class="container row">
      <div class="col-5 left-column">
        <form>
          <div v-for="field in fields" v-bind:key="field.id" class="form-group">
            <label for="field.value">{{field.label}}</label>
            <input ref="accountInput" type="text" class="form-control" id="field.value">
          </div>
        </form>
        <button type="button" class="btn btn-primary" @click="addClicked()">Add</button>
      </div>
      <div class="col-5 right-column">
        <button type="button" class="btn btn-primary">Edit</button>
        <button type="button" class="btn btn-primary">Delete</button>
        <b-table
          selectable
          hover
          striped
          :items="testItems"
          :fields="fields.value"
          @row-selected="rowSelected"
        ></b-table>
        <button
          type="button"
          class="btn btn-primary"
          v-if="showDetailButton"
          @click="navigate"
        >Detail</button>
      </div>
    </div>
  </div>
</template>

<script>
import { constants } from "fs";
export default {
  name: "Account",
  props: {
    msg: String
  },
  data() {
    return {
      fields: [
        {
          id: 1,
          label: "Account Name",
          value: "name"
        },
        {
          id: 2,
          label: "Description",
          value: "description"
        }
      ],
      testItems: [
        {
          name: "Trip",
          description: "This will be used for my trip to France"
        },
        {
          name: "Savings",
          description: "This is current savings"
        }
      ],
      accountArray: [],
      selected: [],
      showDetailButton: false
    };
  },
  methods: {
    add(object) {},
    addClicked() {
      console.log(this.$refs.accountInput);
      for (var item in this.$refs.accountInput) {
        console.log(item);
      }
    },
    addAccountToStore() {
      this.$store.dispatch("addAccount", {
        name: this.currentName,
        description: this.currentDescription
      });
    },
    rowSelected(items) {
      this.selected = items;
      console.log(items);
      if (items.length > 0) {
        this.showDetailButton = true;
      } else {
        this.showDetailButton = false;
      }
      console.log(this.showDetailButton);
    },
    navigate() {
      this.$router.push("reportes");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left-column {
  margin: 20px 20px;
}
.right-column {
  margin: 20px 20px;
}
</style>
