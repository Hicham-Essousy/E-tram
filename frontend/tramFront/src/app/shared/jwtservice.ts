import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ILoginRequest} from './LoginRequest';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtServiceService {

  encoded:any;

  constructor(private http : HttpClient) { }

  public generateToken(Loginrequest : ILoginRequest)
   {
      return this.http.post("http://localhost:8085/auth/authenticate",Loginrequest,{responseType : 'text' as 'json'});
   }

   public saveToken(token : string)
   {
      localStorage.setItem("token",token);
      this.encoded = jwt_decode(token)
      const user:any={nom:"",prenom:"",imageUrl:"",role:"role"};
      user.nom=this.encoded.nom;
      user.prenom=this.encoded.prenom;
      user.role=this.encoded.role;
      user.imageUrl=this.encoded.imageUrl;
      console.log(this.encoded);
      console.log(user.role);
      console.log(user.nom);
      console.log(user.prenom);
      console.log(user.imageUrl);
      localStorage.setItem("nom", user.nom);
      localStorage.setItem("prenom", user.prenom);
      localStorage.setItem("role", user.role);
      localStorage.setItem("imageUrl", user.imageUrl);
      
   }

   public loadToken()
   {
     return localStorage.getItem("token");
   }
}
