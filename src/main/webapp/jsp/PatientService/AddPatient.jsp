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
<jsp:include page="/jsp/Header.jsp" />
<jsp:include page="/jsp/Footer.jsp" />
</head>
<body ng-app="patientApp">
	<div class="container">
		<h3>
			<center>Register yourself.</center>
		</h3>
		<form class="form-horizontal" role="form">

			<div class="form-group">
				<label class="control-label col-sm-2" for="name">Patient
					Name:</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" id="name"
						ng-model="customer.custName" placeholder="Enter name">
				</div>
			</div>
			<div class="form-group">
				<label class="control-label col-sm-2" for="pwd">Email: </label>
				<div class="col-sm-10">
					<input type="email" class="form-control" id="email"
						ng-model="customer.custEmail" placeholder="Enter Email">
				</div>
			</div>
			<div class="form-group">
				<label class="control-label col-sm-2" for="pwd">Mobile
					Number:</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" id="mobile"
						ng-model="customer.custMobile" placeholder="Enter mobile number">
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
				<label class="control-label col-sm-2" for="pwd">Home Address:</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" id="homeAddress"
						ng-model="customer.custHomeAddress" placeholder="Enter home address">
				</div>
			</div>

			<div class="form-group">
				<div class="col-sm-offset-2 col-sm-10">
					<button type="submit" class="btn btn-default">Register</button>
				</div>
			</div>
		</form>
	</div>
</body>
</html>