import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alimentation} from '../model/model.alimentation';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })


export class MyAlimentationService{

    

    constructor(private http : HttpClient) { }

    public getMyAlimentations():Observable<Alimentation[]>
    {
        return this.http.get<Alimentation[]>("http://localhost:8085/voyageur/consulterAlimentations");
        
    }

    public alimenter({montant,cardNumber}):Observable<Alimentation>
    {
        return this.http.post<Alimentation>("http://localhost:8085/voyageur/alimenterSolde",{montant,cardNumber});
        
    }




}