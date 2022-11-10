<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class='section3 section3-bg'>
    <div class='box-bg box-bg-1 z-20'></div>
    <div class='box-bg box-bg-2 z-10'></div>
    <div class='box-bg box-bg-3'></div>

    <p class='section3-label text-4xl xl:text-7xl border-4 px-12 py-8 whitespace-nowrap absolute bottom-0 text-white z-20'>互動式網頁設計</p>
    <p class='section3-label-note text-base xl:text-2xl whitespace-nowrap absolute bottom-0 text-white z-20'> UI、前端接力合作，一同產出完整作品。</p>

    <div class='bg-1 z-20'>
      <img src='@/assets/img/L1.png' alt=''>
    </div>
    <div class='bg-2 z-20'>
      <img src='@/assets/img/L2.png' alt=''>
    </div>
    <div class='bg-3 z-20'>
      <img src='@/assets/img/L3.png' alt=''>
    </div>
    <div class='bg-4 z-20'>
      <img src='@/assets/img/L5.png' alt=''>
    </div>
  </section>

</template>

<script>
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin, Power3, Linear, Cubic } from 'gsap/all'
gsap.registerPlugin(gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin, Power3, Linear, Cubic )
import { onMounted } from 'vue'
export default {
  setup () {

    onMounted(()=> {
      gsapInit()
    })

    const gsapInit = () => {
      const mql = window.matchMedia('(max-width:768px)')
      let fontSize
      let noteTop
      if (window.innerWidth >=1440) {
        fontSize = '4.5rem'
        noteTop = '-950'
      } else {
        fontSize = '2.5rem'
        noteTop = '-1200'
      }
      const scrolled = gsap.timeline({
        scrollTrigger:{
          trigger:'.section3-bg',
          pin: true,
          markers: false,
          scrub: true,
        }
      })
      scrolled.to('.box-bg-1', { opacity: '0' })

      scrolled.to('.section3-label', {
        yPercent:'-160',
          color: '#FFC612',
          borderColor: '#FFC612',
          fontSize: fontSize,
          xPercent:'-50',
      }, '<')

      scrolled.to('.bg-1', {
        yPercent:'10',
      }, '<')
      scrolled.to('.bg-2', {
        yPercent:'50',
      }, '<')
      scrolled.to('.bg-3', {
        yPercent:'50',
      }, '<')
      scrolled.to('.box-bg-2', { opacity: '0' })

      scrolled.to('.section3-label', {
        yPercent:'-250',
        color: '#ffffff',
        borderColor: 'white',
        fontSize: fontSize
      }, '<')
      scrolled.to('.section3-label-note', {
        yPercent: noteTop,
        color: '#ffffff',
        opacity: 1
      }, '<')

      scrolled.to('.bg-1', {
        yPercent:'50',
      }, '<')
      scrolled.to('.bg-2', {
        yPercent:'100',
      }, '<')
      scrolled.to('.bg-3', {
        yPercent:'100',
      }, '<')

      if (mql.matches) {
        scrolled.to('.box-bg-1', { opacity: '0' })
        scrolled.to('.section3-label', {
          yPercent:'-150',
        }, '<')
        scrolled.to('.bg-1', {
          yPercent:'10',
        }, '<')
        scrolled.to('.bg-2', {
          yPercent:'50',
        }, '<')
        scrolled.to('.bg-3', {
          yPercent:'50',
        }, '<')
        scrolled.to('.box-bg-2', { opacity: '0' })
        scrolled.to('.section3-label', {
          yPercent:'-300',
        }, '<')
        scrolled.to('.bg-1', {
          yPercent:'50',
        }, '<')
        scrolled.to('.bg-2', {
          yPercent:'100',
        }, '<')
        scrolled.to('.bg-3', {
          yPercent:'100',
        }, '<')
        // scrolled.to('.section3-label-note', {
        //   yPercent:'-300',
        // }, '<')
      }
    }
    return { gsapInit }
  }
}
</script>

<style scoped lang='scss'>
  .section3 {
    height: 100vh;
    position: relative;
    margin-bottom: 500px;

    .section3-label {
      position: absolute;
      bottom: 10%;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;

      // h3 {
      //   display: inline-block;
      //   border: 3px solid white;
      //   padding: 40px 80px;
      //   margin-bottom: 16px;
      //   color: #FFC612;
      // }
    }
    .section3-label-note {
      position: absolute;
      bottom: 10%;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;

      // h3 {
      //   display: inline-block;
      //   border: 3px solid white;
      //   padding: 40px 80px;
      //   margin-bottom: 16px;
      //   color: #FFC612;
      // }
    }
    .bg-1 {
      position: absolute;
      bottom: 0;
    }

    .bg-2 {
      position: absolute;
      width: 70%;
      bottom: 0;
      right: 0;
    }

    .bg-3 {
      position: absolute;
      width: 80%;
      bottom: 0;
      left: 0;
    }

    .bg-4 {
      position: absolute;
      bottom: 0;
    }
  }

  .section3-bg {
    position: relative;
    display: flex;
    height: 100vh;
    overflow: hidden;
    .box-bg {
      position: absolute;
      width: 100%;
      height: 100vh;
      background: linear-gradient(0deg, #CC4F36, #000000);
    }
    .box-bg-2 {
      background: linear-gradient(0deg, #FFB3A4, #CC4F36);
    }

    .box-bg-3 {
      background: #FFB3A4;
    }
  }
</style>
