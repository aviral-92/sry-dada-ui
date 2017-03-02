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
    
    /*$scope.edit = function(todoData){
        
        $scope.visible = true;
        index = $scope.todoList.indexOf(todoData);
    }
    
    $scope.edited = function(){
        $scope.todoList.push({
            //$scope.
            //"message":$scope.todoMessage
        });
        $scope.todoList.splice(index, 0, $scope.todoMessage);
        $scope.visible = false;
    }*/
    
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
});