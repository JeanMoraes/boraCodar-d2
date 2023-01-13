<template>
  <div class="relative">
    <div class="absolute right-0 top-0 mr-8">
      <button @click="handleAnimation()">
        <icon-rotate-360 v-if="!isActive" />
        <icon-close v-else />
      </button>
    </div>
    <img v-if="!isActive" :src="`${urlImage}.jpg`" class="productImg" />
    <img v-else :src="`${urlImage}-animation.gif`" class="productImg" />
  </div>
</template>

<script>
import IconRotate360 from "./icons/Icon360.vue";
import IconClose from "./icons/IconClose.vue";

export default {
  name: "DynamicImage",
  components: {
    IconRotate360,
    IconClose,
  },
  props: {
    urlImage: String,
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    handleAnimation() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
.productImg {
  @apply w-[450px];
}
</style>
