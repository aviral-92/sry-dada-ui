scotchApp.controller('patientlogin',function($scope, $rootScope, $http, $cookieStore, $window){
	
	if($cookieStore.get('loginData') == undefined || $cookieStore.get('email') == undefined){
		$scope.patientLogin = function(loginDetails){
			console.log(loginDetails);
			$cookieStore.put('email', loginDetails.email);
			var loginSuccessful = $http.get('http://patient-service.cfapps.io/patient/getPatientByEmail/'+loginDetails.email);
			console.log(">>>>>>>>>" + loginSuccessful.success);
			loginSuccessful.success(function(getPatientDetails) {
				if(getPatientDetails.patientId != null){
					$scope.message = 'Successfully Logged in...!!!';
					$cookieStore.put('loginData', getPatientDetails);
					window.location = "#/patientdashboard";
				}else{
					$scope.message = 'Invalid Credentials...!!!';
		    		}
			});
			loginSuccessful.error(function(data, status, headers, config) {
				alert("failure message: " + data.message);
				$scope.message = 'Invalid Credentials...!!!';
			});
		}
	}else{
		$window.location.href = "#/patientdashboard";
	}
});

scotchApp.controller('patientlogout',function($scope, $rootScope, $http, $cookieStore, $window){
	
	$cookieStore.remove('email');
	$cookieStore.remove('loginData');
	window.location = "#/patientlogin";
});
scotchApp.controller('patientdashboard',function($scope, $rootScope, $http, $cookieStore){
	var patientDetail = $cookieStore.get('loginData');
	var fieldCounter = checkDoctorField(patientDetail);
	$scope.percent = parseInt((fieldCounter /7)*100)+'%';
	
});

function checkDoctorField(patients){
	
	if(patients != null){
		var field = 1;
		if(patients.homeAddress != null){
			field++;
		}
		return field;
	}
}
function getByEmail($http, $cookieStore){
	
	alert($cookieStore.get('email'));
	var patients = $http.get('http://patient-service.cfapps.io/patient/getPatientByEmail/'+$cookieStore.get('email'));
	patients.success(function(data) {
		return data;
	});
	doctors.error(function(data, status, headers, config) {
	});
}
scotchApp.controller('patientsignup',function($scope, $http){
	$scope.patientAdd = function(patient, formName) {
		console.log(patient);
		$scope.submit = true;
		console.log(formName);
		if ($scope[formName].$valid) {
		   var res = $http.post('http://patient-service.cfapps.io/patient/',patient);
		   res.success(function(data) {
			   alert(data.message);
			   $scope.isVisible = false;
	});
	res.error(function(data, status, headers, config) {
		alert("failure message: " + data.message);
	});
}else{
	console.log("invalid")
	}
}
	$scope.doBlurName = function($event){
		var target = $event.target;
		if($scope.patient != null && $scope.patient.patientName.length > 0){
			target.blur();	
		}else{
			target.focus();
		}
}
	$scope.doBlurMobile = function($event){
		var target = $event.target;
		if($scope.patient != null && $scope.patient.patientMobile != null && $scope.patient.patientMobile.length == 10){
			target.blur();	
		}else{
			target.focus();
		}
	}
	$scope.doBlurAdhar = function($event){
		var target = $event.target;
		if($scope.patient != null && $scope.patient.patientAadhaar != null && $scope.patient.patientAadhaar.length == 12){
			target.blur();	
		}else{
			target.focus();
		}
	}
});
scotchApp.controller('patientupdateProfile',function($scope, $rootScope, $http, $cookieStore){
	$scope.patients = $cookieStore.get('loginData');
	$scope.patientUpdate = function(patientUpdateValue){
		console.log(patientUpdateValue);
		var updatepatient = $http.put('http://patient-service.cfapps.io/patient/', patientUpdateValue);
		updatepatient.success(function(updateResponse) {
			$scope.successMessage = "Successfully Updated...!!!";
			var patientSuccess = $http.get('http://patient-service.cfapps.io/patient/getPatientByEmail/'+patients.patientEmail);
			patientSuccess.success(function(data) {
				alert("dfdfdf");
				console.log(data.mobile);
				$cookieStore.remove('loginData');
				$cookieStore.put('loginData', data);
			});
			patientSuccess.error(function(data, status, headers, config) {
			});
		});
		updatepatient.error(function(updateResponse, status, headers, config) {
			alert("failure message: " + updateResponse.message);
		});
	}
	$scope.doBlurName = function($event){
		var target = $event.target;
		if($scope.patients != null && $scope.patients.patientName.length > 0){
			target.blur();	
		}else{
			target.focus();
		}
	}
	$scope.doBlurMobile = function($event){
		var target = $event.target;
		if($scope.patients != null && $scope.patients.patientMobile != null && $scope.patients.patientMobile.length == 10){
			target.blur();	
		}else{
			target.focus();
		}
	}
	$scope.doBlurHomeAddress = function($event){
		var target = $event.target;
		if($scope.patients != null && $scope.patients.patientHomeAddress != null && $scope.patients.patientHomeAddress.length > 0){
			target.blur();	
		}else{
			target.focus();
		}
	}
});
scotchApp.controller('retrievePassword',function($scope, $rootScope){
	$scope.submit = function(){
        alert("Password send to your E-mail Id");
	}
});

scotchApp.controller('patientafterLogin',function($scope, $rootScope, $cookieStore){
	if($cookieStore.get('loginData') != undefined && $cookieStore.get('email') != undefined){
		console.log("<<<<<<<<<<<<" +$cookieStore.get('loginData'));
		var getLoginDetails = $cookieStore.get('loginData');
		if(getLoginDetails.gender == '0'){
			getLoginDetails.gender = 'Female';
		}else{
			getLoginDetails.gender = 'Male';
		}
		$scope.patient = getLoginDetails;
	}else{
		window.location = "#/patientlogin";
	}
});