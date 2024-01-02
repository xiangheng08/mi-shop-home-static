<template>
	<div class="hero">
		<div class="container">
			<div class="swiper" @mouseenter="stopSwiper" @mouseleave="startSwiper">
				<img
					class="swiper-item"
					:src="item"
					alt=""
					v-for="(item, index) in swiperData"
					:key="index"
					:class="{ show: swiperShow === index }" />
				<div class="swiper-pagination">
					<div
						class="swiper-pagination-bullet"
						v-for="(item, index) in swiperData.length"
						:key="item"
						@click="clickSwiper(index)"
						:class="{ active: swiperShow === index }"></div>
				</div>
				<div class="category-list">
					<div
						class="category-item"
						v-for="(item, index) in category"
						:key="item.name"
						@mouseenter="activeCategory = index"
						@mouseleave="activeCategory = -1">
						<a href="#">
							{{ item.name }}
							<em class="iconfont-arrow-right-big"></em>
						</a>
						<div
							class="children"
							v-show="activeCategory === index"
							:style="{ width: computedWidht(item.children.length) + 'px' }">
							<div class="item" v-for="(subItem, index) in item.children" :key="index">
								<img :src="subItem.pic" :alt="subItem.name" />
								<span class="name">{{ subItem.name }}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="hero-sub">
				<div class="left">
					<div class="channel" v-for="(item, index) in channelData" :key="index">
						<img :src="item.pic" alt="" />
						{{ item.name }}
					</div>
				</div>
				<div class="right">
          <img src="/images/promo/1.png" alt="">
          <img src="/images/promo/2.jpg" alt="">
          <img src="/images/promo/3.png" alt="">
        </div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import swiperData from '../data/swiper.json';
import category from '../data/category.json';

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

const computedWidht = (len) => {
	if (len < 7) {
		return 248;
	} else if (len < 15) {
		return 248 * 2;
	} else if (len < 19) {
		return 248 * 3;
	} else {
		return 248 * 4;
	}
};

const channelData = [
	{
		name: '保障服务',
		pic: '/images/channel/1.png',
	},
	{
		name: '企业团购',
		pic: '/images/channel/2.png',
	},
	{
		name: 'F码通道',
		pic: '/images/channel/3.png',
	},
	{
		name: '米粉卡',
		pic: '/images/channel/4.png',
	},
	{
		name: '以旧换新',
		pic: '/images/channel/5.png',
	},
	{
		name: '话费充值',
		pic: '/images/channel/6.png',
	},
];
</script>

<style scoped lang="scss">
.hero {
	width: 100%;
	background-color: #fff;
	padding-bottom: 26px;
	.container {
		width: var(--width);
		margin: auto;
		.swiper {
			width: 100%;
			height: 460px;
			position: relative;
			.swiper-item {
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
				z-index: 23;
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
					a {
						padding-left: 30px;
						height: 42px;
						line-height: 42px;
						color: #fff;
						text-decoration: none;
						position: relative;
						height: 100%;
						display: block;
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
					.children {
						position: absolute;
						left: 234px;
						top: 0;
						z-index: 24;
						height: 456px;
						padding: 2px 0;
						background-color: #fff;
						box-shadow: 0 8px 16px rgba(0, 0, 0, 0.18);
						display: flex;
						flex-direction: column;
						flex-wrap: wrap;
						overflow: hidden;
						.item {
							width: 212px;
							height: 36px;
							padding: 18px 20px;
							line-height: 40px;
							color: #333;
							display: flex;
              cursor: pointer;
              transition: color .2s;
              &:hover{
                color: var(--active-color);
              }
							img {
								width: 40px;
								height: 40px;
								margin-right: 12px;
							}
							.name {
								width: 172px;
								line-height: 40px;
								white-space: nowrap;
								text-overflow: ellipsis;
								overflow: hidden;
							}
						}
					}
				}
			}
		}
		.hero-sub {
			margin-top: 14px;
			display: flex;
			.left {
				width: 234px;
				background: #5f5750;
        display: flex;
        flex-wrap: wrap;
				.channel {
					width: 77px;
					height: 82px;
					opacity: 0.7;
          color: #fff;
          transition: opacity .2s;
          font-size: 12px;
          text-align: center;
          cursor: pointer;
          &:hover{
            opacity: 1;
          }
					img {
						width: 24px;
						height: 24px;
						padding-top: 18px;
						display: block;
						margin: 0 auto 4px;
					}

          &:nth-child(1),
          &:nth-child(2),
          &:nth-child(3){
            border-right: 1px solid #665e57;
            border-bottom: 1px solid #665e57;
          }
          &:nth-child(3){
            border-right: none;
          }
          &:nth-child(4),
          &:nth-child(5){
            border-right: 1px solid #665e57;
          }
				}
			}
			.right {
				flex: 1;
        display: flex;
        img{
          width: 316px;
          height: 170px;
          margin-left: 15px;
        }
			}
		}
	}
}
</style>
