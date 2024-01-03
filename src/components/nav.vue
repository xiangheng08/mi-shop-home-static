<template>
  <div class="header">
    <div class="nav">
      <div class="topbar">
        <a href="#">小米官网</a>
        <span class="sep">|</span>
        <a href="#">小米商城</a>
        <span class="sep">|</span>
        <a href="#">小米澎湃OS</a>
        <span class="sep">|</span>
        <a href="#">IoT</a>
        <span class="sep">|</span>
        <a href="#">云服务</a>
        <span class="sep">|</span>
        <a href="#">天星数科</a>
        <span class="sep">|</span>
        <a href="#">有品</a>
        <span class="sep">|</span>
        <a href="#">小爱开放平台</a>
        <span class="sep">|</span>
        <a href="#">资质证照</a>
        <span class="sep">|</span>
        <a href="#">协议规则</a>
        <span class="sep">|</span>
        <a href="#" class="download-app">
          下载app
          <div class="appcode">
            <img src="/images/download-app.png" alt="download-app" />
            <p>小米商城APP</p>
          </div>
        </a>
        <span class="sep">|</span>
        <a href="#">Select Location</a>
      </div>
      <div class="right">
        <a href="#">登录</a>
        <span class="sep">|</span>
        <a href="#">注册</a>
        <span class="sep">|</span>
        <a href="#">消息通知</a>
        <div
          class="cart"
          @mouseenter="cartHover = true"
          @mouseleave="cartHover = false"
        >
          <a href="#" :class="{ active: cartActive }">
            <em class="iconfont-cart"></em>购物车<span>（0）</span>
          </a>
          <div class="cart-menu" :class="{ active: cartShow }">
            <div class="cart-content">
              <div class="loading" v-show="cartLoading">
                <div class="loader"></div>
              </div>
              <div class="empty-msg" v-show="showEmptyMsg">
                购物车中还没有商品，赶紧选购吧！
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const cartHover = ref(false);
const cartActive = ref(false);
const cartShow = ref(false);
const cartLoading = ref(true);
const showEmptyMsg = ref(false);

watch(cartHover, (val) => {
  if (val) {
    cartActive.value = true;
    cartShow.value = true;
    cartLoading.value = true;
    showEmptyMsgHandler();
  } else {
    clearTimeout(timer);
    cartShow.value = false;
    cartLoading.value = false;
    setTimeout(() => {
      cartActive.value = false;
      showEmptyMsg.value = false;
    }, 300);
  }
});

let timer;

const showEmptyMsgHandler = () => {
  timer = setTimeout(() => {
    showEmptyMsg.value = true;
    cartLoading.value = false;
  }, 1000);
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  min-width: var(--width);
  height: 40px;
  background-color: #333333;

  .nav {
    width: var(--width);
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    font-size: 12px;

    a {
      line-height: 40px;
      color: #b0b0b0;
      text-decoration: none;
      transform: translateY(0.1em);

      &:hover {
        color: #fff;
      }
    }

    .sep {
      margin: 0 0.58em;
      color: #424242;
      font-family: sans-serif;
    }

    .topbar {
      height: 100%;
      display: flex;

      .download-app {
        position: relative;
        z-index: 999;

        &:hover {
          &::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 0;
            margin-left: -8px;
            border-width: 0 8px 8px;
            border-style: solid;
            border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #fff;
          }

          .appcode {
            height: 148px;
          }
        }

        .appcode {
          position: absolute;
          left: 50%;
          top: 100%;
          transform: translateX(-50%);
          width: 124px;
          height: 0;
          background: #fff;
          border-radius: 2px;
          box-shadow: 0 1px 5px #aaa;
          color: #333;
          font-size: 14px;
          text-align: center;
          z-index: 999;
          transition: height 0.3s;
          overflow: hidden;

          img {
            display: block;
            margin: auto;
            margin-top: 17px;
            width: 90px;
            height: 90px;
          }
        }
      }
    }

    .right {
      .sep {
        margin: 0 0.55em;
      }
    }

    .cart {
      position: relative;
      float: right;
      width: 120px;
      height: 40px;
      margin-left: 25px;
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
      font-size: 12px;
      z-index: 999;

      a {
        position: relative;
        z-index: 32;
        display: block;
        line-height: 40px;
        text-align: center;
        color: #b0b0b0;
        background: #424242;
        transform: translateY(0);

        em {
          margin-right: 4px;
          font-size: 20px;
          line-height: 20px;
          vertical-align: -4px;
        }

        &.active {
          color: #ff6700;
          background: #fff;
        }
      }

      .cart-menu {
        width: 316px;
        height: 0;
        position: absolute;
        top: 100%;
        right: 0;
        background-color: #fff;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
        transition: height 0.3s;
        overflow: hidden;
        z-index: 1;

        &.active {
          height: 100px;
        }

        .cart-content {
          padding-top: 20px;

          .loading {
            margin: 0 20px 20px;
            padding: 20px 0;

            .loader {
              position: relative;
              margin: 0 auto;
              width: 4px;
              height: 20px;
              background: #ff6700;
              overflow: visible;
              -webkit-animation-delay: 0s;
              animation-delay: 0s;
              -webkit-transform: scale(1);
              -ms-transform: scale(1);
              transform: scale(1);

              &,
              &::before,
              &::after {
                animation-name: loader;
                transform-origin: 50% 50%;
                animation-duration: 0.3s;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
                animation-direction: alternate-reverse;
              }

              &::before,
              &::after {
                position: absolute;
                left: 50%;
                top: 50%;
                width: 4px;
                height: 20px;
                content: "";
                background: #ff6700;
              }

              &::before {
                margin: -10px 0 0 -10px;
                animation-delay: 0.25s;
              }

              &::after {
                margin: -10px 0 0 6px;
                animation-delay: 0.5s;
              }
            }
          }

          .empty-msg {
            margin: 0 20px 20px;
            text-align: center;
            padding: 20px 0 20px;
            color: #424242;
          }
        }
      }
    }
  }
}

@keyframes loader {
  0% {
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    opacity: 0.2;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
</style>
