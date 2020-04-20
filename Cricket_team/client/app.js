var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl:'templates/list.html',
			controller:'plaController'
		})
		.when('/players', {
			templateUrl:'templates/list.html',
			controller:'plaController'
		})
		.when('/players/create', {
			templateUrl:'templates/add.html',
			controller:'plaController'
		})
		.when('/players/:id/edit', {
			templateUrl:'templates/edit.html',
			controller:'plaController'
		})
		.when('/players/:id/show', {
			templateUrl:'templates/show.html',
			controller:'plaController'
		});
});
