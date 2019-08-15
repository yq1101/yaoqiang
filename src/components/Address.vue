<template>
<div>
  <div class="m_top_bg">
    <div class="top">
      <div class="m_logo"><a href="Index.html"><img src="../assets/images/logo1.png" /></a></div>
      <div class="m_search">
        <form>
          <input type="text" value="" class="m_ipt" />
          <input type="submit" value="搜索" class="m_btn" />
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
  </div>
  <!--End Header End-->
  <div class="i_bg bg_color">
    <!--Begin 用户中心 Begin -->
    <div class="m_content">
      <div class="m_left">
        <div class="left_n">管理中心</div>
        <div class="left_m">
          <div class="left_m_t t_bg1">订单中心</div>
          <ul>
            <li><a href="Member_Order.html">我的订单</a></li>
            <li><a href="Member_Address.html" class="now">收货地址</a></li>
            <li><a href="#">缺货登记</a></li>
            <li><a href="#">跟踪订单</a></li>
          </ul>
        </div>
        <div class="left_m">
          <div class="left_m_t t_bg2">会员中心</div>
          <ul>
            <li><a href="Member_User.html">用户信息</a></li>
            <li><a href="Member_Collect.html">我的收藏</a></li>
            <li><a href="Member_Msg.html">我的留言</a></li>
            <li><a href="Member_Links.html">推广链接</a></li>
            <li><a href="#">我的评论</a></li>
          </ul>
        </div>
        <div class="left_m">
          <div class="left_m_t t_bg3">账户中心</div>
          <ul>
            <li><a href="Member_Safe.html">账户安全</a></li>
            <li><a href="Member_Packet.html">我的红包</a></li>
            <li><a href="Member_Money.html">资金管理</a></li>
          </ul>
        </div>
        <div class="left_m">
          <div class="left_m_t t_bg4">分销中心</div>
          <ul>
            <li><a href="Member_Member.html">我的会员</a></li>
            <li><a href="Member_Results.html">我的业绩</a></li>
            <li><a href="Member_Commission.html">我的佣金</a></li>
            <li><a href="Member_Cash.html">申请提现</a></li>
          </ul>
        </div>
      </div>
      <div class="m_right">
        <p></p>
        <div class="mem_tit">收货地址</div>
        <div class="address">
          <div class="a_close"><a href="#"><img src="../assets/images/a_close.png" /></a></div>
          <table border="0" class="add_t" align="center" style="width:98%; margin:10px auto;" cellspacing="0" cellpadding="0">
            <tr>
              <td colspan="2" style="font-size:14px; color:#ff4e00;">杨杨公司</td>
            </tr>
            <tr>
              <td align="right" width="80">收货人姓名：</td>
              <td>{{mydata.s_name}}</td>
            </tr>
            <tr>
              <td align="right">配送区域：</td>
              <td>{{mydata.site}}</td>
            </tr>
            <tr>
              <td align="right">详细地址：</td>
              <td>{{mydata.detailed}}</td>
            </tr>
            <tr>
              <td align="right">手机：</td>
              <td>{{mydata.s_tel}}</td>
            </tr>
            <tr>
              <td align="right">电话：</td>
              <td></td>
            </tr>
            <tr>
              <td align="right">电子邮箱：</td>
              <td>123456789@qq.com</td>
            </tr>
            <tr>
              <td align="right">标志建筑：</td>
              <td>世外桃源</td>
            </tr>
          </table>

          <p align="right">
            <a href="#" style="color:#ff4e00;">设为默认</a>&nbsp; &nbsp; &nbsp; &nbsp; <a href="#" style="color:#ff4e00;">编辑</a>&nbsp; &nbsp; &nbsp; &nbsp;
          </p>

        </div>

        <div class="mem_tit">
          <span  v-on:click="add1()"><img src="../assets/images/add_ad.gif" /></span>
        </div>
        <table border="0" class="add_tab" style="width:930px;"  cellspacing="0" cellpadding="0">
          <tr>
            <td width="135" align="right">配送地区</td>
            <td colspan="3" style="font-family:'宋体';">
              <select class="jj" name="province" v-on:change="select1" id="yq1">
<!--                <option value="0" selected="selected">请选择...</option>-->
                <option v-for="province in provinces" v-bind:value="province.area_id">{{province.area_name}}</option>
              </select>
              <select class="jj" name="city" v-on:change="select2" id="yq2">
                <option value="0">请选择...</option>
                <option v-for="city in citys" v-bind:value="city.area_id">{{city.area_name}}</option>
              </select>
              <select class="jj" name="area" id="yq3">
                <option value="0" selected="selected" >请选择...</option>
                <option v-for="area in areas" v-bind:value="area.area_id">{{area.area_name}}</option>
              </select>
              （必填）
            </td>
          </tr>
          <tr>
            <td align="right">收货人姓名</td>
            <td style="font-family:'宋体';"><input type="text" value="" class="add_ipt" id="s_name"/>（必填）</td>
            <td align="right">电子邮箱</td>
            <td style="font-family:'宋体';"><input type="text" value="" class="add_ipt"/></td>
          </tr>
          <tr>
            <td align="right">详细地址</td>
            <td style="font-family:'宋体';"><input type="text" value="" class="add_ipt" id="s_address"/>（必填）</td>
            <td align="right">邮政编码</td>
            <td style="font-family:'宋体';"><input type="text" value="610000" class="add_ipt" /></td>
          </tr>
          <tr>
            <td align="right">手机</td>
            <td style="font-family:'宋体';"><input type="text" value="" class="add_ipt" id="s_tel"/>（必填）</td>
            <td align="right">电话</td>
            <td style="font-family:'宋体';"><input type="text" value="028-12345678" class="add_ipt" /></td>
          </tr>
          <tr>
            <td align="right">标志建筑</td>
            <td style="font-family:'宋体';"><input type="text" value="" class="add_ipt" /></td>
            <td align="right">最佳送货时间</td>
            <td style="font-family:'宋体';"><input type="text" value="" class="add_ipt" /></td>
          </tr>
        </table>
        <p align="right">
          <a href="#">删除</a>&nbsp; &nbsp; <a href="#" class="add_b">确认修改</a>
        </p>



      </div>
    </div>
    <!--End 用户中心 End-->
    <!--Begin Footer Begin -->
    <div class="b_btm_bg b_btm_c">
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
        name: "Address",
        data(){
            return{
                provinces:'',
                citys:'',
                areas:'',
                mydata:[]
            }
        },
        methods:{
            select1:function (event) {
                var p_id=event.target.value //取value的值

                axios.post(this.url+'/address/city',{
                    p_id:p_id,
                    token:localStorage.getItem("token"),
                })
                    .then(res=>{
                        // console.log(res.data)
                        this.citys=res.data
                    })
            },
            select2:function (event) {
                var p_id=event.target.value
                axios.post(this.url+'/address/area',{
                    p_id:p_id,
                    token:localStorage.getItem("token"),
                })
                    .then(res=>{
                        // console.log(res)
                        this.areas=res.data
                    })
            },
            add1:function () {
                var p_name=$("#yq1 option:selected").text();
                var c_name=$("#yq2 option:selected").text();
                var a_name=$("#yq3 option:selected").text();
                var s_name=document.getElementById('s_name').value
                var s_tel=document.getElementById('s_tel').value
                var s_address=document.getElementById('s_address').value
                axios.post(this.url+'/address/add1',{
                    p_name:p_name,
                    c_name:c_name,
                    a_name:a_name,
                    s_name:s_name,
                    s_tel:s_tel,
                    s_address:s_address,

                    token:localStorage.getItem("token"),
                })
                    // .then(mydata=>{
                    //     console.log(mydata)
                    // })
            }
        },
        mounted() {
            axios.post(this.url+'/address/province',{
                p_id:1,
                token:localStorage.getItem("token"),
            })
                .then(res=>{
                    // console.log(res.data)
                    this.provinces=res.data
                });
            axios.post(this.url+'/address/show',{

                token:localStorage.getItem("token"),
            })
                .then(mydata=>{
                      console.log(mydata.data)
                    this.mydata=mydata.data[0]
                })
        }


    }
</script>

<style scoped>

</style>
