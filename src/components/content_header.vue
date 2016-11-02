<!-- content_header.vue -->
<template>
	<div class="content-header">
		<h1>
			{{title}}
			<small>{{v}}</small>
		</h1>
		<ol class="breadcrumb">
			<li v-for="(i,index) in menuList" v-bind:class="{ active: i.isActive}">{{i.text}}</li>
			<!-- <li class="active">异常考勤记录</li> -->
		</ol>
	</div>
</template>
<script>
export default {
  name: 'content_header',
  data(){
  	return {
  		title:"xx管理系统",
  		v:"Version 2.0"
  	}
  },
  props: ['menuList']
}
</script>