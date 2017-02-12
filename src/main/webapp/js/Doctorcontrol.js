scotchApp.controller('test', function($scope, $http, $window) {

	var selectedItem = null;
	var doctorSearch = null;
	$scope.menus = [ {
		id : 1,
		name : "id"
	}, {
		id : 2,
		name : "adhaar"
	}, {
		id : 3,
		name : "mobile"
	}, {
		id : 4,
		name : "email"
	}, {
		id : 5,
		name : "name"
	} ];
	$scope.btnClick = function(textValue) {
		
		$window.location.href='#/searchFunctionality';
		/*
		var obj = null;
		console.log(doctor);
		console.log(selectedItem);
		if (selectedItem != null) {
			if (selectedItem.name == 'id') {
				obj = {
					"id" : parseInt(doctor.value)
				};
			} else if (selectedItem.name == 'mobile') {
				obj = {
					"mobile" : doctor.value
				};
			} else if (selectedItem.name == 'email') {
				obj = {
					"email" : doctor.value
				};
			} else if (selectedItem.name == 'adhaar') {
				obj = {
					"adhaar" : doctor.value
				};
			} else if (selectedItem.name == 'name') {
				obj = {
					"name" : doctor.value
				};
			}
			doctorSearch = $http.post(
					'https://doctor-service.cfapps.io/doctor/get/all', obj);
			
		} else {
			alert("Please select any one");
		}
		if (doctorSearch != null) {
			doctorSearch.success(function(getDoctor) {
				console.log(">>>>>>>" + getDoctor[0].mobile);
				$scope.doctors = getDoctor;
				$scope.modalBody = true;
				//$scope.loader = false;
			});
			doctorSearch.error(function(data, status, headers, config) {
				alert("failure message: " + data.message);
				$scope.message = 'No Data Found!!!';
			});
		}*/
	}
	/*$scope.selected = function(selectObj) {
		console.log(selectObj.id);
		selectedItem = selectObj;
	}*/
});

scotchApp.controller('functionalitySearch', function($scope, $http) {
	
	$scope.users = []; //declare an empty array
	$http.get("/html/SearchFunctionality/mockJson/mock.json").success(function(response){ 
		$scope.users = response;  //ajax request to fetch data into $scope.data
	});
	
	$scope.sort = function(keyname){
		$scope.sortKey = keyname;   //set the sortKey to the param passed
		$scope.reverse = !$scope.reverse; //if true make it false and vice versa
	}
});

scotchApp.controller('middleContent', function($scope, $cookieStore) {
	if ($cookieStore.get('loginData') != undefined
			&& $cookieStore.get('email') != undefined) {
		window.location = "#/dashboard";
	} else if ($cookieStore.get('patientData') != undefined
			&& $cookieStore.get('patientEmail') != undefined) {
		window.location = "#/patientdashboard";
	}
});

scotchApp.controller('doctorSearch', function($scope, $http) {
	$scope.loader = false;
	$scope.searchDoctor = function(loginDetail) {
		var doctorSearch = null;
		if (loginDetail != null) {
			$scope.message = null;
			$scope.doctors = null;
			$scope.modalBody = false;

			console.log(loginDetail);
			doctorSearch = $http.post(
					'https://doctor-service.cfapps.io/doctor/get/all',
					loginDetail);
			$scope.loader = true;
		} else {
			$scope.message = "please provide input";
		}
		if (doctorSearch != null) {
			doctorSearch.success(function(getDoctor) {
				console.log(">>>>>>>" + getDoctor[0].mobile);
				$scope.doctors = getDoctor;
				$scope.modalBody = true;
				$scope.loader = false;
			});
			doctorSearch.error(function(data, status, headers, config) {
				alert("failure message: " + data.message);
				$scope.message = 'No Data Found!!!';
			});
		}
	}
	$scope.close = function() {
		console.log('........');
		$scope.doctors = null;
		$scope.message = null;
		$scope.modalBody = false;
	}
});

scotchApp.controller('login', function($scope, $rootScope, $http, $cookieStore,
		$window) {

	$scope.loader = false;
	if ($cookieStore.get('loginData') == undefined
			|| $cookieStore.get('email') == undefined) {
		$scope.doctorLogin = function(loginDetail) {
			console.log(loginDetail);
			$cookieStore.put('email', loginDetail.email);
			var loginSuccessful = $http
					.get('https://doctor-service.cfapps.io/doctor/get/'
							+ loginDetail.email + '/email');
			document.getElementById("myNav").style.width = "100%";
			$scope.loader = true;
			console.log(">>>>>>>>>" + loginSuccessful.success);
			loginSuccessful.success(function(getDoctorDetails) {
				if (getDoctorDetails.doctorId != null) {
					$scope.message = 'Successfully Logged in...!!!';
					$rootScope.getDoctorByMobile = getDoctorDetails;
					$cookieStore.put('loginData', getDoctorDetails);
					window.location = "#/dashboard";
				} else {
					$scope.message = 'Invalid Credentials...!!!';
				}
				$scope.loader = false;
			});
			loginSuccessful.error(function(data, status, headers, config) {
				alert("failure message: " + data.message);
				$scope.message = 'Invalid Credentials...!!!';
			});
		}
	} else {
		$window.location.href = "#/dashboard";
	}

});

scotchApp.controller('logout', function($scope, $rootScope, $http,
		$cookieStore, $window) {

	$cookieStore.remove('email');
	$cookieStore.remove('loginData');
	window.location = "#/login";
});

scotchApp.controller('about', function($scope) {

});

scotchApp.controller('contact', function($scope) {
});

scotchApp.controller('signUp', function($scope, $http) {
	$scope.doctorAdd = function(doctor, formName) {
		console.log(doctor);
		$scope.submit = true;
		console.log(formName);
		if ($scope[formName].$valid) {
			var res = $http.post('https://doctor-service.cfapps.io/doctor/',
					doctor);
			res.success(function(data) {
				alert(data.message);
				$scope.isVisible = false;
			});
			res.error(function(data, status, headers, config) {
				alert("failure message: " + data.message);
			});
		} else {
			console.log("invalid")
		}
	}
	$scope.doBlurName = function($event) {
		var target = $event.target;
		if ($scope.doctor != null && $scope.doctor.name.length > 0) {
			target.blur();
		} else {
			target.focus();
		}
	}
	$scope.doBlurMobile = function($event) {
		var target = $event.target;
		if ($scope.doctor != null && $scope.doctor.mobile != null
				&& $scope.doctor.mobile.length == 10) {
			target.blur();
		} else {
			target.focus();
		}
	}
	$scope.doBlurAdhar = function($event) {
		var target = $event.target;
		if ($scope.doctor != null && $scope.doctor.aadhaarNumber != null
				&& $scope.doctor.aadhaarNumber.length == 12) {
			target.blur();
		} else {
			target.focus();
		}
	}
});
/** **********************Dashboard Starts*********************** */

scotchApp.controller('dashboard',
		function($scope, $rootScope, $http, $cookieStore) {
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

function getByEmail($http, $cookieStore) {
	alert($cookieStore.get('email'));
	var doctors = $http.get('https://doctor-service.cfapps.io/doctor/get/'
			+ $cookieStore.get('email') + '/email');
	doctors.success(function(data) {
		return data;
	});
	doctors.error(function(data, status, headers, config) {
	});
}

scotchApp.controller('updateProfile', function($scope, $rootScope, $http,
		$cookieStore) {

	var getDoctors = $cookieStore.get('loginData');
	$scope.doctors = getDoctors
	$scope.doctorUpdate = function(doctorUpdateValue) {
		console.log(doctorUpdateValue);

		if (getDoctors.mobile == doctorUpdateValue.mobile) {
			delete doctorUpdateValue.mobile;
		}
		if (getDoctors.email == doctorUpdateValue.email) {
			delete doctorUpdateValue.email;
		}
		if (getDoctors.aadhaarNumber == doctorUpdateValue.aadhaarNumber) {
			delete doctorUpdateValue.aadhaarNumber;
		}
		// console.log(doctorUpdateValue);
		var updateDoctor = $http.put(
				'https://doctor-service.cfapps.io/doctor/', doctorUpdateValue);
		updateDoctor.success(function(updateResponse) {
			$scope.successMessage = "Successfully Updated...!!!";
			var doctorSuccess = $http
					.get('https://doctor-service.cfapps.io/doctor/get/'
							+ $cookieStore.get('email') + '/email');
			doctorSuccess.success(function(data) {
				$cookieStore.remove('loginData');
				$cookieStore.put('loginData', data);
			});
			doctorSuccess.error(function(data, status, headers, config) {
			});
		});
		updateDoctor.error(function(updateResponse, status, headers, config) {
			alert("failure message: " + updateResponse.message);
		});
	}
	$scope.doBlurName = function($event) {
		var target = $event.target;
		if ($scope.doctors != null && $scope.doctors.name.length > 0) {
			target.blur();
		} else {
			target.focus();
		}
	}
	$scope.doBlurMobile = function($event) {
		var target = $event.target;
		if ($scope.doctors != null && $scope.doctors.mobile != null
				&& $scope.doctors.mobile.length == 10) {
			target.blur();
		} else {
			target.focus();
		}
	}
	$scope.doBlurDegree = function($event) {
		var target = $event.target;
		if ($scope.doctors != null && $scope.doctors.highestDegree != null
				&& $scope.doctors.highestDegree.length > 0) {
			target.blur();
		} else {
			target.focus();
		}
	}
	$scope.doBlurHomeAddress = function($event) {
		var target = $event.target;
		if ($scope.doctors != null && $scope.doctors.homeAddress != null
				&& $scope.doctors.homeAddress.length > 0) {
			target.blur();
		} else {
			target.focus();
		}
	}
	$scope.doBlurExpertise = function($event) {
		var target = $event.target;
		if ($scope.doctors != null && $scope.doctors.expertized != null
				&& $scope.doctors.expertized.length > 0) {
			target.blur();
		} else {
			target.focus();
		}
	}
	$scope.doBlurShopAddress = function($event) {
		var target = $event.target;
		if ($scope.doctors != null && $scope.doctors.clinicAddress != null
				&& $scope.doctors.clinicAddress.length > 0) {
			target.blur();
		} else {
			target.focus();
		}
	}
	$scope.doBlurFees = function($event) {
		var target = $event.target;
		if ($scope.doctors != null && $scope.doctors.oneTimeFee != null
				&& $scope.doctors.oneTimeFee.length > 0) {
			target.blur();
		} else {
			target.focus();
		}
	}
	$scope.doBlurConsulting = function($event) {
		var target = $event.target;
		if ($scope.doctors != null && $scope.doctors.daysCheckFree != null
				&& $scope.doctors.daysCheckFree.length > 0) {
			target.blur();
		} else {
			target.focus();
		}
	}
});

scotchApp.controller('retrievePassword', function($scope, $rootScope) {
	$scope.submit = function() {
		alert("Password send to your E-mail Id");
	}
});

scotchApp.controller('afterLogin', function($scope, $rootScope, $cookieStore) {
	if ($cookieStore.get('loginData') != undefined
			&& $cookieStore.get('email') != undefined) {
		console.log("<<<<<<<<<<<<" + $cookieStore.get('loginData'));
		var getLoginDetails = $cookieStore.get('loginData');
		if (getLoginDetails.gender == '0') {
			getLoginDetails.gender = 'Female';
		} else if (getLoginDetails.gender == '1') {
			getLoginDetails.gender = 'Male';
		} else {
			getLoginDetails.gender = 'Transgen';
		}
		if (getLoginDetails.isGovernmentServent == '0') {
			getLoginDetails.isGovernmentServent = 'Yes';
		} else {
			getLoginDetails.isGovernmentServent = 'No';
		}
		$scope.doctor = getLoginDetails;

	} else {
		window.location = "#/login";
	}
});
/** **********************Dashboard Ends*********************** */
