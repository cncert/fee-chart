<template>
  <yd-layout>
    <yd-navbar slot="navbar" title="NavBar">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-view></router-view>
    <!--/*-->
    <!--可以这样理解，正常写法中，一层路径(/xxx)对应一个router-view。-->
    <!--比如url: /a/b (假设a、b都为正常路径，不会作为参数)-->
    <!--那/a对应的就是App.vue中的router-view，/a进入a.vue中-->
    <!--那/a/b对应的就是a.vue中的router-view， /a/b进入b.vue中-->
    <!--以此类推-->
    <!--*/-->
    <div>乱七八糟的内容在这里，超出容器，将出现滚动条。</div>
    <div>乱七八糟的内容在这里，超出容器，将出现滚动条。</div>
    <div>乱七八糟的内容在这里，超出容器，将出现滚动条。</div>

    <yd-tabbar slot="tabbar">
      <yd-tabbar-item title="首页" link="#" active>
        <yd-icon name="home" slot="icon"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="购物车" link="#">
        <yd-icon name="shopcart-outline" slot="icon"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="个人中心" link="#">
        <yd-icon name="ucenter-outline" slot="icon"></yd-icon>
      </yd-tabbar-item>
    </yd-tabbar>

  </yd-layout>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
