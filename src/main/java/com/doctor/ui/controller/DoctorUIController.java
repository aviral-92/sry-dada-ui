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

	@RequestMapping(value = "/getdoctorui")
	public ModelAndView getDoctorUI() {

		return new ModelAndView("getDoctor");
	}

	//TODO 
	/*@RequestMapping(value = "/adddoctor", method = RequestMethod.POST)
	public ModelAndView addDoctorTest(ModelMap modelMap,
			HttpServletRequest request) {

		String URL = "http://localhost:9090/doctor-management/adddoctor";
		HttpEntity<String> entity = requestHamdler(request);
		DoctorResponse resp = restTemplate.postForObject(URL, entity,
				DoctorResponse.class);
		System.out.println(resp);
		return new ModelAndView("test", "response", resp);
	}*/

	@RequestMapping(value = "/getdoctor1", method = RequestMethod.GET)
	public ModelAndView getDoctor(ModelMap modelMap, HttpServletRequest request) {

		Doctor response[] = null;
		Doctor doctor = doctorUiImpl.extractDataFromRequest(request);
		restTemplate = new RestTemplate();
		if (null != doctor.getDoctorId() && doctor.getDoctorId() > 0) {
			response = (Doctor[]) restTemplate.getForObject(
					"http://localhost:9090/doctor-management/getdoctorbyid/"
							+ doctor.getDoctorId(), Doctor[].class);
		} else if (!StringUtils.isEmpty(doctor.getDoctorAdhaarNumber())) {
			response = (Doctor[]) restTemplate.getForObject(
					"http://localhost:9090/doctor-management/getdoctorbyadharNumber/"
							+ doctor.getDoctorAdhaarNumber(), Doctor[].class);
		} else if (!StringUtils.isEmpty(doctor.getDoctorNumber())) {
			response = (Doctor[]) restTemplate.getForObject(
					"http://localhost:9090/doctor-management/getdoctorbymobilenumber/"
							+ doctor.getDoctorNumber(), Doctor[].class);
		} else if (!StringUtils.isEmpty(doctor.getDoctorName())) {
			response = (Doctor[]) restTemplate.getForObject(
					"http://localhost:9090/doctor-management/getdoctorbyname/"
							+ doctor.getDoctorName(), Doctor[].class);
		} else if (!StringUtils.isEmpty(doctor.getDoctorExpertized())) {
			response = (Doctor[]) restTemplate.getForObject(
					"http://localhost:9090/doctor-management/getdoctorbyexpertisted/"
							+ doctor.getDoctorExpertized(), Doctor[].class);
		} else if (!StringUtils.isEmpty(doctor.getDoctorOneTimeConsultingFee())) {
			response = (Doctor[]) restTemplate.getForObject(
					"http://localhost:9090/doctor-management/getdoctorbyconsultingfee/"
							+ doctor.getDoctorOneTimeConsultingFee(),
					Doctor[].class);
		}

		return new ModelAndView("getDoctor", "response", response);
	}
	
	@RequestMapping(value="/updatedoctor")
	public ModelAndView updateDoctor(){
		
		return new ModelAndView("updateDoctor");
	}
	
	@RequestMapping(value="/updatedoctorui")
	public ModelAndView updateDoctorUi(ModelMap modelMap, HttpServletRequest request){
		
		String URL = "http://localhost:9090/doctor-management/updatedoctor";
		HttpEntity<String> entity = requestHamdler(request);
		DoctorResponse resp = restTemplate.postForObject(URL, entity,
				DoctorResponse.class);
		System.out.println(resp);
		return new ModelAndView("updateDoctor", "response", resp);
	}
	
	@RequestMapping("/home")
	public ModelAndView home(){
		
		return new ModelAndView("Index");
	}

	@RequestMapping(value = "/home1")
	public ModelAndView addDoc(){
		
		return new ModelAndView("AddDoctor");
	}
	
	@RequestMapping(value = "/deletedoctor")
	public ModelAndView deleteDoctor(){
		
		return new ModelAndView("DeleteDoctor");
	}
	
	@RequestMapping(value = "/getdoctor")
	public ModelAndView getDoctor(){
		
		return new ModelAndView("GetDoctorUI");
	}
	
	@RequestMapping(value = "/updatedoctorUI")
	public ModelAndView updateDoctorUI(){
		
		return new ModelAndView("UpdateDoctorUI");
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
