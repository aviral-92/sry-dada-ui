<html>
<head>
<title>Delete Doctor</title>
<link rel="stylesheet" type="text/css" href="css/Doctor.css">
<script src="js/jquery-latest.min.js" type="text/javascript"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
<script src="js/Doctor.js"></script>
<jsp:include page="/jsp/DoctorService/Header.jsp" />
<jsp:include page="/jsp/DoctorService/Footer.jsp" />
</head>
<body ng-app="deleteDoctorApp">

	<div ng-controller="deleteDoctorController">
		<div class="clickText">
			<h3>
				To Delete doctor click <a ng-click="ShowHide()" href="">Here</a>
			</h3>
		</div>
		<div class="addForm" ng-show="isVisible">
		<form name="validateDeleteForm" method="get" novalidate="novalidate">
			<table>
				<tr>
					<td><label>Doctor Id</label></td>
					<td><input type="number" ng-model="doctor.doctorId" name="doctorId"
						placeholder="Doctor Id"
						/></td>
				</tr>
				<tr>
					<td><label>Doctor Mobile Number</label></td>
					<td><input type="text" ng-model="doctor.doctorNumber"  name="doctorMobileNumber"
						placeholder="Doctor Mobile Number"  /></td>
				</tr>
				<tr>
					<td><label>Doctor Adhar Number</label></td>
					<td><input type="text" ng-model="doctor.doctorAdhaarNumber"  name="doctorAdharNumber"
						placeholder="Doctor Adhar Number" /></td>
				</tr>
				<tr>
					<td><label>Click to Delete</label></td>
					<td><button id="button" ng-click="doctorDelete(doctor)">
							<span>Delete Doctor</span>
						</button></td>
				</tr>
			</table>
			</form>
		</div>
		<div class="para">
			<p>Hi All using this we can add it.......Hi All using this we can
				add it.......Hi All using this we can add it.......Hi All using this
				we can add it......Hi All using this we can add it.......Hi All
				using this we can add it.......Hi All using this we can add
				it.......Hi All using this we can add it......Hi All using this we
				can add it.......Hi All using this we can add it.......Hi All using
				this we can add it.......Hi All using this we can add it......Hi All
				using this we can add it.......Hi All using this we can add
				it.......Hi All using this we can add it.......Hi All using this we
				can add it......Hi All using this we can add it.......Hi All using
				this we can add it.......Hi All using this we can add it.......Hi
				All using this we can add it.......</p>
		</div>
	</div>
</body>
</html>