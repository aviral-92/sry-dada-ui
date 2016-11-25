<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Add Doctor</title>
</head>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="/js/addDoctor.js"></script>
<body>
	<form action="/adddoctor" name="addDoctor">
		<table>
			<tr>
				<td><label>Doctor Id</label></td>
				<td><input type="text" name="id" id="id" /></td>
				<td><label>Doctor Name</label></td>
				<td><input type="text" name="name" id="name" /></td>
			</tr>
			<tr>
				<td><label>Doctor Number</label></td>
				<td><input type="text" name="number" id="number" /></td>
				<td><label>Doctor HomeAddress</label></td>
				<td><input type="text" name="address" id="address" /></td>
			</tr>
			<tr>
				<td><label>Doctor AdhaarNumber</label></td>
				<td><input type="text" name="adhaarnumber" id="adhaarnumber" /></td>
				<td><label>Doctor HighestDegree</label></td>
				<td><input type="text" name="highestdegree" id="highestdegree" /></td>
			</tr>
			<tr>
				<td><label>Doctor Expertise</label></td>
				<td><input type="text" name="expertise" id="expertise" /></td>
				<td><label>Doctor GovtServent</label></td>
				<td>Yes<input type="radio" name="mygroup" id="govtservent" /></td>
				<td>No<input type="radio" name="mygroup" id="govtservent1" /></td>
			</tr>
			<tr>
				<td><label>Doctor OneTimeConsultingFee</label></td>
				<td><input type="text" name="consultingfee" id="consultingfee" /></td>
				<td><label>Doctor DaystoCheckFreeInConsultingFee</label></td>
				<td><input type="text" name="daysfreeconsultingfees"
					id="daysfreeconsultingfees" /></td>
			</tr>
			<tr>
				<td><label>Doctor ClinicAddress</label></td>
				<td><input type="text" name="clinicaddress" id="clinicaddress" /></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td><input type="button" value="Submit" onclick="submitform();"></td>
			</tr>
			<tr>
				<td></td>
				<td><div id="message" style="display: none;"></div></td>
			</tr>
		</table>
	</form>
	<table border="1">
		<tr>
			<th>Doctor Name</th>
			<th>Mobile Number</th>
			<th>Doctor Degree</th>
			<th>Doctor Expertise</th>
			<th>Govt Servant</th>
			<th>Clinic Address</th>
			<th>Doctor Consulting Fee</th>
		</tr>
		<tr align="center">
			<td>Aviral Mittal</td>
			<td>8527701990</td>
			<td>PHD</td>
			<td>Heart Specialist</td>
			<td>Yes</td>
			<td>Shastri Nagar</td>
			<td>1250</td>
		</tr>
	</table>
</body>
</html>