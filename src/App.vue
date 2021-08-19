<template lang='pug'>
Menu
Background
router-view
</template>

<script>
import Menu from './components/Menu.vue'
import Background from './components/Background.vue'

export default {
  components: {
    Menu,
    Background
  },
  setup() {
    return {

    }
  }
}
</script>

<style lang='stylus'>
@import './css/style.styl'



#app 
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  // margin-top 60px

</style>
