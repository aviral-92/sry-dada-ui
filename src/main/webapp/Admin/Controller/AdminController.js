scotchApp.controller('adminIndex', function($scope) {
    
});

scotchApp.controller('adminHome', function($scope,$cookieStore) {
	  $scope.url = "#/adminHome";
	  

});

/*scotchApp.controller('signout', function($scope,$cookieStore, $window) {
	   
    $cookieStore.remove('email') ;
    $cookieStore.remove('loginData') ;
    $window.location.href = '/index.html#/';
});*/