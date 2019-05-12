<template>
  <div class="account">
    <h1>{{ msg }}</h1>
    <div class="container row">
      <div class="col-5 left-column">
        <form>
          <div class="form-group">
            <label for="accountName">Account Name:</label>
            <input type="text" class="form-control" id="accountName">
            <label for="description">Description:</label>
            <input type="text" class="form-control" id="description">
          </div>
        </form>
      </div>
      <div class="col-5 right-column">
        <button type="button" class="btn btn-primary">Income</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Account",
  props: {
    msg: String
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
