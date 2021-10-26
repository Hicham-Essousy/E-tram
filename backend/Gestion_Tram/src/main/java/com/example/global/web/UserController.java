package com.example.global.web;

import com.example.global.entities.User;
import com.example.global.metier.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.util.Map;

import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/user")
@AllArgsConstructor
public class UserController {

    private final UserService userService;


    @CrossOrigin("http://localhost:4200")
    @PutMapping("/updateProfile")
    public ResponseEntity<User> updateProfile(@Valid  @RequestParam Map<String,String> requestParams , @RequestParam("file") MultipartFile file)
    {
        User user = new User();
        user.setCin(requestParams.get("cin"));
        user.setNom(requestParams.get("nom"));
        user.setPrenom(requestParams.get("prenom"));
        user.setSexe(requestParams.get("sexe"));
        user.setPhone(requestParams.get("phone"));
        user.setGmail(requestParams.get("gmail"));

       return new ResponseEntity<>(userService.updateProfile(user,file), OK) ;
    }

    @GetMapping("/getCurrentUser")
    public ResponseEntity<User> getCurrentUser()
    {
        return new ResponseEntity<User>(userService.getCurrentUser(), OK) ;
    }



}
