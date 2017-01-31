scotchApp.controller('patientlogin',function($scope){
	alert("patient login");
	
	$scope.patientLogin = function(loginDetails){
		console.log(loginDetails);
		if(loginDetails.password == 'user'){
			$scope.message = 'Successfully logged in....!!!!!!';
			$scope.login = loginDetails;
			window.location="#/patientLoginSuccess";
		}else{
			$scope.message = 'Invalid Credentials...!!!';
		}
	}
});

// Patient Login Success Starts---------------------------------------------------------------------------------------
scotchApp.controller('patientLoginSuccess', function($scope, $rootScope, $http){
	
	$scope.patientUpdate = false;
	$scope.newValue = function(value){
		console.log(value);
		if(value=='update'){
			$scope.patientUpdate = true;
			$scope.demo = function(patient){
				console.log(">>>>>>>>>>>> Demo" +patient.patientId);
				var patientGet = null;
				if(patient!=null && patient.patientId!=null && patient.patientId!=""){
					patientGet = $http.get('https://doctor-service.cfapps.io/doctor-management/getdoctorbyid/'+patient.patientId);
					patientUpdateAjax(patientGet, $scope, $http);
					$scope.modalBody = true;
					}
				else if(patient!=null && patient.patientMobileNumber != null && patient.patientMobileNumber!=""){
					// Ajax on basis of patientMobileNumber.
					patientGet = $http.get('https://doctor-service.cfapps.io/doctor-management/getdoctorbymobilenumber/'+patient.patientMobileNumber);
					// Function called
					patientUpdateAjax(patientGet, $scope, $http);
					$scope.modalBody = true;
					
				}else if(patient != null && patient.patientAdharNumber != null && patient.patientAdharNumber != ""){
					// Ajax on basis of patientAdhaarNumber.
					patientGet = $http.get('https://doctor-service.cfapps.io/doctor-management/getdoctorbyadharNumber/'+patient.patientAdharNumber);
					// Function called
					patientUpdateAjax(patientGet, $scope, $http);
					$scope.modalBody = true;
				}else{
					$scope.modalBody = false;
					$scope.modalBodyMsg = " Please provide input";
				}
				}
			}else{
				$scope.patientUpdate = false;
			}
		}
});

function patientUpdateAjax(patientGet, $scope, $http){
	
	// Get before update...
	patientGet.success(function(data) {
		$scope.patients = data;
		console.log($scope.patients);
		
		// if no value found then it will display this
		if(data.patientId == null){
			$scope.modalBody = false;
			$scope.modalBodyMsg = " Please provide correct value.";
		}
		// Update function calls
		$scope.patientUpdate = function(patientUpdateValue){
			console.log(patientUpdateValue);
			// Update Ajax hit
			var updatepatient = $http.put('https://doctor-service.cfapps.io/doctor-management/updatedoctor', patientUpdateValue);
			// For success
			updatepatient.success(function(updateResponse) {
				$scope.patientUpdate = updateResponse.message;
			});
			// For error
			patientGet.error(function(updateResponse, status, headers, config) {
				alert("failure message: " + updateResponse.message);
			});
		}
	});
	patientGet.error(function(data, status, headers, config) {
		alert("failure message: " + data.message);
		$scope.modalBody = false;
		$scope.modalBodyMsg = " Please provide correct value.";
	});
	return;
}
//Patient Login Success Ends---------------------------------------------------------------------------------------
//patient sign up Starts------------------------------------------------------------------------------------------------
scotchApp.controller('patientsignup',function($scope, $http){
	$scope.patientAdd = function(patient, formName) {
		console.log(patient);
		$scope.submit = true;
		console.log(formName);
		if ($scope[formName].$valid) {
		   var res = $http.post('https://doctor-service.cfapps.io/customermanagement/addpatient',patient);
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
		if($scope.patient != null && $scope.patient.patientNumber != null && $scope.patient.patientNumber.length == 10){
			target.blur();	
		}else{
			target.focus();
		}
	}
	$scope.doBlurAdhar = function($event){
		var target = $event.target;
		if($scope.patient != null && $scope.patient.patientAdhaarNumber != null && $scope.patient.patientAdhaarNumber.length == 12){
			target.blur();	
		}else{
			target.focus();
		}
	}
	$scope.doBlurHomeAddress = function($event){
		var target = $event.target;
		if($scope.patient != null && $scope.patient.patientHomeAddress != null && $scope.patient.patientHomeAddress.length > 0){
			target.blur();	
		}else{
			target.focus();
		}
}
});
//patient sign up Ends------------------------------------------------------------------------------------------------