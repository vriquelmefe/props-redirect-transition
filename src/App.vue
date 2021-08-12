<template>
  <div id="app">
    <nav class="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
      <div class="container"><a class="navbar-brand">V8</a><button data-toggle="collapse" data-target="#navbarResponsive" class="navbar-toggler" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
              <!-- MENU DE NAVEGACION -->
            <ul class="nav navbar-nav ml-auto" id="menu-v8">
              <li class="nav-item" role="presentation">
                <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA NOMBRADA -->
                <router-link to="/inicio">Inicio</router-link> | 
              </li>
              <li class="nav-item" role="presentation">
                <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA NOMBRADA -->
                <router-link :to="{name : 'sobremi'}">Sobre mi</router-link> | 
              </li>
              <li class="nav-item" role="presentation">
                <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA ESTÁTICA -->
                <router-link :to="{name : 'contacto'}">Contacto</router-link> | 
              </li>
              <li class="nav-item" role="presentation">
                <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A RUTA ESTÁTICA -->
                <router-link to="/post/1">Ultimo post</router-link> |
              </li>
            </ul>
        </div>
      </div>
    </nav>
    <!-- ROUTER VIEW QUE CARGARÁ LAS VISTAS (INICIO, SOBRE MÍ, CONTACTO, ETC.) -->
    <transition name="mi-transition" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
  
</template>

<style scoped>
.mi-transition-enter-active {
  transition: opacity 1s, 
}
.mi-transition-enter{
  opacity: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#menu-v8 a{
  text-shadow: 1px 1px #000;
}
</style>
