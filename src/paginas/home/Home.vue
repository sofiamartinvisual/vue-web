<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';

 
</script>

<template>
  <div class="bg-[#0c0936] h-screen text-white font-sans text-center flex flex-col items-center justify-center gap-12 fixed w-screen overflow-hidden">

<img class="absolute opacity-20 -z-10" src="/imagines/tonitrui.png">

    <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold pb-5 md:pb-20 z-10 transition-all">
    <span class="text-cyan-400">Diseño</span> Web y
    <br> 
    Apps <span class="text-cyan-400"> Interactivas</span>
    
</h1>

<p class="text-lg md:text-3xl transition-all">
  Aprendiendo a crear aplicaciones web
</p>

    <div class="botones">
      <Button variant="outline"
              class=" mr-2 bg-cyan-400 text-white border-2 border-black md:py-5 md-px:6 md:text-lg">    
        <RouterLink to="/indecision">Sí o No</RouterLink>
      </Button>
       <Button variant="outline"
                class="mr-2 bg-cyan-400 text-white border-2 border-black md:py-5 md-px:6 md:text-lg">
        <RouterLink to="/batman">Batman</RouterLink>
      </Button>
       <Button variant="outline"
                class="mr-2 bg-cyan-400 text-white border-2 border-black md:py-5 md-px:6 md:text-lg">
        <RouterLink to="/simpsons">Simpsons</RouterLink>
      </Button>
      <Button variant="outline"
              class="mr-2 bg-cyan-400 text-white border-2 border-black md:py-5 md-px:6 md:text-lg">
        <a href="https://www.upv.es">UPV</a>
      </Button>

    </div>
  </div>
</template>
