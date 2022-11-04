<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="Section8 proj-bg-primary relative overflow-hidden py-28">
    <diamondLittle class="z-10 top-0 left-0" />
    <diamondMiddle class="z-10 top-0 left-0" />
    <diamondLarge class="z-30 top-0 left-0 absolute" />
    <div class="proj-container mx-auto px-6 z-20">
      <h6 class="text-white text-5xl mb-4"><span class="diamond">鑽石級</span>贊助商</h6>
      <div class="flex flex-wrap mb-16">

        <div class="w-1/3 p-5">
          <div class="outer">
            <div class="inner mx-auto border-0 absolute w-full h-full flex items-center">
              <img src="@/assets/img/sponsor/blockstudio_logo.png" alt="" class="object-contain block mx-auto">
            </div>
          </div>
        </div>
        <div class="w-1/3 p-5">
          <div class="outer">
            <div class="inner mx-auto border-0 absolute w-full h-full flex items-center">
              <img src="@/assets/img/sponsor/titan_logo.png" alt="" class="object-contain block mx-auto">
            </div>
          </div>
        </div>
        <div class="w-1/3 p-5">
          <div class="outer">
            <div class="inner mx-auto border-0 absolute w-full h-full flex items-center">
              <img src="@/assets/img/sponsor/kdan_logo.png" alt="" class="object-contain block mx-auto">
            </div>
          </div>
        </div>
      </div>
      <h6 class="text-white text-5xl mb-4">共同推廣</h6>
      <div class="flex flex-wrap">

        <div class="w-1/3 p-5">
          <div class="outer">
            <div class="inner mx-auto border-0 absolute w-full h-full flex items-center">
              <img src="@/assets/img/sponsor/Vector.png" alt="" class="object-contain block mx-auto">
            </div>
          </div>
        </div>
        <div class="w-1/3 p-5">
          <div class="outer">
            <div class="inner mx-auto border-0 absolute w-full h-full flex items-center">
              <!-- <img src="@/assets/img/sponsor/blockstudio_logo.png" alt="" class="object-contain block mx-auto"> -->
            </div>
          </div>
        </div>
        <div class="w-1/3 p-5">
          <div class="outer">
            <div class="inner mx-auto border-0 absolute w-full h-full flex items-center">
              <img src="@/assets/img/sponsor/dottedSign.png" alt="" class="object-contain block mx-auto">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin } from 'gsap/all'
gsap.registerPlugin(gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin )
import { onMounted, onUnmounted } from 'vue'
import diamondLittle from '@/components/modules/diamond_little.vue'
import diamondMiddle from '@/components/modules/diamond_middle.vue'
import diamondLarge from '@/components/modules/diamond_large.vue'
export default {
  components: {
    diamondMiddle,
    diamondLittle,
    diamondLarge
  },
  setup () {
    onMounted(()=> {
    })

    onUnmounted(()=> {
    })

    return {}
  }
}
</script>

<style scoped lang="scss">
.Section8 {
  .diamond {
    color: #FFC612;
  }
  .outer {
    position: relative;
    width: 100%;
    background:white;
    display: block;
    &:after {
      content: "";
      display: block;
      padding-Bottom: 100%;
    }
    .inner {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      // padding: 1em;
    }
  }
}
</style>
