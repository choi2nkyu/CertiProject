<template>
  <div class="home">
    <Account msg="Create an Account"/>
    <div class="col-lg-5">
      <form>
        <div class="form-group">
          <label for="accountName">Account Name:</label>
          <input type="text" class="form-control" id="accountName">
          <label for="description">Description:</label>
          <input type="text" class="form-control" id="description">
        </div>
      </form>
    </div>
    <div class="col-lg-5">
      <button type="button" class="btn btn-primary">Income</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Account from "@/components/Account.vue";

export default {
  name: "home",
  components: {
    Account
  }
};
</script>

<style scoped>
.leftColumn {
  margin: 20px 20px;
}
</style>
