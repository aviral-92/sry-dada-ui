scotchApp.controller('patientHome', function($scope, $http) {
	$scope.visible = false;
    var index = 0;
    $scope.url = "#/patientHome";
    var todo = $http.get('/js/MockJson/todoList.json');
    todo.success(function(todoData) {
        $scope.todoList = todoData;
    });
    $scope.close = function(){
        var data = $scope.todoTastData;
        $scope.todoList.push({
            "message":data
        });
        $scope.todoTastData = '';
    }
});

scotchApp.controller('patientProfile', function($scope,$cookieStore) {
   
	 $scope.url = "#/patientProfile";
	    var getPatients = $cookieStore.get('loginData');
	    
	    $scope.patients = getPatients
	    $scope.patientUpdate = function(patientUpdateValue) {
	        console.log(patientUpdateValue);

	        if (getPatients.patientMobile == patientUpdateValue.patientMobile) {
	            delete patientUpdateValue.patientMobile;
	        }
	        if (getPatients.email == patientUpdateValue.email) {
	            delete patientUpdateValue.email;
	        }
	        if (getPatients.patientAadhaar == patientUpdateValue.patientAadhaar) {
	            delete patientUpdateValue.patientAadhaar;
	        }
	        var updatePatient = $http.put(
	            'https://patient-service.cfapps.io/patient/', patientUpdateValue);
	        updatePatient.success(function(updateResponse) {
	            $scope.successMessage = "Successfully Updated...!!!";
	            var patientSuccess = $http
	                .get('https://patient-service.cfapps.io/patient/get/' +
	                    $cookieStore.get('email') + '/email');
	            patientSuccess.success(function(data) {
	                $cookieStore.remove('loginData');
	                $cookieStore.put('loginData', data);
	            });
	            patientSuccess.error(function(data, status, headers, config) {});
	        });
	        updatePatient.error(function(updateResponse, status, headers, config) {
	            alert("failure message: " + updateResponse.message);
	        });
	    }
	    
});

