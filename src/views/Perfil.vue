<template>
  <b-container fluid class="my-3 px-3">
    <h1>Hola {{ currentUser.nombre }} {{ currentUser.apellido }} </h1>
    <b-row class="tamaño mt-3 justify-content-center">
      <b-col lg="7" md="7">
        <perfil-EditarCard/>
      </b-col>
      <b-col lg="5" md="5"> 
        <perfil-avatar/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({ currentUser: (state) => state.user }),
  },
  data(){
   return{
     ruta: false
   }
  }
};
</script>
<style scoped>
.tamaño{
  max-width: 1050px;
  min-width: 250px;
  
}
</style>