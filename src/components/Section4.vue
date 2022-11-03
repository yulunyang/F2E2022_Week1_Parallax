<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="section4 overflow-hidden">
    <div class="fixed car z-50 top-0 car">
      <img src="@/assets/img/car.png" class="block" />
    </div>
    <div class="gate gate-left gate-left-1 z-20 week1 overflow-hidden" id="section4_item1">
      <div class="mx-auto">
        <div class="titles mb-3">
          <p class="proj-text-tertiary text-5xl mb-6">WEEK 1</p>
          <h6 class="text-white text-6xl mb-10">The F2E 活動網站設計</h6>
          <p class="text-white text-3xl mb-3">視差滾動</p>
          <p class="text-white text-3xl mb-6">#版塊設計</p>
        </div>
        <div class="relative flag-container">
          <div class="absolute flag-inner">
            <img src="@/assets/img/F1.png" alt="" class="mx-auto absolute top-0 left-0 item1_flag1">
            <img src="@/assets/img/F2.png" alt="" class="mx-auto absolute top-0 left-0 item1_flag2">
            <img src="@/assets/img/F3.png" alt="" class="mx-auto absolute top-0 left-0 item1_flag3">
            <img src="@/assets/img/F4.png" alt="" class="mx-auto absolute top-0 left-0 item1_flag4">
          </div>
        </div>
        <div class="xl:text-4xl mt-10">
          <a class="button py-3 cursor-pointer px-6" href="https://2022.thef2e.com/news/week1">查看關卡細節</a>
        </div>
      </div>
    </div>
    <div class="gate gate-left gate-left-2 z-10 week2 overflow-hidden" id="section4_item2">
      <div class="mx-auto">
        <div class="titles mb-3">
          <p class="proj-text-tertiary text-5xl mb-6">WEEK 2</p>
          <h6 class="text-white text-6xl mb-10">今晚，我想來點點簽</h6>
          <p class="text-white text-3xl mb-3">canvas</p>
          <p class="text-white text-3xl mb-6">#凱鈿行動科技</p>
        </div>
        <div class="relative flag-container">
          <div class="absolute flag-inner">
            <img src="@/assets/img/F1.png" alt="" class="mx-auto absolute top-0 left-0 item2_flag1">
            <img src="@/assets/img/F2.png" alt="" class="mx-auto absolute top-0 left-0 item2_flag2">
            <img src="@/assets/img/F3.png" alt="" class="mx-auto absolute top-0 left-0 item2_flag3">
            <img src="@/assets/img/F4.png" alt="" class="mx-auto absolute top-0 left-0 item2_flag4">
          </div>
        </div>
        <div class="xl:text-4xl mt-10">
          <a class="button py-3 cursor-pointer px-6" href="https://2022.thef2e.com/news/week2">查看關卡細節</a>
        </div>
      </div>
    </div>
    <div class="gate gate-left gate-left-3 z-0 week3 overflow-hidden" id="section4_item3">
      <div class="mx-auto">
        <div class="titles mb-3">
          <p class="proj-text-green text-5xl mb-6">WEEK 3</p>
          <h6 class="text-white text-6xl mb-10">Scrum 新手村</h6>
          <p class="text-white text-3xl mb-3">JS draggable</p>
          <p class="text-white text-3xl mb-3">#鈦坦科技</p>
        </div>
        <div class="relative flag-container">
          <div class="absolute flag-inner">
            <img src="@/assets/img/F1.png" alt="" class="mx-auto absolute top-0 left-0 item3_flag1">
            <img src="@/assets/img/F2.png" alt="" class="mx-auto absolute top-0 left-0 item3_flag2">
            <img src="@/assets/img/F3.png" alt="" class="mx-auto absolute top-0 left-0 item3_flag3">
            <img src="@/assets/img/F4.png" alt="" class="mx-auto absolute top-0 left-0 item3_flag4">
          </div>
        </div>
        <div class="xl:text-4xl mt-10">
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
      srollTL.to(".gate-left-2", { xPercent: "-100" });
    }

    const gsapFlag = () => {
      const flag1 = gsap.timeline({
        scrollTrigger: {
          trigger: "#section4_item1",
          toggleActions: "play pause resume reset",
        }
      })
      flag1.to(".item1_flag1", {
        duration: 0,
        opacity: 0
      }, 1)
      flag1.from(".item1_flag2", {
        duration: 0.2,
        opacity: 0,
      }, '-=0.2')
      flag1.to(".item1_flag2", {
        duration: 0.2,
        opacity: 0
      }, 2)
      flag1.from(".item1_flag3", {
        duration: 0.2,
        opacity: 0,
      }, '-=0.2')
      flag1.to(".item1_flag3", {
        duration: 0.2,
        opacity: 0
      }, 3)
      flag1.from(".item1_flag4", {
        duration: 0.2,
        opacity: 0,
      }, '-=0.2')

      const flag2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#section4_item2",
          toggleActions: "play pause resume reset",
        }
      })
      flag2.to(".item2_flag1", {
        duration: 0,
        opacity: 0
      }, 1)
      flag2.from(".item2_flag2", {
        duration: 0.2,
        opacity: 0,
      }, '-=0.2')
      flag2.to(".item2_flag2", {
        duration: 0.2,
        opacity: 0
      }, 2)
      flag2.from(".item2_flag3", {
        duration: 0.2,
        opacity: 0,
      }, '-=0.2')
      flag2.to(".item2_flag3", {
        duration: 0.2,
        opacity: 0
      }, 3)
      flag2.from(".item2_flag4", {
        duration: 0.2,
        opacity: 0,
      }, '-=0.2')

      const flag3 = gsap.timeline({
        scrollTrigger: {
          trigger: "#section4_item3",
          toggleActions: "play pause resume reset",
        }
      })
      flag3.to(".item3_flag1", {
        duration: 0,
        opacity: 0
      }, 1)
      flag3.from(".item3_flag2", {
        duration: 0.2,
        opacity: 0,
      }, '-=0.2')
      flag3.to(".item3_flag2", {
        duration: 0.2,
        opacity: 0
      }, 2)
      flag3.from(".item3_flag3", {
        duration: 0.2,
        opacity: 0,
      }, '-=0.2')
      flag3.to(".item3_flag3", {
        duration: 0.2,
        opacity: 0
      }, 3)
      flag3.from(".item3_flag4", {
        duration: 0.2,
        opacity: 0,
      }, '-=0.2')
    }

    onMounted(()=> {
      gsapInit()
      gsapFlag()
    })

    onUnmounted(()=> {
    })

    return {gsapInit, gsapFlag}
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
      top: 58%;
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
  .titles {
    min-height: 256px;
  }
  .week1 {
    background: #B82A06;
    background-image: url('@/assets/img/week1BG.png');
    background-repeat: no-repeat;
    // background-origin: left;
    background-position: center left;
    background-size: contain;
    @media (max-width: 1440px) {
      background-position: center;
      // background-origin: center;
    }
    @media (max-width: 768px) {
      background-position: center;
      // background-origin: left;
    }
    .flag-container {
      width: 100%;
      height: 299px;
      .flag-inner {
        width: 141px;
        height: 299px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
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
        bottom: 32%;
      }
    }
  }
  .week2 {
    background: #76B9D6;
    background-image: url('@/assets/img/week2BG.png');
    background-repeat: no-repeat;
    background-position: center left;
    background-size: contain;
    @media (max-width: 1440px) {
      background-position: center;
    }
    @media (max-width: 768px) {
      background-position: center;
    }
    .flag-container {
      width: 100%;
      height: 299px;
      .flag-inner {
        width: 141px;
        height: 299px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
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
        bottom: 32%;
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
    background-image: url('@/assets/img/week3BG.png');
    background-repeat: no-repeat;
    background-position: center left;
    background-size: contain;
    @media (max-width: 1440px) {
      background-position: center;
    }
    @media (max-width: 768px) {
      background-position: center;
    }
    .flag-container {
      width: 100%;
      height: 299px;
      .flag-inner {
        width: 141px;
        height: 299px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
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
        bottom: 32%;
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
