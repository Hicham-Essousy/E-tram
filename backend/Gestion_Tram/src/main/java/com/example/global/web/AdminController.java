package com.example.global.web;

import com.example.global.dto.MyRequest;
import com.example.global.entities.Alimentation;
import com.example.global.entities.Horaire;
import com.example.global.entities.ResponsableGuichet;
import com.example.global.entities.Voyageur;
import com.example.global.metier.AdminService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.springframework.http.HttpStatus.*;
import static org.springframework.http.HttpStatus.OK;


@RestController
@RequestMapping("/admin")
@AllArgsConstructor
public class AdminController {
    private final AdminService adminService ;


    @GetMapping("/consulterAlimentations")
    public ResponseEntity<List<Alimentation>> consulterAlimentations()
    {
        return new ResponseEntity<>(adminService.getAllAlimentations(), OK) ;
    }

    @GetMapping("/consulterVoyageurs")
    public ResponseEntity<List<Voyageur>> consulterVoyageurs()
    {
        return new ResponseEntity<>(adminService.getAllVoyageurs(), OK) ;
    }
    
    @PostMapping("/creerRespo")
    public ResponseEntity<ResponsableGuichet> creerRespo(@Valid @RequestBody ResponsableGuichet myRequest)
    {
      return new ResponseEntity<>(adminService.creerRespo(myRequest), OK);
    }

    @GetMapping("/consulterRespos")
    public ResponseEntity<List<ResponsableGuichet>> consulterRespos()
    {
        return new ResponseEntity<>(adminService.getAllRespos(), OK) ;
    }

    @DeleteMapping("/deleteRespo/{id}")
    public ResponseEntity<String> deleteRespo(@PathVariable("id") Long id)
    {
        adminService.deleteRespo(id);
        return new ResponseEntity<>("Responsable deleted succefully", OK);
    }
    @PostMapping("/changeContent")
    public ResponseEntity<Horaire> insertHoraire(@Valid @RequestBody Horaire horaire){
        return new ResponseEntity<Horaire>(adminService.insertHoraire(horaire), OK) ;
    }

    @GetMapping("/getContent")
    public ResponseEntity<Horaire> getHoraire(){
        return new ResponseEntity<Horaire>(adminService.getHoraire(), OK) ;
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(
            MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return errors;

    }



}
