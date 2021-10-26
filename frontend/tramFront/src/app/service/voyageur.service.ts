import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Voyageur } from '../model/model.voyageur';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })


export class VoyageurService{

    

    constructor(private http : HttpClient) { }

    public getVoyageurs():Observable<Voyageur[]>
    {
        return this.http.get<Voyageur[]>("http://localhost:8085/admin/consulterVoyageurs");
    }

    public getGlobalInformations():Observable<any>
    {
        return this.http.get<any>("http://localhost:8085/voyageur/getInfo");
    }




}