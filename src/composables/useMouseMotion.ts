import { ref } from "vue";


interface Coordinatas {
  x: number;
  y: number;
}


export const useMouseMotion = () => {

    const mousePosition = ref<Coordinatas>({ x: 0, y: 0 });

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

    return {
    mousePosition,
    cumMouseMove,
    cumMouseLeave
    }
}