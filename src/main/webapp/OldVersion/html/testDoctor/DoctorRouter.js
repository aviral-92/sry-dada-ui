var scotchApp = angular.module('doctorApp', [ 'ngRoute' ]);

scotchApp.config(function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl : '/html/Index.html',
		controller : 'home'
	})
	
	// route for the home page
	.when('/addDoctor', {
		templateUrl : '/html/testDoctor/addDoctor.html',
		controller : 'addDoctorController'
	})

	// route for the about page
	.when('/getPatient', {
		templateUrl : '/html/testDoctor/getPatient.html',
		controller : 'getDoctorController'
	})

	// route for the contact page
	.when('/deletePatient', {
		templateUrl : '/html/testDoctor/deletePatient.html',
		controller : 'deleteDoctorController'
	})

	
	.when('/updatePatient', {
		templateUrl : '/html/testDoctor/updatePatient.html',
		controller : 'updateDoctorController'
	});
});

