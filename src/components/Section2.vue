<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="section2 overflow-hidden">
    <ul class="flex flex-wrap">
      <li class="boxwrap-half mb-48 item1 w-full xl:w-auto flex-wrap">
        <div class="relative">
          <div class="animation-wrapper box2 from-left flex items-center">
            <img src="@/assets/img/web_1.png" alt="" class="mx-auto">
          </div>
          <div class="quote-outer absolute">
            <p class="quote">
              <span class="animation-wrapper typing quote_typing1"></span>
              <span class="cursor">_</span>
            </p>
          </div>
        </div>
        <div class="ease-text ease-text1 absolute z-50 hidden xl:block">
          <img src="@/assets/img/quote_title1.png" alt="" class="mx-auto">
        </div>
        <div class="w-full xl:hidden mt-24">
          <img src="@/assets/img/quote_title1.png" alt="" class="mx-auto">
        </div>
      </li>

      <li class="boxwrap-full mb-48 item2 w-full xl:w-auto flex-wrap">
        <div class="relative">
          <div class="animation-wrapper box2 from-right flex items-center">
            <img src="@/assets/img/tree2.png" alt="" class="mx-auto soldier">
          </div>
          <div class="quote-outer absolute">
            <p class="quote">
              <span class="animation-wrapper typing quote_typing2"></span>
              <span class="cursor">_</span>
            </p>
          </div>
        </div>
        <div class="ease-text ease-text2 absolute hidden xl:block">
          <img src="@/assets/img/quote_title2.png" alt="" class="mx-auto">
        </div>
        <div class="w-full xl:hidden mt-24">
          <img src="@/assets/img/quote_title2.png" alt="" class="mx-auto">
        </div>
      </li>

      <li class="boxwrap-half item3 w-full xl:w-auto flex-wrap">
        <div class="relative">
          <div class="animation-wrapper box2 from-left">
            <img src="@/assets/img/tree2.png" alt="" class="mx-auto tree">
            <img src="@/assets/img/tree2_p.png" alt="" class="mx-auto tree2_p">
          </div>
          <!-- <div class="quote-outer absolute">
            <p class="quote">
              <span class="animation-wrapper typing typing3"></span>
              <span class="cursor">_</span>
            </p>
          </div> -->
        </div>
        <div class="ease-text ease-text3 absolute hidden xl:block">
          <img src="@/assets/img/quote_title3.png" alt="" class="mx-auto">
        </div>
        <div class="w-full xl:hidden mt-24">
          <img src="@/assets/img/quote_title3.png" alt="" class="mx-auto">
        </div>
      </li>
    </ul>
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
        gsap.fromTo(".cursor", 0,
          { visibility: "hidden" },
          { visibility: "visible",
            repeat: -1,
            yoyo: true,
            repeatDelay: 0.3,
          }
        )
        // gsap.from('.ease-text1', { y: 3000, duration: 1, delay: 1 })
        // gsap.from('.ease-text2', { y: 3000, duration: 1, delay: 1 })
        // gsap.from('.ease-text3', { y: 3000, duration: 1, delay: 1 })

        const hide = (element) => {
          gsap.set(element, { opacity: 0, visibility: "hidden" })
        }

        const animated = (element) => {
          console.log(element)
          let x = 0

          //依照條件設定x初始值
          if (element.classList.contains("from-left")) {
            x = -100
          } else if (element.classList.contains("from-right")) {
            x = 100
          }

          //設定元素初始值
          element.style.transform = `translate(${x}px, 0px)`
          gsap.fromTo(
            element,
            { x: x, y: 0, opacity: 0, visibility: "hidden" },
            {
              duration: 1,
              delay: 0.2,
              x: 0,
              y: 0,
              visibility: "visible",
              opacity: "1",
              ease: "expo",
              overwrite: "auto",
            }
          )

          // gsap.from('.ease-text1', { y: 3000, duration: 1 })
          // gsap.from('.ease-text2', { y: 3000, duration: 1 })
          // gsap.from('.ease-text3', { y: 3000, duration: 1 })
        }

        const hideText = (element) => {
          gsap.set(element, { y: 1000, opacity: 0, visibility: "hidden", delay: 2 })
        }

        const animatedText = (element) => {
          console.log(element)
          let y = 1000

          //依照條件設定x初始值
          if (element.classList.contains("ease-text1")) {
            y = 1000
          } else if (element.classList.contains("ease-text2")) {
            y = 1000
          } else if (element.classList.contains("ease-text3")) {
            y = 1000
          }

          //設定元素初始值
          element.style.transform = `translate(0px, ${y}px)`
          gsap.fromTo(
            element,
            { x: 0, y: y, opacity: 0, visibility: "hidden" },
            {
              duration: 1,
              delay: 1,
              x: 0,
              y: 0,
              visibility: "visible",
              opacity: "1",
              ease: "expo",
              overwrite: "auto"
            }
          )

          // gsap.from('.ease-text1', { y: 3000, duration: 1 })
          // gsap.from('.ease-text2', { y: 3000, duration: 1 })
          // gsap.from('.ease-text3', { y: 3000, duration: 1 })
        }
        gsap.utils.toArray(".animation-wrapper").forEach(element => {
          if (
            element.classList.contains("from-left") ||
            element.classList.contains("from-right")
          ) {
            hide(element)
            ScrollTrigger.create({
              trigger: element,
              onEnter: function () {
                animated(element)
              },
              onEnterBack: function () {
                animated(element)
              },
              onLeave: function () {
                hide(element)

              },
            })
          } else if(element.classList.contains("typing")) {
            const typing1Content = "I’m cool !"
            const typing2Content = "!@#$%..."

            gsap.to(".quote_typing1", {
              text: typing1Content,
              duration: 1.5,
              scrollTrigger: {
                trigger: ".quote_typing1",
                toggleActions: "play pause resume reset"
              }
            })

            gsap.to(".quote_typing2", {
              text: typing2Content,
              duration: 1.5,
              scrollTrigger: {
                trigger: ".quote_typing2",
                toggleActions: "play pause resume reset"
              },
            })
            // gsap.to(".typing3", {
            //   text: typing3Content,
            //   duration: 1.5,
            //   scrollTrigger: {
            //     trigger: ".typing3",
            //     toggleActions: "play pause resume reset"
            //   }
            // })
          }
        })

        gsap.utils.toArray(".ease-text").forEach(element => {
          if (
            element.classList.contains("ease-text1") ||
            element.classList.contains("ease-text2") ||
            element.classList.contains("ease-text3")
          ) {
            hideText(element)
            ScrollTrigger.create({
              trigger: element,
              onEnter: function () {
                animatedText(element)
              },
              onEnterBack: function () {
                animatedText(element)
              },
              onLeave: function () {
                hideText(element)

              },
            })
          }
        })
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
  .section2 {
    display: flex;
    justify-content: center;
    padding: 200px 0;
    .item1 {
      .quote-outer {
          top: -5%;
          right: 2%;
          border-style: solid dashed;
          border-color: white;
          border-width: 6px;
          border-radius: 24px;
        .quote {
          background-color: #ffffff;
          min-width: 250px;
          border-radius: 20px;
            &::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 20%;
              width: 0;
              height: 0;
              border: 40px dashed transparent;
              border-top-color: #ffffff;
              border-bottom: 0;
              border-left: 0;
              margin-left: -21px;
              margin-bottom: -40px;
              border-style: outset;
            }
        }
      }
      .ease-text {
        top: 50%;
        right: -20%;
      }
    }
    .item2 {
      .quote-outer {
          top: -8%;
          left: -2%;
          border-style: solid dashed;
          border-color: white;
          border-width: 6px;
          border-radius: 50%;
        .quote {
          background-color: #ffffff;
          min-width: 250px;
          border-radius: 50%;
          padding-top: 50px;
          padding-bottom: 50px;
            &::after {
              content: '';
              position: absolute;
              bottom: 10%;
              right: 20%;
              width: 0;
              height: 0;
              border: 51px solid transparent;
              border-top-color: #ffffff;
              border-bottom: 0;
              border-right: 0;
              margin-left: -25.5px;
              margin-bottom: -51px;
            }
        }
      }
      .soldier {
        position: absolute;
        bottom: 0%;
        left: 30%;
        // transform: translateX(-50%);
      }
      .ease-text {
        top: 55%;
        right: 40%;
      }
    }
    .item3 {
      // .quote-outer {
      //     top: -5%;
      //     right: 2%;
      //     border-style: solid dashed;
      //     border-color: white;
      //     border-width: 6px;
      //     border-radius: 24px;
      //   .quote {
      //     background-color: #ffffff;
      //     min-width: 250px;
      //     border-radius: 20px;
      //       &::after {
      //         content: '';
      //         position: absolute;
      //         bottom: 0;
      //         left: 20%;
      //         width: 0;
      //         height: 0;
      //         border: 40px dashed transparent;
      //         border-top-color: #ffffff;
      //         border-bottom: 0;
      //         border-left: 0;
      //         margin-left: -21px;
      //         margin-bottom: -40px;
      //         border-style: outset;
      //       }
      //   }
      // }
      .tree {
        position: absolute;
        bottom: 0%;
        left: 50%;
        transform: translateX(-50%);
        // margin-top: -10em;
      }
      .tree2_p {
        position: absolute;
        bottom: 0%;
        left: 45%;
        transform: translateX(-50%);
        z-index: 10;
      }
      .ease-text {
        bottom: 20%;
        right: -20%;
      }
    }
  }

  .boxwrap-half {
    position: relative;
    display: flex;
    justify-content: end;
    // width: 50%;
  }
  .boxwrap-full {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: end;
  }

  .box2 {
    width: 980px;
    height: 570px;
    background-color: #B82A06;
  }

  .section3 {
    position: relative;
    overflow: hidden;
    height: 100vh;
    background-color: #1e2a60;
  }

  .typing {
    font-size: 2rem;
    font-family: "DotGothic16", sans-serif;
    color: rgb(0, 0, 0);
  }
  .cursor {
    visibility: "hidden";
    color: #fff;
    font-size: 2rem;
  }
</style>
