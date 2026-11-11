
import { characters, type Character } from "@/paginas/Simpsons/data";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useFavoritosStore = defineStore('favoritos', () => {

    const favoritos = ref<Character[]>([
        characters.find(char => char.id === 0)!, //Abe Simpson
        characters.find(char => char.id === 4)!, //Homer Simpson
        characters.find(char => char.id === 6)!, //Lisa Simpson
    
      characters.find(char => char.id === 1)!, //Bart Simpson
      characters.find(char => char.id === 2)!, //Maggie Simpson
    
    ])

    return{
        favoritos,
        totalFavoritos: computed(() => favoritos.value.length),


    }
});

    