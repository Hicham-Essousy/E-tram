import { Component, OnInit } from '@angular/core';
import {JwtServiceService} from '../../shared/jwtservice';
import {ILoginRequest} from '../../shared/LoginRequest' ;
import {Router} from '@angular/router';

@Component({
  selector: 'app-signgestion',
  templateUrl: './signgestion.component.html',
  styleUrls: ['./signgestion.component.css']
})
export class SigngestionComponent implements OnInit {

  loginRequest : ILoginRequest ={gmail : "",password : ""};
  mode : number = 0 ;

  constructor(private jwtService : JwtServiceService,private router :Router) { }

  ngOnInit(): void {
  }


  public getAccessToken(loginRequest:ILoginRequest)
  {
    let resp = this.jwtService.generateToken(loginRequest);
    resp.subscribe(data =>{
      console.log(data);
      this.jwtService.saveToken(data.toString());
      if(localStorage.getItem("role")=="responsable")
      {
        this.router.navigateByUrl("/gestion/responsable");
      }
      if(localStorage.getItem("role")=="admin")
      {
        this.router.navigateByUrl("/gestion/admin");
      }
       }
      ,error => {
      console.log(error);
      this.mode=1});
  }

  public login()
  {
   this.getAccessToken(this.loginRequest);
   
  }

}
