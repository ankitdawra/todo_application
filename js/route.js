App.config(['$stateProvider', '$urlRouterProvider', '$locationProvider','$routeProvider', function($stateProvider, $urlRouterProvider, $locationProvider,$routeProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider.state('main', {
		url:'/',
		templateUrl:'modules/main.html',
		'controller': 'HomeCtrl'
	});

}]);