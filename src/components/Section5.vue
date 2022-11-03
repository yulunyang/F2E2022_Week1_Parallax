<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="Section5 py-24">
    <div class="p-4 pl-24 xl:pl-20 max-w-5xl mx-auto">
      <ul class="relative">
        <li class="ml-6">
          <div class="absolute flag">
            <img src="@/assets/img/F1.png" alt="" class="mx-auto absolute top-0 left-0 flag1">
            <img src="@/assets/img/F2.png" alt="" class="mx-auto absolute top-0 left-0 flag2">
            <img src="@/assets/img/F3.png" alt="" class="mx-auto absolute top-0 left-0 flag3">
            <img src="@/assets/img/F4.png" alt="" class="mx-auto absolute top-0 left-0 flag4">
          </div>
          <div data-aos-delay="100" data-aos="fade-left" data-aos-once="true" data-aos-offset="200" class="item-right pl-16 flex-1 flex items-end">
            <div>
              <h6 class="text-5xl proj-text-tertiary text-left mb-3">SIGN UP!</h6>
              <div class="flex flex-col stretch flex-1 h-full content justify-between">
                <p class="text-white text-left text-base lg:text-xl">開放報名：<br/>
                  10/13(四) 早上 11:00 - 11/6(日) 晚上 23:59</p>
                <p class="text-white text-left">
                  截止前可修改報名組別。
                </p>
              </div>
            </div>
            <div class="text-base xl:text-3xl flex-1 pl-6">
              <a class="button py-3 cursor-pointer w-auto px-8" href="https://2022.thef2e.com/signup">點我註冊報名!</a>
            </div>
          </div>
        </li>
        <li class="ml-6">
          <div class="absolute flag">
            <img src="@/assets/img/F1.png" alt="" class="mx-auto absolute top-0 left-0 flag1">
            <img src="@/assets/img/F2.png" alt="" class="mx-auto absolute top-0 left-0 flag2">
            <img src="@/assets/img/F3.png" alt="" class="mx-auto absolute top-0 left-0 flag3">
            <img src="@/assets/img/F4.png" alt="" class="mx-auto absolute top-0 left-0 flag4">
          </div>
          <div data-aos-delay="100" data-aos="fade-right" data-aos-once="true" data-aos-offset="200" class="item-right pl-16">
            <h6 class="text-5xl proj-text-tertiary text-left mb-3">START!</h6>
            <div class="flex flex-col stretch flex-1 h-full content justify-between">
              <p></p>
            <p class="text-white text-left text-base lg:text-xl">各組別開賽：<br/>
              UI組、團體組開賽 10/31、前端組開賽 11/7</p>
            </div>
          </div>
        </li>
        <li class="ml-6">
          <div class="absolute flag">
          <img src="@/assets/img/F1.png" alt="" class="mx-auto absolute top-0 left-0 flag1">
          <img src="@/assets/img/F2.png" alt="" class="mx-auto absolute top-0 left-0 flag2">
          <img src="@/assets/img/F3.png" alt="" class="mx-auto absolute top-0 left-0 flag3">
          <img src="@/assets/img/F4.png" alt="" class="mx-auto absolute top-0 left-0 flag4">
          </div>
          <div data-aos-delay="100" data-aos="fade-left" data-aos-once="true" data-aos-offset="200" class="item-right pl-16">
            <h6 class="text-5xl proj-text-tertiary text-left mb-3">UPLOAD!</h6>
            <div class="flex flex-col stretch flex-1 h-full content justify-between">
              <p></p>
            <p class="text-white text-left text-base lg:text-xl">登陸作品：<br/>
              10/31(一) 中午 12:00 - 11/28(一) 中午 12:00</p>
            </div>
          </div>
        </li>
        <li class="ml-6">
          <div class="absolute flag">
            <img src="@/assets/img/F1.png" alt="" class="mx-auto absolute top-0 left-0 flag1">
            <img src="@/assets/img/F2.png" alt="" class="mx-auto absolute top-0 left-0 flag2">
            <img src="@/assets/img/F3.png" alt="" class="mx-auto absolute top-0 left-0 flag3">
            <img src="@/assets/img/F4.png" alt="" class="mx-auto absolute top-0 left-0 flag4">
          </div>
          <div data-aos-delay="100" data-aos="flip-left" data-aos-once="true" data-aos-offset="200" class="item-right pl-16">
            <h6 class="text-5xl proj-text-tertiary text-left mb-3">STREAM!</h6>
            <div class="flex flex-col stretch flex-1 h-full content justify-between">
              <p class="text-white text-left text-base lg:text-xl">資深開發者到來 ，直播分享零阻礙！</p>
            <p class="text-white text-left text-base lg:text-xl">線上直播：<br/>
              11/3 - 11/24（每週四）</p>
            </div>
          </div>
        </li>
      </ul>
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
      const flag = gsap.timeline({
        scrollTrigger: {
          trigger: ".flag",
          toggleActions: "play pause resume reset",
        }
      })
      flag.to(".flag1", {
        duration: 1,
        opacity: 0
      }, 1)
      flag.from(".flag2", {
        duration: 1,
        opacity: 0,
      }, '-=1')
      flag.to(".flag2", {
        duration: 1,
        opacity: 0
      }, 2)
      flag.from(".flag3", {
        duration: 1,
        opacity: 0,
      }, '-=1')
      flag.to(".flag3", {
        duration: 1,
        opacity: 0
      }, 3)
      flag.from(".flag4", {
        duration: 1,
        opacity: 0,
      }, '-=1')
        // const hide = (element) => {
        //   console.log('hide: ' + element)
        //   // gsap.set(element, { opacity: 0, visibility: "hidden" })
        // }

        // const animated = (element) => {
        //   console.log('animated: ' + element)
        //   // let x = 0

        //   // if (element.classList.contains("from-left")) {
        //   //   x = -100
        //   // } else if (element.classList.contains("from-right")) {
        //   //   x = 100
        //   // }

        //   // element.style.transform = `translate(${x}px, 0px)`
        //   // gsap.fromTo(
        //   //   element,
        //   //   { x: x, y: 0, opacity: 0, visibility: "hidden" },
        //   //   {
        //   //     duration: 1,
        //   //     delay: 0.2,
        //   //     x: 0,
        //   //     y: 0,
        //   //     visibility: "visible",
        //   //     opacity: "1",
        //   //     ease: "expo",
        //   //     overwrite: "auto",
        //   //   }
        //   // )
        //   const flag = gsap.timeline({})
        //   flag.to(".flag1", {
        //     duration: 1,
        //     opacity: 0
        //   }, 1)
        //   flag.from(".flag2", {
        //     duration: 1,
        //     opacity: 0,
        //   }, '-=1')
        //   flag.to(".flag2", {
        //     duration: 1,
        //     opacity: 0
        //   }, 2)
        //   flag.from(".flag3", {
        //     duration: 1,
        //     opacity: 0,
        //   }, '-=1')
        //   flag.to(".flag3", {
        //     duration: 1,
        //     opacity: 0
        //   }, 3)
        //   flag.from(".flag4", {
        //     duration: 1,
        //     opacity: 0,
        //   }, '-=1')
        // }

        // gsap.utils.toArray(".flag").forEach(element => {
        //   // console.log(element)
        //   // if (
        //   //   element.classList.contains("from-left") ||
        //   //   element.classList.contains("from-right")
        //   // ) {
        //   //   hide(element)
        //   //   ScrollTrigger.create({
        //   //     trigger: element,
        //   //     onEnter: function () {
        //   //       animated(element)
        //   //     },
        //   //     onEnterBack: function () {
        //   //       animated(element)
        //   //     },
        //   //     onLeave: function () {
        //   //       hide(element)

        //   //     },
        //   //   })
        //   // }
        //     hide(element)
        //     ScrollTrigger.create({
        //       trigger: element,
        //       onEnter: function () {
        //         animated(element)
        //       },
        //       onEnterBack: function () {
        //         animated(element)
        //       },
        //       onLeave: function () {
        //         hide(element)
        //       }
        //     })
        // })
    }

    onMounted(()=> {
      gsapInit()
    })

    onUnmounted(()=> {
    })

    return {
      gsapInit
    }
  }
}
</script>

<style scoped lang="scss">
.Section5 {
  min-height: 100vh;
  ul {
    border-left: 5px dashed rgba(255, 255, 255, 0.5);
    li {
      .item-right {
        min-height: 211px;
        .content {
          min-height: calc(200px - 40px);
        }
      }
      min-height: 211px;
      margin-bottom: 20rem;
    }
  }
  .flag {
    width: 141px;
    height: 299px;
    // background-image: url('@/assets/img/F1.png');
    // background-origin: center;
    // background-repeat: no-repeat;
    // background-size: 141px 299px;


    left: -90px;
      @media (max-width: 1440px) {
      }
      @media (max-width: 768px) {
        left: -85px;
      }
    img {

      @media (max-width: 1440px) {
      }
      @media (max-width: 768px) {
        width: 130px;
      }
    }
  }
}
</style>
