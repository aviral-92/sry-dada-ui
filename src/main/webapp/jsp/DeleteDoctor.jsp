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
		<form name="validateAddForm" method="post" novalidate="novalidate">
			<table>
				<tr>
					<td><label>Doctor Id<span style="color: red;">*</span></label></td>
					<td><input type="text" ng-model="doctorId" name="doctorId"
						placeholder="Doctor Id" ng-required="true"
						ng-class="{blankInput: validateAddForm.doctorId.$error.required &amp;&amp; submit}" /></td>
				</tr>
				<tr>
					<td><label>Doctor Mobile Number<span
							style="color: red;">*</span></label></td>
					<td><input type="text" ng-model="doctorMobileNumber"  name="doctorMobileNumber"
						placeholder="Doctor Mobile Number" ng-required="true"
						ng-class="{blankInput: validateAddForm.doctorMobileNumber.$error.required &amp;&amp; submit}" /></td>
				</tr>
				<tr>
					<td><label>Doctor Adhar Number<span
							style="color: red;">*</span></label></td>
					<td><input type="text" ng-model="doctorAdharNumber"  name="doctorAdharNumber"
						placeholder="Doctor Adhar Number" ng-required="true"
						ng-class="{blankInput: validateAddForm.doctorAdharNumber.$error.required &amp;&amp; submit}" /></td>
				</tr>
				<tr>
					<td><label>Click to Delete</label></td>
					<td><button id="button" ng-click="doctorDelete(doctor, 'validateAddForm')">
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