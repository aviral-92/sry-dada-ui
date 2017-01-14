/************************add Customer Start************************/

var addCustomerJs = angular.module('patientApp',[])
addCustomerJs.controller('addCustomerController', function($scope, $http){
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
});
/************************add Customer Ends************************/