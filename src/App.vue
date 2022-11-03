<template>
  <HeaderSection />
  <router-view />
</template>
<script>
import HeaderSection from '@/components/modules/headerSection.vue'
export default ({
  components: {
    HeaderSection
  },
  setup () {

  },
})
</script>

<style lang="scss">
#app {
  font-family: 'cubic-11';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: black;
  // max-width: 1920px;
  // margin-left: auto;
  // margin-right: auto;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
