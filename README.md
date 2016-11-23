# vue-adminLte-vue-router

by liujians [http://liujians.me](http://liujians.me)

最近在整合的vue+vue-router+adminLte，用来做响应式的比较美观的SPA管理系统
项目路径：https://github.com/liujians/vue-adminLte-vue-router
###介绍

[adminLte](https://almsaeedstudio.com/themes/AdminLTE/index2.html)：很好看的一套管理系统框架，适合做SPA应用

[vue.js](http://rc.vuejs.org/guide/)：性能非常不错的前端框架

[vue-router](https://router.vuejs.org/zh-cn/index.html)：大型项目前后端分离通常要用前端路由

vue和vue-router版本为2.0

**2016-11-18更新加入 Vuex2.0，使大型应用的状态共享更方便**

Ps:更新项目别忘了安装vuex依赖

	this.$store.state
	//具体的store文件在src/store下面
	//最新版的demo中、attendance页面可以看到alert的数据

第一次加载会判断移动端的跳转会自动收起菜单

###项目效果

更多更复杂的整合结果可以看我的博客：[http://liujians.me](http://liujians.me)

![](/GIF_sys.gif)

###说明

整合到一起之后，把其中用到的其他库（jq,bs等）用官方脚手架中的webpack做了一些配置，使得项目可以跑起来，相关插件也可以用

使用vue-cli搭建整合、帮助使用者跳过一些坑

###使用方法

开启终端到项目路径下

> npm install

> npm run dev

*Please make sure that your node in 4.0.0 above*

欢迎一起学习交流
<a target="_blank" href="http://shang.qq.com/wpa/qunwpa?idkey=9bcf9f7be59b471456c1feec466dab4d54da7ab35c834b8e821ec17177fb33b3"><img border="0" src="http://pub.idqqimg.com/wpa/images/group.png" alt="前端群居所" title="前端群居所"></a>

SPA about vue-cli+adminLte+vue-router
