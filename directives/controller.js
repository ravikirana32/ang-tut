myapp.controller("basicCtrl",function($scope){
	$scope.greet="Hello World";
	$scope.cust={"name":"ravi kirana"};
});

myapp.controller("isolationCtrl",function($scope){
	//$scope.greet="Hello World";
	$scope.ravi={"name":"sun ray"};
	$scope.cust={"name":"ravi kirana"};
});

myapp.controller("domCtrl",function($scope){
	$scope.format = 'M/d/yy h:mm:ss a';
});