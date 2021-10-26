import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {SignRequest} from '../shared/SignRequest';


@Injectable({
  providedIn: 'root'
})
export class SignService {

    

  constructor(private http : HttpClient) {}

  public signup(signRequest : SignRequest)
  {
    return this.http.post("http://localhost:8085/auth/signup",signRequest)
  }

}
