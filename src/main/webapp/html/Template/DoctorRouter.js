var scotchApp = angular.module('myApp', [ 'ngRoute', 'UserValidation' ]);

scotchApp.config(function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl : '/html/Template/Container.html',
		controller : 'middleContent'
	})

	// route for the home page PatientLogin
	.when('/login', {
		templateUrl : '/html/Template/Login.html',
		controller : 'login'
	})
	.when('/patientlogin', {
		templateUrl : '/html/dummy folder/PatientLogin.html',
		controller : 'patientlogin'
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
	.when('/patientsignup', {
		templateUrl : '/html/dummy folder/PatientSignUp.html',
		controller : 'patientsignup'
	})

	.when('/contact', {
		templateUrl : '/html/Template/contact.html',
		controller : 'contact'
	}) // dummy folder linked up for get, update, delete doctor UI
	.when('/get', {
		templateUrl : '/html/dummy folder/updatedialoguebox.html',
		controller : 'about'
	});
});
