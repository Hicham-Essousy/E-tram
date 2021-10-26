import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Eticket } from '../model/model.eticket';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })


export class TicketService{

    

    constructor(private http : HttpClient) { }

    public getTickets():Observable<Eticket[]>
    {
        return this.http.get<Eticket[]>("http://localhost:8085/voyageur/consulterTickets");
    }

    public generateTickets(gtr:any):Observable<string>
    {
        return this.http.post<string>("http://localhost:8085/voyageur/generateTicket",gtr,{responseType : 'text' as 'json'});
    }




}