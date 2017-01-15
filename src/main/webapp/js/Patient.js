/** **********************add Customer Start*********************** */

var addCustomerJs = angular.module('patientApp',['UserValidation']);
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

//var app = angular.module('patientApp', ['UserValidation']);

addCustomerController = function($scope) {
    $scope.formAllGood = function () {
        return ($scope.nameGood && $scope.passwordGood && $scope.passwordCGood)
    }
        
}

angular.module('UserValidation', []).directive('validName', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {
                // Any way to read the results of a "required" angular validator
				// here?
                var isBlank = viewValue === ''
                var invalidChars = !isBlank && !/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/.test(viewValue)
                var invalidLen = !isBlank && !invalidChars && (viewValue.length < 3 || viewValue.length > 20)
                ctrl.$setValidity('isBlank', !isBlank)
                ctrl.$setValidity('invalidChars', !invalidChars)
                ctrl.$setValidity('invalidLen', !invalidLen)
                scope.usernameGood = !isBlank && !invalidChars && !invalidLen

            })
        }
    }
}).directive('validEmail', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {
                // Any way to read the results of a "required" angular validator
				// here?
                var isBlank = viewValue === ''
                var invalidChars = !isBlank && !/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(viewValue)
                var invalidLen = !isBlank && !invalidChars && (viewValue.length < 3 || viewValue.length > 20)
                ctrl.$setValidity('isBlank', !isBlank)
                ctrl.$setValidity('invalidChars', !invalidChars)
                ctrl.$setValidity('invalidLen', !invalidLen)
                scope.usernameGood = !isBlank && !invalidChars && !invalidLen

            })
        }
    }
}).directive('validMobile', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {
                // Any way to read the results of a "required" angular validator
				// here?
                var isBlank = viewValue === ''
                var invalidChars = !isBlank && !/^\d+$/.test(viewValue)
                var invalidLen = !isBlank && !invalidChars && (viewValue.length < 9 || viewValue.length > 11)
                ctrl.$setValidity('isBlank', !isBlank)
                ctrl.$setValidity('invalidChars', !invalidChars)
                ctrl.$setValidity('invalidLen', !invalidLen)
                scope.usernameGood = !isBlank && !invalidChars && !invalidLen

            })
        }
    }
})
/** **********************add Customer Ends*********************** */

/** **********************delete Customer Start*********************** */
var deleteDoctorJs = angular.module('deletePatientApp', []);
deleteDoctorJs.controller('deletePatientController', function($scope, $http) {
	$scope.customerDelete = function(customer) {
		var res = null;
		if (customer != null) {
			if(customer.custId!=null && customer.custId != ""){
			   alert("test");
			   res = $http.delete(
				'http://localhost:9090/customermanagement/deletedoctorById/'+customer.custId);
		}else if(customer.custMobile != null && customer.custMobile != ""){
				res = $http.delete(
					'http://localhost:9090/customermanagement/deletedoctorByMobileNumber/'+doctor.custMobile);
		}else if(customer.custAadhaar != null && customer.custAadhaar != ""){
				res = $http.delete(
					'http://localhost:9090/customermanagement/deletedoctorByAdharNumber/'+customer.custAadhaar);
		}
				if(res != null){
				res.success(function(data, status, headers, config) {
				alert(data.message);
				console.log(data);
				console.log(headers);
				$scope.isVisible = false;

			});
				res.error(function(data, status, headers, config) {
					alert("failure message: " + JSON.stringify({
						data : data
					}));
				});
				}else{
					alert("dfdfg");
				}
			}else{
				alert("Please provide input");
			}
			console.log(customer);
	}
});

/** **********************delete Customer Ends*********************** */


/** **********************get Customer Start*********************** */

var getDoctorJs = angular.module('getPatientApp', []);
getDoctorJs.controller('getPatientController',
		function($scope, $http) {

			$scope.visible = false;
			$scope.customerGet = function(customer) {

				var custId = $scope.custId;
				var doctorMobileNumber = $scope.doctorMobileNumber;
				var doctorAdharNumber = $scope.doctorAdharNumber;

				if (custId != null && parseInt(custId) > 0) {
					console.log(custId);
					response('/getdoctorbyid/' + parseInt(custId));
				} else if (custName != null && custName != ""
						&& custName != " ") {
					console.log(custName);
					response('/getdoctorbyname/' + custName);
				}else if (custMobile != null
						&& custMobile != ""
						&& custMobile != " ") {
					console.log(custMobile);
					response('/getdoctorbymobilenumber/' + custMobile);
				} else if (custAadhaar != null && custAadhaar != ""
						&& custAadhaar != " ") {
					console.log(custAadhaar);
					response('/getdoctorbyadharNumber/' + custAadhaar);
				} else {
					alert("Please provide any input");
				}
				$scope.visible = true;
			}

			function response(pathVariable) {

				var url = 'http://localhost:9090/customermanagement';
				var res = $http.post(url + pathVariable);
				res.success(function(data) {
					alert(data[0].custName);
					console.log(data);
					$scope.customers = data;
				});
				res.error(function(data, status, headers, config) {
					alert("failure message: " + JSON.stringify({
						data : data
					}));
				});
			}
		});

/** **********************get Customer Ends*********************** */