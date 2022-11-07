<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="section2 overflow-hidden">
    <ul class="flex flex-wrap w-full">
      <li class="boxwrap-half section2_item item1 mb-48 w-full xl:w-auto flex-wrap">
        <div class="relative">
          <div class="animation-wrapper box2 from-left flex items-center justify-center">
            <img src="@/assets/img/web1.gif" alt="" class="mx-auto">
          </div>
          <div class="quote-outer absolute" data-aos-delay="500" data-aos="fade-up" data-aos-offset="200">
            <div class="quote flex justify-center pt-3">
              <span class="animation-wrapper typing quote_typing1"></span>
              <span class="cursor">_</span>
            </div>
          </div>
        </div>
        <div class="ease-text ease-text1 absolute z-50 hidden xl:block" data-aos-delay="600" data-aos="fade-up">
          <img src="@/assets/img/quote_title1.png" alt="" class="mx-auto">
        </div>
        <div class="w-full xl:hidden mt-24 px-2">
          <img src="@/assets/img/quote_title1.png" alt="" class="mx-auto object-contain">
        </div>
      </li>

      <li class="boxwrap-full section2_item item2 mb-48 item2 w-full xl:w-auto flex-wrap">
        <div class="relative">
          <div class="animation-wrapper box2 from-right flex items-center">
            <img src="@/assets/img/solder.png" alt="" class="mx-auto soldier" data-aos-delay="200" data-aos="fade-up-left">
          </div>
          <div class="quote-outer absolute" data-aos-delay="500" data-aos="zoom-in-up" data-aos-offset="200">
            <div class="quote flex justify-center items-center">
              <span class="animation-wrapper typing quote_typing2"></span>
              <span class="cursor">_</span>
            </div>
          </div>
        </div>
        <div class="ease-text ease-text2 absolute hidden xl:block" data-aos-delay="600" data-aos="fade-up" data-aos-offset="100">
          <img src="@/assets/img/quote_title2.png" alt="" class="mx-auto">
        </div>
        <div class="w-full xl:hidden mt-24 px-2">
          <img src="@/assets/img/quote_title2.png" alt="" class="mx-auto object-contain">
        </div>
      </li>

      <li class="boxwrap-half section2_item item3 w-full xl:w-auto flex-wrap">
        <div class="relative">
          <div class="animation-wrapper box2 from-left">
            <img src="@/assets/img/tree2.png" alt="" class="mx-auto tree" data-aos-delay="300" data-aos="fade-up">
            <img src="@/assets/img/tree2_p.png" alt="" class="mx-auto tree2_p" data-aos-delay="500" data-aos="fade-up">
          </div>
        </div>
        <div class="ease-text ease-text3 absolute hidden xl:block" data-aos-delay="600" data-aos="fade-up">
          <img src="@/assets/img/quote_title3.png" alt="" class="mx-auto">
        </div>
        <div class="w-full xl:hidden mt-24 px-2">
          <img src="@/assets/img/quote_title3.png" alt="" class="mx-auto object-contain">
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin } from 'gsap/all'
gsap.registerPlugin(gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin )
import { onMounted } from 'vue'
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

        const hide = (element) => {
          gsap.set(element, { opacity: 0, visibility: "hidden" })
        }

        const animated = (element) => {
          let x = 0

          if (element.classList.contains("from-left")) {
            x = -100
          } else if (element.classList.contains("from-right")) {
            x = 100
          }

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
              }
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
          }
        })
      }

      onMounted(()=> {
        gsapInit()
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
          @media (max-width: 1440px) {
            top: -8%;
            right: 2%;
          }
          @media (max-width: 768px) {
            top: -8%;
            right: 15%;
          }
        .quote {
          background-image: url('@/assets/img/quote1.png');
          background-origin: center;
          background-repeat: no-repeat;
          background-size: 300px 100px;
          width: 300px;
          height: 100px;
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
          @media (max-width: 1440px) {
            top: -8%;
            left: -2%;
          }
          @media (max-width: 768px) {
            top: -10%;
            left: 10%;
          }
        .quote {
          background-image: url('@/assets/img/quote2.png');
          background-origin: center;
          background-repeat: no-repeat;
          background-size: 341px 195px;
          width: 341px;
          height: 195px;
          @media (max-width: 768px) {
            background-size: 215px 123px;
            width: 215px;
            height: 123px;
          }
        }
      }
      .soldier {
        position: absolute;
        bottom: 0%;
        left: 30%;
        @media (max-width: 768px) {
          left: 20%;
        }
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
    @media (max-width: 768px) {
      width: 768px;
    }
    @media (max-width: 425px) {
      width: 425px;
      height: 447px;
    }
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
