var scotchApp = angular.module('myApp', [ 'ngRoute' , 'UserValidation']);

scotchApp.config(function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl : '/html/Template/Container.html',
		controller : 'middleContent'
	})
	
	// route for the home page
	.when('/login', {
		templateUrl : '/html/Template/Login.html',
		controller : 'login'
	})

	// route for the about page
	.when('/signUp', {
		templateUrl : '/html/Template/DoctorSignUp.html',
		controller : 'signUp'
	})

	// route for the contact page
	.when('/about', {
		templateUrl : '/html/Template/about.html',
		controller : 'about'
	})

	
	.when('/contact', {
		templateUrl : '/html/Template/contact.html',
		controller : 'contact'
	});
});

