<script setup lang="ts">
import Carrusimaginum from '@/components/ui/Carrusimaginum.vue';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import { House, Menu } from '@lucide/vue';
import { Button } from '@/components/ui/button'
import { scrollToSection } from '@/utils/ScrollToSection'
import { onMounted, onUnmounted, ref } from 'vue';

const photos = ["justice", "arkham", "superman", "varios", "villana", "villano", "grupo", "robin", "anne", "joker", "resplandor", "cat", "gafas", "league", "fondoVerde"]

interface Coordinatas {
  x: number;
  y: number;
}

const videreMenu = ref<boolean>(true)
const mousePosition = ref<Coordinatas>({ x: 0, y: 0 });

  const handleResize = () => {
        if (window.innerWidth < 640) {
          videreMenu.value = false;
        } else {
          videreMenu.value = true;
        }
      }

  onMounted(() => {
    handleResize(); // Check initial window size
    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });

  const cumMouseMove = (e: MouseEvent) => {

    const rect = (e.target as HTMLElement).getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    mousePosition.value = {
      x: (centerX - mouseX) * 0.1,
      y: (centerY - mouseY) * 0.1,
    };
  }

 const cumMouseLeave = () => {
    mousePosition.value = { 
      x: 0, 
      y: 0 };
  }

</script>

<template>
  <div class="batman">

      <Button
      class="fixed top-2 right-4 z-50 bg-gray-500 sm:hidden"
      @click="videreMenu = !videreMenu"
      >
        <Menu class="size-6" />
      </Button>

<nav v-if="videreMenu" 
  class="extra-nav flex flex-col sm:flex-row justify-between px-3">
     <RouterLink to="/">
        <House class="icon-home" />
     </RouterLink>

      <NavigationMenu>
        <NavigationMenuList class="flex flex-col sm:flex-row">
        <NavigationMenuItem>
            <a href="#" @click.prevent="scrollToSection('#')">
                <NavigationMenuLink :class="navigationMenuTriggerStyle()">
                    Portada
                </NavigationMenuLink>
            </a>
        </NavigationMenuItem>
                <NavigationMenuItem>
            <a href="#vehiculis" @click.prevent="scrollToSection('#vehiculis')">
                <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-md w-full justify-start hover:bg-purple-500 hover:text-white transition-colors']">
                    Vehiculos
                </NavigationMenuLink>
            </a>
             </NavigationMenuItem>

        <NavigationMenuItem>
            <a href="#videre" @click.prevent="scrollToSection('#videre')">
                <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-md w-full justify-start hover:bg-purple-500 hover:text-white transition-colors']">
                    Imágenes
                </NavigationMenuLink>
            </a>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <a href="#contactus">
                <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-md w-full justify-start hover:bg-purple-500 hover:text-white transition-colors']">
                    Contacto
                </NavigationMenuLink>
            </a>
        </NavigationMenuItem>


        </NavigationMenuList>
    </NavigationMenu>

  </nav>
  </div>
  
  

<header class="titulus">
    <h1>Batman</h1>

    <div
    id="titulus-batman"
    class="titulus-img"
    @mousemove="cumMouseMove"
    @mouseleave="cumMouseLeave"
    :style="{
      backgroundPositionX: `calc(50% + ${mousePosition.x}px)`, 
      backgroundPositionY: `calc(50% + ${mousePosition.y}px)`,
      transition: 'background-position 0.1s ease-out'
    }"
    ></div>

    <p>Él puede tomar la decision que nadie más puede, la decision correcta</p>
</header>

        <section id="vehiculis">
        <div class="vehiculis-arca">

            <div class="item unus">
                <div class="notitia">
                <h2>Avión</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vulputate elit eget fermentum. Ut laoreet ante lacus. Quisque ut tincidunt metus. Curabitur congue, arcu nec tempus sodales, neque sem ultrices mauris, eu tincidunt nibh nibh eu massa. Aenean rhoncus quis nibh ac facilisis.</p>
                <small>Fabricado en 2005</small>
                </div>
                <img src="../../../public/imagines/batman/avion.jpg" alt="Batman jet parked in a dark night setting with a sleek black aircraft and a moody urban backdrop, conveying a tense and futuristic tone"/>
            </div>

            <div class="item duo">
                <div class="notitia">
                <h2>Moto</h2>
                <p>Nulla aliquip cupidatat voluptate veniam nostrud aliquip sit enim officia. Sit eu pariatur officia qui dolor adipisicing cupidatat. Sit consectetur et eu ut esse laboris nulla.</p>
                <small>Fabricado en 2006</small>
                </div>
                <img src="../../../public/imagines/batman/moto.jpg" alt="Batman motorcycle poised in a shadowy city scene, with a powerful black silhouette and a dramatic, stealthy mood"/>
            </div>
            
            <div class="item tribus">
                <div class="notitia">
                <h2>Coche</h2>
                <p>Irure adipisicing est minim eu ad dolor. Eu ea commodo pariatur ut occaecat in cupidatat reprehenderit ut laborum duis. Sunt minim ex fugiat reprehenderit. Lorem consectetur reprehenderit commodo non</p>
                <small>Fabricado en 2007</small>
                </div>
                <img src="../../../public/imagines/batman/car.jpg" alt="Batman armored car under low lighting in a city environment, emphasizing strength, protection, and a serious vigilante atmosphere"/>
            </div>
            </div>

            <div class="vehiculis-titulus">
            <h1>Vehículos de Batman</h1>
            </div>
        </section>

        <section id="videre" class="flex w-full justify-center min-h-[60vh] lg:min-h-[95vh] items-center bg-gray-900 ">
 
          <Carrusimaginum
            :photos="photos"
            base-path="/imagines/batman"
            :autoplay-delay="1500"
          />

        </section>
</template>

<style scoped>
.batman{
    font-family: Arial, Helvetica, sans-serif;
}

.menu-toggle {
  display: inline-flex;
}

@media (min-width: 640px) {
  .menu-toggle {
    display: none;
  }
}

.icon-home {
  color: slateblue;
  width: 3rem;
  height: 3rem;
}

.icon-home:hover {
  color: white;
  background-color: slateblue;
}

.extra-nav {
  background-color: white;
  opacity: 0.7;
  box-shadow: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  width: 11rem;
  min-height: 12rem;
  padding-top: 3.5rem;
  align-items: flex-start;
  border-radius: 0 0 1rem 0;
  z-index: 1;
}

.mobile-navigation,
.mobile-menu-list {
  width: 100%;
}

.mobile-menu-list {
  align-items: flex-start;
  gap: 0;
}


@media (min-width: 640px){
  .extra-nav {
    width: 100%;
    min-height: 0;
    padding-top: 0;
    align-items: center;
    border-radius: 0;
    opacity: 1;
    left: 0;
  }

  .mobile-navigation,
  .mobile-menu-list {
    width: auto;
  }

  .mobile-menu-list {
    align-items: center;
    gap: 0.25rem;
  }
}

.titulus-img {
  background-size: 100% 100%;
  background-position: center center;
  background-image: url("/imagines/batman/batman.jpg");
  aspect-ratio: 8/7;
}

.titulus-img:hover {
  background-size: 115% 115%;
}

.titulus > h1 {
  position: absolute;
  top: calc(100vw * 0.5);
  width: 100%;
  text-align: center;
  font-size: 5rem; 
  color: white;
  pointer-events:none; 
  font-family: batman
}

.titulus > p {
  position: absolute;
  top: calc(100vw * 0.25);
  width: 100%;
  text-align: center;
  font-size: 2rem;
  color: white;
  pointer-events:none;
    font-family: batman;
    display: none;
}

@media (min-width: 768px) {
  .titulus > p {
    display: block;
  }

  .titulus > h1 {
    color: red;
  }
}

#vehiculis {
  max-width: 510px;
  margin: 0 auto;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
}

.vehiculis-arca {
  order: 1;
  display: flex;
  flex-direction: column;
}

.vehiculis-titulus {
  height: 5.5rem; /* 88px */
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item {
  padding: 1.5rem 0;
  min-height: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.item >img {
  width: 450px;
  max-width: 100%;
  max-width: 100%;
  height: auto;
}

.item {
  gap: 1rem;
}

.unus {
  background-color: rgb(248, 248, 248);
  order: 2;
}

.duo {
  background-color: rgb(227, 227, 227);
}

.tribus {
  background-color: rgb(227, 227, 227);
  order: 3;
}
 
.notitia {
width: 90%;

}


.notitia > small {
  font-weight: bold;
  padding: 1rem;
}
 
.notitia > h2 {
 font-size: 1.7rem; 
 font-weight: 600;
 color: rgba(0, 0, 0, 0.7);
 padding-bottom: 1rem;
} 

@media (min-width: 640px){
  #vehiculis {
    max-width: 576px;
  }
}

@media (min-width: 768px){
  #vehiculis {
    max-width: 900px;
  }

  .item{
    flex-direction: column;
    min-height: 560px;
  }

  .notitia{
    width: 40%;
  }

  .unus > img {
    order: -1;
  }
}

@media (min-width: 1024px){ 
  #vehiculis {
    max-width: 1280px;
  }

  .vehiculis-arca{
    flex-direction: row;
  }


}

</style>