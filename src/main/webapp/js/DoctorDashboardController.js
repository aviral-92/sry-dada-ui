/*var home = angular.module('dashboard', ['ngCookies', 'ngRoute']);*/

scotchApp.controller('doctorDashboard', function($scope, $rootScope, $http, $cookieStore) {
	var doctorDetail = $cookieStore.get('loginData');
	if (doctorDetail != null) {
		var field = 6;
		if (doctorDetail.homeAddress != null
				&& doctorDetail.homeAddress != 'NA') {
			field++;
		}
		if (doctorDetail.highestDegree != null
				&& doctorDetail.highestDegree != 'NA') {
			field++;
		}
		if (doctorDetail.expertized != null
				&& doctorDetail.expertized != 'NA') {
			field++;
		}
		if (doctorDetail.isGovernmentServent != null
				&& doctorDetail.isGovernmentServent != 'NA') {
			field++;
		}
		if (doctorDetail.clinicAddress != null
				&& doctorDetail.clinicAddress != 'NA') {
			field++;
		}
		if (doctorDetail.oneTimeFee != null
				&& doctorDetail.oneTimeFee != ''
				&& doctorDetail.oneTimeFee != 'NA') {
			field++;
		}
		if (doctorDetail.daysCheckFree != null
				&& doctorDetail.daysCheckFree != 'NA') {
			field++;
		}
		$scope.percent = parseInt((field / 13) * 100) + '%';
	}
});