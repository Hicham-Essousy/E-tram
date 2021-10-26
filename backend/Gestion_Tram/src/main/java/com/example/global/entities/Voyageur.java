package com.example.global.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
@DiscriminatorValue("voyageur")
@Data
public class Voyageur extends User{


    @NotBlank(message = "remplir le nom")
    @Pattern(regexp="^[A-Za-z]*$",message = "le nom doit contenir seulement des caractéres")
    private String nom ;
    @NotBlank(message = "remplir le prénom")
    @Pattern(regexp="^[A-Za-z]*$",message = "le prénom doit contenir seulement des caractéres")
    private String prenom ;
    @NotBlank(message = "remplir le gmail")
    @Email(message = "email not valid")

    private String gmail ;
    @NotBlank(message = "remplir le cin")
    private String cin ;
    @NotBlank(message = "remplir le mot de passe")
    @Size(min = 8,message = "le mot de passe doit contenir au moins 8 chiffres")
    private String password ;
    @NotBlank(message = "choisir le sexe")
    private String sexe ;
    @NotBlank(message = "remplir le téléphone")
    @Pattern(regexp="^[0-9]*$",message = "le numéro de téléphone doit contenir seulement les chifres")
    @Size(min=10,max = 10,message = "le numéro de téléphone doit contenir 10 chiffres")
    private String phone ;

    @OneToOne
    @JoinColumn(name = "tramSolde_id", referencedColumnName = "id")
    @JsonIgnore
    private TramSolde tramSolde_attaché ;

    @OneToMany(mappedBy = "voyageur")
    @JsonIgnore
    List<Alimentation> alimentationList ;

    public Voyageur()
    {
        this.setRole("voyageur");
    }

}
