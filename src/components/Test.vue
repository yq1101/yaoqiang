<style>
  .class1{
    background: #444;
    color: #eee;
  }
</style>

<template>
  <div id="ww">
     <p>{{ message1 }}</p>
<!--    数据绑定最常见的形式就是使用 {{...}}（双大括号）的文本插值：
 v-once 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新-->

    <p v-html="message2"></p>
<!--    双大括号会将数据解释为普通文本，而非 HTML 代码-->
<!--    你的站点上动态渲染的任意 HTML 可能会非常危险，因为它很容易导致 XSS 攻击。-->
<!--    请只对可信内容使用 HTML 插值，绝不要对用户提供的内容使用插值。-->

    <label for="r1">修改颜色</label><input type="checkbox" v-model="use" id="r1">
    <br><br>
    <div v-bind:class="{'class1': use}">
      v-bind:class 指令
    </div>
<!--    判断 class1 的值，如果为 true 使用 class1 类的样式，否则不使用该类：-->

    <br>
    {{5+5}}<br>
    {{ ok ? 'YES' : 'NO' }}<br>
    {{ message3.split('').reverse().join('') }}
    <div v-bind:id="'list-' + id">菜鸟教程</div>
<!--    表达式会在所属 Vue 实例的数据作用域下作为 JavaScript 被解析-->
    <p v-if="seen">现在你看到我了</p>
    <h1>菜鸟教程</h1>
    <p>学的不仅是技术，更是梦想！</p>
    <p>哈哈哈，打字辛苦啊！！！</p>
<!--    v-if 指令将根据表达式 seen 的值(true 或 false )来决定是否插入 p 元素。-->

    <pre><a v-bind:href="url">商城后台</a></pre>
<!--    在这里 href 是参数，告知 v-bind 指令将该元素的 href 属性与表达式 url 的值绑定。
-->

    <p>{{ message4 }}</p>
    <input v-model="message4">
<!--    input 输入框中我们可以使用 v-model 指令来实现双向数据绑定,v-model 指令用来在
 input、select、textarea、checkbox、radio 等表单控件元素上创建双向数据绑定，根据表单上的值，
 自动更新绑定的元素的值。-->

    <p>{{ message5 }}</p>
    <button v-on:click="reverseMessage">反转字符串</button>
<!--    按钮的事件我们可以使用 v-on 监听事件，并对用户的输入进行响应-->


  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        message1: 'Hello Vue.js!',
        message2: '<h1>菜鸟教程</h1>',
        use: false,
        ok: true,
        message3: 'RUNOOB',
        id : 1,
        seen: false,
        url: 'http://shun.wangshun1.cn/admin/login/login.html',
        message4: 'Runoob!',
        message5: 'Runoob!'
    }
  },
    methods: {
        reverseMessage: function () {
            this.message5 = this.message5.split('').reverse().join('')
        }
    }
}
</script>
