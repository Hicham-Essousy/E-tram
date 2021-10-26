package com.example.global.entities;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Horaire {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    @NotBlank(message = "hello1")
    private String h1;
    @NotBlank(message = "hello2")
    private String h2;
    @NotBlank(message = "hello3")
    private String h3;
    private String h4;
    private String h5;
    private String h6;
    private String h7;
    private String h8;
    private String h9;
    private String h10;
    private String h11;
    private String h12;


}
