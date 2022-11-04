<template>
  <div class="loading w-full h-screen fixed left-0 top-0 bg-black">
    <div class="loading-text absolute text-white text-4xl">
      <p class="typing-loading mb-6"></p>
      <img src="@/assets/img/car.gif" class="car" />
    </div>
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
      gsap.to(".typing-loading", {
        text: "Loading...",
        duration: 1.5,
        scrollTrigger: {
          trigger: ".typing-loading",
          toggleActions: "play pause resume reset",
        },
        repeat: -1
      })
    }

    return {
      setGSAP
    }
  }
}
</script>

<style scoped lang="scss">
.loading {
  .loading-text {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .typing-loading {
      min-height: 32px;
    }
    .car {
      width: 164px;
      height: 66px;
    }
  }
}
</style>
