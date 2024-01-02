<template>
  <div class="hero">
    <div class="container">
      <div class="swiper" @mouseenter="stopSwiper" @mouseleave="startSwiper">
        <img
          :src="item"
          alt=""
          v-for="(item, index) in swiperData"
          :key="index"
          :class="{ show: swiperShow === index }"
        />
        <div class="swiper-pagination">
          <div
            class="swiper-pagination-bullet"
            v-for="(item, index) in swiperData.length"
            :key="item"
            @click="clickSwiper(index)"
            :class="{ active: swiperShow === index }"
          ></div>
        </div>
        <div class="category-list">
          <div
            class="category-item"
            v-for="(item, index) in category"
            :key="item.name"
            @mouseenter="activeCategory = index"
            @mouseleave="activeCategory = -1"
          >
            <a href="#">
              {{ item.name }}
              <em class="iconfont-arrow-right-big"></em>
            </a>
            <div class="children"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import swiperData from "../data/swiper.json";
import category from "../data/category.json";

const swiperShow = ref(0);

let timer;
const startSwiper = () => {
  timer = setInterval(() => {
    swiperShow.value++;
    if (swiperShow.value === swiperData.length) {
      swiperShow.value = 0;
    }
  }, 5000);
};

const stopSwiper = () => clearInterval(timer);

const relaodSwiper = () => {
  stopSwiper();
  startSwiper();
};

const clickSwiper = (index) => {
  swiperShow.value = index;
  relaodSwiper();
};

startSwiper();

const activeCategory = ref(-1);
</script>

<style scoped lang="scss">
.hero {
  width: 100%;
  .container {
    width: var(--width);
    margin: auto;
    .swiper {
      width: 100%;
      height: 460px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
        transition: opacity 0.8s;
        cursor: pointer;
        &.show {
          opacity: 1;
        }
      }

      .swiper-pagination {
        position: absolute;
        right: 30px;
        bottom: 20px;
        z-index: 9999;
        display: flex;
        .swiper-pagination-bullet {
          margin: 0 4px;
          width: 6px;
          height: 6px;
          border: 2px solid #fff;
          border-color: hsla(0, 0%, 100%, 0.3);
          border-radius: 10px;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.4);
          opacity: 1;
          &.active,
          &:hover {
            background: hsla(0, 0%, 100%, 0.4);
            border-color: rgba(0, 0, 0, 0.4);
          }
        }
      }

      .category-list {
        position: absolute;
        left: 0;
        top: 1;
        width: 234px;
        height: 420px;
        font-size: 14px;
        background: rgba(105, 101, 101, 0.6);
        color: #fff;
        padding: 20px 0;
        .category-item {
          position: relative;
          a {
            padding-left: 30px;
            height: 42px;
            line-height: 42px;
            color: #fff;
            text-decoration: none;
            em {
              position: absolute;
              top: 12px;
              right: 20px;
              font-size: 16px;
              line-height: 16px;
              color: #e0e0e0;
            }
          }
          &:hover {
            background-color: var(--active-color);
          }
        }
      }
    }
  }
}
</style>
