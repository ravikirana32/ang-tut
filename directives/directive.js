var myapp=angular.module("myApp",[]);

myapp.directive("myBasic",function(){
	return {
		template : "<div> {{cust.name}} </div>"
	}
});

myapp.directive("myIsolation",function(){
	return {
		scope: {
		  customerInfo: '=info'
		},
		template : "<div> {{customerInfo.name}} </div>"
	}
});