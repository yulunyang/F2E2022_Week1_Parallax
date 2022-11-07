<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="Section6 py-28">
    <div class="Section6-titles">
      <h6 class="Section6_title1 text-4xl xl:text-5xl text-white leading-relaxed text-center mb-5"></h6>
      <h6 class="Section6_title2 text-4xl xl:text-5xl text-white leading-relaxed text-center"></h6>
    </div>


    <div class="w-full mb-36"><img src="@/assets/img/cars.png" alt="" class="mx-auto object-contain w-full"></div>

    <div class="flex justify-center">
      <div>
        <div class="mb-24 leading-relaxed">
          <p class="proj-text-tertiary text-left text-4xl xl:text-5xl mb-6">評審機制</p>
          <p class="mb-6 text-white text-left text-base xl:text-lg leading-normal">初選：<br/>將由六角學院前端、UI 評審進行第一波篩選，<br/>並於 12/5（五）公布初選佳作名單</p>
          <p class="text-white text-left text-base xl:text-lg leading-normal">初選：<br/>將由六角學院前端、UI 評審進行第一波篩選，<br/>並於 12/5（五）公布初選佳作名單</p>
        </div>
        <div>
          <p class="proj-text-tertiary text-left text-4xl xl:text-5xl mb-6">獎項</p>
          <ul class="text-left text-lg text-white list-disc leading-normal">

            <li class="mb-6">
              <p class="text-2xl">初選佳作 共六十位 <span class="proj-text-primary">數位獎狀</span></p>
              <p> 每週主題個人組十位、團體組十組</p>
            </li>
            <li class="mb-6">
              <p class="text-2xl">個人企業獎 共六位 <span class="proj-text-primary">3,000/位</span></p>
              <p> 每週主題各 2 名，設計 1 位、前端 1 位</p>
            </li>
            <li class="mb-6">
              <p class="text-2xl">團體企業獎 共三組 <span class="proj-text-primary">NTD 10,000/組</span></p>
              <p> 每週主題各 1 組</p>
            </li>
            <li>
              <p class="text-2xl">以上皆提供完賽數位獎狀</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import { gsap, ScrollTrigger, MotionPathPlugin, TextPlugin } from 'gsap/all'
gsap.registerPlugin(gsap, ScrollTrigger, MotionPathPlugin, TextPlugin )
import { onMounted } from 'vue'
export default {
  setup () {
    onMounted(()=> {
      setGSAP()
    })

    const setGSAP = () => {
      gsap.to(".Section6_title1", {
        text: "區區修煉已經無法滿足了嗎？",
        duration: 4,
        scrollTrigger: {
          trigger: ".Section6_title1",
          toggleActions: "play pause resume reset",
        }
      })
      gsap.to(".Section6_title2", {
        text: "還有比賽等著你！",
        duration: 4,
        scrollTrigger: {
          trigger: ".Section6_title2",
          toggleActions: "play pause resume reset",
        },
        delay: 4
      })
    }
    return {
      setGSAP
    }
  }
}
</script>

<style scoped lang="scss">
.Section6-titles {
  min-height: 160px;
}
.Section6 {
  // ul {
  //   list-style-type: square;
  // }
}
</style>
