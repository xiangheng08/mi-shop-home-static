<template>
  <div class="site">
    <div class="container">
      <div class="logo">
        <img src="/images/logo-mi2.png" alt="" />
      </div>
      <div class="nav">
        <ul>
          <li
            v-for="(item, index) in navList"
            :key="item"
            @mouseenter="keywordItemMouseenter(index)"
            @mouseleave="keywordItemMouseleave(index)"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="search">
        <div class="form">
          <input
            type="text"
            class="input"
            @focus="inputFocus = true"
            @blur="inputFocus = false"
            :class="{ focus: inputFocus }"
            v-model="keyword"
            @keyup.up="onKeyup_up"
            @keyup.down="onKeyup_down"
            placeholder="Redmi K70 Pro"
            ref="inputRef"
          />
          <input
            type="button"
            value=""
            class="btn iconfont"
            :class="{ focus: inputFocus }"
          />
          <div class="keyword-list" v-show="inputFocus">
            <div
              class="keyword-item"
              v-for="(item, index) in keywordList"
              :key="item"
              :class="{ active: index === _index }"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="nav-menu"
      :class="{ active: navMenuShow }"
      @mouseenter="keywordItemMouseenter(-1)"
      @mouseleave="keywordItemMouseleave(-1)"
    >
      <div class="container">
        <div
          class="first"
          v-for="(item, index) in activeFirstData"
          :key="index"
        >
          <a href="#">
            <div class="pic">
              <img :src="item.pic" alt="" />
            </div>
            <p class="name">{{ item.name }}</p>
            <p class="price">{{ item.price }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import firstData from "../data/firstData.json";

const navList = ref([
  "Xiaomi手机",
  "Redmi手机",
  "电视",
  "笔记本",
  "平板",
  "家电",
  "路由器",
  "服务中心",
  "社区",
]);

const inputRef = ref(null);

const inputFocus = ref(false);
const keyword = ref("");
const keywordList = ref([
  "手机换新",
  "Redmi K70 Pro",
  "洗衣机",
  "空调",
  "冰箱",
  "电视",
  "红米",
  "耳机",
]);

let _index = ref(-1);

const onKeyup_up = () => {
  _index.value--;
  if (_index.value < 0) {
    _index.value = keywordList.value.length - 1;
  }
  keyword.value = keywordList.value[_index.value];
};

const onKeyup_down = () => {
  _index.value++;
  if (_index.value > keywordList.value.length - 1) {
    _index.value = 0;
  }
  keyword.value = keywordList.value[_index.value];
};

const navMenuShow = ref(false);
const navMenuType = ref(0);

const keywordItemMouseenter = (i) => {
  if (i < 7) {
    navMenuShowFn();
    if (i !== -1) {
      navMenuType.value = i;
    }
  }
};
const keywordItemMouseleave = (i) => {
  if (i < 7) {
    navMenuNotShowFn();
    if (i !== -1) {
      navMenuType.value = i;
    }
  }
};
let timer1;
let timer2;
const navMenuShowFn = () => {
  clearTimeout(timer1);
  clearTimeout(timer2);
  timer1 = setTimeout(() => {
    navMenuShow.value = true;
    inputRef.value.blur();
  }, 200);
};
const navMenuNotShowFn = () => {
  clearTimeout(timer1);
  clearTimeout(timer2);
  timer2 = setTimeout(() => (navMenuShow.value = false), 200);
};

const activeFirstData = computed(() => {
  return firstData[navMenuType.value];
});
</script>

<style scoped lang="scss">
.site {
  width: 100%;
  min-width: var(--width);
  height: 100px;
  background-color: #fff;

  .container {
    width: var(--width);
    margin: 0 auto;
    height: 100%;
    display: flex;

    .logo {
      margin-top: 22px;
      width: 56px;

      img {
        width: 56px;
        height: 56px;
      }
    }

    .nav {
      margin-left: 178px;
      height: 100%;

      ul {
        height: 100%;
        display: flex;

        li {
          cursor: pointer;
          color: #333;
          transition: color 0.2s;
          list-style: none;
          padding: 38px 10px 0;

          &:hover {
            color: var(--active-color);
          }
        }
      }
    }

    .search {
      height: 100%;
      display: flex;
      align-items: center;
      justify-self: flex-end;
      transform: translateX(67px);
      background-color: #fff;
      z-index: 99;
      position: relative;

      .form {
        width: 296px;
        display: flex;
        position: relative;

        .input {
          flex: 1;
          height: 50px;
          border: 1px solid #e0e0e0;
          border-collapse: collapse;
          border-right: none;
          padding: 0 10px;
          box-sizing: border-box;
          outline: none;
          transition: all 0.2s;
        }

        .btn {
          height: 50px;
          width: 50px;
          border: 1px solid #e0e0e0;
          border-collapse: collapse;
          font-size: 24px;
          background-color: transparent;
          color: #616161;
          transition: all 0.2s;
          cursor: pointer;

          &:hover {
            color: #fff;
            background-color: var(--active-color);
            border-color: var(--active-color);
          }
        }

        .keyword-list {
          position: absolute;
          top: 100%;
          left: 0;
          width: 245px;
          border: 1px solid var(--active-color);
          border-top: none;
          color: #333;
          background-color: #fff;

          .keyword-item {
            padding: 6px 15px;
            font-size: 12px;
            color: #424242;
            cursor: pointer;

            &.active,
            &:hover {
              background: #fafafa;
            }
          }
        }
      }

      .focus {
        border-color: var(--active-color) !important;
      }
    }
  }
  .nav-menu {
    width: 100%;
    border-top: 1px solid transparent;
    box-shadow: 0 3px 4px transparent;
    transition: box-shadow 0.2s, height 0.3s, -webkit-box-shadow 0.2s;
    height: 0;
    overflow: hidden;
    position: relative;
    z-index: 98;
    background-color: #fff;
    .container {
      width: var(--width);
      margin: auto;
      height: 100%;
      .first {
        position: relative;
        float: left;
        width: 180px;
        padding: 35px 12px 0;
        text-align: center;
        font-size: 12px;
        a {
          text-decoration: none;
          .pic {
            width: 160px;
            height: 110px;
            margin: 0 auto 16px;
            text-align: center;
            img {
              width: 160px;
              height: 110px;
            }
          }
          .name {
            color: #333;
            line-height: 20px;
          }
          .price {
            line-height: 20px;
            color: #ff6700;
          }
        }
        &:not(:first-child) {
          &:before {
            content: "";
            position: absolute;
            width: 1px;
            height: 100px;
            background: #e0e0e0;
            top: 35px;
            left: 0;
          }
        }
      }
    }
    &.active {
      height: 230px;
      border-top: 1px solid #e0e0e0;
      box-shadow: 0 3px 4px rgba(0, 0, 0, 0.18);
    }
  }
}
</style>
