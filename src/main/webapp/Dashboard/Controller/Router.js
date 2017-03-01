var scotchApp = angular.module('myApp', ['ngRoute']);

scotchApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/home', {
        templateUrl: 'Dashboard/pages/home.html',
        controller: 'home'
    })
    
     // route for the home page
        .when('/profile', {
        templateUrl: 'Dashboard/pages/profile.html',
        controller: 'profile'
    })
    
    // route for Calender page
        .when('/calender', {
        templateUrl: 'Dashboard/pages/CalendarRoute.html',
        controller: 'calender'
    });

});