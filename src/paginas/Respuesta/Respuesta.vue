<script setup lang="ts">
import { getYesNo, type YesNoTipus } from '@/actions/getYesNo.actio';
import { Loader2 } from '@lucide/vue';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const quaestio = history.state.quaestio as string || 'No hay pregunta.';

const router = useRouter();

const YesNo = ref<YesNoTipus>({
  answer: '',
  image: ''
});

const estLoading = ref<boolean>(true)

onMounted(async () => {
  try {
    const response = await getYesNo()
    YesNo.value = response;
    estLoading.value = false;
  } catch (error) {
    console.log(error)
    estLoading.value = false
  }
})
</script>

<template>
  <div class="text-center">
    <div v-if="estLoading">
      <div>
        <img class="h-screen w-screen absolute top-0 left-0 object-cover" src="/imagines/github.jpg" alt="" />
        <div class="absolute w-screen h-screen top-0 left-0 bg-black opacity-40"></div>

        <div class="relative mt-45">
          <p class="text-4xl text-white font-medium mt-14">{{ quaestio }}</p>
          <p class="text-6xl text-white font-bold mt-60"> Sí </p>
        </div>

        <div class="flex justify-center items-center mt-60">
          <Loader2 class="w-18 h-18 text-white animate-spin" />
        </div>
      </div>
    </div>

    <div v-else>
      <img v-if="YesNo.image === ''" class="h-screen w-screen absolute top-0 left-0 object-cover" />
      <img v-else class="h-screen w-screen absolute top-0 left-0 object-cover" :src="YesNo.image" />

      <div class="relative mt-45">
        <p class="text-4xl text-white font-medium mt-14">{{ quaestio }}</p>
        <p class="text-7xl text-white font-bold mt-60"> 
		{{ YesNo.answer === 'yes' ? 'Sí' : YesNo.answer === 'yes' ? 'Sí' : 'No' }}	

			<button
			@click="router.push('/')"
			class="fixed top-5 right-5 w-12 h-12 inline-flex items-center justify-center bg-gray-700 rounded-lg border border-gray-300"
			>
			<span class="text-gray-300 text-xl">→</span>
			</button>
		</p>
      </div>
    </div>
  </div>
</template>
