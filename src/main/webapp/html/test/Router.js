var scotchApp = angular.module('patientApp', [ 'ngRoute' ]);

scotchApp.config(function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl : '/html/Index.html',
		controller : 'home'
	})
	
	// route for the home page
	.when('/addPatient', {
		templateUrl : '/html/test/addPatient.html',
		controller : 'mainController'
	})

	// route for the about page
	.when('/getPatient', {
		templateUrl : '/html/test/getPatient.html',
		controller : 'aboutController'
	})

	// route for the contact page
	.when('/deletePatient', {
		templateUrl : '/html/test/deletePatient.html',
		controller : 'contactController'
	})

	
	.when('/updatePatient', {
		templateUrl : '/html/test/updatePatient.html',
		controller : 'updateCustomerController'
	});
});

