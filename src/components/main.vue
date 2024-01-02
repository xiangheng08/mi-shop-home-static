<template>
  <div class="main">
    <div class="container">
      <banner1></banner1>
      <brick title="手机" :more="true" promo="/images/promo/4.webp" :data="brick1Data"></brick>
      <brick title="智能穿戴" promo="/images/promo/4.webp" :data="brick2Data"></brick>
    </div>
  </div>
</template>

<script setup lang="ts">
import banner1 from './banner1.vue'
import brick from './brick.vue'

import brick1Data from '../data/brick1.json'
import brick2Data from '../data/brick2.json'
</script>
  
<style scoped lang="scss">
.main{
  padding-top: 4px;
  padding-bottom: 12px;
  .container{
    width: var(--width);
    margin: 0 auto;
  }
}
</style>