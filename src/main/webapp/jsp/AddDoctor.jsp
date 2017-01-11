<html>
<head>
<title>Add Doctor</title>
<link rel="stylesheet" type="text/css" href="css/Doctor.css">
<script src="js/jquery-latest.min.js" type="text/javascript"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.3/angular-resource.min.js"></script>
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
		<form name="validationForm">
			<table>				<!-- ng-blur="textValidation()" -->
				<tr>
					<td><label>Doctor Name</label></td>
					<td><input type="text" ng-model="doctorName" name="doctorName" required ng-pattern="/^(\D)+$/" /></td>
					<td ng-show="validationForm.doctorName.$error.pattern" style="color:red">Please enter alphabets only</td>
				</tr>
				<tr>
					<td><label>Doctor Mobile Number</label></td>
					<td><input type="text" ng-model="doctorMobileNumber" name="mobile" ng-minlength="10" ng-maxlength="10" required ng-pattern="/^(\d)+$/" /></td>
					<td ng-show="validationForm.mobile.$error.pattern" >Please enter Numbers only</td>
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