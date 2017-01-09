<html>
<head>
<title>Delete Doctor</title>
<link rel="stylesheet" type="text/css" href="css/Doctor.css">
<script src="js/jquery-latest.min.js" type="text/javascript"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
<script src="js/Doctor.js"></script>
<jsp:include page="/jsp/Header.jsp" />
<jsp:include page="/jsp/Footer.jsp" />
</head>
<body ng-app="deleteDoctorApp">

	<div ng-controller="deleteDoctorController">
		<div class="clickText">
			<h3>
				To Delete doctor click <a ng-click="ShowHide()" href="">Here</a>
			</h3>
		</div>
		<div class="addForm" ng-show="isVisible">
			<table>
				<tr>
					<td><label>Doctor Id</label></td>
					<td><input type="text" ng-model="doctorId" /></td>
				</tr>
				<tr>
					<td><label>Doctor Mobile Number</label></td>
					<td><input type="text" ng-model="doctorMobileNumber" /></td>
				</tr>
				<tr>
					<td><label>Doctor Adhar Number</label></td>
					<td><input type="text" ng-model="doctorAdharNumber" /></td>
				</tr>
				<tr>
					<td><label>Click to Delete</label></td>
					<td><button ng-click="doctorDelete()">Delete Doctor</button></td>
				</tr>
			</table>
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