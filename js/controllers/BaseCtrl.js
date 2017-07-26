App.controller('BaseCtrl', ['$scope', '$rootScope', 
    function ($scope, $rootScope) {

    	$rootScope.todos = [];
    	$rootScope.startDate =  new Date();

    	$scope.scrollToDiv = function(ele){
			if(ele){
				var winTop = $(window).scrollTop();
				var eleTop = $(ele).offset().top;
				
				if(winTop < eleTop - 30){
				    $('body').animate({
				        scrollTop: eleTop
				    }, 600);
				}
			}
    	}

		$rootScope.addTodo = function(name, date){
			if(name && name != ''){
				var currUnixtime = new Date().getTime()/1000;

				if(date){
					var toAddUnixtime = Date.parse(date)/1000;
					// if(currUnixtime < toAddUnixtime){
					// 	$scope.error = 'Cannot schedule task for the time specified, please retry';
					// }else{
						var unixtime = toAddUnixtime;
					// }
				}else{
					var unixtime = new Date().getTime()/1000;
				}

				if(unixtime){
					todoData = {'name':name,'time':unixtime};
					$rootScope.todos.push(todoData);
					$scope.scrollToDiv('#main-wrap');
					$rootScope.task = '';
					$rootScope.date = null;
				}
			}else{
				$scope.error = 'Please add a task first'
			}
		}    	
	}
]);
