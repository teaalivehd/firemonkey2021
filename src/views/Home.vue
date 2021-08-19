<template lang="pug">
.home
  section
    h1 section1
  section
    h1 section2
</template>

<style lang="stylus" scoped>
@import '../css/style.styl'

.home
  section
    flexCenter()
    size(100%,remHeight)
    
    h1
      color #fff
      
  section:nth-of-type(1)
    background-color transparent
    opacity value
  section:nth-of-type(2)
    background-color #222

</style>