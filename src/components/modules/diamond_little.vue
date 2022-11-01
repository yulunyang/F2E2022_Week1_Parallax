<template>
  <div class="h-full w-full">
    <img src="@/assets/img/diamondS.png" alt="" class="object-contain block mx-auto absolute diamondS1">
    <img src="@/assets/img/diamondS.png" alt="" class="object-contain block mx-auto absolute diamondS2">
    <img src="@/assets/img/diamondS.png" alt="" class="object-contain block mx-auto absolute diamondS3">
    <img src="@/assets/img/diamondS.png" alt="" class="object-contain block mx-auto absolute diamondS4">
    <img src="@/assets/img/diamondS.png" alt="" class="object-contain block mx-auto absolute diamondS5">
    <img src="@/assets/img/diamondS.png" alt="" class="object-contain block mx-auto absolute diamondS6">
    <img src="@/assets/img/diamondS.png" alt="" class="object-contain block mx-auto absolute diamondS7">
    <img src="@/assets/img/diamondS.png" alt="" class="object-contain block mx-auto absolute diamondS8">
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
      gsap.fromTo('.diamondS1', { x: -200 }, { x: 2200, duration: 5, repeat: -1, delay: 8 })
      gsap.fromTo('.diamondS4', { x: -200 }, { x: 2200, duration: 5, repeat: -1, delay: 12 })
      gsap.fromTo('.diamondS2', { x: -200 }, { x: 2200, duration: 5, repeat: -1, delay: 14 })
      gsap.fromTo('.diamondS3', { x: -200 }, { x: 2200, duration: 5, repeat: -1, delay: 1 })
      gsap.fromTo('.diamondS5', { x: -200 }, { x: 2200, duration: 5, repeat: -1, delay: 4 })
      gsap.fromTo('.diamondS6', { x: -200 }, { x: 2200, duration: 5, repeat: -1, delay: 2 })
      gsap.fromTo('.diamondS7', { x: -200 }, { x: 2200, duration: 5, repeat: -1, delay: 10 })
      gsap.fromTo('.diamondS8', { x: -200 }, { x: 2200, duration: 5, repeat: -1, delay: 5 })
    }

    return {
      setGSAP
    }
  }
}
</script>

<style scoped lang="scss">
.diamondS1 {
  top: 6%;
}
.diamondS2 {
  top: 10%;
}
.diamondS3 {
  top: 50%;
}
.diamondS4 {
  top: 55%;
}
.diamondS5 {
  top: 80%;
}
.diamondS6 {
  top: 90%;
}
</style>
