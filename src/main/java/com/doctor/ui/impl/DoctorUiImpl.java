package com.doctor.ui.impl;

import javax.servlet.http.HttpServletRequest;

import org.json.JSONObject;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.doctor.ui.pojo.Doctor;

@Service
public class DoctorUiImpl {

	public Doctor extractDataFromRequest(HttpServletRequest request) {

		Doctor doctor = new Doctor();
		if (!StringUtils.isEmpty(request.getParameter("id"))) {
			doctor.setDoctorId(Integer.parseInt(request.getParameter("id")));
		}
		if (!StringUtils.isEmpty(request.getParameter("adhaarnumber"))) {
			doctor.setDoctorAdhaarNumber((String) request
					.getParameter("adhaarnumber"));
		}
		if (!StringUtils
				.isEmpty(request.getParameter("daysfreeconsultingfees"))) {
			doctor.setDoctorDaystoCheckFreeInConsultingFee(Integer
					.parseInt(request.getParameter("daysfreeconsultingfees")));
		}
		if (!StringUtils.isEmpty(request.getParameter("expertise"))) {
			doctor.setDoctorExpertized((String) request
					.getParameter("expertise"));
		}
		if (!StringUtils.isEmpty(request.getParameter("booleanvalue"))) {
			doctor.setDoctorGovtServent(Boolean.parseBoolean(request
					.getParameter("booleanvalue")));
		}
		if (!StringUtils.isEmpty(request.getParameter("highestdegree"))) {
			doctor.setDoctorHighestDegree((String) request
					.getParameter("highestdegree"));
		}
		if (!StringUtils.isEmpty(request.getParameter("address"))) {
			doctor.setDoctorHomeAddress((String) request
					.getParameter("address"));
		}
		if (!StringUtils.isEmpty(request.getParameter("name"))) {
			doctor.setDoctorName((String) request.getParameter("name"));
		}
		if (!StringUtils.isEmpty(request.getParameter("number"))) {
			doctor.setDoctorNumber((String) request.getParameter("number"));
		}
		if (!StringUtils.isEmpty(request.getParameter("consultingfee"))) {
			doctor.setDoctorOneTimeConsultingFee((String) request
					.getParameter("consultingfee"));
		}
		if (!StringUtils.isEmpty(request.getParameter("clinicaddress"))) {
			doctor.setDoctorShopAddress((String) request
					.getParameter("clinicaddress"));
		}
		return doctor;
	}

	public JSONObject objectToJson(Doctor doctor) {

		JSONObject jsonObject = new JSONObject();
		jsonObject.put("doctorId", doctor.getDoctorId());
		jsonObject.put("doctorAdhaarNumber", doctor.getDoctorAdhaarNumber());
		jsonObject.put("doctorDaystoCheckFreeInConsultingFee",
				doctor.getDoctorDaystoCheckFreeInConsultingFee());
		jsonObject.put("doctorGovtServent", doctor.getDoctorGovtServent());
		jsonObject.put("doctorExpertized", doctor.getDoctorExpertized());
		jsonObject.put("doctorHighestDegree", doctor.getDoctorHighestDegree());
		jsonObject.put("doctorHomeAddress", doctor.getDoctorHomeAddress());
		jsonObject.put("doctorName", doctor.getDoctorName());
		jsonObject.put("doctorNumber", doctor.getDoctorNumber());
		jsonObject.put("doctorOneTimeConsultingFee",
				doctor.getDoctorOneTimeConsultingFee());
		jsonObject.put("doctorShopAddress", doctor.getDoctorShopAddress());
		return jsonObject;
	}
	
	
}
