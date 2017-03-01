scotchApp.controller('index', function($scope) {
    
});

scotchApp.controller('home', function($scope, $http) {
    
    $scope.click == false;
    $scope.url = "#/home";
    var todo = $http.get('/js/MockJson/todoList.json');
    todo.success(function(todoData) {
        $scope.todoList = todoData;
    });
    
    $scope.click = function(){
        alert('gg');
        $scope.click == true;
    }
});

scotchApp.controller('calender', function($scope) {
    
    $scope.url = "#/calender";
});


scotchApp.controller('profile', function($scope) {
   
    $scope.url = "#/profile";
});