var myapp=angular.module("myApp",[]);

myapp.directive("myBasic",function(){
	return {
		template : "<div> {{cust.name}} </div>"
		//templateUrl : "demo.html"
	}
});

myapp.directive("myIsolation",function(){
	return {
		restrict : "A",
		scope: {
		  customerInfo: '=info'
		},
		template : "<div> {{customerInfo.name}} </div>"
	}
});

myapp.directive("myIsolationsameattr",function(){
	return {
		restrict : "A",
		scope: {
		  info: '='
		},
		template : "<div> {{info.name}} </div>"
	}
});

myapp.directive("myIsolationdiffscope",function(){
	return {
		restrict : "A",
		scope: {
		  customerInfo: '=info'
		},
		template : "<div> {{customerInfo.name}} --- {{cust.name}}</div>"
	}
});


myapp.directive("myCurrentTime",['$interval','dateFilter',function($interval,dateFilter){
	function link(scope, element, attrs){
		var format,
        timeoutId;

        function updateTime() {
	      element.text(dateFilter(new Date(), format));
	      //element.text("ravi kirana");
	    }

	    scope.$watch(attrs.myCurrentTime, function(value) {
	      format = value;
	      updateTime();
	    });

		element.on('$destroy', function() {
	      $interval.cancel(timeoutId);
	    });

        // start the UI update process; save the timeoutId for canceling
	    timeoutId = $interval(function() {
	      updateTime(); // update DOM
	    }, 1000);

	}

	return {
		link : link
	};
}]);
