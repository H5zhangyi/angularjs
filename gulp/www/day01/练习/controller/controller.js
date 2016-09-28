myapp.controller('mycontroller',function($scope){
	$scope.navItem = ['班级1','班级2','班级3'];
	$scope.selectNav = '班级1';

	$scope.show = function(item){
		$scope.selectNav = item;
	}

	$scope.info=[{name:"张三",age:20,zhiye:"学生"},
		{name:"李四",age:33,zhiye:"老师"},
		{name:"李四",age:22,zhiye:"未知"}];
});