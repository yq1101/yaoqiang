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
            <div class="img"><a href="#"><img src="../assets/../assets/images/car1.jpg" width="58" height="58" /></a></div>
            <div class="name"><a href="#">法颂浪漫梦境50ML 香水女士持久清新淡香 送2ML小样3只</a></div>
            <div class="price"><font color="#ff4e00">￥399</font> X1</div>
          </li>
          <li>
            <div class="img"><a href="#"><img src="../assets/../assets/images/car2.jpg" width="58" height="58" /></a></div>
            <div class="name"><a href="#">香奈儿（Chanel）邂逅活力淡香水50ml</a></div>
            <div class="price"><font color="#ff4e00">￥399</font> X1</div>
          </li>
          <li>
            <div class="img"><a href="#"><img src="../assets/../assets/images/car2.jpg" width="58" height="58" /></a></div>
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
      <img src="../assets/images/img2.jpg" />
    </div>

    <!--Begin 第二步：确认订单信息 Begin -->
    <div class="content mar_20">
      <div class="two_bg">
        <div class="two_t">
          <span class="fr"><a href="#">修改</a></span>商品列表
        </div>
        <table border="0" class="car_tab" style="width:1110px;" cellspacing="0" cellpadding="0">
          <tr>
            <td class="car_th" width="550">商品名称</td>
            <td class="car_th" width="140">属性</td>
            <td class="car_th" width="150">购买数量</td>
            <td class="car_th" width="130">小计</td>
            <td class="car_th" width="140">返还积分</td>
          </tr>
          <tr v-for="(value,key) in res">
            <td id="g_name">
              <div class="c_s_img"><img src="../assets/images/c_1.jpg" width="73" height="73" /></div>
              {{value.g_name}}
            </td>
            <td align="center">样式：{{value.goods_attr_name}}</td>
            <td align="center" id="type">{{value.num}}</td>
            <td align="center" style="color:#ff4e00;" id="price">￥{{value.price}}</td>
            <td align="center">26R</td>
          </tr>
          <tr>
            <td colspan="5" align="right" style="font-family:'Microsoft YaHei';">
              商品总价：￥ ； 返还积分 56R
            </td>
          </tr>
        </table>

        <div class="two_t">
          <span class="fr"><a href="#">修改</a></span>收货人信息
        </div>
        <table border="0" class="peo_tab" style="width:1110px;" cellspacing="0" cellpadding="0">
          <tr>
            <td class="p_td" width="160">收货人姓名</td>
            <td width="395">{{mydata.s_name}}</td>
            <td class="p_td" width="160">电子邮件</td>
            <td width="395">12345678@qq.com</td>
          </tr>
          <tr>
            <td class="p_td">收货地址</td>
            <td>{{mydata.site}}</td>
            <td class="p_td">邮政编码</td>
            <td>6011111</td>
          </tr>
          <tr>
            <td class="p_td">详细地址</td>
            <td>{{mydata.detailed}}</td>
            <td class="p_td">手机</td>
            <td>{{mydata.s_tel}}</td>
          </tr>
          <tr>
            <td class="p_td">标志建筑</td>
            <td></td>
            <td class="p_td">最佳送货时间</td>
            <td></td>
          </tr>
        </table>


        <div class="two_t">
          配送方式
        </div>
        <table border="0" class="car_tab" style="width:1110px;" cellspacing="0" cellpadding="0">
          <tr>
            <td class="car_th" width="80"></td>
            <td class="car_th" width="200">名称</td>
            <td class="car_th" width="370">订购描述</td>
            <td class="car_th" width="150">费用</td>
            <td class="car_th" width="135">免费额度</td>
            <td class="car_th" width="175">保价费用</td>
          </tr>
          <tr>
            <td align="center"><input type="checkbox" name="ch" checked="checked" /></td>
            <td align="center" style="font-size:14px;"><b>顺丰快递</b></td>
            <td>江、浙、沪地区首重为15元/KG，其他地区18元/KG，续重均为5-6元/KG， 云南地区为8元</td>
            <td align="center">包邮</td>
            <td align="center">￥0.00</td>
            <td align="center">不支持保价</td>
          </tr>
          <tr>
            <td colspan="6">
              <span class="fr"><label class="r_rad"><input type="checkbox" name="baojia" /></label><label class="r_txt">配送是否需要保价</label></span>
            </td>
          </tr>
        </table>

        <div class="two_t">
          支付方式
        </div>
        <ul class="pay">
          <li class="checked">支付宝<div class="ch_img"></div></li>
        </ul>


        <div class="two_t">
          其他信息
        </div>
        <table border="0" class="car_tab" style="width:1110px;" cellspacing="0" cellpadding="0">
          <tr>
            <td width="145" align="right" style="padding-right:0;"><b style="font-size:14px;">使用红包：</b></td>
            <td>
              <span class="fl" style="margin-left:50px; margin-right:10px;">选择已有红包</span>
              <select class="jj" name="city">
                <option value="0" selected="selected">请选择</option>
                <option value="1">50元</option>
                <option value="2">30元</option>
                <option value="3">20元</option>
                <option value="4">10元</option>
              </select>
              <span class="fl" style="margin-left:50px; margin-right:10px;">或者输入红包序列号</span>
              <span class="fl"><input type="text" value="" class="c_ipt" style="width:220px;" /></span>
                    <span class="fr" style="margin-left:10px;"><input type="submit" value="验证红包" class="btn_tj" /></span>
            </td>
          </tr>
          <tr valign="top">
            <td align="right" style="padding-right:0;"><b style="font-size:14px;">订单附言：</b></td>
            <td style="padding-left:0;"><textarea class="add_txt" style="width:860px; height:50px;"></textarea></td>
          </tr>
          <tr>
            <td align="right" style="padding-right:0;"><b style="font-size:14px;">缺货处理：</b></td>
            <td>
              <label class="r_rad"><input type="checkbox" name="none" checked="checked" /></label><label class="r_txt" style="margin-right:50px;">等待所有商品备齐后再发</label>
              <label class="r_rad"><input type="checkbox" name="none" /></label><label class="r_txt" style="margin-right:50px;">取下订单</label>
              <label class="r_rad"><input type="checkbox" name="none" /></label><label class="r_txt" style="margin-right:50px;">与店主协商</label>
            </td>
          </tr>
        </table>

        <table border="0" style="width:900px; margin-top:20px;" cellspacing="0" cellpadding="0">
          <tr>
            <td align="right">
              该订单完成后，您将获得 <font color="#ff4e00">1815</font> 积分 ，以及价值 <font color="#ff4e00">￥0.00</font> 的红包 <br />
              商品总价: <font color="#ff4e00">￥1815.00</font>  + 配送费用: <font color="#ff4e00">￥15.00</font>
            </td>
          </tr>
          <tr height="70">
            <td align="right">
              <b style="font-size:14px;">应付款金额：<span style="font-size:22px; color:#ff4e00;">￥2899</span></b>
            </td>
          </tr>
          <tr height="70">
            <td align="right" v-on:click="add()"><a href="#"><img src="../assets/images/btn_sure.gif" /></a></td>
          </tr>
        </table>



      </div>
    </div>
    <!--End 第二步：确认订单信息 End-->


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
        name: "Order",
        data(){
            return{
                res:[],
                mydata:[],
                orders:''
            }
        },
        methods:{
            add:function () {
                axios.post(this.url+'/shop/add',{
                    token:localStorage.getItem("token"),
                    id:this.$route.query.spid,
                })
                    .then(add=>{
                        // console.log(add.data)
                        this.orders=add.data
                        var token=localStorage.getItem("token")
                        location.href="/pay/index?token="+token+"&oid="+this.orders
                        // http://localhost/laravel/public/apithis.url+
                    })
            }
        },
        mounted() {
            var _this=this
            axios.post(this.url+'/shop/cartTwo1', {
                id:this.$route.query.spid,
                token:localStorage.getItem("token"),
            })
                .then(res=>{
                    // console.log(res.data)
                    this.res=res.data
                });
            axios.post(this.url+'/shop/cartTwo2',{

                token:localStorage.getItem("token"),
            })
                .then(mydata=>{
                    // console.log(mydata.data[0])
                    this.mydata=mydata.data[0]
                })
        }
    }
</script>

<style scoped>

</style>
