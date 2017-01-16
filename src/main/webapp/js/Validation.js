/**********************Add Patient Validation Starts*************************************/
var addCustomerJs = angular.module('patientApp',['UserValidation']);

addCustomerController = function($scope) {
    $scope.formAllGood = function () {
        return ($scope.nameGood && $scope.passwordGood && $scope.passwordCGood)
    }
        
}

angular.module('UserValidation', []).directive('validName', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {
                // Any way to read the results of a "required" angular validator
				// here?
                var isBlank = viewValue === ''
                var invalidChars = !isBlank && !/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/.test(viewValue)
                var invalidLen = !isBlank && !invalidChars && (viewValue.length < 3 || viewValue.length > 20)
                ctrl.$setValidity('isBlank', !isBlank)
                ctrl.$setValidity('invalidChars', !invalidChars)
                ctrl.$setValidity('invalidLen', !invalidLen)
                scope.nameGood = !isBlank && !invalidChars && !invalidLen

            })
        }
    }
}).directive('validEmail', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {
                // Any way to read the results of a "required" angular validator
				// here?
                var isBlank = viewValue === ''
                var invalidChars = !isBlank && !/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(viewValue)
                var invalidLen = !isBlank && !invalidChars && (viewValue.length < 3 || viewValue.length > 20)
                ctrl.$setValidity('isBlank', !isBlank)
                ctrl.$setValidity('invalidChars', !invalidChars)
                ctrl.$setValidity('invalidLen', !invalidLen)
                scope.emailGood = !isBlank && !invalidChars && !invalidLen

            })
        }
    }
}).directive('validMobile', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {
                // Any way to read the results of a "required" angular validator
				// here?
                var isBlank = viewValue === ''
                var invalidChars = !isBlank && !/^\d+$/.test(viewValue)
                var invalidLen = !isBlank && !invalidChars && (viewValue.length < 10 || viewValue.length > 10)
                ctrl.$setValidity('isBlank', !isBlank)
                ctrl.$setValidity('invalidChars', !invalidChars)
                ctrl.$setValidity('invalidLen', !invalidLen)
                scope.mobileGood = !isBlank && !invalidChars && !invalidLen

            })
        }
    }
}).directive('validAdhar', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {
                // Any way to read the results of a "required" angular validator
				// here?
                var isBlank = viewValue === ''
                var invalidChars = !isBlank && !/^\d+$/.test(viewValue)
                var invalidLen = !isBlank && !invalidChars && (viewValue.length < 12 || viewValue.length > 12)
                ctrl.$setValidity('isBlank', !isBlank)
                ctrl.$setValidity('invalidChars', !invalidChars)
                ctrl.$setValidity('invalidLen', !invalidLen)
                scope.adharGood = !isBlank && !invalidChars && !invalidLen

            })
        }
    }
}).directive('validAddress', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {
                // Any way to read the results of a "required" angular validator
				// here?
                var isBlank = viewValue === ''
                var invalidChars = !isBlank && !/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/.test(viewValue)
                var invalidLen = !isBlank && !invalidChars && (viewValue.length < 5 || viewValue.length > 30)
                ctrl.$setValidity('isBlank', !isBlank)
                ctrl.$setValidity('invalidChars', !invalidChars)
                ctrl.$setValidity('invalidLen', !invalidLen)
                scope.addressGood = !isBlank && !invalidChars && !invalidLen

            })
        }
    }
})
/**********************Add Patient Validation Ends*************************************/