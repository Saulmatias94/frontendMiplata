```jsx
<template>
  <div>
    <b-button @click="showModal = true" variant="warning" class="mb-4">
      Crear Usuario
    </b-button>

    <b-modal v-model="showModal" title="Crear Usuario" centered hide-footer>
      <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
        <b-form
          role="registerForm"
          @submit.prevent="handleSubmit(saveUser)"
          @reset="resetForm"
        >
          <base-input
            class="mb-3"
            name="nombre"
            placeholder="Nombre"
            rules="required|min:2"
            v-model="user.nombre"
          >
          </base-input>

          <base-input
            class="mb-3"
            name="apellido"
            placeholder="Apellido"
            rules="required|min:2"
            v-model="user.apellido"
          >
          </base-input>

          <base-input
            class="mb-3"
            name="email"
            type="email"
            placeholder="Email"
            rules="required|email"
            v-model="user.correo"
          >
          </base-input>
          <b-form-group>
                <b-form-datepicker
                  id="example-datepicker"
                  v-model="user.fecha"
                  placeholder="Fecha de nacimiento"
                  required
                ></b-form-datepicker>
              </b-form-group>

          <div class="text-center mt-4">
              <p>{{user}}</p>
            <b-button class="mx-1" type="reset" variant="dark"> Limpiar </b-button>
            <b-button class="mx-1" variant="warning" type="submit">
              Crear Cuenta
            </b-button>
          </div>
        </b-form>
      </ValidationObserver>
    </b-modal>
  </div>
</template>

<script>
import userService from "@/service/user.service";
export default {
  data() {
    return {
      showModal: false,
      user: {
        nombre: "",
        apellido: "",
        correo: "",
        fecha: "",
      },
    };
  },
  methods: {
    saveUser() {
      this.showModal = false;
      this.$swal({
        title: "Procesando solicitud",
        icon: "info",
        showConfirmButton: false,
        position: "bottom-end",
        timer: 1200,
        toast: true,
      });
      userService
        .save(this.user)
        .then(({ data }) => {
          this.$emit("loadUsers");
          this.$swal({
            title: data,
            icon: "success",
            showConfirmButton: false,
            position: "bottom-end",
            timer: 1200,
            toast: true,
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
      this.user = {
        nombre: "",
        apellido: "",
        correo: "",
        fecha:"",
      };
      this.$nextTick(() => {
        this.$refs.observer.reset();
      });
    },
  },
};
</script>
```