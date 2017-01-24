package com.doctor.ui.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class PatientUIController {

	@RequestMapping("addPatient")
	public ModelAndView addPatient(){
		
		return new ModelAndView("PatientService/AddPatient");
	}
	
	@RequestMapping("deletePatient")
	public ModelAndView deletePatient(){
		
		return new ModelAndView("PatientService/DeletePatient");
	}
	
	@RequestMapping("getPatient")
	public ModelAndView getPatient(){
		
		return new ModelAndView("PatientService/GetPatient");
	}
	
	@RequestMapping("updatePatient")
	public ModelAndView updatePatient(){
		
		return new ModelAndView("PatientService/UpdatePatient");
	}
	
	@RequestMapping("headerPatient")
	public ModelAndView headerPatient(){
		
		return new ModelAndView("PatientService/PatientHeader");
	}
	
	@RequestMapping("test1")
	public ModelAndView test(){
		
		return new ModelAndView("test/index");
	}
	}
