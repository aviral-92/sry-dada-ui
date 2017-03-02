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


scotchApp.controller('profile', function($scope,$cookieStore) {
   
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
    //Calucate Age of Doctor
    var age = new Date().getYear() - new Date($scope.doctors.dob).getYear();
    $scope.doctors.age = age;
    
    //Calculate percentage dynamically...
    if (getDoctors != null) {
            var field = 5;
            if (getDoctors.homeAddress != null &&
                getDoctors.homeAddress != 'NA') {
                field++;
            }
            if (getDoctors.highestDegree != null &&
                getDoctors.highestDegree != 'NA') {
                field++;
            }
            if (getDoctors.expertized != null &&
                getDoctors.expertized != 'NA') {
                field++;
            }
            if (getDoctors.isGovernmentServent != null &&
                getDoctors.isGovernmentServent != 'NA') {
                field++;
            }
            if (getDoctors.clinicAddress != null &&
                getDoctors.clinicAddress != 'NA') {
                field++;
            }
            if (getDoctors.oneTimeFee != null &&
                getDoctors.oneTimeFee != '' &&
                getDoctors.oneTimeFee != 'NA') {
                field++;
            }
            if (getDoctors.daysCheckFree != null &&
                getDoctors.daysCheckFree != 'NA') {
                field++;
            }
            if (getDoctors.clinicName != null &&
                getDoctors.clinicName != 'NA') {
                field++;
            }
            if (getDoctors.dob != null &&
                getDoctors.dob != 'NA') {
                field++;
            }
            if (getDoctors.gender != null &&
                getDoctors.gender != 'NA') {
                field++;
            }
            if (getDoctors.age != null &&
                getDoctors.age != 'NA') {
                field++;
            }
            if (getDoctors.description != null &&
                getDoctors.description != 'NA') {
                field++;
            }
            $scope.percent = parseInt((field / 17) * 100) + '%';
        }
    
});

scotchApp.controller('signout', function($scope,$cookieStore, $window) {
   
    $cookieStore.remove('email') ;
    $cookieStore.remove('loginData') ;
    $window.location.href = '/index.html#/';
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

scotchApp.controller('patientProfile', function($scope,$cookieStore) {
   
$scope.url = "#/patientProfile";
var getPatients = $cookieStore.get('loginData');
$scope.patients = getPatients
$scope.patientUpdate = function(doctorUpdateValue) {
    console.log(doctorUpdateValue);

    if (getPatients.mobile == patientUpdateValue.mobile) {
        delete patientUpdateValue.mobile;
    }
    if (getPatients.email == patientUpdateValue.email) {
        delete patientUpdateValue.email;
    }
    if (getPatients.aadhaarNumber == patientUpdateValue.aadhaarNumber) {
        delete patientUpdateValue.aadhaarNumber;
    }
    var updateDoctor = $http.put(
        'https://patient-service.cfapps.io/patient/', patientUpdateValue);
    updateDoctor.success(function(updateResponse) {
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
    updateDoctor.error(function(updateResponse, status, headers, config) {
        alert("failure message: " + updateResponse.message);
    });
}
});