// -------------------Add Doctor Angular JS code Starts------------------------
var addDoctorJs = angular.module('AddDoctorApp', []);
addDoctorJs
		.controller(
				'addDoctorController',
				function($scope, $http) {

					$scope.isVisible = false;
					$scope.notVisible = false;
					$scope.ShowHide = function() {
						$scope.isVisible = $scope.isVisible ? false : true;
					}
					
					$scope.textValidation = function(){
						
						if($scope.doctorName == null || $scope.doctorName == ""){
							$scope.notVisible = true;
							console.log("-------"+$scope.doctorName);
							$scope.notValid = "Please enter Doctor Name.";
						}
					}
					$scope.doctorAdd = function(doctor, formName) {
						
						$scope.submit = true;
						console.log($scope.submit);
						console.log(formName);
						   if ($scope[formName].$valid) {
							   alert("test");
							   var res = $http
								.post(
										'http://localhost:9090/doctor-management/adddoctor',
										doctor);
						res.success(function(data) {
							alert(data.message);
							$scope.isVisible = false;

						});
						res.error(function(data, status, headers, config) {
							alert("failure message: " + data.message);
						});
					}
						   console.log(doctor);
					}
				});
					
// ---------------------Add Doctor Angular JS code Ends--------------------

// ------------------Delete Doctor Angular JS code Starts-------------------

var deleteDoctorJs = angular.module('deleteDoctorApp', []);
deleteDoctorJs.controller('deleteDoctorController', function($scope, $http) {

	$scope.isVisible = false;
	$scope.ShowHide = function() {
		$scope.isVisible = $scope.isVisible ? false : true;
	}
	$scope.doctorDelete = function(doctor) {
		$scope.submit = true;
		console.log($scope.submit);
		var res = null;
		if (doctor != null) {
			if(doctor.doctorId!=null && doctor.doctorId != ""){
			   alert("test");
			   res = $http.delete(
				'http://localhost:9090/doctor-management/deletedoctorById/'+doctor.doctorId);
		}else if(doctor.doctorNumber != null && doctor.doctorNumber != ""){
				res = $http.delete(
					'http://localhost:9090/doctor-management/deletedoctorByMobileNumber/'+doctor.doctorNumber);
		}else if(doctor.doctorAdhaarNumber != null && doctor.doctorAdhaarNumber != ""){
				res = $http.delete(
					'http://localhost:9090/doctor-management/deletedoctorByAdharNumber/'+doctor.doctorAdhaarNumber);
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
			console.log(doctor);
	}
});

// ----------------------Delete Doctor Angular JS code Ends---------------------

// --------------------Get Doctor Angular JS code Starts------------------------

var getDoctorJs = angular.module('GetDoctorApp', []);
getDoctorJs.controller('getDoctorController',
		function($scope, $http) {

			$scope.visible = false;
			$scope.isVisible = false;
			$scope.ShowHide = function() {
				$scope.isVisible = $scope.isVisible ? false : true;
			}

			$scope.doctorGet = function() {

				var doctorId = $scope.doctorId;
				var doctorName = $scope.doctorName;
				var doctorMobileNumber = $scope.doctorMobileNumber;
				var doctorAdharNumber = $scope.doctorAdharNumber;
				var doctorExpertise = $scope.doctorExpertise;
				var doctorFees = $scope.doctorFees;

				if (doctorId != null && parseInt(doctorId) > 0) {
					console.log(doctorId);
					response('/getdoctorbyid/' + parseInt(doctorId));
				} else if (doctorName != null && doctorName != ""
						&& doctorName != " ") {
					console.log(doctorName);
					response('/getdoctorbyname/' + doctorName);
				} else if (doctorMobileNumber != null
						&& doctorMobileNumber != ""
						&& doctorMobileNumber != " ") {
					console.log(doctorMobileNumber);
					response('/getdoctorbymobilenumber/' + doctorMobileNumber);
				} else if (doctorAdharNumber != null && doctorAdharNumber != ""
						&& doctorAdharNumber != " ") {
					console.log(doctorAdharNumber);
					response('/getdoctorbyadharNumber/' + doctorAdharNumber);
				} else if (doctorExpertise != null && doctorExpertise != ""
						&& doctorExpertise != " ") {
					console.log(doctorExpertise);
					response('/getdoctorbyexpertisted/' + doctorExpertise);
				} else if (doctorFees != null && doctorFees != ""
						&& parseInt(doctorFees) > 0) {
					console.log(doctorFees);
					response('/getdoctorbyconsultingfee/'
							+ parseInt(doctorFees));
				} else {
					alert("Please provide any input");
				}
				$scope.visible = true;
			}

			function response(pathVariable) {

				var url = 'http://localhost:9090/doctor-management';
				var res = $http.get(url + pathVariable);
				res.success(function(data) {
					alert(data[0].doctorName);
					console.log(data);
					$scope.doctors = data;
				});
				res.error(function(data, status, headers, config) {
					alert("failure message: " + JSON.stringify({
						data : data
					}));
				});
			}
		});

// ---------------Get Doctor Angular JS code Ends---------------------

// -------------Update Doctor Angular JS code Starts------------------

var updateDoctorJs = angular.module('UpdateDoctorApp', []);
updateDoctorJs.controller('updateDoctorController', function($scope, $http) {
	$scope.visible = false;
	$scope.isVisible = false;
	$scope.ShowHide = function() {
		$scope.isVisible = $scope.isVisible ? false : true;
	}

	$scope.doctorSearch = function() {
		var doctorId = $scope.doctorId;
		var doctorMobileNumber = $scope.doctorMobileNumber;
		var doctorAdharNumber = $scope.doctorAdharNumber;
		if (doctorId != null && parseInt(doctorId) > 0) {
			console.log(doctorId);
			response('/getdoctorbyid/' + parseInt(doctorId));
		} else if (doctorMobileNumber != null && doctorMobileNumber != ""
				&& doctorMobileNumber != " ") {
			console.log(doctorMobileNumber);
			response('/getdoctorbymobilenumber/' + doctorMobileNumber);
		} else if (doctorAdharNumber != null && doctorAdharNumber != ""
				&& doctorAdharNumber != " ") {
			console.log(doctorAdharNumber);
			response('/getdoctorbyadharNumber/' + doctorAdharNumber);
		} else {
			alert("Please provide any input");
		}
		$scope.visible = true;
	}

	$scope.doctorUpdate = function(doctor) {

		var updatedDoctorArray = {

				doctorId : doctor.doctorId,
				doctorName : doctor.doctorName,
				doctorNumber : doctor.doctorNumber,
				doctorHomeAddress : doctor.doctorHomeAddress,
				doctorAdhaarNumber : doctor.doctorAdhaarNumber,
				doctorHighestDegree : doctor.doctorHighestDegree,
				doctorExpertized : doctor.doctorExpertized,
				doctorGovtServent : Boolean(doctor.doctorGovt),
				doctorOneTimeConsultingFee : doctor.doctorOneTimeConsultingFee,
				doctorDaystoCheckFreeInConsultingFee : parseInt(doctor.doctorDaystoCheckFreeInConsultingFee),
				doctorShopAddress : doctor.doctorShopAddress
		}
		console.log(updatedDoctorArray);
		updateDoctor(updatedDoctorArray);
	};

	function response(pathVariable) {

		var url = 'http://localhost:9090/doctor-management';
		var res = $http.get(url + pathVariable);
		res.success(function(data) {
			alert(data[0].doctorName);
			
			console.log(data);
			$scope.doctors = data;
		});
		res.error(function(data, status, headers, config) {
			alert("failure message: " + JSON.stringify({
				data : data
			}));
		});
	}
	
	function updateDoctor(jsonData) {

		var url = 'http://localhost:9090/doctor-management/updatedoctor';
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

// ---------------Update Doctor Angular JS code Ends---------------------
