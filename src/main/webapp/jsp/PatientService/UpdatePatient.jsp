
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Patient Update</title>
<link
	href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
	rel="stylesheet">
<script src="js/jquery-latest.min.js" type="text/javascript"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
<!-- <script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script> -->
<!-- <script
	src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script> -->
<script src="js/Patient.js"></script>
<!-- <script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script> -->
<!-- 
<script
	src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.3/angular-resource.min.js"></script> -->
<jsp:include page="/jsp/PatientService/PatientHeader.jsp" />
</head>
<body ng-app="UpdateCustomerApp">
	<div class="container" ng-controller="updateCustomerController">
		<br />
		<br />
		<br />


		<h3>
			<center>Update Patient Details</center>
		</h3>
		<br />
		<div>
			<form class="form-horizontal" role="form">

				<div class="form-group">
					<label class="control-label col-sm-2" for="name">Patient
						Id:</label>
					<div class="col-sm-8">
						<input type="text" class="form-control" id="name"
							ng-model="customer.custId" placeholder="Enter Id">
					</div>
				</div>
				<div class="form-group">
					<label class="control-label col-sm-2" for="name">Patient
						Name:</label>
					<div class="col-sm-8">
						<input type="text" class="form-control" id="name"
							ng-model="customer.custName" placeholder="Enter name">
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
					<label class="control-label col-sm-2" for="pwd">Email Id:</label>
					<div class="col-sm-8">
						<input type="text" class="form-control" id="email"
							ng-model="customer.CustEmail" placeholder="Enter Email Id">
					</div>
				</div>
				<div class="form-group">
					<div class="col-sm-offset-2 col-sm-10">
						<button class="btn btn-success" ng-click="customerSearch()">
							<span class="glyphicon glyphicon-search"></span> Search Patient
						</button>
					</div>
				</div>
			</form>
			<!-- <div ng-show="visible"> -->
			<form ng-show="visible" class="form-horizontal" role="form"
				ng-repeat="customer in customers">
				<div class="form-group">
					<label class="control-label col-sm-2" for="name">Patient
						Id:</label>
					<div class="col-sm-8">
						<input type="text" ng-readonly="true" class="form-control"
							id="name" ng-model="customer.custId">
					</div>
				</div>
				<div class="form-group">
					<label class="control-label col-sm-2" for="name">Patient
						Name:</label>
					<div class="col-sm-8">
						<input type="text" ng-readonly="true" class="form-control"
							id="name" ng-model="customer.custName">
					</div>
				</div>
				<div class="form-group">
					<label class="control-label col-sm-2" for="name">Patient
						Number:</label>
					<div class="col-sm-8">
						<input type="text" ng-readonly="true" class="form-control"
							id="name" ng-model="customer.custMobile">
					</div>
				</div>

				<div class="form-group">
					<label class="control-label col-sm-2" for="name">Patient
						Adhar Number:</label>
					<div class="col-sm-8">
						<input type="text" ng-readonly="true" class="form-control"
							id="name" ng-model="customer.custAadhaar">
					</div>
				</div>

				<div class="form-group">
					<label class="control-label col-sm-2" for="name">Patient
						Address:</label>
					<div class="col-sm-8">
						<input type="text" ng-readonly="true" class="form-control"
							id="name" ng-model="customer.custHomeAddress">
					</div>
				</div>

				<div class="form-group">
					<label class="control-label col-sm-2" for="name">Patient
						Email:</label>
					<div class="col-sm-8">
						<input type="text" ng-readonly="true" class="form-control"
							id="name" ng-model="customer.custEmail">
					</div>
				</div>

				<div class="form-group">
					<div class="col-sm-offset-2 col-sm-10">
						<button class="btn btn-success"
							ng-click="customerUpdate(customer)">
							<span class="glyphicon glyphicon-circle-arrow-right"></span>
							Update Patient
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</body>
</html>