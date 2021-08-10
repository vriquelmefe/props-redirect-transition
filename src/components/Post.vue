<template>
      <!-- CONTENIDO PARA LA VISTA PRINCIPAL O PADRE DEL POST -->
  <div>
      <!-- IMPLEMENTAR EL ROUTER VIEW QUE MUSTRE EL ARTICULO-->
    <router-link :to="{ name: 'articulo'}">Ver Articulos</router-link>
    <router-view></router-view>
  </div>
</template>
