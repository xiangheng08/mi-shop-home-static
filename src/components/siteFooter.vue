<template>
  <div class="site-footer">
    <div class="container">
      <div class="service">
        <div class="item">
          <a href="#"><em class="iconfont-tool"></em>预约维修服务</a>
        </div>
        <div class="item">
          <a href="#"><em class="iconfont-circle-7"></em>7天无理由退货</a>
        </div>
        <div class="item">
          <a href="#"><em class="iconfont-circle-15"></em>15天免费换货</a>
        </div>
        <div class="item">
          <a href="#"><em class="iconfont-gift"></em>满69包邮</a>
        </div>
        <div class="item">
          <a href="#"><em class="iconfont-location"></em>1100余家售后网点</a>
        </div>
      </div>
      <div class="links">
        <div class="col">
          <dt></dt>
        </div>
        <div class="col">
          <dt>选购指南</dt>
          <dd>
            <a href="#">手机</a>
          </dd>
          <dd>
            <a href="#">电视</a>
          </dd>
          <dd>
            <a href="#">笔记本</a>
          </dd>
          <dd>
            <a href="#">平板</a>
          </dd>
          <dd>
            <a href="#">穿戴</a>
          </dd>
          <dd>
            <a href="#">耳机</a>
          </dd>
          <dd>
            <a href="#">家电</a>
          </dd>
          <dd>
            <a href="#">路由器</a>
          </dd>
          <dd>
            <a href="#">音箱</a>
          </dd>
          <dd>
            <a href="#">配件</a>
          </dd>
        </div>
        <div class="col">
          <dt>服务中心</dt>
          <dd>
            <a href="#">申请售后</a>
          </dd>
          <dd>
            <a href="#">售后政策</a>
          </dd>
          <dd>
            <a href="#">维修服务价格</a>
          </dd>
          <dd>
            <a href="#">订单查询</a>
          </dd>
          <dd>
            <a href="#">以旧换新</a>
          </dd>
          <dd>
            <a href="#">保障服务</a>
          </dd>
          <dd>
            <a href="#">防伪查询</a>
          </dd>
          <dd>
            <a href="#">F码通道</a>
          </dd>
        </div>
        <div class="col">
          <dt>线下门店</dt>
          <dd>
            <a href="#">小米之家</a>
          </dd>
          <dd>
            <a href="#">服务网点</a>
          </dd>
          <dd>
            <a href="#">授权体验店/专区</a>
          </dd>
        </div>
        <div class="col">
          <dt>关于小米</dt>
          <dd>
            <a href="#">了解小米</a>
          </dd>
          <dd>
            <a href="#">加入小米</a>
          </dd>
          <dd>
            <a href="#">投资者关系</a>
          </dd>
          <dd>
            <a href="#">可持续发展</a>
          </dd>
          <dd>
            <a href="#">廉洁举报</a>
          </dd>
        </div>
        <div class="col">
          <dt>关注我们</dt>
          <dd>
            <a href="#">新浪微博</a>
          </dd>
          <dd>
            <a href="#">官方微信</a>
          </dd>
          <dd>
            <a href="#">联系我们</a>
          </dd>
          <dd>
            <a href="#">公益基金会</a>
          </dd>
        </div>
        <div class="col-contact">
          <p class="phone">400-100-5678</p>
          <p>8:00-18:00（仅收市话费）</p>
          <a rel="nofollow" class="btn">
            <em class="iconfont-message2"></em> 人工客服
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.site-footer {
  width: 100%;
  background-color: #fff;
  .container {
    width: var(--width);
    margin: 0 auto;
    .service {
      padding: 27px 0;
      border-bottom: 1px solid #e0e0e0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .item {
        width: 19.8%;
        height: 25px;
        border-left: 1px solid #e0e0e0;
        font-size: 16px;
        line-height: 25px;
        text-align: center;
        &:first-child {
          border-left: none;
        }
        a {
          text-decoration: none;
          color: #616161;
          -webkit-transition: color 0.2s;
          transition: color 0.2s;
          &:hover {
            color: var(--active-color);
          }
          em {
            margin-right: 6px;
            font-size: 24px;
            line-height: 24px;
            vertical-align: -4px;
          }
        }
      }
    }
    .links {
      padding: 40px 0;
      display: flex;
      .col {
        width: 160px;
        margin: 0;
        line-height: 18px;
        dt {
          margin: -1px 0 26px;
          font-size: 14px;
          line-height: 1.25;
          color: #424242;
        }
        dd {
          margin: 10px 0 0;
          font-size: 12px;
          a {
            text-decoration: none;
            color: #757575;
            &:hover {
              color: var(--active-color);
            }
          }
        }
      }
      .col-contact {
        width: 243px;
        height: 80px;
        border-left: 1px solid #e0e0e0;
        text-align: center;
        color: #616161;
        margin-left: 20px;
        p {
          margin: 0 0 5px 0;
          font-size: 12px;
        }
        .phone {
          font-size: 22px;
          line-height: 1;
          color: #ff6700;
        }
        .btn {
          display: inline-block;
          border: 1px solid #ff6700;
          background: #fff;
          color: #ff6700;
          width: 118px;
          height: 28px;
          font-size: 12px;
          line-height: 28px;
          transition: all 0.4s;
          cursor: pointer;
          &:hover {
            background: var(--active-color);
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
