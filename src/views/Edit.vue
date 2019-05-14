<template>
  <div class="Edit">
    <IncExpForm formType = "Edit"/>
  </div>
</template>
<script>
// @ is an alias to /src
import IncExpForm from '@/components/IncExpForm.vue'

export default {
  name: 'Edit',    
  components: {
    IncExpForm
  }
}
</script>
