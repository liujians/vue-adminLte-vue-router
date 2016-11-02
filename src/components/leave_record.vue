<!-- leave_record.vue -->
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
                
                <form action="">
                  <div class="form-group">
                    <label for="">员工编号</label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="">日期</label>
                    <input type="text" class="form-control" name="daterangesingle" readonly="readonly">
                  </div>
                  <div class="form-group">
                    <label for="">时长</label>
                    <input type="number" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="">备注</label>
                    <textarea class="form-control" rows="3" placeholder="请输入文字" style="resize: none"></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                  <button type="button" class="btn btn-primary" data-dismiss="modal">提交</button>
              </div>
          </div><!-- /.modal-content -->
      </div><!-- /.modal -->
  </div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        xx管理系统
        <small>Version 2.0</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="glyphicon glyphicon-home"></i>考勤管理</a></li>
        <li class="active">调休使用记录</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header with-border">
              <!-- <h3 class="box-title">调休使用记录</h3> -->
              <div class="pull-right">
                  <button class="btn btn-primary" data-toggle="modal" data-target="#modal">
                      新增
                  </button>
              </div>
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
                    <th>姓名</th>
	                  <th>日期</th>
	                  <th>时长</th>
	                  <th>备注</th>
	                </tr>
                </thead>
                <tbody>
                	<tr>
                    <td>
                      张三
                    </td>
	                  <td>2016-10-30</td>
	                  <td>
	                  	8
	                  </td>
	                  <td>
	                    生病没来(调休)
	                  </td>
	                </tr>
	                <tr>
                    <td>
                      张三
                    </td>
	                  <td>2016-10-30</td>
	                  <td>
	                  	4
	                  </td>
	                  <td>
	                    事假(调休)
	                  </td>
	                </tr>
	                <tr>
                    <td>
                      张三
                    </td>
	                  <td>2016-10-30</td>
	                  <td>
	                  	6
	                  </td>
	                  <td>
	                    生病没来(调休)
	                  </td>
	                </tr>
	                <tr>
                    <td>
                      张三
                    </td>
	                  <td>2016-10-30</td>
	                  <td>
	                  	4
	                  </td>
	                  <td>
	                    生病没来撒大苏打倒萨倒萨
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
            text:"调休使用记录",
            isActive:true
          }
        ]
    }
  },
  components: {
    contentHeader
  },
  mounted(){
    $('input[name="daterange"]').daterangepicker({
      ranges: {
            '今天': [moment(), moment()],
            '最近7天': [moment().subtract(6, 'days'), moment()],
            '最近30天': [moment().subtract(29, 'days'), moment()],
            '上个月': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
          },
      "opens": "left",
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
    $('input[name="daterangesingle"]').daterangepicker({
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
    }, function(start, end, label) {
      console.log("改变" + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
    });
    
  },
  methods: {}
}
</script>