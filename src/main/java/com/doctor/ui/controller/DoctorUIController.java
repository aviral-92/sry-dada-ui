package com.doctor.ui.controller;

import javax.servlet.http.HttpServletRequest;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;

import com.doctor.ui.impl.DoctorUiImpl;
import com.doctor.ui.pojo.Doctor;

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
	public String addDoctorTest(ModelMap modelMap, HttpServletRequest request) {

		String URL = "http://localhost:9090/doctor-management/adddoctor";
		HttpEntity<String> entity = requestHamdler(request);
		String resp = restTemplate.postForObject(URL, entity, String.class);
		System.out.println(resp);
		return resp;
	}

	@RequestMapping(value = "/getdoctor", method = RequestMethod.GET)
	public ModelAndView getDoctor(ModelMap modelMap, HttpServletRequest request) {

		String URL = "http://localhost:9090/doctor-management/getdoctor";
		HttpEntity<String> entity = requestHamdler(request);
		// restTemplate.postForObject(URL, entity, Doctor.class);
		restTemplate.getForObject(URL, Doctor.class, entity);
		return new ModelAndView("getDoctor");
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
