
myapp.controller("homeContr",["$scope","$http",function($scope,$http){
	$scope.title = "this is homepage";
}]);

myapp.controller("phonesContr",["$scope","$rootScope","$http",function($scope,$rootScope,$http){
	$rootScope.title="手机列表页";
	$http({
		url:"phones/phones.json",
		type:'get'	
	}).success(function(res){
		// console.log(res);
		$scope.myArr = res;
	})
}]);

myapp.controller("detailContr",["$scope","$routeParams","$http",function($scope,$routeParams,$http){
	$scope.phonesid = $routeParams.phonesid || null;
	$http({
		url:"phones/"+$scope.phonesid+".json",
		type:"get"
	}).success(function(res){
		console.log(res);
		$scope.imgList = res.images;
		$scope.phoneName = res.name;
	})
}]);

myapp.controller("musicContr",["$scope","$http",function($scope,$http){
	$scope.title="音乐列表";
	$http({
		url:"phones/music.json",
		type:"get"
	}).success(function(res){
		$scope.musicList = res;
		console.log(res);
	})
}]);