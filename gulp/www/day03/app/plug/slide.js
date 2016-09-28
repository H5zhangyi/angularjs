
var myapp = angular.module('day03',[]);
		myapp.directive("easyDemo",function(){
			return {
				restrict: 'EACM', // 默认 'EA' 
				replace: false, // 默认 false 替换引用标签 用注释引用时必须为true

				templateUrl:"include/direction.html",
				controller: function($scope,$http,$interval){

					$http({
						url: "http://10.48.0.41:3000/User/getImgSlide",
						type:"get",
						params:{
							id:"1601",
							name:"yinguit"
						}
					}).success(function(res){
						$scope.test="skfds";
						$scope.imgArr = res.result;
						$scope.showIndex = 0;
						$interval(function(){
							if($scope.showIndex >= $scope.imgArr.length-1){
								$scope.showIndex = 0;
							}
							$scope.showIndex++;
						},1000);
					});
				}
			}
		});