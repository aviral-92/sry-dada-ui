package com.doctor.ui.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.doctor.ui.impl.DoctorUiImpl;

@RestController
public class DoctorUIController {

	@Autowired
	private DoctorUiImpl doctorUiImpl;

	@RequestMapping(value = "/")
	public ModelAndView addDoctor() {

		return new ModelAndView("test");
	}

	@RequestMapping(value = "/getdoctorui")
	public ModelAndView getDoctorUI() {

		return new ModelAndView("getDoctor");
	}

	
	@RequestMapping(value="/updatedoctor")
	public ModelAndView updateDoctor(){
		
		return new ModelAndView("DoctorService/updateDoctor");
	}
	
	@RequestMapping("/home")
	public ModelAndView home(){
		
		return new ModelAndView("Index");
	}

	@RequestMapping(value = "/home1")
	public ModelAndView addDoc(){
		
		return new ModelAndView("DoctorService/AddDoctor");
	}
	
	@RequestMapping(value = "/deletedoctor")
	public ModelAndView deleteDoctor(){
		
		return new ModelAndView("DoctorService/DeleteDoctor");
	}
	
	@RequestMapping(value = "/getdoctor")
	public ModelAndView getDoctor(){
		
		return new ModelAndView("DoctorService/GetDoctorUI");
	}
	
	@RequestMapping(value = "/updatedoctorUI")
	public ModelAndView updateDoctorUI(){
		
		return new ModelAndView("DoctorService/UpdateDoctorUI");
	}
}
