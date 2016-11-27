package com.doctor.ui.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;

import com.doctor.ui.pojo.Doctor;

@RestController
public class DoctorUIController {

	@RequestMapping(value = "/")
	public ModelAndView addDoctor() {

		return new ModelAndView("test");
	}

	/*
	 * @RequestMapping(value = "/adddoctor", consumes = "application/json",
	 * method = RequestMethod.POST) public String addDoctorTest(@RequestBody
	 * Doctor test) { System.out.println("test" + test); String str =
	 * "{\"msg\" : \"Successfully Inserted\"}"; return str; }
	 */

	@RequestMapping(value = "/adddoctor", method = RequestMethod.POST)
	public String addDoctorTest(ModelMap modelMap, HttpServletRequest request, HttpServletResponse response) {

		Doctor doctor = new Doctor();
		doctor.setDoctorId(Integer.parseInt(request.getParameter("id")));
		doctor.setDoctorAdhaarNumber((String) request.getParameter("adhaarnumber"));
		doctor.setDoctorDaystoCheckFreeInConsultingFee(
				Integer.parseInt(request.getParameter("daysfreeconsultingfees")));
		doctor.setDoctorExpertized((String) request.getParameter("expertise"));
		doctor.setDoctorGovtServent(Boolean.parseBoolean(request.getParameter("booleanvalue")));
		doctor.setDoctorHighestDegree((String) request.getParameter("highestdegree"));
		doctor.setDoctorHomeAddress((String) request.getParameter("address"));
		doctor.setDoctorName((String) request.getParameter("name"));
		doctor.setDoctorNumber((String) request.getParameter("number"));
		doctor.setDoctorOneTimeConsultingFee((String) request.getParameter("consultingfee"));
		doctor.setDoctorShopAddress((String) request.getParameter("clinicaddress"));
		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("doctorId", doctor.getDoctorId());
		jsonObject.put("doctorAdhaarNumber", doctor.getDoctorAdhaarNumber());
		jsonObject.put("doctorDaystoCheckFreeInConsultingFee", doctor.getDoctorDaystoCheckFreeInConsultingFee());
		jsonObject.put("doctorGovtServent", doctor.getDoctorGovtServent());
		jsonObject.put("doctorHighestDegree", doctor.getDoctorHighestDegree());
		jsonObject.put("doctorHomeAddress", doctor.getDoctorHomeAddress());
		jsonObject.put("doctorName", doctor.getDoctorName());
		jsonObject.put("doctorNumber", doctor.getDoctorNumber());
		jsonObject.put("doctorOneTimeConsultingFee", doctor.getDoctorOneTimeConsultingFee());
		jsonObject.put("doctorShopAddress", doctor.getDoctorShopAddress());
		HttpEntity<String> entity = new HttpEntity<String>(jsonObject.toString(), headers);
		String resp = restTemplate.postForObject("http://localhost:9090/doctor-management/adddoctor", entity,
				String.class);
		System.out.println(resp);
		return resp;
	}

	@RequestMapping(value = "/getdoctor")
	public ModelAndView getDoctor() {

		return new ModelAndView("getDoctor");
	}
}
