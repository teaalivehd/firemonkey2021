<template lang="pug">
.menu
  .nav
    router-link(v-for='(list,id) in menu' :key='id' :to='list.url') {{list.name}}
  .bars(@click='handleOpen')
    i.fas.fa-bars
.mobile-menu(:class='[{"open": isOpen }]')
  .close
    i.fas.fa-times(@click='handleOpen')
  router-link.list(v-for='(list,id) in menu' :key='id' :to='list.url' @click='handleClose') {{list.name}}
  .overlay(:class='[{"open": isOpen }]')
</template>

<style lang="stylus" scoped>
@import '../css/style.styl'

.menu
  size(,5rem)
  position fixed
  flexCenter()
  background-color primary_color
  z-index 1
  .nav
    a
      font-size 2rem
      text-decoration none
      color #222
      margin 0 1rem

  .bars
    flexCenter()
    display none
    // border 1px solid #222
    font-size 2rem

.mobile-menu
  font-size 2rem
  size(60%,100vh,)
  background-color #333
  position fixed
  right -60%
  flexCenter(flex-start,flex-start,column)
  padding-top 5%
  padding-left 3rem
  transition 0.5s
  z-index 1
  .close
    size(100%,auto)
    flexCenter(flex-end,center,)
    margin-bottom 2rem
    padding-right 2rem
    i
      color #eee
  a.list
    color #eee

  .overlay
    position fixed
    size(100%,100vh)
    background-color rgba(0,0,0,0.5)
    left 100%
    top 0px
    z-index -1
    transition 0.5s
    &.open
      left 0px
      
  &.open
    right 0
  
  


@media screen and (max-width: 640px)
  .menu
    transition 0.5s
    .nav
      display none
    .bars
      position absolute
      right 1rem
      display block
      color #fff
  
  // .mobile-menu
  //   font-size 1rem


</style>

<script>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default {
  setup() {

    const route = useRoute()

    const menu = ref([
      {
        name: 'home',
        url:'/'
      },
      {
        name: 'portfolio',
        url:'/portfolio',
      },
      {
        name: 'about',
        url:'/about',
      },
      {
        name: 'contact',
        url:'/contact',
      },


    ])

    const isOpen = ref(false)

    const isClose = ref(false)

    const handleClose = ()=> {
      isOpen.value = false
    }

    const handleOpen = ()=> {
      // console.log(isOpen.value);
      isOpen.value = !isOpen.value
    }

    return {
      menu,
      isClose,
      handleClose,
      isOpen,
      handleOpen
    }
  }
}
</script>