<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="fixed-top bg-secondary">
      <b-container>
        <b-navbar-brand>
          <b-link to="/" class="text-white text-decoration-none">
            <img
              id="a"
              alt="imagen"
              class="align-top mr-2"
              src="@/assets/moneda.svg"
              style="width: 30px; height: 30px"
            />
            <span><strong class="text-warning mr-1">Mi</strong>Plata</span>
          </b-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav v-if="!isAuthenticated" class="ml-auto">
            <b-nav-item
              :active="isActive('/#inicio')"
              href="#inicio"
              class="nav-link text-decoration-none my-md-auto"
              >Inicio</b-nav-item
            >
            <b-nav-item
              :active="isActive('/#caracteristicas')"
              href="#caracteristicas"
              class="nav-link text-decoration-none my-auto"
              >Características
            </b-nav-item>

            <b-nav-item
              href="#registro"
              class="nav-link text-decoration-none my-md-auto"
            >
              Registro
            </b-nav-item>
            <b-nav-item-dropdown
              no-caret
              class="mx-auto align-top"
              id="iniciarsesion"
              right
            >
              <!-- Using 'button-content' slot -->
              <template #button-content :active="isActive('/#iniciarsesion')">
                <b-icon
                  class="d-inline-block"
                  icon="person-circle"
                  style="width: 30px; height: 30px"
                ></b-icon>
              </template>
              <div>
                <div class="bg-warning">
                  <p class="text-center h5 py-2 m-0">Iniciar Sesión</p>
                </div>

                <IniciarSesion />
              </div>
            </b-nav-item-dropdown>
          </b-navbar-nav>
          <b-navbar-nav v-if="isAuthenticated" class="ml-auto">
            <b-nav-item
              class="nav-link text-decoration-none my-md-auto"
              v-if="isAdmin"
              to="/admin/usuarios"
              :active="isActive('/admin/usuarios')"
            >
              Usuarios
            </b-nav-item>
            <b-nav-item
              class="nav-link text-decoration-none my-md-auto"
              v-if="!isAdmin || isAdmin"
              to="/miplata"
              :active="isActive('/miplata')"
            >
              Miplata
            </b-nav-item>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                {{ userName }}
              </template>
              <b-dropdown-item
                class="nav-link text-decoration-none my-md-auto"
                to="/perfil"
                :active="isActive('/perfil')"
              >
                Perfil
              </b-dropdown-item>
              <b-dropdown-item @click="logout()">Cerrar Sesión</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
import IniciarSesion from "@/components/IniciarSesion.vue";
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "",
  components: {
    IniciarSesion,
  },
  computed: {
    ...mapState(["user"]),
    ...mapGetters(["isAuthenticated", "isAdmin", "userName"]),
  },
  methods: {
    ...mapMutations(["setUser"]),
    isActive(route) {
      return this.$route.path === route;
    },
    logout() {
      this.setUser(null);
      localStorage.clear();
      location.reload();
    },
  },
  data() {
    return {};
  },
};
</script>

<style  scoped>
#inicio {
  max-width: 700px;
}

.nav-link {
  
  padding: 2px;
}
</style>
