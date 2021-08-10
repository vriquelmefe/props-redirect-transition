<template>
  <div>
    <header class="masthead" style="background-image:url('assets/img/about-bg.jpg');">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-lg-8 mx-auto">
                    <div class="site-heading">
                        <router-link :to="{name: 'administrador-avanzado'}" class="text-white">Administrador Avanzado</router-link> |
                        <router-link :to="{name: 'administrador-simple'}" class="text-white">Administrador Simple</router-link>
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <footer>
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto">
                <ul class="list-inline text-center">
                    <li class="list-inline-item"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-twitter fa-stack-1x fa-inverse"></i></span></li>
                    <li class="list-inline-item"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-facebook fa-stack-1x fa-inverse"></i></span></li>
                    <li class="list-inline-item"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-github fa-stack-1x fa-inverse"></i></span></li>
                </ul>
                <p class="text-muted copyright">Copyright&nbsp;©&nbsp;V8 - 2018</p>
            </div>
        </div>
    </div>
</footer>
    
  </div>
</template>
