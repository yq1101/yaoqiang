<template>
    <div>
      <div class="top">
        <div class="logo"><a href="Index.html"><img src="../assets/images/logo.png" /></a></div>
        <div class="search">
          <form>
            <input type="text" value="" class="s_ipt" />
            <input type="submit" value="搜索" class="s_btn" />
          </form>
          <span class="fl"><a href="#">咖啡</a><a href="#">iphone 6S</a><a href="#">新鲜美食</a><a href="#">蛋糕</a><a href="#">日用品</a><a href="#">连衣裙</a></span>
        </div>
        <div class="i_car">
          <div class="car_t">购物车 [ <span>3</span> ]</div>
          <div class="car_bg">
            <!--Begin 购物车未登录 Begin-->
            <div class="un_login">还未登录！<a href="Login.html" style="color:#ff4e00;">马上登录</a> 查看购物车！</div>
            <!--End 购物车未登录 End-->
            <!--Begin 购物车已登录 Begin-->
            <ul class="cars">
              <li>
                <div class="img"><a href="#"><img src="../assets/images/car1.jpg" width="58" height="58" /></a></div>
                <div class="name"><a href="#">法颂浪漫梦境50ML 香水女士持久清新淡香 送2ML小样3只</a></div>
                <div class="price"><font color="#ff4e00">￥399</font> X1</div>
              </li>
              <li>
                <div class="img"><a href="#"><img src="../assets/images/car2.jpg" width="58" height="58" /></a></div>
                <div class="name"><a href="#">香奈儿（Chanel）邂逅活力淡香水50ml</a></div>
                <div class="price"><font color="#ff4e00">￥399</font> X1</div>
              </li>
              <li>
                <div class="img"><a href="#"><img src="../assets/images/car2.jpg" width="58" height="58" /></a></div>
                <div class="name"><a href="#">香奈儿（Chanel）邂逅活力淡香水50ml</a></div>
                <div class="price"><font color="#ff4e00">￥399</font> X1</div>
              </li>
            </ul>
            <div class="price_sum">共计&nbsp; <font color="#ff4e00">￥</font><span>1058</span></div>
            <div class="price_a"><a href="#">去购物车结算</a></div>
            <!--End 购物车已登录 End-->
          </div>
        </div>
      </div>
      <!--End Header End-->
      <!--Begin Menu Begin-->
      <div class="menu_bg">
        <div class="menu">
          <!--Begin 商品分类详情 Begin-->
          <div class="nav">
            <div class="nav_t">全部商品分类</div>
            <div class="leftNav none">
            </div>
          </div>
          <!--End 商品分类详情 End-->
          <ul class="menu_r">
            <li><a href="Index.html">首页</a></li>
            <li><a href="Food.html">美食</a></li>
            <li><a href="Fresh.html">生鲜</a></li>
            <li><a href="HomeDecoration.html">家居</a></li>
            <li><a href="SuitDress.html">女装</a></li>
            <li><a href="MakeUp.html">美妆</a></li>
            <li><a href="Digital.html">数码</a></li>
            <li><a href="GroupBuying.html">团购</a></li>
          </ul>
          <div class="m_ad">中秋送好礼！</div>
        </div>
      </div>
      <div class="i_bg">
        <div class="content mar_20">
          <img src="../assets/../assets/images/img3.jpg" />
        </div>
        <div class="content mar_20">

          <!--Begin 银行卡支付 Begin -->
          <div class="warning">
            <table border="0" style="width:1000px; text-align:center;" cellspacing="0" cellpadding="0">
              <tr height="35">
                <td style="font-size:18px;">
                  感谢您在本店购物！您的订单已提交成功，请记住您的订单号: <font color="#ff4e00">{{order_id}}</font>
                </td>
              </tr>
              <tr>
                <td style="font-size:14px; font-family:'宋体'; padding:10px 0 20px 0; border-bottom:1px solid #b6b6b6;">
                  您选定的配送方式为: <font color="#ff4e00">顺丰快递</font>； &nbsp; &nbsp;您选定的支付成功的时间为: <font color="#ff4e00">{{time}}</font>； &nbsp; &nbsp;您的应付款金额为: <font color="#ff4e00">￥{{price}}</font>
                </td>
              </tr>
              <tr>
                <td style="padding:20px 0 30px 0; font-family:'宋体';">
                  银行名称 收款人信息：全称 ××× ；帐号或地址 ××× ；开户行 ×××。 <br />
                  注意事项：办理电汇时，请在电汇单“汇款用途”一栏处注明您的订单号。
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#">首页</a> &nbsp; &nbsp; <a href="#">用户中心</a>
                </td>
              </tr>
            </table>
          </div>
          <!--Begin 银行卡支付 Begin -->

          <!--Begin 支付宝支付 Begin -->
<!--          <div class="warning">-->
<!--            <table border="0" style="width:1000px; text-align:center;" cellspacing="0" cellpadding="0">-->
<!--              <tr height="35">-->
<!--                <td style="font-size:18px;">-->
<!--                  感谢您在本店购物！您的订单已提交成功，请记住您的订单号: <font color="#ff4e00">2015092598275</font>-->
<!--                </td>-->
<!--              </tr>-->
<!--              <tr>-->
<!--                <td style="font-size:14px; font-family:'宋体'; padding:10px 0 20px 0; border-bottom:1px solid #b6b6b6;">-->
<!--                  您选定的配送方式为: <font color="#ff4e00">申通快递</font>； &nbsp; &nbsp;您选定的支付方式为: <font color="#ff4e00">银行卡</font>； &nbsp; &nbsp;您的应付款金额为: <font color="#ff4e00">￥888.00</font>-->
<!--                </td>-->
<!--              </tr>-->
<!--              <tr>-->
<!--                <td style="padding:20px 0 30px 0; font-family:'宋体';">-->
<!--                  支付宝网站(www.alipay.com) 是国内先进的网上支付平台。<br />-->
<!--                  支付宝收款接口：在线即可开通，零预付，免年费，单笔阶梯费率，无流量限制。<br />-->
<!--                  <a href="#" style="color:#ff4e00;">立即在线申请</a>-->
<!--                </td>-->
<!--              </tr>-->
<!--              <tr>-->
<!--                <td>-->
<!--                  <div class="btn_u" style="margin:0 auto; padding:0 20px; width:120px;"><a href="#">立即使用支付宝支付</a></div>-->
<!--                  <a href="#">首页</a> &nbsp; &nbsp; <a href="#">用户中心</a>-->
<!--                </td>-->
<!--              </tr>-->
<!--            </table>-->
<!--          </div>-->
          <!--Begin 支付宝支付 Begin -->

          <!--Begin 余额不足 Begin -->
<!--          <div class="warning">-->
<!--            <table border="0" style="width:1000px; text-align:center;" cellspacing="0" cellpadding="0">-->
<!--              <tr>-->
<!--                <td>-->
<!--                  <p style="font-size:22px;">提示 !</p>-->
<!--                  <b style="color:#ff4e00; font-size:16px; font-family:'宋体';">您的余额不足以支付整个订单，请选择其他支付方式</b>-->
<!--                  <div class="backs"><a href="#">返回上一页</a></div>-->
<!--                </td>-->
<!--              </tr>-->
<!--            </table>-->
<!--          </div>-->
          <!--Begin 余额不足 Begin -->


        </div>
        <!--End 第三步：提交订单 End-->


        <!--Begin Footer Begin -->
        <div class="b_btm_bg bg_color">
          <div class="b_btm">
            <table border="0" style="width:210px; height:62px; float:left; margin-left:75px; margin-top:30px;" cellspacing="0" cellpadding="0">
              <tr>
                <td width="72"><img src="../assets/images/b1.png" width="62" height="62" /></td>
                <td><h2>正品保障</h2>正品行货  放心购买</td>
              </tr>
            </table>
            <table border="0" style="width:210px; height:62px; float:left; margin-left:75px; margin-top:30px;" cellspacing="0" cellpadding="0">
              <tr>
                <td width="72"><img src="../assets/images/b2.png" width="62" height="62" /></td>
                <td><h2>满38包邮</h2>满38包邮 免运费</td>
              </tr>
            </table>
            <table border="0" style="width:210px; height:62px; float:left; margin-left:75px; margin-top:30px;" cellspacing="0" cellpadding="0">
              <tr>
                <td width="72"><img src="../assets/images/b3.png" width="62" height="62" /></td>
                <td><h2>天天低价</h2>天天低价 畅选无忧</td>
              </tr>
            </table>
            <table border="0" style="width:210px; height:62px; float:left; margin-left:75px; margin-top:30px;" cellspacing="0" cellpadding="0">
              <tr>
                <td width="72"><img src="../assets/images/b4.png" width="62" height="62" /></td>
                <td><h2>准时送达</h2>收货时间由你做主</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="b_nav">
          <dl>
            <dt><a href="#">新手上路</a></dt>
            <dd><a href="#">售后流程</a></dd>
            <dd><a href="#">购物流程</a></dd>
            <dd><a href="#">订购方式</a></dd>
            <dd><a href="#">隐私声明</a></dd>
            <dd><a href="#">推荐分享说明</a></dd>
          </dl>
          <dl>
            <dt><a href="#">配送与支付</a></dt>
            <dd><a href="#">货到付款区域</a></dd>
            <dd><a href="#">配送支付查询</a></dd>
            <dd><a href="#">支付方式说明</a></dd>
          </dl>
          <dl>
            <dt><a href="#">会员中心</a></dt>
            <dd><a href="#">资金管理</a></dd>
            <dd><a href="#">我的收藏</a></dd>
            <dd><a href="#">我的订单</a></dd>
          </dl>
          <dl>
            <dt><a href="#">服务保证</a></dt>
            <dd><a href="#">退换货原则</a></dd>
            <dd><a href="#">售后服务保证</a></dd>
            <dd><a href="#">产品质量保证</a></dd>
          </dl>
          <dl>
            <dt><a href="#">联系我们</a></dt>
            <dd><a href="#">网站故障报告</a></dd>
            <dd><a href="#">购物咨询</a></dd>
            <dd><a href="#">投诉与建议</a></dd>
          </dl>
          <div class="b_tel_bg">
            <a href="#" class="b_sh1">新浪微博</a>
            <a href="#" class="b_sh2">腾讯微博</a>
            <p>
              服务热线：<br />
              <span>400-123-4567</span>
            </p>
          </div>
          <div class="b_er">
            <div class="b_er_c"><img src="../assets/images/er.gif" width="118" height="118" /></div>
            <img src="../assets/images/ss.png" />
          </div>
        </div>
        <div class="btmbg">
          <div class="btm">
            备案/许可证编号：蜀ICP备12009302号-1-www.dingguagua.com   Copyright © 2015-2018 尤洪商城网 All Rights Reserved. 复制必究 , Technical Support: Dgg Group <br />
            <img src="../assets/images/b_1.gif" width="98" height="33" /><img src="../assets/images/b_2.gif" width="98" height="33" /><img src="../assets/images/b_3.gif" width="98" height="33" /><img src="../assets/images/b_4.gif" width="98" height="33" /><img src="../assets/images/b_5.gif" width="98" height="33" /><img src="../assets/images/b_6.gif" width="98" height="33" />
          </div>
        </div>
        <!--End Footer End -->
      </div>
    </div>
</template>

<script>
    export default {
        name: "Cartthree",
        data(){
            return{
                order_id:'',
                price:'',
                time:''
            }
        },
        mounted() {
              this.order_id=this.$route.query.order_id
              this.price=this.$route.query.price
              this.time=this.$route.query.time
        }
    }
</script>

<style scoped>

</style>
