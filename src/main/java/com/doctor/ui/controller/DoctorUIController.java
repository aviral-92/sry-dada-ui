package com.doctor.ui.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class DoctorUIController {

	@RequestMapping(value = "/")
	public ModelAndView addDoctor() {

		return new ModelAndView("addDoctor");
	}

	@RequestMapping(value = "/adddoctor")
	public ModelAndView addDoctorTest() {
		return new ModelAndView("test");
	}
}
