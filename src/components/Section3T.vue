<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="section3 overflow-hidden w-full relative">
    <div class="section3-main z-50 h-screen absolute" :class="{ 'sticky': scrolled }">

      <!-- <div class="section3-label absolute bottom-0">
        <p class="text-4xl xl:text-7xl border-4 px-12 py-8 mb-6 whitespace-nowrap">互動式網頁設計</p>
        <p class="section3-label-note text-2xl whitespace-nowrap opacity-0"> UI、前端接力合作，一同產出完整作品。</p>
      </div> -->
      <div class="section3-label absolute bottom-0">
        <p class="text-4xl xl:text-7xl border-4 px-12 py-8 mb-6 whitespace-nowrap">互動式網頁設計</p>
        <p class="section3-label-note text-2xl whitespace-nowrap opacity-0"> UI、前端接力合作，一同產出完整作品。</p>
      </div>

      <div class="section3-mountain left-0 w-full bottom-0 absolute">
        <div class="m1 w-full left-0 absolute bottom-0"><img src="@/assets/img/L1.png" alt="" class="mx-auto object-contain w-full"></div>
        <div class="m2 w-full right-0 absolute bottom-0"><img src="@/assets/img/L2.png" alt="" class="mx-auto object-contain w-full"></div>
        <div class="m3 w-full left-0 absolute bottom-0"><img src="@/assets/img/L3.png" alt="" class="mx-auto object-contain w-full"></div>
        <div class="m4 left-0 w-full absolute bottom-0"><img src="@/assets/img/L5.png" alt="" class="mx-auto object-contain w-full"></div>
      </div>
    </div>
  </section>

</template>

<script>
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin, Power3, Linear } from 'gsap/all'
gsap.registerPlugin(gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin, Power3, Linear )
import { onMounted, onUnmounted, ref } from 'vue'
export default {
  setup () {
    const scrolled = ref(false)
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
      // var el = document.querySelector(".section3")
      console.log(window.pageYOffset)
      if (window.pageYOffset > 3327 && window.pageYOffset < 7796) {
        scrolled.value = true
        // console.log(true)
      } else {
        scrolled.value = false
      }
    }
    const gsapLabel = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section3",
          start: 'top 100vh',
          end: 'bottom 50%',
          scrub: true
        },
      })

      tl.to('.section3-label', {
        bottom: '0%',
        left: '50%',
        xPercent: '-50',
        yPercent: '-50',
        position: 'fixed',
        color: '#FFC612',
        borderColor: "#FFC612",
        // css: { borderColor:" #FFC612"}
      })
      tl.to('.section3-label', {
        bottom: '4%',
        left: '50%',
        xPercent: '-50',
        yPercent: '-50',
        position: 'fixed',
        color: '#FFC612',
        borderColor: "#FFC612",
        // css: { borderColor:" #FFC612"}
      })
      tl.to('.section3-label', {
        bottom: '40%',
        left: '50%',
        xPercent: '-50',
        yPercent: '-50',
        position: 'fixed',
        color: '#ffffff',
        // borderWidth: 4,
        borderColor: "white",
        // borderStyle: "solid",
        ease: Linear.easeNone,
        className: 'section3-label-show'
      })
      tl.to('.section3-label-note', {
        opacity: 1
      })
    }
    const gsapMoutain1 = () => {
      const t3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section3",
          start: 'top 100vh',
          end: 'bottom 0',
          scrub: true,
          markers: true
        }
      })
      t3.to('.m1', {
        bottom: '-30%',
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
    return { gsapLabel, gsapMoutain1, gsapMoutain2, gsapMoutain3, handleScroll, scrolled }
  }
}
</script>

<style scoped lang="scss">

.section3 {
  height: 400vh;
  background: -webkit-linear-gradient(-180deg, rgb(0, 0, 0), rgb(204, 79, 54), rgb(255, 179, 164));
  background: linear-gradient(-180deg, rgb(0, 0, 0), rgb(204, 79, 54), rgb(255, 179, 164));
  .section3-main {
    transition: .3s;
    top: 0;
    width: 100%;
    // position: absolute;
    left: 0%;
    // bottom: 0px;
    // position: fixed;
    .section3-label {
      left: 50%;
      transform: translateX(-50%);
      // transition: .3s;
      p {
        border-color: #FFC612;
        color: #FFC612;
      }
    }
    // .section3-label-show {
    //   p {
    //     border-color: white !important;
    //     transition: .3s;
    //   }
    // }
  .section3-mountain {
    transition: 0.3s;
    // bottom: -100%;
    max-width: 100vw;
    width: 100%;
    .m1 {
      // position: fixed;
    }
    .m2 {
      max-width: 1200px;
      // position: fixed;
    }
    .m3 {
      max-width: 1600px;
      // position: fixed;
    }
  }
}
  .sticky {
    position: fixed;
    width: 100%;
  }
}
</style>
