<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page import="com.doctor.ui.pojo.Doctor"%>
<%@ page import="java.util.*"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script type="text/javascript">
	function myradio() {
		var doctorGovtServent = '';
		if ($('#govtservent').is(':checked')) {
			doctorGovtServent = 'true';
		} else {
			doctorGovtServent = 'false';
		}
		document.getElementById('display').value = doctorGovtServent;
	}
</script>
<title>Get Doctors</title>
</head>
<body>
	<form action="/getdoctor" name="addDoctor" method="get">
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
				<td>Yes<input type="radio" name="mygroup" id="govtservent"
					onclick="myradio();" /></td>
				<td>No<input type="radio" name="mygroup" id="govtservent1"
					onclick="myradio();" /></td>
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
				<td><input type="text" style="display: none;" value="my"
					name="booleanvalue" id="display" /></td>
				<td><input type="submit" value="Submit"></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
			</tr>
		</table>
	</form>
	<%
		if (null != request.getAttribute("response")) {
	%>
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
		<%
			Doctor[] doctors = (Doctor[]) request.getAttribute("response");
				if (doctors != null && doctors.length > 0) {
					for (Doctor doctor : doctors) {
		%>
		<tr align="center">
			<td><%=doctor.getDoctorName()%></td>
			<td><%=doctor.getDoctorNumber()%></td>
			<td><%=doctor.getDoctorHighestDegree()%></td>
			<td><%=doctor.getDoctorExpertized()%></td>
			<td><%=doctor.getDoctorGovtServent()%></td>
			<td><%=doctor.getDoctorShopAddress()%></td>
			<td><%=doctor.getDoctorOneTimeConsultingFee()%></td>
		</tr>
		<%
			}
				}
			}
		%>
	</table>
</body>
</html>