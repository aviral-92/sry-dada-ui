signUp = function($scope) {
    $scope.formAllGood = function () {
    	console.log($scope.nameGood);
        return ($scope.nameGood && $scope.passwordGood && $scope.passwordCGood)
    }
}

angular.module('UserValidation', []).directive('validName', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {
            	//console.log(">>>>>>>>" +viewValue);
                // Any way to read the results of a "required" angular validator
				// here?
                var isBlank = viewValue === ''
                var invalidChars = !isBlank && !/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/.test(viewValue)
                var invalidLen = !isBlank && !invalidChars && (viewValue.length < 3 || viewValue.length > 20)
                ctrl.$setValidity('isBlank', !isBlank)
                ctrl.$setValidity('invalidChars', !invalidChars)
                ctrl.$setValidity('invalidLen', !invalidLen)
                scope.nameGood = !isBlank && !invalidChars && !invalidLen
                if(scope.nameGood == true){
                	//console.log(">>>>>>>>" +scope.nameGood);
                	return viewValue;
                }
                else 
                	return false;
            })
        }
    }
})/*.directive('validEmail', function () {
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
})*/.directive('validMobile', function () {
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
                if(scope.mobileGood == true){
                	//console.log(">>>>>>>>" +scope.nameGood);
                	return viewValue;
                }
                else 
                	return false;
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
                if(scope.adharGood == true){
                	//console.log(">>>>>>>>" +scope.nameGood);
                	return viewValue;
                }
                else 
                	return false;
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
                var invalidLen = !isBlank && !invalidChars && (viewValue.length < 3 || viewValue.length > 30)
                ctrl.$setValidity('isBlank', !isBlank)
                ctrl.$setValidity('invalidChars', !invalidChars)
                ctrl.$setValidity('invalidLen', !invalidLen)
                scope.addressGood = !isBlank && !invalidChars && !invalidLen
                if(scope.addressGood == true){
                	//console.log(">>>>>>>>" +scope.nameGood);
                	return viewValue;
                }
                else 
                	return false;
            })
        }
    }
}).directive('validDegree', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {
                // Any way to read the results of a "required" angular validator
				// here?
                var isBlank = viewValue === ''
                var invalidChars = !isBlank && !/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/.test(viewValue)
                var invalidLen = !isBlank && !invalidChars && (viewValue.length < 0 || viewValue.length > 30)
                ctrl.$setValidity('isBlank', !isBlank)
                ctrl.$setValidity('invalidChars', !invalidChars)
                ctrl.$setValidity('invalidLen', !invalidLen)
                scope.degreeGood = !isBlank && !invalidChars && !invalidLen
                if(scope.degreeGood == true){
                	//console.log(">>>>>>>>" +scope.nameGood);
                	return viewValue;
                }
                else 
                	return false;
            })
        }
    }
}).directive('validExpertise', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {
                // Any way to read the results of a "required" angular validator
				// here?
                var isBlank = viewValue === ''
                var invalidChars = !isBlank && !/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/.test(viewValue)
                var invalidLen = !isBlank && !invalidChars && (viewValue.length < 0 || viewValue.length > 30)
                ctrl.$setValidity('isBlank', !isBlank)
                ctrl.$setValidity('invalidChars', !invalidChars)
                ctrl.$setValidity('invalidLen', !invalidLen)
                scope.expertiseGood = !isBlank && !invalidChars && !invalidLen
                if(scope.expertiseGood == true){
                	//console.log(">>>>>>>>" +scope.nameGood);
                	return viewValue;
                }
                else 
                	return false;
            })
        }
    }
}).directive('validShop', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {
                // Any way to read the results of a "required" angular validator
				// here?
                var isBlank = viewValue === ''
                var invalidChars = !isBlank && !/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/.test(viewValue)
                var invalidLen = !isBlank && !invalidChars && (viewValue.length < 0 || viewValue.length > 30)
                ctrl.$setValidity('isBlank', !isBlank)
                ctrl.$setValidity('invalidChars', !invalidChars)
                ctrl.$setValidity('invalidLen', !invalidLen)
                scope.shopGood = !isBlank && !invalidChars && !invalidLen
                if(scope.shopGood == true){
                	//console.log(">>>>>>>>" +scope.nameGood);
                	return viewValue;
                }
                else 
                	return false;
            })
        }
    }
}).directive('validFees', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {
                // Any way to read the results of a "required" angular validator
				// here?
                var isBlank = viewValue === ''
                	var invalidChars = !isBlank && !/^\d+$/.test(viewValue)
                var invalidLen = !isBlank && !invalidChars && (viewValue.length < 0 || viewValue.length > 6)
                ctrl.$setValidity('isBlank', !isBlank)
                ctrl.$setValidity('invalidChars', !invalidChars)
                ctrl.$setValidity('invalidLen', !invalidLen)
                scope.feesGood = !isBlank && !invalidChars && !invalidLen
                if(scope.feesGood == true){
                	//console.log(">>>>>>>>" +scope.nameGood);
                	return viewValue;
                }
                else 
                	return false;
            })
        }
    }
}).directive('validConsulting', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {
                // Any way to read the results of a "required" angular validator
				// here?
                var isBlank = viewValue === ''
                	var invalidChars = !isBlank && !/^\d+$/.test(viewValue)
                var invalidLen = !isBlank && !invalidChars && (viewValue.length < 0 || viewValue.length > 5)
                ctrl.$setValidity('isBlank', !isBlank)
                ctrl.$setValidity('invalidChars', !invalidChars)
                ctrl.$setValidity('invalidLen', !invalidLen)
                scope.consultingGood = !isBlank && !invalidChars && !invalidLen
                if(scope.consultingGood == true){
                	//console.log(">>>>>>>>" +scope.nameGood);
                	return viewValue;
                }
                else 
                	return false;
            })
        }
    }
})