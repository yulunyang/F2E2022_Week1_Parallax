<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="section3 overflow-hidden">
    <div class="relative w-full h-full">
      <div class="section3_bg absolute w-full h-full top-0 left-0"></div>
      <div class="section3-label absolute text-white">
        <p class="text-4xl xl:text-7xl border-2 px-12 py-8 mb-6 whitespace-nowrap">互動式網頁設計</p>
        <p class="text-2xl whitespace-nowrap"> UI、前端接力合作，一同產出完整作品。</p>
      </div>
      <div class="absolute bottom-0 m1"><img src="@/assets/img/L1.png" alt="" class="mx-auto"></div>
      <div class="absolute bottom-0 right-0 m2"><img src="@/assets/img/L2.png" alt="" class="mx-auto"></div>
      <div class="absolute bottom-0 left-0 m3"><img src="@/assets/img/L3.png" alt="" class="mx-auto"></div>
      <div class="absolute bottom-0 left-0 m4"><img src="@/assets/img/L5.png" alt="" class="mx-auto"></div>
    </div>
  </section>
  <!-- <main class="relative overflow-hidden">
    <section class="color" data-color="black">Section 1- background color for main red</section>
    <section class="color" data-color="#CC4F36">Section 2- background color for main blue</section>
    <section class="color" data-color="#FFB3A4">Section 3- background color for main aqua</section>
  </main> -->
  <!-- <div class="relative">
    <section class="one h-screen"></section>
    <section class="two h-screen"></section>
    <section class="three h-screen"></section>

    <div class="absolute bottom-0"><img src="@/assets/img/L1.png" alt="" class="mx-auto"></div>
    <div class="absolute bottom-0 right-0"><img src="@/assets/img/L2.png" alt="" class="mx-auto"></div>
    <div class="absolute bottom-0 left-0"><img src="@/assets/img/L3.png" alt="" class="mx-auto"></div>
    <div class="absolute bottom-0 left-0"><img src="@/assets/img/L5.png" alt="" class="mx-auto"></div>
  </div> -->
</template>

<script>
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin, Power3 } from 'gsap/all'
gsap.registerPlugin(gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin, Power3 )
import { onMounted, onUnmounted } from 'vue'
export default {
  setup () {
    onMounted(()=> {
      gsapLabel()
      gsapBG()
      gsapMoutain()
    })

    onUnmounted(()=> {
    })

    const gsapLabel = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section3-label",
          // markers: true,
          start: 'top 35%',
          end: 'top 1%',
          scrub: true,
        },
      })

      tl.to('.section3-label', {
        top: '100%',
        left: '50%',
        xPercent: '-50',
        // duration: 10,
        position: 'absolute',
        color: '#FFC612'
      }).to('.section3-label', {
        top: '30%',
        yPercent: '-100',
        // duration: 20,
        position: 'absolute',
        color: '#ffffff'
      })
    }
    const gsapBG = () => {
      const t2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section3_bg",
          markers: true,
          start: 'top 0%',
          end: 'top 10%',
          scrub: true
        }
      })
      t2.to('.section3_bg', { backgroundColor: '#FFB3A4' })
    }
    const gsapMoutain = () => {
      // const t3 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: ".m1",
      //     markers: true,
      //     start: 'top 0%',
      //     end: 'top 10%',
      //     scrub: true
      //   }
      // })
      // t3.to('.m1', { backgroundColor: '#FFB3A4' })
    }
    return {gsapLabel, gsapBG, gsapMoutain}
  }
}
</script>

<style scoped lang="scss">
.section3 {
  height: 140vh;
  .section3-label {
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
      @media (max-width: 1440px) {
        top: 20%;
      }
      @media (max-width: 768px) {
        top: 20%;
      }
  }
}
.section3_bg {
  background-color: black;
}

</style>
