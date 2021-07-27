<template>
  <b-container class="tamañonav my-3">
    <b-navbar class="d-flex justify-content-center">
      <b-navbar-nav class="icons">
        <b-nav-item
          class="h5"
          :active="isActive('/miplata/balance')"
          to="/miplata/balance"
        >
          <img src="@/assets/equilibrar.svg" style="max-width: 100px" />
          Balance
        </b-nav-item>
        <b-nav-item
          class="h5"
          :active="isActive('/miplata/ingresos')"
          to="/miplata/ingresos"
        >
          <img src="@/assets/dinero.svg" style="max-width: 100px" />
          Ingresos
        </b-nav-item>
        <b-nav-item
          class="h5"
          :active="isActive('/miplata/gastos')"
          to="/miplata/gastos"
        >
          <img src="@/assets/gasto.svg" style="max-width: 100px" />
          Gastos
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </b-container>
</template>

<script>
export default {
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
  },
};
</script>

<style scoped>
.tamañonav {
  max-width: 800px;
}
.icons {
  display: grid;
  grid-template-columns: 150px 150px 150px;
  grid-column-gap: 30px;
}
img {
  width: 100px;
}

@media (max-width: 500px) {
  .icons {
    grid-template-columns: 85px 85px 85px;
    grid-column-gap: 10px;
  }
  img {
    width: 50px;
  }
  p {
    font-size: 12px;
  }
}
@media screen and (min-width: 500px) and (max-width: 800px) {
  .icons {
    grid-template-columns: 120px 120px 120px;
    grid-column-gap: 20px;
  }
  img {
    width: 85px;
  }
}
</style>