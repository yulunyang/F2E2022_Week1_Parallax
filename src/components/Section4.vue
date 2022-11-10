<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class='section4 overflow-hidden'>
    <div class='fixed car z-50 top-0 car'>
      <img src='@/assets/img/car.gif' class='block' />
    </div>
    <div class='first absolute translate-middle left-0' style='top:5%'></div>
    <div class='second absolute translate-middle left-0' style='top:25%'></div>
    <div class='third absolute translate-middle left-0' style='top:70%'></div>

    <div class='gate gate-left gate-left-1 z-20 week1 overflow-hidden' id='section4_item1'>
      <div class='mx-auto'>
        <div class='titles mb-3'>
          <p class='proj-text-tertiary text-4xl xl:text-5xl mb-6'>WEEK 1</p>
          <h6 class='text-white text-4xl xl:text-6xl mb-20 xl:mb-10'>The F2E 活動網站設計</h6>
          <p class='text-white text-2xl xl:text-3xl mb-3'>視差滾動</p>
          <p class='text-white text-2xl xl:text-3xl mb-6'>#版塊設計</p>
        </div>
        <div class='relative flag-container'>
          <div class='absolute flag-inner'>
            <img src='@/assets/img/flag/F1.png' alt='' class='mx-auto absolute top-0 left-0 section4-flag1'>
          </div>
        </div>
        <div class='xl:text-4xl mt-10'>
          <a class='button py-3 cursor-pointer px-6' href='https://2022.thef2e.com/news/week1' target='_blank'>查看關卡細節</a>
        </div>
      </div>
    </div>
    <div class='gate gate-left gate-left-2 z-10 week2 overflow-hidden' id='section4_item2'>
      <div class='mx-auto'>
        <div class='titles mb-3'>
          <p class='proj-text-tertiary text-4xl xl:text-5xl mb-6'>WEEK 2</p>
          <h6 class='text-white text-4xl xl:text-6xl mb-20 xl:mb-10'>今晚，我想來點點簽</h6>
          <p class='text-white text-2xl xl:text-3xl mb-3'>canvas</p>
          <p class='text-white text-2xl xl:text-3xl mb-6'>#凱鈿行動科技</p>
        </div>
        <div class='relative flag-container'>
          <div class='absolute flag-inner'>
            <img src='@/assets/img/flag/F1.png' alt='' class='mx-auto absolute top-0 left-0 section4-flag2'>
          </div>
        </div>
        <div class='xl:text-4xl mt-10'>
          <a class='button py-3 cursor-pointer px-6' href='https://2022.thef2e.com/news/week2' target='_blank'>查看關卡細節</a>
        </div>
      </div>
    </div>
    <div class='gate gate-left gate-left-3 z-0 week3 overflow-hidden' id='section4_item3'>
      <div class='mx-auto'>
        <div class='titles mb-3'>
          <p class='proj-text-green text-4xl xl:text-5xl mb-6'>WEEK 3</p>
          <h6 class='text-white text-4xl xl:text-6xl mb-20 xl:mb-10'>Scrum 新手村</h6>
          <p class='text-white text-2xl xl:text-3xl mb-3'>JS draggable</p>
          <p class='text-white text-2xl xl:text-3xl mb-3'>#鈦坦科技</p>
        </div>
        <div class='relative flag-container'>
          <div class='absolute flag-inner'>
            <img src='@/assets/img/flag/F1.png' alt='' class='mx-auto absolute top-0 left-0 section4-flag3'>
          </div>
        </div>
        <div class='xl:text-4xl mt-10'>
          <a class='button py-3 cursor-pointer px-6' href='https://2022.thef2e.com/news/week3' target='_blank'>查看關卡細節</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin } from 'gsap/all'
gsap.registerPlugin(gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin )
import { onMounted } from 'vue'
export default {
  setup () {
    const gsapInit = () => {
      const srollTL = gsap.timeline({
        scrollTrigger: {
          trigger: '.section4',
          pin: true,
          markers: false,
          scrub: true,
        }
      })

      srollTL.to('.gate-left-1', { xPercent: '-100' })
      srollTL.to('.gate-left-2', { xPercent: '-100' })
    }

    const gsapFlag = () => {
      const raiseflag = (str) => {
          gsap.set(`.${str}`, { attr: { src: require('@/assets/img/flag/F2.png') }, delay: 0.2 })
          gsap.set(`.${str}`, { attr: { src: require('@/assets/img/flag/F3.png') }, delay: 0.4 })
          gsap.set(`.${str}`, { attr: { src: require('@/assets/img/flag/F4.png') }, delay: 0.6 })
      }
      const fallingFlag = (str) => {
          gsap.set(`.${str}`, { attr: { src: require('@/assets/img/flag/F4.png') }, delay: 0.2 })
          gsap.set(`.${str}`, { attr: { src: require('@/assets/img/flag/F3.png') }, delay: 0.4 })
          gsap.set(`.${str}`, { attr: { src: require('@/assets/img/flag/F2.png') }, delay: 0.6 })
          gsap.set(`.${str}`, { attr: { src: require('@/assets/img/flag/F1.png') }, delay: 0.8 })
      }
      ScrollTrigger.create({
        trigger: '.third',
        onEnter: () => {
          raiseflag('section4-flag1')
        },
        onEnterBack: () => {
          raiseflag('section4-flag1')
        },
        onLeave: () => {
          fallingFlag('section4-flag1')
        }
      })

      ScrollTrigger.create({
        trigger: '.second',
        scrub: true,
        start: 'top 15%',
        end: 'top -30%',
        onEnter: () => {
          raiseflag('section4-flag2')
        },
        onEnterBack:function(){
          raiseflag('section4-flag2')
        },
        onLeave:function(){
          fallingFlag('section4-flag2')
        },
        onLeaveBack:function(){
          gsap.set('.section4-flag2', { attr: { src: require('@/assets/img/flag/F1.png') }, delay: 0.2 })
        }
      })

      ScrollTrigger.create({
        trigger: '.third',
        scrub: true,
        start: 'top 5%',
        end: 'top 5%',
        onEnter: () => {
          raiseflag('section4-flag3')
        },
        onEnterBack: () => {
          fallingFlag('section4-flag3')
        }
      })
    }

    onMounted(()=> {
      gsapInit()
      gsapFlag()
    })

    return { gsapInit, gsapFlag }
  }
}
</script>

<style scoped lang='scss'>
.section4 {
    position: relative;
    display: flex;
    height: 100vh;
    overflow: hidden;
    .car {
      width: 164px;
      height: 66px;
      top: 60%;
      left: 48%;
      @media (max-width: 1440px) {
        top: 57%;
        left: 48%;
      }
      @media (max-width: 768px) {
        top: 62%;
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
      background-position: bottom;
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
      background-position: bottom;
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
          left: -60%;
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
      background-position: bottom;
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
    width: 100vw;
    height: 100%;
  }

  .gate-left {
    left: 0;
  }
}

</style>
