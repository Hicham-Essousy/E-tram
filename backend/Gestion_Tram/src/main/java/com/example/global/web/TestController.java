package com.example.global.web;

import com.example.global.dao.UserRepository;

import com.example.global.entities.Ligne;
import com.example.global.metier.TestService;
import com.example.global.util.TrackerUtil;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/test")
@AllArgsConstructor
public class TestController {
    private final UserRepository userRepository ;
    private final TrackerUtil trackerUtil ;
    private final TestService testService ;
    
    @GetMapping
    public  ResponseEntity<?> get(){

        Ligne ligne = new Ligne();
        ligne.setLabel("hello");
        Map<String,String> errors = new HashMap();
        errors.put("name","invalid name");
        return new ResponseEntity<Map>(errors,OK);
    }




}
