package com.doctor.ui.controller;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.doctor.ui.pojo.Doctor;

@RestController
public class DoctorUIController {

	@RequestMapping(value = "/")
	public ModelAndView addDoctor() {

		return new ModelAndView("addDoctor");
	}

	@RequestMapping(value = "/adddoctor", consumes = "application/json", method = RequestMethod.POST)
	public String addDoctorTest(@RequestBody Doctor test) {
		System.out.println("test" + test);
		
		return "{\"msg\" : \"Aviral\"}";
	}
}
