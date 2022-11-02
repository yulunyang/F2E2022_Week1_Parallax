<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="Section1 py-6 px-4 overflow-hidden">
    <div class="Section1-content proj-container mx-auto">
      <div class="flex justify-between text-white text-2xl lg:text-4xl">
        <div>I-    00</div>
        <div>HI- 99999</div>
        <div>Hex School</div>
      </div>
      <div class="py-20 px-16 xl:px-0">
        <img src="@/assets/img/banner_LOGO1.png" alt="" class="object-contain block mx-auto">
      </div>
      <div class="flex justify-center flex-col items-center mb-36">
        <div>
          <div class="flex items-center mb-4 cursor-pointer" @mouseover="mouseover(true)">
            <div class="mr-5" >
              <img src="@/assets/img/hammer.png" alt="" class="hammer object-contain block mx-auto opacity-0" :class="{ 'opacity-100': isLogin }">
            </div>
            <a href="https://2022.thef2e.com/login" class="text-4xl" :class="{ 'text-white': !isLogin, 'proj-text-primary ': isLogin }" >1  LOG IN</a>
          </div>
          <div class="flex items-center cursor-pointer" @mouseover="mouseover(false)">
            <div class="mr-5">
              <img src="@/assets/img/hammer.png" alt="" class="hammer object-contain block mx-auto opacity-0" :class="{ 'opacity-100': !isLogin }">
            </div>
            <a href="https://2022.thef2e.com/signup" class="text-4xl" :class="{ 'text-white': isLogin, 'proj-text-primary': !isLogin }">2  SIGN UP</a>
          </div>
        </div>
      </div>
      <div class="text-white text-3xl lg:text-4xl">
        <p>INTERACTIVE AND RESPONSIVE WEB DESIGN.</p>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin } from 'gsap/all'
gsap.registerPlugin(gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin )
import { onMounted, onUnmounted, ref, onBeforeMount } from 'vue'
export default {
  setup () {
    const isLogin = ref(true)
    onBeforeMount(() => {
      window.addEventListener('keydown', handleKeyDown)
    })
    onMounted(()=> {
      setGSAP()
    })

    onUnmounted(()=> {
    })
    const setGSAP = () => {
      gsap.from(".Section1-content", { y: 1000, duration: 5, delay: 1 })
      // gsap.to(".neon-effect", { color: "rgba(255,0,0,0.5)", duration: 1, repeat: -1, repeatDelay: 7 })
    }

    const handleKeyDown = (event) => {
      event.preventDefault()
      if (event.keyCode === 38 || event.keyCode === 40) {
        isLogin.value = !isLogin.value
      } else if (event.keyCode === 13) {
        let url = isLogin.value ? 'https://2022.thef2e.com/login' : 'https://2022.thef2e.com/signup'
        window.open(url, '_blank')
      }
    }
    const mouseover = (val) => {
      isLogin.value = val
    }
    return {
      setGSAP, isLogin, handleKeyDown, mouseover
    }
  }
}
</script>

<style scoped lang="scss">
.Section1 {
  min-height: calc(100vh - 56px);
}

body{background:#232323;}

.centered{
  position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
}

.neon-effect {
  color:#fff;
  letter-spacing:2px;
}


.neon-effect {
  animation: neon-shine 8s infinite;
  animation-delay: 5s;
}

// .neon-effect:nth-of-type(3){
//   text-shadow:
//     0 0 5px rgba(255, 65, 65, 1),
//     0 0 10px rgba(255, 65, 65, 1),
//     0 0 20px rgba(255, 65, 65, 1),
//     0 0 40px rgba(255, 65, 65, 1);
//   animation:neon-shine 2s linear infinite;
// }
@keyframes neon-shine{

    0%{
      // color: white;
      color: #B82A06;
    }

    80% {
      color: #B82A06;
    }
    90% {
      color: white;
    }

    100%{
      color: white;
    }

}
</style>
