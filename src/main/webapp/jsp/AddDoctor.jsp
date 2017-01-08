<html>
<head>
<title>Add Doctor</title>
<link rel="stylesheet" type="text/css" href="css/AddDoctor.css">
<script src="js/jquery-latest.min.js" type="text/javascript"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
<script src="js/Doctor.js"></script>
<jsp:include page="/jsp/Header.jsp" />
<jsp:include page="/jsp/Footer.jsp" />
</head>
<body ng-app="AddDoctorApp">

	<div ng-controller="addDoctorController">
		<div class="clickText">
			<h3>
				To add doctor click <a ng-click="ShowHide()" href="">Here</a>
			</h3>
		</div>
		<div class="addForm" ng-show="isVisible">
			<table>
				<tr>
					<td><label>Doctor Name</label></td>
					<td><input type="text" ng-model="doctorName" /></td>
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
					<td><label>Doctor Home Address</label></td>
					<td><input type="text" ng-model="doctorHomeAddress" /></td>
				</tr>
				<tr>
					<td><label>Doctor Highest Degree</label></td>
					<td><input type="text" ng-model="doctorHighestDegree" /></td>
				</tr>
				<tr>
					<td><label>Doctor Expertise</label></td>
					<td><input type="text" ng-model="doctorExpertise" /></td>
				</tr>
						<!-- TODO work on radio button value... -->
				<tr>
					<td><label>Doctor Government</label></td>
					<td>Yes<input type="radio" name="mygroup" ng-model="doctorGovt" ng-value='1' /> 
					No<input type="radio" name="mygroup" ng-model="doctorGovt" ng-value='0' /></td>
				</tr>
				<tr>
					<td><label>Doctor Shop Address</label></td>
					<td><input type="text" ng-model="doctorShopAddress" /></td>
				</tr>
				<tr>
					<td><label>Doctor one time Consulting Fees</label></td>
					<td><input type="text" ng-model="doctorFees" /></td>
				</tr>
				<tr>
					<td><label>Doctor days to check Free</label></td>
					<td><input type="text" ng-model="doctorDaysCheckFree" /></td>
				</tr>
				<tr>
					<td><label>Click to Add</label></td>
					<td><button ng-click="doctorAdd()">Add
							Doctor</button></td>
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