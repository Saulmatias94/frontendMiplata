<template>
  <div>
    <b-button @click="showModal = true" variant="warning" class="mb-4">
      Agregar ingreso
    </b-button>

    <b-modal v-model="showModal" title="Agregar Ingreso" centered hide-footer>
      <b-form
        role="registerForm"
        @submit.prevent="saveIngreso()"
        @reset="resetForm"
      >
        <label for="ingreso">Ingreso:</label>
        <b-input-group id="ingreso" size="sm" prepend="$">
          <b-form-input
            required
            value="100"
            class="text-right"
            v-model="ingresos.ingreso"
          ></b-form-input>
        </b-input-group>

        <label for="tipo">Tipo de ingreso:</label>
        <b-form-select
          id="tipo"
          v-model="ingresos.tipo"
          :options="tipos"
          class="mb-2"
        ></b-form-select>
        <label for="example-weekdays">Día:</label>
        <b-form-input
          type="number"
          class="mb-3"
          name="apellido"
          rules="required|min:1"
          v-model="ingresos.dia"
        >
        </b-form-input>
        <label for="example-weekdays">Mes:</label>
        <b-form-select
          id="example-weekdays"
          v-model="ingresos.mes"
          :options="weekdays"
          class="mb-2"
        ></b-form-select>
        <label for="example-weekdays">Año:</label>
        <b-form-input
          type="number"
          class="mb-3"
          name="apellido"
          rules="required|min:1"
          v-model="ingresos.año"
        >
        </b-form-input>

        <div class="text-center mt-4">
          <b-button class="mx-1" variant="warning" type="submit">
            Agregar
          </b-button>
          <b-button class="mx-1" type="reset" variant="dark">
            Limpiar
          </b-button>
        </div>
      </b-form>
    </b-modal>
    <b-container>
      <h2 class="my-4">Ingresos</h2>
      <b-table hover :items="users" :fields="fields" responsive bordered>
        <template #cell(actions)="row">
          <b-button
            variant="danger"
            size="sm"
            @click="deleteUser(row.item._id)"
          >
            Eliminar
          </b-button>
        </template>
      </b-table>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import userService from "@/service/ingreso.service";
export default {
  data() {
    return {
      showModal: false,
      ingresos: {
        ingreso: 0,
        tipo: "",
        dia: 0,
        mes: "",
        año: 0,
        usuario: "",
      },
      weekdays: [
        { value: "Enero", text: "Enero" },
        { value: "Febrero", text: "Febrero" },
        { value: "Marzo", text: "Marzo" },
        { value: "Abril", text: "Abril" },
        { value: "Mayo", text: "Mayo" },
        { value: "Junio", text: "Junio" },
        { value: "Julio", text: "Julio" },
        { value: "Agosto", text: "Agosto" },
        { value: "Septiembre", text: "Septiembre" },
        { value: "Ocrtubre", text: "Ocrtubre" },
        { value: "Noviembre", text: "Noviembre" },
        { value: "Diciembre", text: "Diciembre" },
      ],
      tipos: [
        { value: "Sueldo", text: "Sueldo" },
        { value: "Credito", text: "Credito" },
        { value: "Prestado", text: "Prestado" },
        { value: "Honorario", text: "Honorario" },
        { value: "Otro", text: "Otro" },
      ],
      fields: [
        {
          key: "ingreso",
          label: "Ingreso",
          sortable: true,
        },
        {
          key: "tipo",
          label: "Tipo",
          sortable: true,
        },
        {
          key: "dia",
          label: "Día",
          sortable: true,
        },
        {
          key: "mes",
          label: "Mes",
          sortable: true,
        },
        {
          key: "año",
          label: "Año",
          sortable: true,
        },
        { key: "actions", label: "Actions" },
      ],
      users: [],
    };
  },
  computed: {
    ...mapState({ currentUser: (state) => state.user }),
  },
  mounted() {
    this.setForm();
    this.getIngresos();
  },
  methods: {
    getIngresos() {
      userService.traerIngreso(this.currentUser._id).then(({ data }) => {
        this.users = data;
      });
    },
    setForm() {
      this.ingresos.usuario = this.currentUser._id;
    },
    saveIngreso() {
      this.showModal = false;
      this.$swal({
        title: "Procesando solicitud",
        icon: "info",
        showConfirmButton: false,
        position: "bottom-end",
        timer: 2200,
        toast: true,
      });
      userService
        .registerIngreso(this.ingresos)

        .then(({ data }) => {
          this.$swal({
            title: data,
            icon: "success",
            showConfirmButton: false,
            position: "bottom-end",
            timer: 2200,
            toast: true,
          });
          this.getIngresos();
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
        ingreso: 0,
        tipo: "",
        dia: 0,
        mes: "",
        año: 0,
      };
      this.$nextTick(() => {
        this.$refs.observer.reset();
      });
    },
  },
};
</script>