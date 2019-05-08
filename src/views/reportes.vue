<template>
   <div>
     <h1>Reportes</h1>
    <div class="row">
       <div class="col-lg-6">
       <h2>Ingresos</h2>
       <b-table striped hover :items="items" :fields="fields"></b-table>

       <div>
        <b-button variant="outline-primary" style="margin-left: 10px">Add</b-button>
        <b-button variant="outline-primary" style="margin-left: 10px">Edit</b-button>
        <b-button variant="outline-danger" style="margin-left: 10px">Delete</b-button>
       </div>
     </div>


     <div class="col-lg-6">
       <h2>Egresos</h2>
       <b-table striped hover :items="items2" :fields="fields"></b-table>

      <div>
        <b-button variant="outline-primary" style="margin-left: 10px">Add</b-button>
        <b-button variant="outline-primary" style="margin-left: 10px">Edit</b-button>
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
        // Note `isActive` is left out and will not appear in the rendered table
        fields: ['motivo', 'categoria', 'monto', 'cuenta'],
        items: [
          { isActive: true, monto: 1000, motivo: 'Viaje', categoria: 'Cachorras', cuenta: 'Ahorros' },
          { isActive: false, monto: 1500, motivo: 'Colegiatura', categoria: 'Hijos', cuenta: 'Gastos' },
          { isActive: false, monto: 800, motivo: 'Porque si', categoria: 'Trabajo', cuenta: 'Ahorros'},
          { isActive: true, monto: 100, motivo: 'Ahorritos', categoria: 'General', cuenta: 'Ahorros' }
        ],

        items2: [
          { isActive: true, monto: 3000, motivo: 'Viaje PC', categoria: 'Cachorras', cuenta: 'Ahorros' },
          { isActive: false, monto: 150, motivo: 'Mandarina', categoria: 'Diversion', cuenta: 'Ahorros' },
          { isActive: false, monto: 900, motivo: 'Cachorreadas', categoria: 'Cachorras', cuenta: 'Ahorros'},
          { isActive: true, monto: 80, motivo: 'Pa comer', categoria: 'General', cuenta: 'Ahorros' }
        ]
      }
    }
  }
</script>





