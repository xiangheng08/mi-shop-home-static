<template>
  <div class="main">
    <div class="container">
      <banner1></banner1>
      <brick
        title="手机"
        :more="true"
        promo="/images/promo/4.webp"
        :data="brick1Data"
      ></brick>
      <brick
        title="智能穿戴"
        promo="/images/promo/7.webp"
        :data="brick2Data"
      ></brick>
      <brick
        title="笔记本 | 平板"
        promo="/images/promo/8.webp"
        :data="brick3Data"
      ></brick>
      <brick
        title="家电"
        :promo="['/images/promo/5.webp', '/images/promo/6.webp']"
        :data="brick4Data"
      ></brick>
      <brick
        title="生活电器"
        :promo="['/images/promo/5.webp', '/images/promo/6.webp']"
        :data="brick2Data"
      ></brick>
      <brick
        title="厨房电器"
        :promo="['/images/promo/5.webp', '/images/promo/6.webp']"
        :data="brick2Data"
      ></brick>
      <brick
        title="智能家居"
        :promo="['/images/promo/5.webp', '/images/promo/6.webp']"
        :data="brick2Data"
      ></brick>
      <brick
        title="运动出行"
        :promo="['/images/promo/5.webp', '/images/promo/6.webp']"
        :data="brick2Data"
        promo-height="612"
      ></brick>
      <banner2></banner2>
    </div>
  </div>
</template>

<script setup lang="ts">
import banner1 from "./banner1.vue";
import banner2 from "./banner2.vue";
import brick from "./brick.vue";

import brick1Data from "../data/brick1.json";
import brick2Data from "../data/brick2.json";
import brick3Data from "../data/brick3.json";
import brick4Data from "../data/brick4.json";
</script>

<style scoped lang="scss">
.main {
  min-width: var(--width);
  padding-top: 4px;
  padding-bottom: 12px;
  .container {
    width: var(--width);
    margin: 0 auto;
  }
}
</style>
