<template>
  <div class="brick">
    <div class="header">
      <h2 class="title">{{ title }}</h2>
      <div class="right">
        <div class="more" v-if="more">
          <a href="#">
            查看更多
            <i class="iconfont iconfont-arrow-right-big"></i>
          </a>
        </div>
        <div class="tab-list" v-else>
          <div
            class="item"
            v-for="(item, index) in data"
            :key="index"
            :class="{ active: index === active }"
            @mouseenter="active = index"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="left" :style="{ '--height': promoHeight + 'px' }">
        <template v-if="typeof promo === 'string'">
          <img :src="promo" alt="" class="hover single" />
        </template>
        <div v-else class="img-list">
          <div
            class="img-item hover"
            v-for="(item, index) in promo"
            :key="index"
          >
            <img :src="item" alt="" />
          </div>
        </div>
      </div>
      <div class="right">
        <template v-for="(item, index) in activeData" :key="index">
          <div class="brick-item hover" v-if="!item.more">
            <div class="figure">
              <img :src="item.pic" alt="" />
            </div>
            <h3 class="name">{{ item.name }}</h3>
            <p class="desc">{{ item.desc }}</p>
            <p class="price">
              {{ item.price }}元起<del v-if="item.origin"
                >{{ item.origin }}元起</del
              >
            </p>
          </div>
          <div class="brick-box" v-else>
            <div class="brick-info hover" v-if="!item.notData">
              <div class="figure">
                <img :src="item.pic" alt="" />
              </div>
              <h3 class="name">{{ item.name }}</h3>
              <p class="price">{{ item.price }}元起</p>
            </div>
            <div class="more hover">
              <div class="figure figure-more">
                <i class="iconfont iconfont-circle-arrow-right"></i>
              </div>
              <div class="text">
                浏览更多
                <small>{{ data[active].name }}</small>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
const props = defineProps({
  title: String,
  more: Boolean,
  promo: [String, Array],
  data: {
    type: Array,
    default: () => [],
  },
  promoHeight: {
    type: String,
    default: "614",
  },
});

const active = ref(0);

const activeData = computed(() => {
  return props.data[active.value] ? props.data[active.value].children : [];
});
</script>

<style scoped lang="scss">
.brick {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 22px;
      font-weight: 200;
      line-height: 58px;
      color: #333;
    }
    .right {
      .more {
        a {
          text-decoration: none;
          font-size: 16px;
          line-height: 58px;
          color: #424242;
          -webkit-transition: all 0.4s;
          transition: all 0.4s;
          &:hover {
            color: var(--active-color);
            .iconfont {
              background: var(--active-color);
            }
          }
          .iconfont {
            width: 12px;
            height: 12px;
            padding: 4px;
            margin-left: 8px;
            border-radius: 16px;
            font-size: 12px;
            line-height: 12px;
            background: #b0b0b0;
            color: #fff;
            vertical-align: 1px;
            -webkit-transition: all 0.4s;
            transition: all 0.4s;
          }
        }
      }
      .tab-list {
        padding: 16px 0 0;
        font-size: 16px;
        .item {
          margin: 0 0 0 30px;
          display: inline-block;
          padding: 0;
          margin: 0 15px;
          color: #424242;
          border-bottom: 2px solid #f5f5f5;
          border-bottom: 2px solid rgba(0, 0, 0, 0);
          -webkit-transition: border 0.3s;
          transition: border 0.3s;
          cursor: pointer;
          line-height: 24px;
          &.active {
            color: #ff6700;
            border-bottom: 2px solid #ff6700;
          }
        }
      }
    }
  }
  .box {
    display: flex;
    padding-bottom: 14px;
    .left {
      height: var(--height);
      .single {
        width: 234px;
        height: var(--height);
        cursor: pointer;
      }
      .img-list {
        height: 100%;
        .img-item {
          height: calc(100% / 2 - 7px);
          overflow: hidden;
          &:last-child {
            margin-top: 14px;
          }
          width: 100%;
        }
      }
      .hover {
        transition: all 0.2s linear;
        transform: translate3d(0, 0, 0);
        &:hover {
          z-index: 2;
          -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          -webkit-transform: translate3d(0, -2px, 0);
          transform: translate3d(0, -2px, 0);
        }
      }
    }
    .right {
      display: flex;
      flex-wrap: wrap;
      .brick-item {
        width: 234px;
        margin-left: 14px;
        margin-bottom: 14px;
        height: 260px;
        background: #fff;
        -webkit-transition: all 0.2s linear;
        transition: all 0.2s linear;
        cursor: pointer;
        padding: 20px 0;
        &.brick-item:hover {
          z-index: 2;
          -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          -webkit-transform: translate3d(0, -2px, 0);
          transform: translate3d(0, -2px, 0);
        }
        .figure {
          margin: 0 auto 18px;
          width: 160px;
          height: 160px;
          img {
            width: 160px;
            height: 160px;
          }
        }
        .name,
        .desc {
          text-align: center;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .name {
          margin: 0 10px 2px;
          font-size: 14px;
          font-weight: 400;
          color: #333;
        }
        .desc {
          margin: 0 10px 10px;
          height: 18px;
          font-size: 12px;
          color: #b0b0b0;
        }
        .price {
          margin: 0 10px 14px;
          text-align: center;
          color: #ff6700;
          font-size: 14px;
          del {
            margin-left: 0.5em;
            color: #b0b0b0;
          }
        }
      }
      .brick-box {
        width: 234px;
        margin-left: 14px;
        margin-bottom: 14px;
        .brick-info,
        .more {
          height: 93px;
          padding-top: 50px;
          width: 234px;
          background: #fff;
          -webkit-transition: all 0.2s linear;
          transition: all 0.2s linear;
          position: relative;
          z-index: 2;
        }
        .brick-info {
          margin-bottom: 14px;
          position: relative;
          .figure {
            position: absolute;
            right: 20px;
            top: 32px;
            width: 80px;
            height: 80px;
            img {
              width: 80px;
              height: 80px;
            }
          }
          .name {
            margin: 0 10px 2px;
            font-size: 14px;
            font-weight: 400;
            color: #333;
            margin: -10px 110px 5px 30px;
          }
          .price {
            margin: 0 110px 0 30px;
            color: #ff6700;
            font-size: 14px;
          }
        }
        .more {
          .figure {
            position: absolute;
            right: 35px;
            top: 48px;
            width: 48px;
            height: 48px;
            color: #ff6700;
            i {
              font-size: 48px;
              line-height: 48px;
            }
          }
          .text {
            margin: 0 110px 0 30px;
            font-size: 18px;
            color: #333;
            small {
              display: block;
              font-size: 12px;
              color: #757575;
            }
          }
        }
      }
      .hover {
        -webkit-transition: all 0.2s linear;
        transition: all 0.2s linear;
        cursor: pointer;
        &:hover {
          z-index: 2;
          -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          -webkit-transform: translate3d(0, -2px, 0);
          transform: translate3d(0, -2px, 0);
        }
      }

      & > div:nth-child(5),
      & > div:nth-child(6),
      & > div:nth-child(7),
      & > div:nth-child(8) {
        margin-bottom: 0;
      }
    }
  }
}
</style>
