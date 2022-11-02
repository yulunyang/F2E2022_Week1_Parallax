<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="section3">
  </section>
</template>

<script>
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin } from 'gsap/all'
gsap.registerPlugin(gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin )
import { onMounted, onUnmounted } from 'vue'
export default {
  setup () {
    onMounted(()=> {
    })

    onUnmounted(()=> {
    })

    return {}
  }
}
</script>

<style scoped lang="scss">
.section3 {
  height: 100vh;
}
</style>
