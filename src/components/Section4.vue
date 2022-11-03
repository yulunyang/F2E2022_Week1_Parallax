<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="section4 overflow-hidden">
    <div class="fixed car z-50 top-0 car">
      <img src="@/assets/img/car.png" class="block" />
    </div>
    <div class="gate gate-left gate-left-1 z-20 week1 overflow-hidden">
      <div class="mx-auto">
        <p class="proj-text-tertiary text-2xl mb-6">WEEK 1</p>
        <h6 class="text-white text-5xl mb-12">The F2E 活動網站設計</h6>
        <p class="text-white text-xl mb-3">視差滾動</p>
        <p class="text-white text-xl mb-3">#版塊設計</p>
        <div class="relative flag-container">
          <img src="@/assets/img/F1.png" alt="" class="mx-auto">
        </div>
        <div class="xl:text-2xl mt-12">
          <a class="button py-3 cursor-pointer px-6" href="https://2022.thef2e.com/news/week1">查看關卡細節</a>
        </div>
      </div>
    </div>
    <div class="gate gate-left gate-left-2 z-10 week2 overflow-hidden">
      <div class="mx-auto">
        <p class="proj-text-blue text-2xl mb-6">WEEK 2</p>
        <h6 class="text-white text-5xl mb-12">今晚，我想來點點簽</h6>
        <p class="text-white text-xl mb-3">canvas</p>
        <p class="text-white text-xl mb-3">#凱鈿行動科技</p>
        <div class="relative flag-container">
          <img src="@/assets/img/F1.png" alt="" class="mx-auto">
        </div>
        <div class="xl:text-2xl mt-12">
          <a class="button py-3 cursor-pointer px-6" href="https://2022.thef2e.com/news/week2">查看關卡細節</a>
        </div>
      </div>
    </div>
    <div class="gate gate-left gate-left-3 z-0 week3 overflow-hidden">
      <div class="mx-auto">
        <p class="proj-text-green text-2xl mb-6">WEEK 3</p>
        <h6 class="text-white text-5xl mb-12">Scrum 新手村</h6>
        <p class="text-white text-xl mb-3">JS draggable</p>
        <p class="text-white text-xl mb-3">#鈦坦科技</p>
        <div class="relative flag-container">
          <img src="@/assets/img/F1.png" alt="" class="mx-auto">
        </div>
        <div class="xl:text-2xl mt-12">
          <a class="button py-3 cursor-pointer px-6" href="https://2022.thef2e.com/news/week3">查看關卡細節</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin } from 'gsap/all'
gsap.registerPlugin(gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin )
import { onMounted, onUnmounted } from 'vue'
export default {
  setup () {
      const gsapInit = () => {
        const srollTL = gsap.timeline({
          scrollTrigger: {
            trigger: ".section4",
            pin: true,
            markers: false,
            scrub: true,
          }
        })

        srollTL.to(".gate-left-1", { xPercent: "-100" });
        // srollTL.to(".gate-right-1", { xPercent: "100", ease: "ease" }, "<");
        srollTL.to(".gate-left-2", { xPercent: "-100" });
        // srollTL.to(".gate-right-2", { xPercent: "100", ease: "ease" }, "<");
      }
    onMounted(()=> {
      gsapInit()
    })

    onUnmounted(()=> {
    })

    return {gsapInit}
  }
}
</script>

<style scoped lang="scss">
.section4 {
    position: relative;
    display: flex;
    height: 100vh;
    overflow: hidden;
    .car {
      top: 62%;
      left: 48%;
      @media (max-width: 1440px) {
        top: 57%;
        left: 48%;
      }
      @media (max-width: 768px) {
        top: 61%;
        left: 46%;
      }
    }
  .week1 {
    background: #B82A06;
    .flag-container {
      img {
        z-index: 99;
      }
      &::after {
        content: '';
        width: calc(50vw);
        height: 0;
        border-top: 5px dashed rgba(255, 255, 255, 0.5);
        position: absolute;
        left: 50%;
        z-index: -1;
        bottom: 8%;
      }
    }
  }
  .week2 {
    background: #76B9D6;
    .flag-container {
      img {
        z-index: 99;
      }
      &::after {
        content: '';
        width: calc(120vw);
        height: 0;
        border-top: 5px dashed rgba(255, 255, 255, 0.5);
        position: absolute;
        left: -200%;
        z-index: -1;
        bottom: 8%;
        @media (max-width: 768px) {
          height: 0;
          left: -50%;
          z-index: -1;
        }
      }
    }
  }
  .week3 {
    background: #215400;
    .flag-container {
      img {
        z-index: 99;
      }
      &::after {
        content: '';
        width: calc(50vw);
        height: 0;
        border-top: 5px dashed rgba(255, 255, 255, 0.5);
        position: absolute;
        right: 50%;
        z-index: -1;
        bottom: 8%;
      }
    }
  }

  .gate {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .gate-left {
    left: 0;
  }
}

</style>
