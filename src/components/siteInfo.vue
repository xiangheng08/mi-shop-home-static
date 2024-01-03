<template>
  <div class="site-info">
    <div class="container">
      <div class="logo">
        <img src="/images/logo-mi2.png" alt="" />
      </div>
      <div class="info-text">
        <p class="sites">
          <a href="#"> 小米商城 </a>
          <span class="sep">|</span>
          <a href="#">小米澎湃OS</a>
          <span class="sep">|</span>
          <a href="#">米家</a>
          <span class="sep">|</span>
          <a href="#">米聊</a>
          <span class="sep">|</span>
          <a rel="nofollow" href="#" target="_blank">多看</a>
          <span class="sep">|</span>
          <a rel="nofollow" href="#" target="_blank">游戏</a>
          <span class="sep">|</span>
          <a rel="nofollow" href="#" target="_blank">音乐</a>
          <span class="sep">|</span>
          <a href="#">政企服务</a>
          <span class="sep">|</span>
          <a href="#">小米天猫店</a>
          <span class="sep">|</span>
          <a href="#">小米集团隐私政策</a>
          <span class="sep">|</span>
          <a href="#">小米公司儿童信息保护规则</a>
          <span class="sep">|</span>
          <a href="#">小米商城隐私政策</a>
          <span class="sep">|</span>
          <a href="#">小米商城用户协议</a>
          <span class="sep">|</span>
          <a href="#">问题反馈</a>
          <span class="sep">|</span>
          <a href="#">Select Location</a>
        </p>
        <p class="sites">
          <a href="#">北京互联网法院法律服务工作站</a>
          <span class="sep">|</span>
          <a href="#">中国消费者协会</a>
          <span class="sep">|</span>
          <a href="#">北京市消费者协会</a>
        </p>
        <p>
          ©
          <a href="javascript:;" title="mi.com">mi.com</a> 京ICP证110507号
          <a href="http://beian.miit.gov.cn/" target="_blank" rel="nofollow"
            >京ICP备10046444号</a
          >
          <a
            rel="nofollow"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020134"
            target="_blank"
            >京公网安备11010802020134号</a
          >
          <a href="//www.mi.com/culture-license/" target="_blank"
            >京网文[2023]0169-004号</a
          >
          <br />
          <a href="//www.mi.com/medical/record/" target="_blank"
            >（京）网械平台备字（2018）第00005号</a
          >
          <a href="//www.mi.com/medical/qualification/" target="_blank"
            >互联网药品信息服务资格证 (京)-非经营性-2014-0090</a
          >
          <a href="//www.mi.com/business-license/" target="_blank">营业执照</a>
          <a href="//www.mi.com/medical/list/" target="_blank"
            >医疗器械质量公告</a
          >
          <br />
          <a
            href="https://cdn.cnbj1.fds.api.mi-img.com/staticsfile/pc/5f93056c-bc30-401e-9526-66839114ffb9.png"
            target="_blank"
            >增值电信业务经营许可证编号：京B2-20180851</a
          >&nbsp;网络食品经营备案 京食药网食备202010048 &nbsp;
          <a
            href="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c6859168166651511897f54fa1047fe3.png"
            target="_blank"
            >食品经营许可证</a
          >&nbsp;新出发京批字第直220280号
          <br />
          违法和不良信息举报电话：171-5104-4404&nbsp;<a
            href="https://www.mi.com/intellectual"
            target="_blank"
            >知识产权侵权投诉</a
          >&nbsp;本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
        </p>
      </div>
      <div class="info-links">
        <a href="#"
          ><img
            rel="nofollow"
            src="//i1.mifile.cn/f/i/17/site/truste.png"
            alt="TRUSTe Privacy Certification"
        /></a>
        <a href="#"
          ><img
            rel="nofollow"
            src="//s01.mifile.cn/i/v-logo-2.png"
            alt="诚信网站"
        /></a>
        <a href="#"
          ><img
            rel="nofollow"
            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/icon3.png"
            alt="可信网站"
        /></a>
        <a href="#"
          ><img
            rel="nofollow"
            src="//i8.mifile.cn/b2c-mimall-media/ba10428a4f9495ac310fd0b5e0cf8370.png"
            alt="诚信经营 放心消费"
        /></a>
        <a href="#" class="safe-auth">
          <img
            v-show="active"
            rel="nofollow"
            src="https://cnbj1.fds.api.xiaomi.com/b2c-misite-activity/f1ee261b96ae71e845efba398efeca02.png"
            class="img1" />
          <img
            v-show="!active"
            rel="nofollow"
            src="https://cnbj1.fds.api.xiaomi.com/b2c-misite-activity/b2664c52dca66fd354257b465aaa26ec.png"
            class="img2"
        /></a>
      </div>
    </div>
    <div class="slogan">探索黑科技，小米为发烧而生</div>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount } from "vue";

const active = ref(true);

let timer = setInterval(() => {
  active.value = !active.value;
}, 3000);

onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>

<style scoped lang="scss">
.site-info {
  padding: 30px 0;
  font-size: 12px;
  background: #fafafa;
  .container {
    width: var(--width);
    margin: 0 auto;
    position: relative;
    display: flow-root;
    .logo {
      width: 56px;
      height: 56px;
      margin-right: 20px;
      position: absolute;
      top: 0;
      left: 0;
      img {
        width: 56px;
        height: 56px;
      }
    }
    .info-text {
      color: #b0b0b0;
      padding-left: 77px;
      line-height: 18px;
      a {
        color: #b0b0b0;
        text-decoration: none;
        margin-right: 2px;

        &:hover {
          color: var(--active-color);
        }
      }
      .sep {
        margin: 0 0.25em;
      }
      .sites {
        a {
          color: #757575;
          &:hover {
            color: var(--active-color);
          }
        }
      }
    }
    .info-links {
      padding-left: 77px;
      height: 28px;
      margin: 4px 0 15px;
      a {
        margin-right: 0.3em;
        img {
          width: auto;
          height: 28px;
        }
      }
    }
  }
  .slogan {
    margin: 30px auto 0;
    width: 100%;
    height: 19px;
    background: url(/images/slogan2020.png) no-repeat center 0;
    display: block;
    text-align: left;
    text-indent: -9999em;
    overflow: hidden;
  }
}
</style>
