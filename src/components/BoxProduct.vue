<template>
  <main
    class="w-screen h-screen flex flex-col-reverse items-center justify-center md:flex-row"
  >
    <div>
      <dynamic-image urlImage="/images/margo2_rose" />
    </div>
    <div>
      <div class="flex flex-col gap-3 mb-4">
        <span class="font-main text-primary font-light text-[0.625rem]"
          >CÓDIGO: 42404</span
        >
        <h3
          class="font-highlight text-primary font-semibold text-[2rem] leading-[100%]"
        >
          Sofá Margot II - Rosé
        </h3>
        <p class="font-main text-primary text-base">R$ 4.000</p>
      </div>
      <button
        class="font-main text-primary text-xs p-2 rounded-full border border-[0.5px] border-primary"
      >
        ADICIONAR À CESTA
      </button>
    </div>
  </main>
</template>

<script>
import DynamicImage from "./DynamicImage.vue";

export default {
  components: {
    DynamicImage,
  },
};
</script>
