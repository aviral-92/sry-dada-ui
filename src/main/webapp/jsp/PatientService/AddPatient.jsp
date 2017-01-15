<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Patient SignUp</title>
<link
	href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
	rel="stylesheet">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script
	src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
<script
	src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.3/angular-resource.min.js"></script>
<script src="js/Patient.js"></script>
<jsp:include page="/jsp/Header.jsp" />
<jsp:include page="/jsp/Footer.jsp" />
</head>
<body ng-app="patientApp">
	<div class="container" ng-controller="addCustomerController">
		<h3>
			<center>Register yourself.</center>
		</h3>
		<form name="patientForm" class="form form-horizontal" role="form"
			novalidate>

			<div class="form-group" ng-class="{error:!patientForm.name.$valid}">
				<label class="control-label col-sm-2" for="name">Patient
					Name:</label>
				<div class="col-sm-10">
					<input type="text" name="name" class="form-control" id="name"
						ng-model="name" placeholder="Enter name" valid-Name>

					<div class="help-inline">
						<span ng-show="!!patientForm.name.$error.isBlank">Patient Name
							Required.</span> <span ng-show="!!patientForm.name.$error.invalidChars">Patient Name
							must contain letters &amp; spaces only.</span> <span
							ng-show="!!patientForm.name.$error.invalidLen">Patient Name
							must be 3-20 characters.</span>
					</div>
				</div>
			</div>
			<div class="form-group" ng-class="{error:!patientForm.email.$valid}">
				<label class="control-label col-sm-2" for="name">Patient
					Email:</label>
				<div class="col-sm-10">
					<input type="email" name="email" class="form-control" id="email"
						ng-model="email" placeholder="Enter email" valid-Email>

					<div class="help-inline">
						<span ng-show="!!patientForm.email.$error.isBlank">Patient email
							Required.</span> <span ng-show="!!patientForm.email.$error.invalidChars">Patient email
							is not valid.</span> <span
							ng-show="!!patientForm.email.$error.invalidLen">Patient Name
							must be 3-20 characters.</span>
					</div>
				</div>
			</div>
			<div class="form-group" ng-class="{error:!patientForm.mobile.$valid}">
				<label class="control-label col-sm-2" for="name">Mobile
					Number:</label>
				<div class="col-sm-10">
					<input type="text" name="mobile" class="form-control" id="mobile"
						ng-model="mobile" placeholder="Enter mobile" valid-Mobile>

					<div class="help-inline">
						<span ng-show="!!patientForm.mobile.$error.isBlank">Patient email
							Required.</span> <span ng-show="!!patientForm.mobile.$error.invalidChars">Patient mobile
							is not valid.</span> <span
							ng-show="!!patientForm.mobile.$error.invalidLen">Patient mobile
							number should be 10 digits.</span>
					</div>
				</div>
			</div>
			<div class="form-group">
				<label class="control-label col-sm-2" for="pwd">Adhaar
					Number:</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" id="adhaar"
						ng-model="customer.custAadhaar" placeholder="Enter adhaar number">
				</div>
			</div>
			<div class="form-group">
				<label class="control-label col-sm-2" for="pwd">Home
					Address:</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" id="homeAddress"
						ng-model="customer.custHomeAddress"
						placeholder="Enter home address">
				</div>
			</div>
			<div class="form-group" ng-show="formAllGood()"></div>
			<div class="form-group">
				<div class="col-sm-offset-2 col-sm-10">
					<button class="btn btn-primary" ng-click="customerAdd(customer)">
						<span class="glyphicon glyphicon-ok-circle"></span> Register
					</button>
				</div>
			</div>
		</form>
	</div>
</body>
</html>