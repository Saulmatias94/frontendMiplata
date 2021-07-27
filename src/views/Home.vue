<template>
  <div class="home">
    <header id="inicio" class="bd-masthead h-50">
      <b-container class=" row row-cols-1 row-cols-md-2 m-auto align-items-center">
        <div class="col">
          <p class="texti text-white">
            <strong class="texti text-warning">Mi</strong>Plata
          </p>

          <img
            id="a"
            alt="imagen"
            src="@/assets/moneda.svg"
            style="max-width: 400px"
          />
        </div>
        <div class="col">
          <h1 class="texti text-dark">Finanzas personales al alcance de todos</h1>
        </div>
      </b-container>
    </header>

    <section id="caracteristicas" class="b container my-3">
      <h2 class="text-dark">
        ¿Qué puedes hacer en <strong class="text-warning">Mi</strong>Plata?
      </h2>
      <b-container class=" bg-secondary rounded">
        <div class="figure text-white row row-cols-1 row-cols-md-2 m-auto p-2">
          <div class="col align-self-center">
            <h3>Mejora tus finanzas personales</h3>
            <p>
              Domina las finanzas personales para guiar tu dinero, permitiendo
              controlar tu presupuesto, gestionar los gastos e ingresos en menos
              tiempo.
            </p>
          </div>
          <div class="col align-self-center">
            <img
              id="a"
              alt="imagen"
              class="figure-img img-fluid rounded-3 my-auto"
              src="@/assets/finance.svg"
            />
          </div>
        </div>
      </b-container>
    </section>

    <section class="mt-5 pt-3">
      <div class="row row-cols-1 row-cols-lg-2 m-auto">
        <div class="col">
          <Detalles />
        </div>
        <div id="registro" class="col my-4 mt-lg-0 ">
          <Registro/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
};
</script>
<style scoped>

.bd-masthead {
  padding: 3rem 0;
  background: linear-gradient(165deg, var(--gris) 50%, #fff 50%);
  margin-right: 0;
  margin-left: 0;
}
.b {
  max-width: 800px;
  min-width: 250px;
}
#a {
  max-width: 50%;
  max-height: 50%;
}

header {
  height: 600px;
}
img {
  width: 300px;
}
.texti {
  font-size: 60px;
}
@media (max-width: 500px) {
  img {
    width: 200px;
  }
  .texti {
    font-size: 35px;
  }
}
@media screen and (min-width: 500px) and (max-width: 990px) {
  img {
    width: 250px;
  }
  .texti {
    font-size: 50px;
  }
}
</style>