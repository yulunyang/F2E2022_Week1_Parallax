<template>
  <div class="h-full w-full">
    <img src="@/assets/img/diamondM.png" alt="" class="object-contain block mx-auto absolute diamondM1">
    <img src="@/assets/img/diamondM.png" alt="" class="object-contain block mx-auto absolute diamondM2">
    <img src="@/assets/img/diamondM.png" alt="" class="object-contain block mx-auto absolute diamondM3">
    <img src="@/assets/img/diamondM.png" alt="" class="object-contain block mx-auto absolute diamondM4">
    <img src="@/assets/img/diamondM.png" alt="" class="object-contain block mx-auto absolute diamondM5">
    <img src="@/assets/img/diamondM.png" alt="" class="object-contain block mx-auto absolute diamondM6">
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
      gsap.fromTo('.diamondM1', { x: -200 }, { x: 2200, duration: 5, repeat: -1, delay: 6 })
      gsap.fromTo('.diamondM4', { x: -200 }, { x: 2200, duration: 5, repeat: -1, delay: 10 })
      gsap.fromTo('.diamondM2', { x: -200 }, { x: 2200, duration: 5, repeat: -1, delay: 2 })
      gsap.fromTo('.diamondM3', { x: -200 }, { x: 2200, duration: 5, repeat: -1, delay: 6 })
      gsap.fromTo('.diamondM5', { x: -200 }, { x: 2200, duration: 5, repeat: -1, delay: 3 })
      gsap.fromTo('.diamondM6', { x: -200 }, { x: 2200, duration: 5, repeat: -1, delay: 14 })
    }

    return {
      setGSAP
    }
  }
}
</script>

<style scoped lang="scss">
.diamondM1 {
  top: 6%;
}
.diamondM2 {
  top: 10%;
}
.diamondM3 {
  top: 50%;
}
.diamondM4 {
  top: 55%;
}
.diamondM5 {
  top: 80%;
}
.diamondM6 {
  top: 90%;
}
</style>
