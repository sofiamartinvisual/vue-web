
<script setup lang="ts">
import {ref} from 'vue';
import Logosimpsons from '@/components/logosimpsons.vue';
import { Button } from '@/components/ui/button';

const imagoCirca = ref<string>('lisa.png');
</script>

<template>
    
    <div class="grid grid-rows-[auto_lfr_auto] min-h-screen">
<header class="bg-simpsons-yellow w-full border border-black">
    <div class="flex flex-col md:flex-row justify-between items-center p-3 mx-auto max-w-page md:px-20">
    <Logosimpsons estilus="w-[8rem] h-auto" />

    <div class="flex gap-6 pt-3">
    <RouterLink 
    to="/simpsons/gallery"
    active-class="font-bold"
    >
    Characters
   </RouterLink> 
   <RouterLink 
    to="/simpsons/about"
    active-class="font-bold"
   >
  
    About
   </RouterLink> 
   <Button variant="tertiarius" size="elongatis" class="bg-simpsons-red hover:bg-simpsons-yellow focus:bg-simpsons-yellow"> 
    <RouterLink to="/">Exit</RouterLink>
   </Button>
    </div>
    </div>
   
  
   
</header>
<main>
    <RouterView />
</main>
<footer class="bg-simpsons-yellow text-center py-6  w-full border border-black">
<div>
    <strong>All Rights Reserved</strong> - Oh Lord Matt Groening - 1989-2027
    </div>

    <small>
        This app was done by Fernando Cordón
    </small>
</footer>


    </div>



</template>



<style scoped>

</style>