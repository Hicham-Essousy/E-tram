import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponsableGuichet } from '../model/model.responsableguichet';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })


export class ResponsableService{

    

    constructor(private http : HttpClient) { }

    public getRespos():Observable<ResponsableGuichet[]>
    {
        return this.http.get<ResponsableGuichet[]>("http://localhost:8085/admin/consulterRespos");
    }

    public creerRespo({gmail,nom}):Observable<ResponsableGuichet>
    {
        return this.http.post<ResponsableGuichet>("http://localhost:8085/admin/creerRespo",{gmail,nom});
    }




}