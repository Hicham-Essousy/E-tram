import { Component, OnInit } from '@angular/core';
import { SignService } from 'src/app/service/signup.service';
import {SignRequest} from '../../shared/SignRequest';
import {ILoginRequest} from '../../shared/LoginRequest';
import {Router} from '@angular/router';
import {JwtServiceService} from '../../shared/jwtservice';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  signRequest : SignRequest ={nom:"",prenom:"",phone:"",cin:"",sexe:"",password:"",gmail:""};
  signError : SignRequest ={nom:"",prenom:"",phone:"",cin:"",sexe:"",password:"",gmail:""};
  loginRequest : ILoginRequest = {gmail:"",password:""} ;
  constructor(private signService : SignService,private router:Router,private jwtService:JwtServiceService) { }

  ngOnInit(): void {
  }

  public onSignUp()
  {
    let resp = this.signService.signup(this.signRequest);
    resp.subscribe(data=>{
      console.log(data);
      this.loginRequest.gmail = this.signRequest.gmail;
      this.loginRequest.password = this.signRequest.password;      
      let resp2 = this.jwtService.generateToken(this.loginRequest);
    resp2.subscribe(data2 =>{
      this.jwtService.saveToken(data2.toString());
      this.router.navigateByUrl("/public/dashbord");}
      );
      
    },error=>
    {
      
      this.signError=error.error;
      console.log(this.signError);
      console.log(this.signError.cin);
    })
  }

}
