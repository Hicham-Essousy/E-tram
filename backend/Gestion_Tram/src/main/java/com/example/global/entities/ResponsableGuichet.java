package com.example.global.entities;

import lombok.Data;
import org.springframework.stereotype.Component;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Entity
@DiscriminatorValue("responsable")
@Data
public class ResponsableGuichet extends User{

    @NotBlank(message = "remplir le gmail")
    @Email(message = "email not valid")
    private String gmail ;

    @NotBlank(message = "remplir le nom")
    @Pattern(regexp="^[A-Za-z]*$",message = "le nom doit contenir seulement des caractéres")
    private String nom ;



    private String agence ;

    public ResponsableGuichet()
    {
        this.setRole("responsable");
    }

}


