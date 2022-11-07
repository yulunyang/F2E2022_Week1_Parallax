<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="Section7 py-28">
    <div class="proj-bg-primary text-center text-2xl xl:text-4xl py-6">
      <h6 class="text-white">常見問答</h6>
    </div>
    <div class="proj-container mx-auto md:px-6 py-12">
      <div class="mb-12">
        <ul class="flex text-base xl:text-2xl">
          <li class="w-1/4 p-1 md:p-2">
            <a class="block qa-button py-3 button cursor-pointer" :class="{ 'active': selectedIdx === 0 }" @click="selectedIdx = 0"><span class="hidden lg:inline-block">一般</span>常見問答</a>
          </li>
          <li class="w-1/4 p-1 md:p-2">
            <a class="block qa-button py-3 button cursor-pointer" :class="{ 'active': selectedIdx === 1 }" @click="selectedIdx = 1">UI設計師</a>
          </li>
          <li class="w-1/4 p-1 md:p-2">
            <a class="block qa-button py-3 button cursor-pointer" :class="{ 'active': selectedIdx === 2 }" @click="selectedIdx = 2">前端工程師</a>
          </li>
          <li class="w-1/4 p-1 md:p-2">
            <a class="block qa-button py-3 button cursor-pointer" :class="{ 'active': selectedIdx === 3 }" @click="selectedIdx = 3">團體組</a>
          </li>
        </ul>
      </div>

      <div class="mb-24 md:mb-36 qa-list px-2">
        <ul class="xl:text-lg tracking-wide">
          <li v-for="(item, idx) in computedData" :key="idx" class="mb-8 text-left">
            <p class="question proj-text-tertiary">Q:{{ item.title }}</p>
            <p class="answer text-white">A:{{ item.text }}</p>
          </li>
        </ul>
      </div>

      <div>
        <a class="block button py-3 xl:py-5 cursor-pointer text-3xl xl:text-5xl" href="https://2022.thef2e.com/signup" target="_blank">立即註冊報名!</a>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, reactive, computed } from 'vue'
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
      { title: '到時投稿到平台是提供什麼呢？我也不像是工程師可以有 CODEPEN 上傳。', text: '其中投稿的欄位裡面會有一個「線上標示文件」，像是 Adobe XD 便有提供該服務(範例連結)，屆時提供標示文件後，便可讓其他前端工程師採用你的設計稿來開發。' },
      { title: '投稿上去的 UI 作品，我知道需要授權讓前端工程師組做成 Web 介面，那授權部分可以設定嗎？', text: '會有的，屆時平台投稿流程上，會讓您的作品可以選擇 CC0、CC BY 等授權，以保障您的 UI 作品權益。' },
      { title: '一定要上傳「線上標示文件」嗎？', text: '是的，因為這樣才有辦法讓其他前端工程師，能採用您的設計稿，將您的設計稿實作出網頁格式。如果您是使用 Sketch，也可使用 Sketch Measure 編譯出來後，壓縮 ZIP 到雲端空間 (Dropbox、Google Drive)。' },
      { title: '不能使用 PS、Illustrator 設計嗎？', text: '只要您能找到 PS 或 Illustrator 產出線上標示文件的方式就可以，因為前端工程師大部分皆比較少具有繪圖軟體，所以用線上標示文件將會減少許工程師協作上的溝通時間。' },
      { title: '當每週一題目出來後，我有一些設計進度也可以先投稿嗎？', text: '可以，團隊在協作過程中，一定也會先出些進度提供前端切版，有進度時您也可以先投稿，讓前端工程師可以先接手，之後再透過 FB 社團來溝通進度即可。' }
    ])
    const qaData2 = reactive([
      { title: '我可以不依照設計稿，自己做版面嗎？因為我想多練習 JS / 後端', text: '可以，The F2E 活動是希望讓大家人人有功練，所以依照你自己想投入的方向練功即可。CSS 也可以用框架，例如 Bootstrap。' },
      { title: '前端介面一定要長得一模一樣嗎？', text: '不用，依照自己的想法來開發也可以' },
      { title: '有現成的網頁靜態頁面嗎？我想只練習 JS / 後端就好', text: '這段我們不會提供，畢竟每個人習慣的 Coding style 又不一樣，產出的 HTML、CSS 並非是自己習慣的 Layout 反而會更花時間。' },
      { title: '那我只想要練習 JS，HTML/CSS 我用陽春版，不依照設計稿開發可以嗎？', text: '可以，你可以當做我們就是出一個主題，你依照那主題當作參考方向來開發即可。' }
    ])
    const qaData3 = reactive([
      { title: '請問團體組最多幾人？', text: '最多 4 人，投稿作品時請派一位組長來投稿即可。' },
      { title: '我對獎項有興趣，可以只做第三道主題就好嗎？', text: '可以，您可以在這場活動中，和組員一起打磨第三道主題，不用三個主題都做。' },
      { title: '那團體組第三道主題最晚投稿期限為？', text: '團體組投稿第三週 UI 最晚投稿時間為 11/21(一) 中午 12 點，前端最晚投稿期限為 11/28(一) 中午 12 點。' },
      { title: '我們團體組比較想做手機 APP，可以投稿並符合評審門檻嗎？', text: '您可以開發手機 APP，若有在期限前投稿也能獲得數位獎狀。但評審門檻僅限 Web 瀏覽器應用開發，Android、iOS APP 則不在評審範圍內，故不符合評審門檻。' },
      { title: '請問除了前端開發、UI 設計外，還能做其他加值應用嗎？例如後端動態應用整合？', text: '可以的，只要能透過網頁瀏覽器操控您的服務，並有使用到 TDX API 的任何一個 API，您可以依照本次主題「全台公車動態時刻查詢應用服務」做最大的加值整合應用，甚至搭配後端應用，整合多個外部 API 也是可以的。' },
      { title: '團體組的 UI 設計稿，可以讓『個人組-前端工程師』組別採用嗎？', text: '不能，預設是不能讓『個人組-前端工程師』採用。' }
    ])

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
  .qa-list {
    min-height: 552px;
  }
</style>
