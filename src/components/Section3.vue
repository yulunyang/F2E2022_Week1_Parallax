<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="section3 overflow-hidden">
    <div class="relative w-full h-full">

      <div class="section3_bg absolute w-full h-full top-0 left-0"></div>

      <div class="section3-label absolute">
        <p class="text-4xl xl:text-7xl border-2 px-12 py-8 mb-6 whitespace-nowrap">互動式網頁設計</p>
        <p class="text-2xl whitespace-nowrap"> UI、前端接力合作，一同產出完整作品。</p>
      </div>

      <div class="absolute bottom-0 m1 w-full left-0"><img src="@/assets/img/L1.png" alt="" class="mx-auto object-contain"></div>
      <div class="absolute bottom-0 right-0 m2"><img src="@/assets/img/L2.png" alt="" class="mx-auto object-contain"></div>
      <div class="absolute bottom-0 left-0 m3"><img src="@/assets/img/L3.png" alt="" class="mx-auto object-contain"></div>
      <div class="absolute bottom-0 left-0 m4 w-full"><img src="@/assets/img/L5.png" alt="" class="mx-auto object-contain w-full"></div>
      <!-- <img src="@/assets/img/L1.png" alt="" class="mx-auto object-contain m1 absolute bottom-0 w-full left-0">
      <img src="@/assets/img/L2.png" alt="" class="mx-auto object-contain m2 absolute bottom-0 right-0 w-full">
      <img src="@/assets/img/L3.png" alt="" class="mx-auto object-contain m3 absolute bottom-0 w-full left-0">
      <img src="@/assets/img/L5.png" alt="" class="mx-auto object-contain m4 absolute bottom-0 w-full left-0"> -->
    </div>
  </section>
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
      gsapMoutain1()
      gsapMoutain2()
      gsapMoutain3()
    })

    onUnmounted(()=> {
    })

    const gsapLabel = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section3",
          start: 'top top',
          end: '1000px',
          scrub: true,
        },
      })

      tl.to('.section3-label', {
        top: '20%',
        left: '50%',
        yPercent: '0',
        // duration: 10,
        position: 'absolute',
        color: '#FFC612',
        className: 'section3-label-show'
      })
    }
    const gsapBG = () => {
      const t2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section3",
          start: 'top 0%',
          end: 'top 10%',
          scrub: true
        }
      })
      t2.to('.section3_bg', { backgroundColor: '#CC4F36' }).to('.section3_bg', { backgroundColor: '#FFB3A4' })
    }
    const gsapMoutain1 = () => {
      const t3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section3",
          start: 'top top',
          end: '1000px',
          scrub: true
        }
      })
      t3.to('.m1', {
        top: '100%',
        yPercent: '-100',
        duration: 1,
        position: 'absolute',
      })
    }
    const gsapMoutain2 = () => {
      const t4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section3",
          start: 'top top',
          end: '1000px',
          scrub: true
        }
      })
      t4.to('.m2', {
        top: '100%',
        yPercent: '200',
        duration: 2,
        position: 'absolute',
      })
    }
    const gsapMoutain3 = () => {
      const t5 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section3",
          start: 'top top',
          end: '1000px',
          scrub: true
        }
      })
      t5.to('.m3', {
        top: '100%',
        yPercent: '200',
        duration: 2,
        position: 'absolute',
      })
    }
    return {gsapLabel, gsapBG, gsapMoutain1, gsapMoutain2, gsapMoutain3}
  }
}
</script>

<style scoped lang="scss">
.section3 {
  height: 140vh;
  .section3-label {
    bottom: 0%;
    // top: 50%;
    left: 50%;
    transform: translateX(-50%);
    // z-index: 99;
      p {
        color: #FFC612;
        border-color: #FFC612;
      }
      // @media (max-width: 1440px) {
      //   top: 20%;
      // }
      // @media (max-width: 768px) {
      //   top: 20%;
      // }
  }
  .section3-label-show {
    p {
      color: white !important;
      border-color: white !important;
    }
  }
}
.section3_bg {
  background-color: black;
}

</style>
