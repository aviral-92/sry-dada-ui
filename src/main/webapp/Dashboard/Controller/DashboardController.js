scotchApp.controller('index', function($scope) {
    
});

scotchApp.controller('home', function($scope, $http) {
    
    $scope.visible = false;
    var index = 0;
    $scope.url = "#/home";
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

scotchApp.controller('calender', function($scope) {
    
    $scope.url = "#/calender";
});


scotchApp.controller('profile', function($scope) {
   
    $scope.url = "#/profile";
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
        var updateDoctor = $http.put(
            'https://doctor-service.cfapps.io/doctor/', doctorUpdateValue);
        updateDoctor.success(function(updateResponse) {
            $scope.successMessage = "Successfully Updated...!!!";
            var doctorSuccess = $http
                .get('https://doctor-service.cfapps.io/doctor/get/' +
                    $cookieStore.get('email') + '/email');
            doctorSuccess.success(function(data) {
                $cookieStore.remove('loginData');
                $cookieStore.put('loginData', data);
            });
            doctorSuccess.error(function(data, status, headers, config) {});
        });
        updateDoctor.error(function(updateResponse, status, headers, config) {
            alert("failure message: " + updateResponse.message);
        });
    }
});

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

scotchApp.controller('patientProfile', function($scope) {
	   
    $scope.url = "#/patientProfile";
});
