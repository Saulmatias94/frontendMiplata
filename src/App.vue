<template>
  <div id="app">
    <base-NavBar />
    <base-NavBarFunciones
      v-if="['miplata', 'balance', 'ingresos', 'gastos'].includes($route.name)"
    ></base-NavBarFunciones>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>



<style>
#app {
 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --griss: rgba(187, 191, 202);
  --gris: rgba(187, 191, 202, 0.5);
  --amarillo: rgb(255, 193, 7);
  text-align: center;
  text-decoration-color: rgb(52, 58, 64);
  margin-top: 56px;
}
</style>
