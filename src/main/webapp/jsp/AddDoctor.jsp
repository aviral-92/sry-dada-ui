<html>
<head>
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="css/AddDoctor.css">
<script src="js/jquery-latest.min.js" type="text/javascript"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
<jsp:include page="/jsp/Header.jsp" />
<jsp:include page="/jsp/Footer.jsp" />
</head>
<body ng-app="myApp">

	<div ng-controller="addDoctorController">
		<div class="clickText">
			To add doctor click <a ng-click="ShowHide()">Here</a> 
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
				<tr>
					<td><label>Doctor Government</label></td>
					<td>Yes<input type="radio" name="mygroup"
						ng-model="doctorName" /> No<input type="radio" name="mygroup"
						ng-model="doctorName" /></td>
				</tr>
				<tr>
					<td><label>Click to Add</label></td>
					<td><input type="button" ng-click="doctorAdd()"
						value="Add Doctor" /></td>
				</tr>
			</table>
		</div>
	</div>
</body>
</html>