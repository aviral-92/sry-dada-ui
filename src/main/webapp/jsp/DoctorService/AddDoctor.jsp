<html>
<head>
<title>Add Doctor</title>
<link rel="stylesheet" type="text/css" href="css/Doctor.css">
<script src="js/jquery-latest.min.js" type="text/javascript"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
<script
	src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.3/angular-resource.min.js"></script>
<script src="js/Doctor.js"></script>
<jsp:include page="/jsp/DoctorService/Header.jsp" />
<jsp:include page="/jsp/DoctorService/Footer.jsp" />
</head>
<body ng-app="AddDoctorApp">

	<div ng-controller="addDoctorController">
		<div class="clickText">
			<h3>
				To add doctor click <a ng-click="ShowHide()" href="">Here</a>
			</h3>
		</div>
		<div class="addForm" ng-show="isVisible">
			<form name="validateAddForm" method="post" novalidate="novalidate">
				<table>
					<!-- ng-blur="textValidation()" -->
					<!-- <input type="text" placeholder="First Name*" class="form-control" name="firstName" ng-model="addLead.firstName"  
					ng-class="{blankInput: addLeadForm.firstName.$error.required &amp;&amp; submit}"/> -->

					<tr>
						<td><label>Doctor Name <span style="color:red;">*</span></label></td>
						<td><input type="text" ng-model="doctor.doctorName"
							name="doctorName" ng-required="true" placeholder="Doctor Name"
							ng-class="{blankInput: validateAddForm.doctorName.$error.required &amp;&amp; submit}" /></td>

					</tr>
					<tr>
						<td><label>Doctor Mobile Number<span style="color:red;" >*</span></label></td>
						<td><input type="text" ng-model="doctor.doctorNumber"
							name=mobile ng-required="true" placeholder="Doctor Mobile number"
							ng-class="{blankInput: validateAddForm.mobile.$error.required &amp;&amp; submit}" /></td>
					</tr>
					<tr>
						<td><label>Doctor Adhar Number<span style="color:red;" >*</span></label></td>
						<td><input type="text" ng-model="doctor.doctorAdhaarNumber" name="adhar" placeholder="Doctor Adhar Number"
							ng-required="true" ng-class="{blankInput: validateAddForm.adhar.$error.required &amp;&amp; submit}" /></td>
					</tr>
					<tr>
						<td><label>Doctor Home Address<span style="color:red;" >*</span></label></td>
						<td><input type="text" ng-model="doctor.doctorHomeAddress" name="homeAddress" placeholder="Doctor Home Address"
							ng-required="true" ng-class="{blankInput: validateAddForm.homeAddress.$error.required &amp;&amp; submit}" /></td>
					</tr>
					<tr>
						<td><label>Doctor Highest Degree<span style="color:red;" >*</span></label></td>
						<td><input type="text" ng-model="doctor.doctorHighestDegree" name="highestDegree" placeholder="Doctor Highest Degree"
							ng-required="true" ng-class="{blankInput: validateAddForm.highestDegree.$error.required &amp;&amp; submit}" /></td>
					</tr>
					<tr>
						<td><label>Doctor Expertise<span style="color:red;" >*</span></label></td>
						<td><input type="text" ng-model="doctor.doctorExpertized" name="expertise" placeholder="Doctor Expertise"
							ng-required="true" ng-class="{blankInput: validateAddForm.expertise.$error.required &amp;&amp; submit}" /></td>
					</tr>
					<tr>
						<td><label>Doctor Government<span style="color:red;" >*</span></label></td>
						<td>Yes<input type="radio" checked="checked" name="mygroup" ng-required="true"
							ng-model="doctor.doctorGovtServent" ng-value='1' /> No<input
							type="radio" name="mygroup"  ng-model="doctor.doctorGovtServent" ng-value='0'
							ng-required="true" /></td>
					</tr>
					<tr>
						<td><label>Doctor Shop Address<span style="color:red;" >*</span></label></td>
						<td><input type="text" ng-model="doctor.doctorShopAddress" name="shopAddress" placeholder="Doctor Shop Address"
							ng-required="true" ng-class="{blankInput: validateAddForm.shopAddress.$error.required &amp;&amp; submit}" /></td>
					</tr>
					<tr>
						<td><label>Doctor one time Consulting Fees<span style="color:red;" >*</span></label></td>
						<td><input type="text" ng-model="doctor.doctorOneTimeConsultingFee" name="fees" placeholder="Doctor one time consulting fees"
							ng-required="true" ng-class="{blankInput: validateAddForm.fees.$error.required &amp;&amp; submit}" /></td>
					</tr>
					<tr>
						<td><label>Doctor days to check Free<span style="color:red;" >*</span></label></td>
						<td><input type="text" ng-model="doctor.doctorDaystoCheckFreeInConsultingFee" name="days" placeholder="Doctor days to check free"
							ng-required="true" ng-class="{blankInput: validateAddForm.days.$error.required &amp;&amp; submit}" /></td>
					</tr>
					<tr>
						<td><label>Click to Add</label></td>
						<td><button id="button"
								ng-click="doctorAdd(doctor, 'validateAddForm')"><span>+Add
								Doctor</span></button></td>
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