/** **********************add Customer Start*********************** */

var addCustomerJs = angular.module('patientApp',[]);
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
	 $scope.formAllGood = function () {
	        return ($scope.nameGood)
	    }
});

//var app = angular.module('patientApp', ['UserValidation']);

/*addCustomerController = function($scope) {
    $scope.formAllGood = function () {
        return ($scope.nameGood && $scope.passwordGood && $scope.passwordCGood)
    }
}*/

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
                scope.nameGood = !isBlank && !invalidChars && !invalidLen

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
                scope.emailGood = !isBlank && !invalidChars && !invalidLen

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
                var invalidLen = !isBlank && !invalidChars && (viewValue.length < 10 || viewValue.length > 10)
                ctrl.$setValidity('isBlank', !isBlank)
                ctrl.$setValidity('invalidChars', !invalidChars)
                ctrl.$setValidity('invalidLen', !invalidLen)
                scope.mobileGood = !isBlank && !invalidChars && !invalidLen

            })
        }
    }
})
.directive('validAdhar', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {
                // Any way to read the results of a "required" angular validator
				// here?
                var isBlank = viewValue === ''
                var invalidChars = !isBlank && !/^\d+$/.test(viewValue)
                var invalidLen = !isBlank && !invalidChars && (viewValue.length < 12 || viewValue.length > 12)
                ctrl.$setValidity('isBlank', !isBlank)
                ctrl.$setValidity('invalidChars', !invalidChars)
                ctrl.$setValidity('invalidLen', !invalidLen)
                scope.adharGood = !isBlank && !invalidChars && !invalidLen

            })
        }
    }
}).directive('validAddress', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {
                // Any way to read the results of a "required" angular validator
				// here?
                var isBlank = viewValue === ''
                var invalidChars = !isBlank && !/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/.test(viewValue)
                var invalidLen = !isBlank && !invalidChars && (viewValue.length < 5 || viewValue.length > 30)
                ctrl.$setValidity('isBlank', !isBlank)
                ctrl.$setValidity('invalidChars', !invalidChars)
                ctrl.$setValidity('invalidLen', !invalidLen)
                scope.addressGood = !isBlank && !invalidChars && !invalidLen

            })
        }
    }
})
/** **********************add Customer Ends*********************** */

/** **********************delete Customer Start*********************** */
var deleteCustomerJs = angular.module('deletePatientApp', []);
deleteCustomerJs.controller('deletePatientController', function($scope, $http) {
	$scope.customerDelete = function(customer) {
		var res = null;
		if (customer != null) {
			if(customer.custId!=null && customer.custId != ""){
			   alert("test");
			   res = $http.delete(
				'http://localhost:9090/customermanagement/deletecustomerById/'+customer.custId);
		}else if(customer.custMobile != null && customer.custMobile != ""){
				res = $http.delete(
					'http://localhost:9090/customermanagement/deletecustomerByMobileNumber/'+doctor.custMobile);
		}else if(customer.custAadhaar != null && customer.custAadhaar != ""){
				res = $http.delete(
					'http://localhost:9090/customermanagement/deletecustomerByAdharNumber/'+customer.custAadhaar);
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

var getCustomerJs = angular.module('getPatientApp', []);
getCustomerJs.controller('getPatientController',
		function($scope, $http) {

			$scope.visible = false;
			$scope.customerGet = function(customer) {

				var custId = $scope.custId;
				var doctorMobileNumber = $scope.doctorMobileNumber;
				var doctorAdharNumber = $scope.doctorAdharNumber;

				if (custId != null && parseInt(custId) > 0) {
					console.log(custId);
					response('/deletecustomerById/' + parseInt(custId));
				}/* else if (custName != null && custName != ""
						&& custName != " ") {
					console.log(custName);
					response('/getdoctorbyname/' + custName);
				}*/else if (custMobile != null
						&& custMobile != ""
						&& custMobile != " ") {
					console.log(custMobile);
					response('/deletecustomerByMobileNumber/' + custMobile);
				} else if (custAadhaar != null && custAadhaar != ""
						&& custAadhaar != " ") {
					console.log(custAadhaar);
					response('/deletecustomerByAdharNumber/' + custAadhaar);
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

/** **********************Update Customer Starts*********************** */

var updateCustomerJs = angular.module('UpdateCustomerApp', []);
updateCustomerJs.controller('updateCustomerController', function($scope, $http) {
	$scope.visible = false;
	$scope.isVisible = false;
	$scope.ShowHide = function() {
		$scope.isVisible = $scope.isVisible ? false : true;
	}

	$scope.customerSearch = function() {
		var custId = $scope.custId;
		var custMobile = $scope.custMobile;
		var custAadhaar = $scope.custAadhaar;
		if (custId != null && parseInt(custId) > 0) {
			console.log(custId);
			response('/getdoctorbyid/' + parseInt(custId));
		} else if (custMobile != null && custMobile != ""
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

	$scope.customerUpdate = function(customer) {

		var updatedCustomerArray = {

				custId : customer.custId,
				custName : customer.custName,
				custMobile : customer.custMobile,
				custEmail: customer.custEmail,
				custHomeAddress : customer.custHomeAddress,
				custAadhaar : customer.custAadhaar,
				/*doctorHighestDegree : customer.doctorHighestDegree,
				doctorExpertized : customer.doctorExpertized,
				doctorGovtServent : Boolean(customer.doctorGovt),
				doctorOneTimeConsultingFee : customer.doctorOneTimeConsultingFee,
				doctorDaystoCheckFreeInConsultingFee : parseInt(customer.doctorDaystoCheckFreeInConsultingFee),
				doctorShopAddress : customer.doctorShopAddress*/
		}
		console.log(updateCustomerArray);
		updateCustomer(updateCustomerArray);
	};

	function response(pathVariable) {

		var url = 'http://localhost:9090/customermanagement';
		var res = $http.get(url + pathVariable);
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
	
	function updateCustomer(jsonData) {

		var url = 'http://localhost:9090/customermanagement/updatedoctor';
		var res = $http.post(url,jsonData);
		res.success(function(data) {
			alert(data.message);
			console.log(data);
		});
		res.error(function(data, status, headers, config) {
			alert("failure message: " + JSON.stringify({
				data : data
			}));
		});
	}
});

/** **********************Update Customer Ends*********************** */