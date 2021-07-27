import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import store from '@/store'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',

    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  },
  {
    path: '/perfil',
    name: 'perfil',
    meta: { requiresAuth: true },
    component: () => import('./views/Perfil.vue')
  },
  {
    path: '/miplata',
    name: 'miplata',
    meta: { requiresAuth: true },
    component: () => import('./views/HomeFuncion.vue')
  },
  {
    path: '/miplata/balance',
    name: 'balance',
    meta: { requiresAuth: true },
    component: () => import('./components/Funciones/Balance.vue')
  },
  {
    path: '/miplata/ingresos',
    name: 'ingresos',
    meta: { requiresAuth: true },
    component: () => import('./components/Funciones/Ingreso.vue')
  },
  {
    path: '/miplata/gastos',
    name: 'gastos',
    meta: { requiresAuth: true },
    component: () => import('./components/Funciones/Gastos.vue')
  },
  {
    path: '/auth/forgot-password',
    name: 'ForgotPassword',
    component: () => import('@/views/Auth/ForgotPassword')
  },
  {
    path: '/auth/reset-password',
    name: 'ResetPassword',
    component: () => import('@/views/Auth/ResetPassword')
  },
  {
    path: '/auth/verify-email',
    name: 'VerifyEmail',
    component: () => import('@/views/Auth/VerifyEmail'),
  },
  
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/admin',
    component: () => import('@/views/Admin/AdminLayout'),
    meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
      if (store.getters.isAdmin) next()
      else next('/perfil')
    },
    children: [
      {
        path: 'usuarios',
        name: 'UserPage',
        component: () => import('@/views/Admin/UserPage'),
      }
    ]
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  // La ruta requiere autentificación
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Continuamos con la navegación si el usuario esta autentificado
    if (store.getters.isAuthenticated) next();
    // En caso contrario lo enviamos al Login
    else next({ name: 'home' });
  } else {
    // Evitamos que un usuario logeado ingrese a alguna vista con el path auth
    if (store.getters.isAuthenticated && to.path.includes('/')) {
      // En caso de ser así enviamos al usuario al Home
      next({ name: 'miplata' });
    }
    else next();
  }
});

export default router
