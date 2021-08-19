<template lang="pug">
.menu
  .nav
    router-link(v-for='(list,id) in menu' :key='id' :to='list.url') {{list.name}}
  .bars(@click='handleOpen')
    i.fas.fa-bars
.mobile-menu(:class='[{"open": isOpen }]')
  .close
    i.fas.fa-times(@click='handleOpen')
  router-link(v-for='(list,id) in menu' :key='id' :to='list.url') {{list.name}}
</template>

<style lang="stylus" scoped>
@import '../css/style.styl'

.menu
  size(,5rem)
  position fixed
  // position relative
  // border 1px solid #222
  // padding 0 2rem
  flexCenter()
  background-color primary_color

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
  size(30%,100vh,)
  background-color #333
  position fixed
  right -30%
  flexCenter(flex-start,flex-start,column)
  padding-top 5%
  padding-left 2rem
  transition 0.5s
  .close
    size(100%,auto)
    flexCenter(flex-end,center,)
    padding-right 2rem
    i
      color #eee
  a
    color #eee

  &.open
    right 0
    transition 0.5s


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
      isClose.value = !isClose.value
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