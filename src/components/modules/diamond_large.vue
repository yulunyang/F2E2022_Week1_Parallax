<template>
  <div class="h-full w-full">
    <img src="@/assets/img/diamondL.png" alt="" class="object-contain block mx-auto absolute diamondL1">
    <img src="@/assets/img/diamondL.png" alt="" class="object-contain block mx-auto absolute diamondL2">
    <img src="@/assets/img/diamondL.png" alt="" class="object-contain block mx-auto absolute diamondL3">
    <img src="@/assets/img/diamondL.png" alt="" class="object-contain block mx-auto absolute diamondL4">
  </div>
</template>

<script>
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin } from 'gsap/all'
gsap.registerPlugin(gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin )
import { onMounted, onUnmounted } from 'vue'
export default {
  setup () {
    onMounted(() => {
      setGSAP()
    })
    onUnmounted(() => {
    })
    const setGSAP = () => {
      gsap.fromTo('.diamondL1', { x: -200 }, { x: 2600, duration: 10, repeat: -1 })
      gsap.fromTo('.diamondL4', { x: -200 }, { x: 2600, duration: 10, repeat: -1, delay: 1 })
      gsap.fromTo('.diamondL2', { x: -200 }, { x: 2600, duration: 10, repeat: -1, delay: 2 })
      gsap.fromTo('.diamondL3', { x: -200 }, { x: 2600, duration: 10, repeat: -1, delay: 3 })
    }

    return {
      setGSAP
    }
  }
}
</script>

<style scoped lang="scss">
.diamondL1 {
  top: 6%;
}
.diamondL2 {
  top: 50%;
}
.diamondL3 {
  top: 80%;
}
.diamondL4 {
  top: 90%;
}
</style>
