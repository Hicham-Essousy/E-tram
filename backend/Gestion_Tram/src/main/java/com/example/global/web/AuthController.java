package com.example.global.web;

import com.example.global.dto.LoginRequest;
import com.example.global.dto.RegisterRequest;
import com.example.global.entities.User;
import com.example.global.entities.Voyageur;
import com.example.global.metier.AuthService;
import com.example.global.util.JwtUtil;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import java.util.HashMap;
import java.util.Map;

import static org.springframework.http.HttpStatus.*;

@RestController
@RequestMapping("/auth")
@AllArgsConstructor
public class AuthController {

    private final AuthService authService;
    private final JwtUtil jwtUtil ;
    private final AuthenticationManager authenticationManager ;

    @PostMapping("/signup")
    public ResponseEntity<Voyageur> signUp(@Valid @RequestBody Voyageur voyageur)
    {

        return new ResponseEntity<Voyageur>(authService.signup(voyageur), OK);
    }

    @PostMapping("/authenticate")
    public String generateToken(@RequestBody LoginRequest loginRequest) throws Exception
    {
       return  authService.login2(loginRequest);
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
