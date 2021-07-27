<template>
  <b-container class="d-block mt-2">
    <div class="justify-content-center">
      <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
        <b-form role="loginForm" @submit.prevent="handleSubmit(login)">
          <base-input
            name="email"
            type="email"
            placeholder="Correo"
            rules="required|email"
            v-model="credenciales.correo"
          >
          </base-input>

          <base-input
            name="contraseña"
            type="password"
            placeholder="Contraseña"
            rules="required|min:6"
            v-model="credenciales.contraseña"
          >
          </base-input>

          <div class="text-center">
            <b-button block variant="warning" type="submit" class="my-2">
              Iniciar Sesión
            </b-button>
          </div>
        </b-form>
      </ValidationObserver>
      <b-container id="botoninicio" class="row mb-2 my-0 mx-0">
        <router-link
          class="col text-dark text-center text-decoration-none"
          to="/auth/forgot-password"
        >
          ¿Olvidaste tu contraseña?
        </router-link>

        <b-button block href="#registro" class="col">
          Crear cuenta
        </b-button>
      </b-container>
    </div>
  </b-container>
</template>

<script>
import { mapMutations } from "vuex";
import authService from "@/service/auth.service";
export default {
  data() {
    return {
      loginForm: true,
      credenciales: {
        correo: "",
        contraseña: "",
      },
    };
  },
  methods: {
    ...mapMutations(["setUser"]),
    login() {
      authService
        .login(this.credenciales)
        .then((response) => {
          const { user, token } = response.data;
          this.setUser(user);
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("token", token);
          this.$router.push("/miplata");
          this.$swal({
            title: `Bienvenido ${user.nombre} ${user.apellido}`,
            icon: "success",
            showConfirmButton: false,
            position: "top-end",
            timer: 2200,
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
  },
};
</script>