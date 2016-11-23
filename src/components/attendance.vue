<!-- attendance.vue -->
<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <content-header v-bind:menuList="menuList"></content-header>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header with-border">
              <!-- <h3 class="box-title">我的考勤记录</h3> -->
              <form action="" class="form-inline">
                <div class="input-group" style="width:220px;">
                  <div class="input-group-addon">
                    <i class="fa fa-calendar"></i>
                  </div>
                  <input type="text" class="form-control pull-right" name="daterange" readonly="readonly">
                </div>
                <div class="form-group">
					<label for="">姓名：</label>
					<input type="text" class="form-control" placeholder="姓名">
				</div>
                <div class="form-group">
                  <button class="btn btn-primary ">
                    搜索
                  </button>
                </div>
              </form>
              
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table class="table table-bordered">
                <thead>
                	<tr>
	                  <!-- <th style="width: 10px">ID</th> -->
	                  <th>姓名</th>
	                  <th>日期</th>
	                  <th>开始</th>
	                  <th>结束</th>
	                </tr>
                </thead>
                <tbody>
                	<tr>
	                  <!-- <td>001</td> -->
	                  <td>
	                  	张三
	                  </td>
	                  <td>2016-10-31</td>
	                  <td>
	                    10:00
	                  </td>
	                  <td>
	                  	20:00
	                  </td>
	                </tr>
	                <tr>
	                  <!-- <td>002</td> -->
	                  <td>
	                  	张三
	                  </td>
	                  <td>2016-11-01</td>
	                  <td>
	                    8:00
	                  </td>
	                  <td>
	                  	20:00
	                  </td>
	                </tr>
	                <tr>
	                  <!-- <td>003</td> -->
	                  <td>
	                  	张三
	                  </td>
	                  <td>2016-11-02</td>
	                  <td>
	                    8:00
	                  </td>
	                  <td>
	                  	20:00
	                  </td>
	                </tr>
	                <tr>
	                  <!-- <td>004</td> -->
	                  <td>
	                  	张三
	                  </td>
	                  <td>2016-11-03</td>
	                  <td>
	                    8:00
	                  </td>
	                  <td>
	                  	20:00
	                  </td>
	                </tr>
                </tbody>
              </table>
            </div>
            <!-- /.box-body -->
            <div class="box-footer clearfix">
              <ul class="pagination pagination-sm no-margin pull-right">
                <li><a href="#">&laquo;</a></li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">&raquo;</a></li>
              </ul>
            </div>
          </div>
          <!-- /.box -->
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import contentHeader from './content_header'
export default {
  data() {
  	return {
        msg: '数据',
        menuList:[
        	{
        		text:"考勤管理",
        		isActive:false
        	},
        	{
        		text:"我的考勤记录",
        		isActive:true
        	}
        ],

    }
  },
  components: {
    contentHeader
  },
  mounted(){
    // alert("抓取到vuex数据："+this.$store.state.test)
  	$('input[name="daterange"]').daterangepicker({
  		ranges: {
            '今天': [moment(), moment()],
            '最近7天': [moment().subtract(6, 'days'), moment()],
            '最近30天': [moment().subtract(29, 'days'), moment()],
            '上个月': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
          },
  		"opens": "right",
  		autoclose: true,
  		// buttonClasses : [ 'btn btn-default' ],  
  		applyClass : 'btn-small btn-primary',  
  		cancelClass : 'btn-small',
  		locale : {  
  			applyLabel : '确定',  
  			cancelLabel : '取消',  
  			daysOfWeek : [ '日', '一', '二', '三', '四', '五', '六' ],  
  			monthNames : [ '1月', '2月', '3月', '4月', '5月', '6月',  
  			'7月', '8月', '9月', '10月', '11月', '12月' ],  
  			firstDay : 1,
  			customRangeLabel:"选择起止日期"  
  		}
  	}, function(start, end, label) {
  		console.log("改变" + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
	});
  },
  methods: {}
}
</script>