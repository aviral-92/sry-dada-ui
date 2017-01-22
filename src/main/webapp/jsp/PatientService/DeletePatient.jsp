<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Patient Delete</title>
<link
	href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
	rel="stylesheet">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script
	src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<!-- <script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
<script
	src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.3/angular-resource.min.js"></script> -->
<jsp:include page="/jsp/PatientService/PatientHeader.jsp" />
</head>
<body ng-app="deletePatientApp">
	<div class="container" ng-controller="deletePatientController">
	<br/><br/><br/>
		<h3>
			<center>Delete Patient Details</center>
		</h3>
		<form class="form-horizontal" role="form" >

			<div class="form-group">
				<label class="control-label col-sm-2" for="name">Patient
					Id:</label>
				<div class="col-sm-8">
					<input type="text" class="form-control" id="name"
						ng-model="customer.custId" placeholder="Enter Id">
				</div>
			</div>
			
			<div class="form-group">
				<label class="control-label col-sm-2" for="pwd">Mobile
					Number:</label>
				<div class="col-sm-8">
					<input type="text" class="form-control" id="mobile"
						ng-model="customer.custMobile" placeholder="Enter mobile number">
				</div>
			</div>
			<div class="form-group">
				<label class="control-label col-sm-2" for="pwd">Adhaar
					Number:</label>
				<div class="col-sm-8">
					<input type="text" class="form-control" id="adhaar"
						ng-model="customer.custAadhaar" placeholder="Enter adhaar number">
				</div>
			</div>
			<div class="form-group">
				<div class="col-sm-offset-2 col-sm-10">
					<button class="btn btn-success" ng-click="customerDelete(customer)"> <span class="glyphicon glyphicon-trash"></span> Delete Patient</button>
				</div>
			</div>
		</form>
	</div>
</body>
</html>