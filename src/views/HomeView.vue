<template>
  <div>
    <LoadingModule v-if="isLoading" />
    <div v-else class="bg-black">
      <Section1 class="z-50" />
      <Section2 class="z-50" />
      <Section3  />
      <Section4 class="z-50" />
      <Section5 class="z-50" />
      <Section6 class="z-50" />
      <Section7 class="z-50" />
      <Section8 class="z-50" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import LoadingModule from '@/components/modules/LoadingModule'
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'
import Section4 from '@/components/Section4'
import Section5 from '@/components/Section5'
import Section6 from '@/components/Section6'
import Section7 from '@/components/Section7'
import Section8 from '@/components/Section8'
import { onMounted } from 'vue'
export default {
  components: {
    LoadingModule,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7,
    Section8
  },
  setup () {
    const isLoading = ref(false)
    const timer = ref(null)

    onMounted(() => {
      isLoading.value ? setTimeOut() : null
    })

    const setTimeOut = () => {
      if (isLoading.value) {
        const timeout = setTimeout(() => {
          isLoading.value = false
        }, 4000)
        clearTimeout(timeout.value)
      }
    }

    return {
      isLoading,
      timer,
      setTimeOut
    }
  }
}
</script>

<style scoped>
</style>
