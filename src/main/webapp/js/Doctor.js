function submitform() {
	var doctorGovtServent = '';
	if ($('#govtservent').is(':checked')) {
		doctorGovtServent = 'true';
	} else {
		doctorGovtServent = 'false';
	}
	var formData = "{ \"doctorId\":" + $('#id').val() + ", \"doctorName\" : \""
			+ $('#name').val() + "\", \"doctorNumber\" : \""
			+ $('#number').val() + "\", \"doctorHomeAddress\" : \""
			+ $('#address').val() + "\", \"doctorAdhaarNumber\" : \""
			+ $('#adhaarnumber').val() + "\", \"doctorHighestDegree\" : \""
			+ $('#highestdegree').val() + "\", \"doctorExpertized\" : \""
			+ $('#expertise').val() + "\", \"doctorGovtServent\" : "
			+ doctorGovtServent + ", \"doctorOneTimeConsultingFee\" : \""
			+ $('#consultingfee').val()
			+ "\", \"doctorDaystoCheckFreeInConsultingFee\" : \""
			+ $('#daysfreeconsultingfees').val()
			+ "\", \"doctorShopAddress\" : \"" + $('#clinicaddress').val()
			+ "\"}";
	console.log(formData);
	$.ajax({
		url : "http://localhost:9090/adddoctor",
		headers : {
			'Content-Type' : 'application/json',
			'Access-Control-Request-Method' : 'POST'
		},
		data : formData,
		type : "POST",
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function(data) {
			alert("Successfully Inserted...!!!	" + JSON.stringify(data));
			// console.log(data);
			var obj = JSON.parse(JSON.stringify(data));
			// alert(obj.msg);
			$('#message').html(obj.msg);
			$('#message').show();

		},
		error : function(data) {
			alert("Error");
		}
	});
}

// -------------------Add Doctor Angular JS code Starts------------------------
var addDoctorJs = angular.module('AddDoctorApp', []);
addDoctorJs
		.controller(
				'addDoctorController',
				function($scope, $http) {

					$scope.isVisible = false;
					$scope.ShowHide = function() {
						$scope.isVisible = $scope.isVisible ? false : true;
					}
					$scope.doctorAdd = function() {
						var doctorName = $scope.doctorName;
						var doctorMobileNumber = $scope.doctorMobileNumber;
						var doctorAdharNumber = $scope.doctorAdharNumber;
						var doctorHomeAddress = $scope.doctorHomeAddress;
						var doctorHighestDegree = $scope.doctorHighestDegree;
						var doctorExpertise = $scope.doctorExpertise;
						var doctorGovt = $scope.doctorGovt;
						var doctorShopAddress = $scope.doctorShopAddress;
						var doctorFees = $scope.doctorFees;
						var doctorDaysCheckFree = $scope.doctorDaysCheckFree;

						var doctorJson = {
							doctorName : doctorName,
							doctorNumber : doctorMobileNumber,
							doctorHomeAddress : doctorHomeAddress,
							doctorAdhaarNumber : doctorAdharNumber,
							doctorHighestDegree : doctorHighestDegree,
							doctorExpertized : doctorExpertise,
							doctorGovtServent : Boolean(doctorGovt),
							doctorOneTimeConsultingFee : doctorFees,
							doctorDaystoCheckFreeInConsultingFee : parseInt(doctorDaysCheckFree),
							doctorShopAddress : doctorShopAddress
						};

						console.log(doctorJson);

						var res = $http
								.post(
										'http://localhost:9090/doctor-management/adddoctor',
										doctorJson);
						res.success(function(data) {
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

	$scope.doctorDelete = function() {

		var doctorId = $scope.doctorId;
		var doctorMobileNumber = $scope.doctorMobileNumber;
		var doctorAdharNumber = $scope.doctorAdharNumber;

		var doctorJson = {
			doctorId : doctorId,
			doctorNumber : doctorMobileNumber,
			doctorAdhaarNumber : doctorAdharNumber,
		};

		console.log(doctorJson);
		var res = $http.post(
				'http://localhost:9090/doctor-management/deletedoctor',
				doctorJson);
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
			//$scope.doctors = data;
		});
		res.error(function(data, status, headers, config) {
			alert("failure message: " + JSON.stringify({
				data : data
			}));
		});
	}
	
});

// ---------------Update Doctor Angular JS code Ends---------------------
