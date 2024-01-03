<template>
  <div class="tool-bar">
    <a href="#">
      <div class="icon">
        <img src="/images/tool-bar/phone.png" class="static" />
        <img src="/images/tool-bar/phone_hover.png" class="hover" />
      </div>
      <span class="text">手机APP</span>
      <div class="pop-content">
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/78c30d4f259ed43ab20e810a522a6249.png"
        /><span class="desc"> 扫码领取新人百元礼包 </span>
      </div>
    </a>
    <a href="#">
      <div class="icon">
        <img src="/images/tool-bar/user.png" class="static" />
        <img src="/images/tool-bar/user_hover.png" class="hover" />
      </div>
      <span class="text">个人中心</span>
    </a>
    <a href="#">
      <div class="icon">
        <img src="/images/tool-bar/after-sales.png" class="static" />
        <img src="/images/tool-bar/after-sales_hover.png" class="hover" />
      </div>
      <span class="text">售后服务</span>
    </a>
    <a href="#">
      <div class="icon">
        <img src="/images/tool-bar/service.png" class="static" />
        <img src="/images/tool-bar/service_hover.png" class="hover" />
      </div>
      <span class="text">人工客服</span>
    </a>
    <a href="#">
      <div class="icon">
        <img src="/images/tool-bar/cart.png" class="static" />
        <img src="/images/tool-bar/cart_hover.png" class="hover" />
      </div>
      <span class="text">购物车</span>
    </a>
    <a href="#" class="backtop" @click="toTop" v-show="showToTop">
      <div class="icon">
        <img src="/images/tool-bar/totop.png" class="static" />
        <img src="/images/tool-bar/totop_hover.png" class="hover" />
      </div>
      <span class="text">回顶部</span></a
    >
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount } from "vue";

const showToTop = ref(false);

const onScroll = (event) => {
  showToTop.value = document.documentElement.scrollTop > 1000;
};

window.addEventListener("scroll", onScroll);
onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));

const toTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<style scoped lang="scss">
.tool-bar {
  position: fixed;
  bottom: 70px;
  right: 0;
  z-index: 99;
  a {
    color: #757575;
    text-decoration: none;
    position: relative;
    display: block;
    width: 82px;
    height: 90px;
    margin-top: -1px;
    background-color: #fff;
    border: 1px solid #f5f5f5;
    text-align: center;
    .icon {
      position: relative;
      width: 30px;
      height: 30px;
      margin: 0 auto 8px;
      padding-top: 18px;
      img {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 30px;
        height: 30px;
        -webkit-transition: opacity 0.3s;
        transition: opacity 0.3s;
        &.hover {
          opacity: 0;
        }
      }
    }
    .text {
      color: #757575;
      -webkit-transition: color 0.3s;
      transition: color 0.3s;
      text-align: center;
      font-size: 14px;
    }
    .pop-content {
      position: absolute;
      left: 0;
      top: 0;
      padding: 14px;
      background: #fff;
      border: 1px solid #f5f5f5;
      -webkit-transition: opacity 0.3s;
      transition: opacity 0.3s;
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 0;
      visibility: hidden;
      &:before {
        content: "";
        position: absolute;
        top: 21%;
        width: 0;
        height: 0;
        border-width: 10px;
        border-style: solid;
        overflow: hidden;
        right: -19px;
        border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #f5f5f5;
        z-index: 1;
      }
      &::after {
        content: "";
        position: absolute;
        top: 21%;
        width: 0;
        height: 0;
        border-width: 10px;
        border-style: solid;
        overflow: hidden;
        right: -18px;
        border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #fff;
        z-index: 2;
      }
      img {
        display: block;
        width: 100px;
        height: 100px;
        margin: 6px auto;
      }
      .desc {
        display: block;
        width: 82px;
        margin: 14px auto 0;
        color: #757575;
        text-align: center;
      }
    }
    &:hover {
      img.hover {
        opacity: 1;
      }
      img.static {
        opacity: 0;
      }
      .text {
        color: var(--active-color);
      }
      .pop-content {
        -webkit-transform: translate3d(-110%, 0, 0);
        transform: translate3d(-110%, 0, 0);
        opacity: 1;
        visibility: visible;
      }
    }
    &.backtop {
      margin-top: 14px;
      border-top: 1px solid #f5f5f5;
    }
  }
}
</style>
