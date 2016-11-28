package com.doctor.ui.controller;

import javax.servlet.http.HttpServletRequest;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.ui.ModelMap;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;

import com.doctor.ui.impl.DoctorUiImpl;
import com.doctor.ui.pojo.Doctor;
import com.doctor.ui.pojo.DoctorResponse;

@RestController
public class DoctorUIController {

	@Autowired
	private DoctorUiImpl doctorUiImpl;

	private HttpHeaders headers = null;
	private RestTemplate restTemplate = null;

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
	public ModelAndView addDoctorTest(ModelMap modelMap,
			HttpServletRequest request) {

		String URL = "http://localhost:9090/doctor-management/adddoctor";
		HttpEntity<String> entity = requestHamdler(request);
		DoctorResponse resp = restTemplate.postForObject(URL, entity,
				DoctorResponse.class);
		System.out.println(resp);
		return new ModelAndView("test", "response", resp);
	}

	@RequestMapping(value = "/getdoctor", method = RequestMethod.GET)
	public ModelAndView getDoctor(ModelMap modelMap, HttpServletRequest request) {

		Doctor response = null;
		String getURL = "http://localhost:9090/doctor-management/getdoctor/";
		// HttpEntity<String> entity = requestHamdler(request);
		// restTemplate.postForObject(URL, entity, Doctor.class);
		Doctor doctor = doctorUiImpl.extractDataFromRequest(request);
		// JSONObject jsonObject = doctorUiImpl.objectToJson(doctor);
		restTemplate = new RestTemplate();
		// headers = new HttpHeaders();
		// headers.setContentType(MediaType.APPLICATION_JSON);
		// HttpEntity<String> entity = new HttpEntity<String>(
		// jsonObject.toString(), headers);
		if (doctor.getDoctorId() > 0) {
			response = restTemplate.getForObject(getURL + doctor.getDoctorId(),
					Doctor.class);
		} else if (!StringUtils.isEmpty(doctor.getDoctorAdhaarNumber())) {
			response = restTemplate.getForObject(
					getURL + doctor.getDoctorAdhaarNumber(), Doctor.class);
		} else if (!StringUtils.isEmpty(doctor.getDoctorNumber())) {
			response = restTemplate.getForObject(
					getURL + doctor.getDoctorAdhaarNumber(), Doctor.class);
		} else if (!StringUtils.isEmpty(doctor.getDoctorName())) {
			response = restTemplate.getForObject(
					getURL + doctor.getDoctorName(), Doctor.class);
		} else if (!StringUtils.isEmpty(doctor.getDoctorExpertized())) {
			response = restTemplate.getForObject(
					getURL + doctor.getDoctorExpertized(), Doctor.class);
		} else if (!StringUtils.isEmpty(doctor.getDoctorOneTimeConsultingFee())) {
			response = restTemplate.getForObject(
					getURL + doctor.getDoctorOneTimeConsultingFee(),
					Doctor.class);
		}

		return new ModelAndView("getDoctor", "response", response);
	}

	private HttpEntity<String> requestHamdler(HttpServletRequest request) {

		Doctor doctor = doctorUiImpl.extractDataFromRequest(request);
		JSONObject jsonObject = doctorUiImpl.objectToJson(doctor);
		restTemplate = new RestTemplate();
		headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		HttpEntity<String> entity = new HttpEntity<String>(
				jsonObject.toString(), headers);
		return entity;
	}
}
