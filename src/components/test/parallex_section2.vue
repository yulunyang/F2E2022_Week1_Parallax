<template>
  <section class="section3">
    <div class="gate gate-left gate-left-1 z-20">
      <i class="fa-solid fa-house"></i>
    </div>
    <div class="gate gate-right gate-right-1 z-20">
      <h2>WEEK 1</h2>
    </div>
    <div class="gate gate-left gate-left-2 z-10">
      <i class="fa-solid fa-cloud"></i>
    </div>
    <div class="gate gate-right gate-right-2 z-10">
      <h2>WEEK 2</h2>
    </div>
    <div class="gate gate-left gate-left-3 z-0">
      <i class="fa-solid fa-location-dot"></i>
    </div>
    <div class="gate gate-right gate-right-3 z-0">
      <h2>WEEK 3</h2>
    </div>
  </section>
</template>
<script>
// @ is an alias to /src
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin } from 'gsap/all'
gsap.registerPlugin(gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin )
import { onMounted, onUnmounted } from 'vue'
export default {
  setup () {

      const gsapInit = () => {
        const srollTL = gsap.timeline({
          scrollTrigger: {
            trigger: ".section3",
            pin: true,
            markers: false,
            scrub: true,
          }
        })

        srollTL.to(".gate-left-1", { yPercent: "-100" });
        srollTL.to(".gate-right-1", { yPercent: "100" }, "<");
        srollTL.to(".gate-left-2", { yPercent: "-100" });
        srollTL.to(".gate-right-2", { yPercent: "100" }, "<");
      }

      onMounted(()=> {
          gsapInit()
      })

      // 等同於 Vue2 的 destroyed
      onUnmounted(()=> {
      })

      return { gsapInit }
  }
}
</script>
<style scoped>
body {
    margin: 0;
    padding: 0;
  }

  .section3 {
    position: relative;
    display: flex;
    height: 100vh;
    overflow: hidden;
  }
  i {
    font-size: 10rem;
  }
  .gate {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
  }

  .z-0 {
    z-index: 0;
  }
  .z-10 {
    z-index: 10;
  }
  .z-20 {
    z-index: 20;
  }
  .gate-left {
    left: 0;
  }
  .gate-right {
    right: 0;
  }

  .gate-right-1 {
    background-color: #ffe7a9;
  }
  .gate-right-1 > i {
    color: #69f0ae;
  }
  .gate-left-1 {
    background-color: #e7ffa9;
  }
  .gate-left-1 > i {
    color: #ffa09d;
  }

  .gate-right-2 {
    background-color: #559496;
  }
  .gate-right-2 > i {
    color: #69f0ae;
  }
  .gate-left-2 {
    background-color: #005f62;
  }
  .gate-left-2 > i {
    color: #ffa09d;
  }

  .gate-right-3 {
    background-color: #69f0ae;
  }
  .gate-right-3 > i {
    color: #69f0ae;
  }
  .gate-left-3 {
    background-color: #ddfbed;
  }
  .gate-left-3 > i {
    color: #ffa09d
  }

</style>
