import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/model.user';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })


export class UserService{

    

    constructor(private http : HttpClient) { }

    public getCurrentUser():Observable<User>
    {
        return this.http.get<User>("http://localhost:8085/user/getCurrentUser");
    }

    public updateProfile(user:any,file:any):Observable<User>
    {
        const formdata = new FormData();
        formdata.append('nom',user.nom);
        formdata.append('prenom',user.prenom);
        formdata.append('cin',user.cin);
        formdata.append('gmail',user.gmail);
        formdata.append('phone',user.phone);
        formdata.append('sexe',user.sexe);
        formdata.append('file',file);
        return this.http.put<User>("http://localhost:8085/user/updateProfile",formdata,{
            reportProgress: true,
            responseType: 'json'
          });
    }




}