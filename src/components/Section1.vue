<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="Section1 py-4 px-4 overflow-hidden">
    <div class="Section1-content proj-container mx-auto">
      <div class="flex justify-between text-white text-2xl">
        <div>I-    00</div>
        <div>HI- 99999</div>
        <div>Hex School</div>
      </div>
      <div class="py-20">
        <img src="@/assets/img/banner_LOGO1.png" alt="" class="object-contain block mx-auto">
      </div>
      <div class="flex justify-center flex-col items-center mb-16">
        <div>
          <div class="flex items-center mb-4 cursor-pointer" @click="isLogin = true">
            <div class="mr-5">
              <img src="@/assets/img/hammer.png" alt="" class="hammer object-contain block mx-auto opacity-0" :class="{ 'opacity-100': isLogin }">
            </div>
            <div class="text-white text-4xl" :class="{ 'proj-text-primary': isLogin }" >1  LOG IN</div>
          </div>
          <div class="flex items-center cursor-pointer" @click="isLogin = false">
            <div class="mr-5">
              <img src="@/assets/img/hammer.png" alt="" class="hammer object-contain block mx-auto opacity-0" :class="{ 'opacity-100': !isLogin }">
            </div>
            <div class="text-white text-4xl" :class="{ 'proj-text-primary': !isLogin }">2  SIGN UP</div>
          </div>
        </div>
      </div>
      <div class="text-white text-3xl">
        <p>Interactive And Responsive Web Design.</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin } from 'gsap/all'
gsap.registerPlugin(gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin )
import { onMounted, onUnmounted, ref } from 'vue'
export default {
  setup () {
    const isLogin = ref(true)
    onMounted(()=> {
      setGSAP()
    })

    onUnmounted(()=> {
    })
    const setGSAP = () => {
      gsap.from(".Section1-content", { y: 1000, duration: 5, delay: 1 })
    }
    return {
      setGSAP, isLogin
    }
  }
}
</script>

<style scoped lang="scss">
.Section1 {
  min-height: calc(100vh - 56px);
}
</style>
