<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script type="text/javascript">
	function submitform() {

		var formData = "{ \"id\":" + $('#id').val() + ", \"msg\" : \""
				+ $('#msg').val() + "\"}";
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
	<form action="/adddoctor">
		<label>ID</label> <input type="text" name="id" id="id"><br>
		<label>Msg</label> <input type="text" name="msg" id="msg"><br>
		<input type="button" value="submit" onclick="submitform();">
	</form>
</body>
</html>