<template>
  <div class="account">
    <h1>{{ msg }}</h1>
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
</style>
