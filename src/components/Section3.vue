<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="section3 overflow-hidden">
    <div class="section3-main">

      <div class="section3-label absolute opacity-0 hidden">
        <p class="text-4xl xl:text-7xl border-2 px-12 py-8 mb-6 whitespace-nowrap">互動式網頁設計</p>
        <p class="text-2xl whitespace-nowrap"> UI、前端接力合作，一同產出完整作品。</p>
      </div>

      <div class="section3-mountain absolute left-0 w-full opacity-0 hidden">
        <div class="absolute bottom-0 m1 w-full left-0"><img src="@/assets/img/L1.png" alt="" class="mx-auto object-contain"></div>
        <div class="absolute bottom-0 right-0 m2"><img src="@/assets/img/L2.png" alt="" class="mx-auto object-contain"></div>
        <div class="absolute bottom-0 left-0 m3"><img src="@/assets/img/L3.png" alt="" class="mx-auto object-contain"></div>
        <div class="absolute bottom-0 left-0 m4 w-full"><img src="@/assets/img/L5.png" alt="" class="mx-auto object-contain w-full"></div>
      </div>

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
      gsapShow()
      gsapMoutain1()
      gsapMoutain2()
      gsapMoutain3()
      gsapMoutain4()
    })

    onUnmounted(()=> {
    })
    const gsapShow = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          markers: true,
          trigger: ".section3",
          start: 'top 0%',
          end: 'top 1%',
          scrub: true,
          duration: 10,
          toggleActions: "play none reverse none"
        },
      })
      tl.to('.section3-mountain', {
        opacity: 1,
        display: 'block',
        bottom: '0%',
        duration: 1,
        position: 'fixed',
      })
      tl.to('.section3-label', {
        opacity: 1,
        display: 'block'
      })

      const t2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section3",
          start: 'bottom',
          end: 'bottom 1%',
          scrub: true,
          duration: 10,
          toggleActions: "play none reverse none"
        },
      })

      t2.to('.section3-mountain', {
        opacity: 0,
        display: 'none'
      })
      t2.to('.section3-label', {
        opacity: 0,
        display: 'none'
      })
    }
    const gsapLabel = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section3",
          start: 'top 70%',
          end: 'bottom 0%',
          scrub: true,
          duration: 10
        },
      })

      tl.to('.section3-label', {
        bottom: '0%',
        left: '50%',
        xPercent: '-50',
        yPercent: '-50',
        // duration: 10,
        position: 'fixed',
        color: '#FFC612'
        // className: 'section3-label-show'
      })
      tl.to('.section3-label', {
        bottom: '30%',
        left: '50%',
        xPercent: '-50',
        yPercent: '-50',
        // duration: 10,
        position: 'fixed',
        color: '#FFC612'
      })
      tl.to('.section3-label', {
        bottom: '40%',
        left: '50%',
        xPercent: '-50',
        yPercent: '-50',
        // duration: 10,
        position: 'fixed',
        color: '#FFC612',
        className: 'section3-label-show'
      })
    }
    const gsapMoutain1 = () => {
      const t3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section3",
          start: 'top 70%',
          end: '1000px',
          scrub: true
        }
      })
      t3.to('.m1', {
        bottom: '-20%',
        duration: 1,
        position: 'fixed',
      })
    }
    const gsapMoutain2 = () => {
      const t4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section3",
          start: 'top 65%',
          end: '1000px',
          scrub: true
        }
      })
      t4.to('.m2', {
        bottom: '-70%',
        // yPercent: '200',
        duration: 3,
        position: 'fixed',
      })
    }
    const gsapMoutain3 = () => {
      const t5 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section3",
          start: 'top 65%',
          end: '1000px',
          scrub: true
        }
      })
      t5.to('.m3', {
        bottom: '-70%',
        duration: 3,
        position: 'fixed',
      })
    }
    const gsapMoutain4 = () => {
      const t6 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section3",
          start: 'top top',
          end: '1000px',
          scrub: true
        }
      })
      t6.to('.m4', {
        bottom: '0%',
        duration: 2,
        position: 'fixed',
      })
    }
    return { gsapShow, gsapLabel, gsapMoutain1, gsapMoutain2, gsapMoutain3 }
  }
}
</script>

<style scoped lang="scss">
.section3-main {
  width: 100%;
  position: absolute;
  left: 0%;
  bottom: 0px;
  position: fixed;
}
.section3 {
  height: 400vh;
  background: -webkit-linear-gradient(-180deg, rgb(0, 0, 0), rgb(204, 79, 54), rgb(255, 179, 164));
  background: linear-gradient(-180deg, rgb(0, 0, 0), rgb(204, 79, 54), rgb(255, 179, 164));
  .section3-label {
    p {
      color: #FFC612;
      border-color: #FFC612;
    }
  }
  .section3-label-show {
    p {
      color: white !important;
      border-color: white !important;
    }
  }
  .section3-mountain {
    transition: 0.3s;
    bottom: -100%;
  }
}
</style>
