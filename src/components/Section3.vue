<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="section3 overflow-hidden w-full relative">
    <div class="section3-main h-screen absolute" :class="{ 'sticky': scrolled, 'opacity-0 invisible': isHide }">

      <p class="section3-label text-4xl xl:text-7xl border-4 px-12 py-8 whitespace-nowrap absolute bottom-0">互動式網頁設計</p>
      <p class="section3-label-note text-base xl:text-2xl whitespace-nowrap absolute bottom-0 text-white"> UI、前端接力合作，一同產出完整作品。</p>

      <div class="section3-mountain left-0 w-full bottom-0 absolute">
        <div class="m1 w-full left-0 absolute bottom-0"><img src="@/assets/img/L1.png" alt="" class="mx-auto object-contain"></div>
        <div class="m2 right-0 absolute bottom-0"><img src="@/assets/img/L2.png" alt="" class="mx-auto object-contain"></div>
        <div class="m3 left-0 absolute bottom-0"><img src="@/assets/img/L3.png" alt="" class="mx-auto object-contain"></div>
        <div class="m4 w-full left-0 absolute bottom-0"><img src="@/assets/img/L5.png" alt="" class="mx-auto object-contain"></div>
      </div>
    </div>
  </section>

</template>

<script>
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin, Power3, Linear, Cubic } from 'gsap/all'
gsap.registerPlugin(gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin, Power3, Linear, Cubic )
import { onMounted, onUnmounted, ref } from 'vue'
export default {
  setup () {
    const scrolled = ref(false)
    const isHide = ref(false)
    onMounted(()=> {
      window.addEventListener("scroll", handleScroll)
      gsapLabel()
      gsapMoutain1()
      gsapMoutain2()
      gsapMoutain3()
    })
    onUnmounted(()=> {
      window.removeEventListener("scroll", handleScroll)
    })
    const handleScroll = () => {
      if (window.innerWidth >= 1440) {
        if (window.pageYOffset > 3400 && window.pageYOffset < 7796) {
          scrolled.value = true
        } else {
          scrolled.value = false
        }
        if (window.pageYOffset > 6800) {
          isHide.value = true
        } else {
          isHide.value = false
        }
      } else {
        if (window.pageYOffset > 3512 && window.pageYOffset < 6800) {
          scrolled.value = true
        } else {
          scrolled.value = false
        }
        if (window.pageYOffset > 6800) {
          isHide.value = true
        } else {
          isHide.value = false
        }
      }
    }
    const gsapLabel = () => {
      let fontSize
      if (window.innerWidth >=1440) {
        fontSize = '4.5rem'
      } else {
        fontSize = '2.5rem'
      }
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section3",
          start: 'top 0%',
          end: 'bottom 90%',
          scrub: true
        },
      })
        tl.to('.section3-label', {
          bottom: '30%',
          left: '50%',
          xPercent: '-50',
          yPercent: '-50',
          position: 'fixed',
          color: '#FFC612',
          borderColor: "#FFC612",
          fontSize: fontSize,
          borderWidth: '4px',
          padding: '2rem 3rem'
        })
        tl.to('.section3-label', {
          bottom: '40%',
          left: '50%',
          xPercent: '-50',
          position: 'fixed',
          color: '#ffffff',
          borderColor: "white",
          fontSize: fontSize,
          ease: Cubic.out
        })

      tl.to('.section3-label-note', {
        opacity: 0,
        bottom: '40%',
        left: '50%',
        // xPercent: '-50',
        // yPercent: '-50',
        position: 'fixed'
      })
      tl.to('.section3-label-note', {
        opacity: 1,
        bottom: '40%',
        left: '50%',
        // xPercent: '-50',
        // yPercent: '-50',
        position: 'fixed'
      })
    }
    const gsapMoutain1 = () => {
      let bottom
      if (window.innerWidth >=1440) {
        bottom = '-30%'
      } else {
        bottom = '-10%'
      }
      const t3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section3",
          start: 'top 100vh',
          end: 'bottom 0',
          scrub: true
        }
      })
      t3.to('.m1', {
        bottom: bottom,
        duration: 1,
        position: 'fixed',
      })
    }
    const gsapMoutain2 = () => {
      const t4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section3",
          start: 'top 100vh',
          end: 'bottom 0',
          scrub: true
        }
      })
      t4.to('.m2', {
        bottom: '-60%',
        position: 'fixed',
      })
    }
    const gsapMoutain3 = () => {
      const t5 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section3",
          start: 'top 100vh',
          end: 'bottom 0',
          scrub: true
        }
      })
      t5.to('.m3', {
        bottom: '-60%',
        position: 'fixed',
      })
    }
    return { gsapLabel, gsapMoutain1, gsapMoutain2, gsapMoutain3, handleScroll, scrolled, isHide }
  }
}
</script>

<style scoped lang="scss">

.section3 {
  width: 100vw;
  height: 400vh;
  background: -webkit-linear-gradient(-180deg, rgb(0, 0, 0), rgb(204, 79, 54), rgb(255, 179, 164));
  background: linear-gradient(-180deg, rgb(0, 0, 0), rgb(204, 79, 54), rgb(255, 179, 164));
  .section3-main {
    transition: .3s;
    top: 0;
    width: 100%;
    left: 0%;
    .section3-label {
      left: 50%;
      transform: translateX(-50%);
      border-color: #FFC612;
      color: #FFC612;
    }
    .section3-label-note {
      opacity: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  .section3-mountain {
    max-width: 1920px;
    width: 100%;
    .m1 {
      max-width: 1920px;
    }
    .m2 {
      max-width: 1920px;
        @media (max-width: 1448px) {
          max-width: 1440px;
        }
        @media (max-width: 768px) {
          max-width: 768px;
          width: 80%;
        }
      img {
        max-width: 1200px;
        @media (max-width: 1441px) {
          max-width: 1440px;
        }
        @media (max-width: 769px) {
          max-width: 768px;
        }
      }
    }
    .m3 {
        max-width: 1920px;
    }
  }
}
  .sticky {
    position: fixed;
    width: 100vw;
  }
}
</style>
