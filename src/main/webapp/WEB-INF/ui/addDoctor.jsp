<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Add Doctor</title>
</head>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script type="text/javascript">
	function submitform() {
	var doctorGovtServent = '';
		if($('#govtservent').is(':checked')){
			doctorGovtServent = 'true';
		} else {
			doctorGovtServent = 'false';
		}
		var formData = "{ \"doctorId\":" + $('#id').val()
				+ ", \"doctorName\" : \"" + $('#name').val()
				+ "\", \"doctorNumber\" : \"" + $('#number').val()
				+ "\", \"doctorHomeAddress\" : \"" + $('#address').val()
				+ "\", \"doctorAdhaarNumber\" : \"" + $('#adhaarnumber').val()
				+ "\", \"doctorHighestDegree\" : \""
				+ $('#highestdegree').val() + "\", \"doctorExpertized\" : \""
				+ $('#expertise').val() + "\", \"doctorGovtServent\" : "
				+ doctorGovtServent
				+ ", \"doctorOneTimeConsultingFee\" : \""
				+ $('#consultingfee').val()
				+ "\", \"doctorDaystoCheckFreeInConsultingFee\" : \""
				+ $('#daysfreeconsultingfees').val()
				+ "\", \"doctorShopAddress\" : \"" + $('#clinicaddress').val()
				+ "\"}";
		console.log(formData);
		$.ajax({
			url : "http://localhost:8080/adddoctor",
			data : formData,
			type : "POST",
			contentType : "application/json; charset=utf-8",
			dataType : "json",
			success : function(data) {
				alert("Successfully Inserted...!!!	");

			},
			error : function(data) {
				alert("Error");
			}
		});
	}
</script>
<body>

	<form action="/adddoctor" name="addDoctor">
		<table>
			<tr>
				<td><label>Doctor Id</label></td>
				<td><input type="text" name="id" id="id" /></td>
			</tr>
			<tr>
				<td><label>Doctor Name</label></td>
				<td><input type="text" name="name" id="name" /></td>
			</tr>
			<tr>
				<td><label>Doctor Number</label></td>
				<td><input type="text" name="number" id="number" /></td>
			</tr>
			<tr>
				<td><label>Doctor HomeAddress</label></td>
				<td><input type="text" name="address" id="address" /></td>
			</tr>
			<tr>
				<td><label>Doctor AdhaarNumber</label></td>
				<td><input type="text" name="adhaarnumber" id="adhaarnumber" /></td>
			</tr>
			<tr>
				<td><label>Doctor HighestDegree</label></td>
				<td><input type="text" name="highestdegree" id="highestdegree" /></td>
			</tr>
			<tr>
				<td><label>Doctor Expertise</label></td>
				<td><input type="text" name="expertise" id="expertise" /></td>
			</tr>
			<tr>
				<td><label>Doctor GovtServent</label></td>
				<td>Yes<input type="radio" name="mygroup" id="govtservent" /></td>
				<td>No<input type="radio" name="mygroup" id="govtservent1" /></td>
			</tr>
			<tr>
				<td><label>Doctor OneTimeConsultingFee</label></td>
				<td><input type="text" name="consultingfee" id="consultingfee" /></td>
			</tr>
			<tr>
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
				<td><input type="button" value="Submit" onclick="submitform();"></td>
			</tr>
		</table>
	</form>

</body>
</html>