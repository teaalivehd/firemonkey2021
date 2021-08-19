<template lang='pug'>
Menu
Background

router-view( v-slot="{ Component, route  }" )
  transition( name="fade" ) 
    keep-alive
      component( :is="Component" )
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

.fade-enter-active,.fade-leave-active 
  transition opacity 0.5s ease
.fade-enter-from,.fade-leave-to 
  opacity 0

</style>
