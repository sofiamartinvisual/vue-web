

<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

interface Props {
  photos: string[]
  basePath: string
  autoplayDelay?: number
  loop?: boolean
  dragfree?: boolean
}

const props = withDefaults(defineProps<Props>(), {
   autoplayDelay: 2000,
  loop: true,
  dragfree: true
})

const handleImageError = (event: Event) => {
  const image = event.target as HTMLImageElement

  if (!image.dataset.fallback) {
    image.dataset.fallback = 'true'
    image.src = '/imagines/batman/batman.jpg'
  }
}

</script>

<template>
  <Carousel 
  class="w-[92vw] max-w-5xl bg-gray-900"
     :opts="{
        dragFree: props.dragfree,
        loop: props.loop
            }" 
      :plugins="[Autoplay({
      delay: props.autoplayDelay,
    })]"
  >
    <CarouselContent>
      <CarouselItem v-for="(photo, index) in props.photos" :key="index">
        <div class="p-1">
          <Card class="bg-gray-900 border-none">
            <CardContent class="flex aspect-6/4 items-center justify-center p-3">
             <img 
             :src="`${props.basePath}/${ photo }.jpg`"
             class="w-full h-full object-contain"
             :alt="`Imagen ${index + 1} de Batman`"
             @error="handleImageError"
             />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious class="hidden md:flex bg-gray-900 text-white " />
    <CarouselNext class="hidden md:flex bg-gray-900 text-white " />
  </Carousel>
</template>


<style scoped></style>
