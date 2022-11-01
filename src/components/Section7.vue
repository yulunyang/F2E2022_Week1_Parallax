<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="Section7 py-32">
    <div class="proj-bg-primary text-center text-4xl py-6">
      <h6 class="text-white">常見問答</h6>
    </div>
    <div class="proj-container mx-auto px-6 py-12">
      <div class="mb-12">
        <ul class="flex xl:text-3xl">
          <li class="w-1/4 p-2">
            <a class="block qa-button py-3 button cursor-pointer" :class="{ 'active': selectedIdx === 0 }" @click="selectedIdx = 0">一般常見問答</a>
          </li>
          <li class="w-1/4 p-2">
            <a class="block qa-button py-3 button cursor-pointer" :class="{ 'active': selectedIdx === 1 }" @click="selectedIdx = 1">UI 設計師</a>
          </li>
          <li class="w-1/4 p-2">
            <a class="block qa-button py-3 button cursor-pointer" :class="{ 'active': selectedIdx === 2 }" @click="selectedIdx = 2">前端工程師</a>
          </li>
          <li class="w-1/4 p-2">
            <a class="block qa-button py-3 button cursor-pointer" :class="{ 'active': selectedIdx === 3 }" @click="selectedIdx = 3">團體組</a>
          </li>
        </ul>
      </div>

      <div class="mb-36">
        <ul>
          <li v-for="(item, idx) in computedData" :key="idx" class="mb-8 text-left">
            <p class="question proj-text-tertiary">Q:{{ item.title }}</p>
            <p class="answer text-white">A:{{ item.text }}</p>
          </li>
        </ul>
      </div>

      <div class="xl:text-4xl">
        <a class="block button py-3 xl:py-5 cursor-pointer" href="https://2022.thef2e.com/signup">立即註冊報名!</a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin } from 'gsap/all'
gsap.registerPlugin(gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin )
import { onMounted, onUnmounted, ref, reactive, computed } from 'vue'
export default {
  setup () {
    const selectedIdx = ref(0)

    const computedData = computed(() => {
      if (selectedIdx.value === 0) {
        return qaData0
      } else if (selectedIdx.value === 1) {
        return qaData1
      } else if (selectedIdx.value === 2) {
        return qaData2
      } else {
        return qaData3
      }
    })

    const qaData0 = reactive([
      { title: '如果某一週不小心挑戰失敗，是否能再繼續挑戰後面關卡？', text: '可以，儘管那週挑戰失敗，之後您仍可以挑選喜歡的關卡進行挑戰，並在該關卡期限內繳交作品。' },
      { title: '大家都好強，我怕我做的東西沒有達到過關門檻，不敢登錄作品', text: '這個活動並非競爭性質，每個參賽者都是你的隊友，最大的敵人是你自己，因為你必須定期練功前端開發，讓自己能夠順利完賽。' },
      { title: '我不確定自己做的版型有沒有符合過關門檻，要寫到什麼程度才有到過關門檻？', text: '主辦單位其實不會去審核大家的程式碼，只要你認為當週你有針對主題有做到一定程度，就算是半完成品也請大方投稿，不用擔心。' },
      { title: '我已經寫到一半了，但時間快來不及，可以先投稿嗎？', text: '可以，有投稿表示你還會持續努力在這次活動上。' }
    ])

    const qaData1 = reactive([
      { title: '如果某一週不小心挑戰失敗，是否能再繼續挑戰後面關卡？', text: '可以，儘管那週挑戰失敗，之後您仍可以挑選喜歡的關卡進行挑戰，並在該關卡期限內繳交作品。' },
      { title: '大家都好強，我怕我做的東西沒有達到過關門檻，不敢登錄作品', text: '這個活動並非競爭性質，每個參賽者都是你的隊友，最大的敵人是你自己，因為你必須定期練功前端開發，讓自己能夠順利完賽。' },
      { title: '我不確定自己做的版型有沒有符合過關門檻，要寫到什麼程度才有到過關門檻？', text: '主辦單位其實不會去審核大家的程式碼，只要你認為當週你有針對主題有做到一定程度，就算是半完成品也請大方投稿，不用擔心。' },
      { title: '我已經寫到一半了，但時間快來不及，可以先投稿嗎？', text: '可以，有投稿表示你還會持續努力在這次活動上。' }
    ])
    const qaData2 = reactive([
      { title: '如果某一週不小心挑戰失敗，是否能再繼續挑戰後面關卡？', text: '可以，儘管那週挑戰失敗，之後您仍可以挑選喜歡的關卡進行挑戰，並在該關卡期限內繳交作品。' },
      { title: '大家都好強，我怕我做的東西沒有達到過關門檻，不敢登錄作品', text: '這個活動並非競爭性質，每個參賽者都是你的隊友，最大的敵人是你自己，因為你必須定期練功前端開發，讓自己能夠順利完賽。' },
      { title: '我不確定自己做的版型有沒有符合過關門檻，要寫到什麼程度才有到過關門檻？', text: '主辦單位其實不會去審核大家的程式碼，只要你認為當週你有針對主題有做到一定程度，就算是半完成品也請大方投稿，不用擔心。' },
      { title: '我已經寫到一半了，但時間快來不及，可以先投稿嗎？', text: '可以，有投稿表示你還會持續努力在這次活動上。' }
    ])
    const qaData3 = reactive([
      { title: '如果某一週不小心挑戰失敗，是否能再繼續挑戰後面關卡？', text: '可以，儘管那週挑戰失敗，之後您仍可以挑選喜歡的關卡進行挑戰，並在該關卡期限內繳交作品。' },
      { title: '大家都好強，我怕我做的東西沒有達到過關門檻，不敢登錄作品', text: '這個活動並非競爭性質，每個參賽者都是你的隊友，最大的敵人是你自己，因為你必須定期練功前端開發，讓自己能夠順利完賽。' },
      { title: '我不確定自己做的版型有沒有符合過關門檻，要寫到什麼程度才有到過關門檻？', text: '主辦單位其實不會去審核大家的程式碼，只要你認為當週你有針對主題有做到一定程度，就算是半完成品也請大方投稿，不用擔心。' },
      { title: '我已經寫到一半了，但時間快來不及，可以先投稿嗎？', text: '可以，有投稿表示你還會持續努力在這次活動上。' }
    ])
    onMounted(()=> {
    })

    onUnmounted(()=> {
    })


    return {
      selectedIdx,
      qaData0,
      qaData1,
      qaData2,
      qaData3,
      computedData
    }
  }
}
</script>

<style scoped lang="scss">
  .qa-button {
    color: #B82A06;
    background: #FFFFFF;
  }
  .active {
    background: #3C0C00;
    color: #B82A06;
  }
</style>
