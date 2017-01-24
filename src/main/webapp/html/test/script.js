// script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var scotchApp = angular.module('patientApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/abc', {
                templateUrl : '/html/test/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : '/html/test/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : '/html/test/contact.html',
                controller  : 'contactController'
            });
    });

    // create the controller and inject Angular's $scope
    /*scotchApp.controller('mainController', function($scope, $http) {
        // create a message to display in our view
    	$scope.customerAdd = function(customer){
    		console.log(customer);
    		 var res = $http
    			.post(
    					'http://localhost:9090/customermanagement/addcustomer',
    					customer);
    			res.success(function(data) {
    				alert(data.message);
    				$scope.isVisible = false;

    			});
    			res.error(function(data, status, headers, config) {
    				alert("failure message: " + data.message);
    			});
    	}
    	 $scope.formAllGood = function () {
    	        return ($scope.nameGood)
    	    }
        //$scope.message = 'Everyone come and see how good I look!';
    });*/

    scotchApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    scotchApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });