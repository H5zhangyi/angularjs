
// function(pram,pram1,pram2) 依赖的组件 $Timeout $route $http
// controller('控制器名称',function(){})
myapp.controller("mycontroller01",function($scope,$rootScope){
	$scope.username = "tom";
	$scope.count = 0;
	$scope.add = function(){
		$scope.count++;
	}
	$scope.sub = function(){
		$scope.count--;
	}
});

myapp.controller("mycontroller02",function($scope,$rootScope){
	// $rootScope 顶级的作用域,相当于window对象最高权限，最大范围
	// $scope 控制器的作用范围，所有的在页面中用到的函数或变量，都要
	// 挂载到$scope上
	$rootScope.mywindow = "angular";
});