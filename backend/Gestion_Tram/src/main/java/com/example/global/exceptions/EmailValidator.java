package com.example.global.exceptions;

import com.example.global.dao.UserRepository;
import com.example.global.entities.User;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

@Service
public class EmailValidator implements ConstraintValidator<CustomUnique, String> {

    @Autowired
    private  UserRepository userRepository;

    @Override
    public void initialize(CustomUnique constraintAnnotation) {
    }

    @Override
    public boolean isValid(String email, ConstraintValidatorContext constraintValidatorContext) {

        try{
            User user = userRepository.findByGmail(email);
            return false ;
        }
        catch(NullPointerException e)
        {
            return true;
        }

    }
}
