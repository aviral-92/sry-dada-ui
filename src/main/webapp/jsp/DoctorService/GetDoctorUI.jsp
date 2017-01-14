<html>
<head>
<title>Get Doctor</title>
<link rel="stylesheet" type="text/css" href="css/Doctor.css">
<script src="js/jquery-latest.min.js" type="text/javascript"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
<script src="js/Doctor.js"></script>
<jsp:include page="/jsp/Header.jsp" />
<jsp:include page="/jsp/Footer.jsp" />
</head>
<body ng-app="GetDoctorApp">

	<div ng-controller="getDoctorController">
		<div class="clickText">
			<h3>
				To get doctor click <a ng-click="ShowHide()" href="">Here</a>
			</h3>
		</div>
		<div class="addForm" ng-show="isVisible">
			<table>
				<tr>
					<td><label>Doctor Id</label></td>
					<td><input type="text" ng-model="doctorId" /></td>
				</tr>
				<tr>
					<td><label>Doctor Name</label></td>
					<td><input type="text" ng-model="doctorName" /></td>
				</tr>
				<tr>
					<td><label>Doctor Mobile Number</label></td>
					<td><input name="mobile" type="text"
						ng-model="doctorMobileNumber" ng-minlength="10" ng-maxlength="10" />
					</td>
				</tr>
				<tr>
					<td><label>Doctor Adhar Number</label></td>
					<td><input type="text" ng-model="doctorAdharNumber" /></td>
				</tr>
				<!-- <tr>
					<td><label>Doctor Highest Degree</label></td>
					<td><input type="text" ng-model="doctorHighestDegree" /></td>
				</tr> -->
				<tr>
					<td><label>Doctor Expertise</label></td>
					<td><input type="text" ng-model="doctorExpertise" /></td>
				</tr>
				<tr>
					<td><label>Doctor one time Consulting Fees</label></td>
					<td><input type="text" ng-model="doctorFees" /></td>
				</tr>
				<tr>
					<td><label>Click to Get</label></td>
					<td><button ng-click="doctorGet()">Get Doctor</button></td>
				</tr>
			</table>
			<br>
			<table ng-show="visible">
				<tr>
					<th>Doctor Id</th>
					<th>Doctor Name</th>
					<th>Mobile Number</th>
					<!-- <th>Adhar Number</th> -->
					<th>Highest Degree</th>
					<th>Govt Servent</th>
					<th>Home Address</th>
					<th>Expertise</th>
					<th>Shop Address</th>
					<th>Consulting Fee</th>
					<!-- <th>Free Consulting Fee</th> -->
				</tr>
				<tr ng-repeat="doctor in doctors">
					<td>{{doctor.doctorId}}</td>
					<td>{{doctor.doctorName}}</td>
					<td>{{doctor.doctorNumber}}</td>
					<!-- <td>{{doctor.doctorAdhaarNumber}}</td> -->
					<td>{{doctor.doctorHighestDegree}}</td>
					<td>{{doctor.doctorGovtServent}}</td>
					<td>{{doctor.doctorHomeAddress}}</td>
					<td>{{doctor.doctorExpertized}}</td>
					<td>{{doctor.doctorShopAddress}}</td>
					<td>{{doctor.doctorOneTimeConsultingFee}}</td>
					<!-- <td>{{doctor.doctorDaystoCheckFreeInConsultingFee}}</td> -->
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