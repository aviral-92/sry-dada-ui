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
			url : "http://localhost:9090/adddoctor",
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Request-Method' : 'POST'
            },
			data : formData,
			type : "POST",
			contentType : "application/json; charset=utf-8",
			dataType : "json",
			success : function(data) {
				alert("Successfully Inserted...!!!	"+JSON.stringify(data));
				// console.log(data);
				var obj = JSON.parse(JSON.stringify(data));
				// alert(obj.msg);
				$('#message').html(obj.msg);
				$('#message').show();

			},
			error : function(data) {
				alert("Error");
			}
		});
	}
