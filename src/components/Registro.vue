<template>
  <b-container id="form">
    <div
      class="container bg-warning border border-2 border-warning rounded-top"
    >
      <p class="h4 mb-0">Inscríbete en MiPlata</p>
    </div>
    <b-row
      class="
        container
        border border-2 border-warning
        rounded-bottom
        bg-white
        m-auto
      "
    >
      <b-col class="container px-0 px-md-2">
        <div>
          <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
            <b-form
              role="registerForm"
              @submit.prevent="handleSubmit(saveUser)"
              @reset="resetForm"
            >
              <base-input
                name="nombre"
                placeholder="Nombre"
                rules="required|min:2"
                v-model="form.nombre"
              >
              </base-input>

              <base-input
                name="apellido"
                placeholder="Apellido"
                rules="required|min:2"
                v-model="form.apellido"
              >
              </base-input>

              <base-input
                name="correo"
                type="email"
                placeholder="Correo"
                rules="required|email"
                v-model="form.correo"
              >
              </base-input>

              <base-input
                name="contraseña"
                type="password"
                placeholder="Contraseña"
                rules="required|min:6"
                v-model="form.contraseña"
              >
              </base-input>
              <b-form-group>
                <b-form-checkbox
                  v-model="form.educacion"
                  required
                  :state="validationsss"
                >
                  Básica educativa completada
                </b-form-checkbox>
                <b-form-invalid-feedback :state="validationsss">
                  Obligatorio
                </b-form-invalid-feedback>
                <b-form-valid-feedback :state="validationsss">
                  Correcto.
                </b-form-valid-feedback>
              </b-form-group>

              <b-form-group>
                <b-form-datepicker
                  id="example-datepicker"
                  v-model="form.fecha"
                  placeholder="Fecha de nacimiento"
                  required
                ></b-form-datepicker>
              </b-form-group>

              <b-form-group
                class="row text-center mt-3 mb-2 d-block px-3"
              >
                <b-button class="col"  type="submit" variant="warning"
                  >Registar</b-button
                >
                <b-button class="col mt-2"  variant="secondary" type="reset">
                  <b-icon
                    icon="trash-fill"
                    aria-hidden="true"
                    variant="dark"
                  ></b-icon>
                </b-button>
              </b-form-group>
            </b-form>
          </ValidationObserver>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
import authService from "../service/auth.service";
export default {
  data() {
    return {
      form: {
        correo: "",
        nombre: "",
        apellido: "",
        contraseña: "",
        fecha: "",
        educacion: null,
      },
    };
  },
  computed: {
    validationsss() {
      var valid;
      if (this.form.educacion === true) {
        valid = true;
      }
      if (this.form.educacion === false) {
        valid = false;
      }

      return valid;
    },
  },
  methods: {
    saveUser() {
      authService
        .register(this.form)
        .then(() => {
          this.$swal({
            icon: "success",
            title: "Usuario creado con exito",
          }).then(() => {
            this.$router.push("/#iniciarsesion");
          });
        })
        .catch((error) => {
          this.$swal({
            icon: "error",
            title: `Error`,
            text: error.response.data.error,
          });
        });
    },
    resetForm() {
      this.form = {
        correo: "",
        nombre: "",
        apellido: "",
        contraseña: "",
        fecha: "",
        educacion: null,
      };
      this.$nextTick(() => {
        this.$refs.observer.reset();
      });
    },
  },
};
</script>

<style scoped>
#form {
  max-width: 600px;
  min-width: 250px;
}
</style>