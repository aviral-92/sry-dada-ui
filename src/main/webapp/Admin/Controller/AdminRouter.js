var scotchApp = angular.module('myApp', [ 'ngRoute', 'ngCookies' ]);

scotchApp.config(function($routeProvider) {
	$routeProvider
	// Admin Dashboard
	// route for the home page
	.when('/adminHome', {
		templateUrl : 'Admin/pages/AdminHome.html',
		controller : 'adminHome'
	});
});
