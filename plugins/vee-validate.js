import Vue from "vue";
import { ValidationObserver, ValidationProvider, localize, extend } from "vee-validate";
import * as rules from 'vee-validate/dist/rules';
import es from 'vee-validate/dist/locale/es.json';

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

// cambiamos el idioma de los mensajes
localize("es", es);

// instalamos todas las reglas
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});