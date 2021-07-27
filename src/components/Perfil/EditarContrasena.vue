<template>
  <div>
    <b-button @click="showModal = true" class="mx-1">Editar Contraseña</b-button>

    <b-modal v-model="showModal" title="Editar Contraseña" hide-footer >
      <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
        <b-form
          role="updatePasswordForm"
          @submit.prevent="handleSubmit(updatePassword)"
        >
          <base-input
            class="mb-3"
            name="Contraseña Actual"
            type="password"
            placeholder="Contraseña Actual"
            rules="required|min:6"
            v-model="passwordForm.oldPassword"
          />
          <base-input
            class="mb-3"
            name="Nueva Contraseña"
            type="password"
            placeholder="Nueva Contraseña"
            rules="required|min:6"
            v-model="passwordForm.newPassword"
          />
          <base-input
            class="mb-3"
            name="Repetir Nueva Contraseña"
            type="password"
            placeholder="Repertir Nueva Contraseña"
            rules="required|min:6"
            v-model="passwordForm.repeatPassword"
          />

          <b-row class="justify-content-center border-top pt-3">
            <b-button class="btn btn-secondary mx-3" @click="hideModal">Cancelar</b-button>
            <b-button class="btn btn-warning mx-3" variant="warning" type="submit">
              Actualizar
            </b-button>
          </b-row>
        </b-form>
      </ValidationObserver>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from "vuex";
import authService from "@/service/auth.service";
export default {
  data() {
    return {
      showModal: false,
      passwordForm: {
        oldPassword: "",
        newPassword: "",
        repeatPassword: "",
      },
      showOldPassword: false,
      showNewPassword: false,
      showRepeatPassword: false,
      
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    updatePassword() {
      authService
        .updatePassword(this.passwordForm, this.user._id)
        .then(() => {
          this.$swal({
            title: "Contraseña actualizada con éxito",
            icon: "success",
            showConfirmButton: false,
            position: "bottom-end",
            timer: 1200,
            toast: true,
          });
          this.hideModal();
        })
        .catch((error) => {
          this.$swal({
            icon: "error",
            title: `Error`,
            text: error.response.data.error,
          });
        });
    },
    hideModal() {
      this.showModal = false;
      this.passwordForm = {
        oldPassword: "",
        newPassword: "",
        repeatPassword: "",
      };
      this.$nextTick(() => {
        this.$refs.observer.reset();
      });
    },
  },
};
</script>
<style  scoped>
.modal-backdrop{
  background-color: none;
}
</style>