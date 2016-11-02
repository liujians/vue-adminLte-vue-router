// plugin.js
var iCheck = require("../plugins/iCheck/icheck.min.js");
var daterangepicker = require("../plugins/daterangepicker/daterangepicker.js");
console.log(iCheck);
function getiCheck(){
	return iCheck
}
function getdatepicker(){
	return daterangepicker
}
module.exports={
	getiCheck : getiCheck,
	getdatepicker : getdatepicker
}