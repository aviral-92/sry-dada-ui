<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Patient Get</title>
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
<jsp:include page="/jsp/Header.jsp" />
<jsp:include page="/jsp/Footer.jsp" />
</head>
<body ng-app="getPatientApp">
	<div class="container" ng-controller="getPatientController">
		<h3>
			<left>Get Patient Details</left>
			<!--  <a href="#demo" class="btn btn-info" data-toggle="collapse">Get Patient Details</a> -->
		</h3>
		<br />
		<form class="form-horizontal" role="form">

			<div class="form-group">
				<label class="control-label col-sm-2" for="name">Patient Id:</label>
				<div class="col-sm-3">
					<input type="text" class="form-control" id="name"
						ng-model="customer.custId" placeholder="Enter Id">
					<!-- data-toggle="collapse" data-target="#demo" -->
					<!-- <p class="help-block" id="demo" class="collapse">Please enter numeric form.</p> -->
				</div>
			</div>
			<div class="form-group">
				<label class="control-label col-sm-2" for="name">Patient
					Name:</label>
				<div class="col-sm-3">
					<input type="text" class="form-control" id="name"
						ng-model="customer.custName" placeholder="Enter name">
				</div>
			</div>
			<div class="form-group">
				<label class="control-label col-sm-2" for="pwd">Mobile
					Number:</label>
				<div class="col-sm-3">
					<input type="text" class="form-control" id="mobile"
						ng-model="customer.custMobile" placeholder="Enter mobile number">
				</div>
			</div>
			<div class="form-group">
				<label class="control-label col-sm-2" for="pwd">Adhaar
					Number:</label>
				<div class="col-sm-3">
					<input type="text" class="form-control" id="adhaar"
						ng-model="customer.custAadhaar" placeholder="Enter adhaar number">
				</div>
			</div>
			<div class="form-group">
				<div class="col-sm-offset-2 col-sm-10">
					<!-- <button type="button" class="btn btn-danger" data-toggle="collapse" data-target="#demo" ng-click="customerGet(customer)">Get Patient</button> -->
					<button type="button" class="btn btn-info" data-toggle="modal"
						data-target="#myModal"><span class="glyphicon glyphicon-chevron-right"></span> Get Patient</button>
				</div>
			</div>
		</form>


		<!-- Modal -->
		<div class="container">
			<div class="modal fade" id="myModal" role="dialog">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<h4 class="modal-title">Your Details</h4>
						</div>
						<table class="modal-body">
							<tr>
								<th>Patient Id</th>
								<th>Patient Mobile number</th>
								<th>Adhaar Number</th>
							</tr>
							<tr ng-repeat="customer in customers">
								<td>{{customer.custId}}</td>
								<td>{{customer.custMobile}}</td>
								<td>{{customer.custAadhaar}}</td>
							</tr>
						</table>
						<div class="modal-footer">
							<button type="button" class="btn btn-default"
								data-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
</body>
</html>