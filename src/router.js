import Vue from 'vue'
import Router from 'vue-router'
const lazyLoadingInicio = () => import('./components/Inicio')
const lazyLoadingContacto = () => import('./components/Contacto')
const lazyLoadingSobreMi = () => import('./components/SobreMi')
const lazyLoadingArticulo = () => import('./components/Articulo')


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
      path: '/post/:entrada',
      component: () => import('./components/Post'),
      name: 'post', 
      children: [
        {
          path: '/articulo',
          component: lazyLoadingArticulo,
          name: 'articulo',      
        },
      ]     
    },
    {
      path: '/administrador',
      name: 'administrador',
      component: () => import('./components/Administrador'),
      children: [
          {
              path: '/*simple',
              name: 'administrador-simple',
              component: () => import('./components/AdministradorSimple')
          },
          {
              path: '/*avanzado',
              name: 'administrador-avanzado',
              component: () => import('./components/AdministradorAvanzado')
          },
      ]
    },
    {
      path: '*',
      component: () => import('./components/NotFound')
    },
  ]
})