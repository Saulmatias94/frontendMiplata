<template>
  <b-container
    class="p-2 border border-2 border-warning rounded"
    role="tablist"
  >
    <p class="h4 text-dark">Beneficios</p>

    <b-card no-body class="mb-2">
      <b-card-header
        block
        v-b-toggle.accordion-1
        header-tag="header"
        class="p-1 btn btn-warning"
        role="button"
        header-bg-variant="warning"
        header-text-variant="dark"
      >
        <span class="h4 mb-0">Mayor conciencia</span>
      </b-card-header>
      <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
        <b-card-body class="figure row row-cols-1 row-cols-md-2 m-auto">
          <div class="col">
            <img
              id="a"
              alt="imagen"
              class="figure-img img-fluid rounded"
              src="https://cifuentesoyarzo.cl/public/frontend/assets/imagen1.jpg"
            />
          </div>

          <b-card-text class="col">{{ text1 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-2">
      <b-card-header
        block
        v-b-toggle.accordion-2
        header-tag="header"
        class="p-1 btn btn-warning"
        role="button"
        header-bg-variant="warning"
        header-text-variant="dark"
      >
        <span class="h4 mb-0">Plantearse metas</span>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body class="figure row row-cols-1 row-cols-md-2 m-auto">
          <div class="col">
            <img
              id="a"
              alt="imagen"
              class="img-fluid rounded"
              src="https://cifuentesoyarzo.cl/public/frontend/assets/imagen2.jpg"
            />
          </div>

          <b-card-text class="col">{{ text2 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header
        block
        v-b-toggle.accordion-3
        header-tag="header"
        class="p-1 btn btn-warning"
        role="button"
        header-bg-variant="warning"
        header-text-variant="dark"
      >
        <p class="h4 mb-0">Evita gastos innecesarios</p>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body class="figure row row-cols-1 row-cols-md-2 m-auto">
          <div class="col">
            <img
              id="a"
              alt="imagen"
              class="figure-img img-fluid rounded"
              src="https://cifuentesoyarzo.cl/public/frontend/assets/imagen.jpg"
            />
          </div>

          <b-card-text class="col">{{ text3 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      text1: `Por lo general no le damos valor a las cosas hasta que nos toca a nosotros ser quienes hacemos el esfuerzo por ganárnoslas. Así que, partiendo de lo anterior, un curso de finanzas personales te ayudará a darle mayor valor a tu dinero. Sin que tampoco se trate de que te conviertas en un codo, al menos podrás darle el justo valor a las cosas, a tu esfuerzo y la recompensa que obtengas por él.`,
      text2:
        "En lugar de vivir al día, cuando una persona tiene mayor educación financiera puede incluso crear estrategias para la administración de su dinero y sacarle el mayor provecho. Planear el ahorro, la inversión y el crédito se vuelven indispensables para alcanzar nuestros objetivos.",
      text3:
        "Sabes cuál es tu presupuesto y lo mantienes controlado todo el tiempo. Sabes en qué gastas y cuánto, por lo que puedes reducir aquello que no es necesario. Esto no significa que no te des gusto de vez en cuando, pero lo puedes hacer de manera más responsable y sin afectar a tu economía.",
    };
  },
};
</script>

<style scoped>
.b {
  max-width: 700px;
  min-width: 250px;
}
img {
  max-width: 85%;
  max-height: 85%;
}
</style>