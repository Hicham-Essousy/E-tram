import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {JwtServiceService} from '../../shared/jwtservice';
import {ILoginRequest} from '../../shared/LoginRequest' ;
import {Router} from '@angular/router';
import { ElementRef ,Renderer2} from '@angular/core';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginRequest : ILoginRequest ={gmail : "",password : ""};
  response : any ;
  mode : number = 0 ;

  take : any ;
  
  

  constructor(private jwtService : JwtServiceService,private router :Router ,private renderer: Renderer2
    ,private element:ElementRef) { }

  ngOnInit(): void {
    console.log("working"); 
    this.take =jwt_decode(this.jwtService.loadToken());
    console.log(this.take.role);

  }

  
  

  public getAccessToken(loginRequest:ILoginRequest)
  {
    let resp = this.jwtService.generateToken(loginRequest);
    resp.subscribe(data =>{
      console.log(data);
      this.jwtService.saveToken(data.toString());
      this.router.navigateByUrl("/public/dashbord");
      console.log(this.jwtService.loadToken());}
      ,error => {
      console.log(error);
      this.mode=1});
  }

  public login()
  {
   this.getAccessToken(this.loginRequest);
   
  }

 public onOpenModal()
 {
  
  document.getElementById("overlay").style.visibility="visible";
  document.getElementById("overlay").style.opacity="1";
  document.getElementById("modal").style.visibility="visible";
  document.getElementById("modal").style.top="50%";
 }

 public onCloseModal()
 {
  
  document.getElementById("overlay").style.visibility="hidden";
  document.getElementById("overlay").style.opacity="0";
  document.getElementById("modal").style.visibility="hidden";
  document.getElementById("modal").style.top="-50%";
 }



}
