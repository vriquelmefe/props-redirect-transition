import Vue from 'vue'
import Router from 'vue-router'
import Administrador from './components/Administrador.vue'
import AdministradorSimple from './components/AdministradorSimple.vue'
import AdministradorAvanzado from './components/AdministradorAvanzado.vue'
const lazyLoadingInicio = () => import('./components/Inicio')
const lazyLoadingContacto = () => import('./components/Contacto')
const lazyLoadingSobreMi = () => import('./components/SobreMi')
const lazyLoadingPost = () => import('./components/Post')


Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/inicio',
      component: lazyLoadingInicio,
      name: 'inicio',
      redirect: '/'
    },
    {
      path: '/home',
      name: 'home',
      redirect: '/'
    },
    
    {
      path: '/portada',
      name: 'portada',
      redirect: '/'
    },
    {
      path: '/',
      component: lazyLoadingInicio,
      name: 'inicio',
    },
    {
      path: '/contacto',
      component: lazyLoadingContacto,
      name: 'contacto',
      alias: ['/contactame']      
    },
    {
      path: '/sobremi',
      component: lazyLoadingSobreMi,
      name: 'sobremi',
      alias: ['/acerca']        
    },
    {
      path: '/post',
      component: lazyLoadingPost,
      name: 'post', 
      children: [
        {
          path: ':articulo',
          component: () => import('./components/Articulo'),
          name: 'articulo',      
        },
      ]     
    },
    {
      path: '/administrador',
      name: 'administrador',
      component: Administrador,
      children: [
          {
              path: 'simple',
              component: AdministradorSimple
          },
          {
              path: 'avanzado',
              component: AdministradorAvanzado
          },
      ]
    },
    {
      path: '*',
      component: () => import('./components/NotFound')
    },
  ]
})