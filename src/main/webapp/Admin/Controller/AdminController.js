scotchApp.controller('adminIndex', function($scope) {
    
});

scotchApp.controller('adminHome', function($scope,$cookieStore) {
	  $scope.url = "#/adminHome";
	  
	  
	 /* var getAdmin = $cookieStore.get('loginData');*/
	  
	  /*$scope.adminDetails = function(adminUpdateValue) {
	        console.log(adminUpdateValue);

	        if (getAdmin.mobile == adminUpdateValue.mobile) {
	            delete adminUpdateValue.mobile;
	        }
	        if (getAdmin.email == adminUpdateValue.email) {
	            delete adminUpdateValue.email;
	        }
	        if (getAdmin.aadhaarNumber == adminUpdateValue.aadhaarNumber) {
	            delete adminUpdateValue.aadhaarNumber;
	        }
	        var updateDoctor = $http.put(
	            'https://doctor-service.cfapps.io/doctor/', adminUpdateValue);
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
	    }*/
});

scotchApp.controller('signout', function($scope,$cookieStore, $window) {
	   
    $cookieStore.remove('email') ;
    $cookieStore.remove('loginData') ;
    $window.location.href = '/index.html#/';
});