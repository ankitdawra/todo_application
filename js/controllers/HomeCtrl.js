App.controller('HomeCtrl', ['$scope', '$rootScope', '$timeout',
    function ($scope, $rootScope, $timeout) {
		$scope.delete = function(index){
			$rootScope.todos.splice(index,1);
		}

		$scope.editTodo = function(todo){
			console.log(todo);
			if(todo){
				todo.editing = true;
				$scope.editMode = true;
			}
		}

		$scope.doneEditing = function(updatedTodo, index){
			if(updatedTodo){
				for(var i=0; i<$rootScope.todos.length; i++){
					if(index == i){
						updatedTodo.editing = false;
						$scope.editMode = false;					
					}
				}
			}else{
				if($scope.editMode && $rootScope.todos.length){
					for(var i=0; i<$rootScope.todos.length; i++){
						let todo = $rootScope.todos[i];
						if(todo.editing){
							todo.editing = false;
							break;					
						}
					}
				}
			}
		}
	}
]);        
