var scotchApp = angular.module('myApp', ['ngMaterial','ngMessages', 'ngRoute', 'ngCookies', 'mwl.calendar', 'ngAnimate', 'ui.bootstrap', 'colorpicker.module']);

scotchApp.config(function($routeProvider) {
    $routeProvider
//Doctor Dashboard
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
    })
    
    // route for the Angular Calender page
        .when('/docCal', {
        templateUrl: 'Dashboard/calender/DoctorCalender.html',
        controller: 'KitchenSinkCtrl as vm'
    })
    
   // Doctor Dashboard
    // route for the home page
        .when('/patientHome', {
        templateUrl: 'Dashboard/pages/PatientHome.html',
        controller: 'patientHome'
    })
    
    // route for Logout page
        .when('/signout', {
        templateUrl: '/html/LoginPage.html',
        controller: 'signout'
    })
    
     // route for the home page
        .when('/patientProfile', {
        templateUrl: 'Dashboard/pages/PatientProfile.html',
        controller: 'patientProfile'
    })
    
     // route for Doctor Appointment
        .when('/doctorAppointment', {
        templateUrl: 'Dashboard/pages/DoctorAppointment.html',
        controller: 'doctorAppointment'
    })
    
     // route for Patient Appointment
        .when('/patientAppointment', {
        templateUrl: 'Dashboard/pages/PatientAppointment.html',
        controller: 'patientAppointment'
    })
    
     // route for Patient new appointment page
        .when('/patientNewAppointment', {
        templateUrl: 'Dashboard/pages/PatientNewAppointment.html',
        controller: 'patientNewAppointment'
    })
    
     // route for Patient History page
        .when('/patientHistory', {
        templateUrl: 'Dashboard/pages/PatientHistory.html',
        controller: 'patientHistory'
    });

});