<!-- overtime_record.vue -->
<template>
  <div class="content-wrapper">
  <!-- 模态框（Modal） -->
	<div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	    <div class="modal-dialog">
	        <div class="modal-content">
	            <div class="modal-header">
	                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
	                <h4 class="modal-title" id="myModalLabel">请输入申请描述</h4>
	            </div>
	            <div class="modal-body">
					<textarea class="form-control" rows="3" placeholder="请输入文字" style="resize: none"></textarea>
	            </div>
	            <div class="modal-footer">
	                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
	                <button type="button" class="btn btn-primary" data-dismiss="modal">提交申请</button>
	            </div>
	        </div><!-- /.modal-content -->
	    </div><!-- /.modal -->
	</div>
    <!-- Content Header (Page header) -->
    <content-header v-bind:menuList="menuList"></content-header>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header with-border">
                <!-- <h3 class="box-title">加班记录</h3> -->
                <div class="topTool">
                	<button class="btn btn-sm btn-primary">批量申请</button>
                </div>
                <form action="" class="form-inline">
                	<div class="form-group">
		              	<label for="">类别：</label>
						<select class="form-control">
							<option value="all">全部</option>
							<option value="false">未通过</option>
							<option value="true">已通过</option>
							<option value="true">未审批</option>
						</select>
					</div>
					<div class="form-group">
						<label for="">姓名：</label>
						<input type="text" class="form-control" placeholder="姓名">
					</div>
					<div class="form-group">
						<div class="input-group" style="width:220px;">
							<div class="input-group-addon">
								<i class="fa fa-calendar"></i>
							</div>
							<input type="text" class="form-control pull-right" name="daterange" readonly="readonly">
						</div>
					</div>
					<div class="form-group">
						<button class="btn btn-primary ">
							搜索
						</button>
					</div>
                </form>
            <!-- /.box-header -->
            <div class="box-body">
              <table class="table table-bordered">
                <thead>
                	<tr>
	                  <th style="width:10px">
						<input type="checkbox">
                	  </th>
                	  <th>姓名</th>
	                  <th>日期</th>
	                  <th>时长</th>
	                  <th>类别</th>
	                  <th>备注</th>
	                  <th>操作</th>
	                </tr>
                </thead>
                <tbody>
                	<tr>
	                  <td style="width:10px">
						<input type="checkbox">
                	  </td>
                	  <td>张三</td>
	                  <td>2016-10-31</td>
	                  <td>
	                  	4
	                  </td>
	                  <td>
	                  	未通过
	                  </td>
	                  <td>
	                  	
	                  </td>
	                  <td>
	                  	<button class="btn btn-sm btn-primary" data-toggle="modal" data-target="#modal">申请</button>
	                  </td>
	                </tr>
	                <tr>
	                  <td style="width:10px">
						<input type="checkbox">
                	  </td>
                	  <td>张三</td>
	                  <td>2016-10-31</td>
	                  <td>
	                  	4
	                  </td>
	                  <td>
	                  	未通过
	                  </td>
	                  <td>

	                  </td>
	                  <td>
	                  	<button class="btn btn-sm btn-primary">申请</button>
	                  </td>
	                </tr>
	                <tr>
	                  <td style="width:10px">
						<input type="checkbox">
                	  </td>
                	  <td>张三</td>
	                  <td>2016-10-31</td>
	                  <td>
	                  	4
	                  </td>
	                  <td>
	                  	未通过
	                  </td>
	                  <td>
	                  	
	                  </td>
	                  <td>
	                  </td>
	                </tr>
	                <tr>
	                  <td style="width:10px">
						<input type="checkbox">
                	  </td>
                	  <td>张三</td>
	                  <td>2016-10-31</td>
	                  <td>
	                  	4
	                  </td>
	                  <td>
	                  	未通过
	                  </td>
	                  <td>
	                  	
	                  </td>
	                  <td>
	                  </td>
	                </tr>
	                <tr>
	                  <td style="width:10px">
						<input type="checkbox">
                	  </td>
                	  <td>张三</td>
	                  <td>2016-10-31</td>
	                  <td>
	                  	4
	                  </td>
	                  <td>
	                  	未通过
	                  </td>
	                  <td>
	                  	
	                  </td>
	                  <td>
	                  	<button class="btn btn-sm btn-primary">申请</button>
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
import contentHeader from './content_header';
var plugin = require('../js/plugin.js');
plugin.getiCheck();
plugin.getdatepicker();
export default {
  data() {
  	return {
        msg: '数据',
        menuList:[
        	{
        		text:"加班管理",
        		isActive:false
        	},
        	{
        		text:"加班记录",
        		isActive:true
        	}
        ]
    }
  },
  components: {
    contentHeader
  },
  mounted(){
  	$('input[type="checkbox"]').iCheck({
	  checkboxClass: 'icheckbox_flat-blue',
	  radioClass: 'iradio_flat-blue'
	});
	$('input[name="daterange"]').daterangepicker({
		"singleDatePicker": true,
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
  		}
  	}
  	, function(start, end, label) {
  		console.log("改变" + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
	});
  },
  methods: {}
}
</script>