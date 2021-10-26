import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http : HttpClient) { }
  public getHoraires():Observable<any>
    {
        return this.http.get<any>("http://localhost:8085/admin/getContent");
    }

    public setHoraires(horaire):Observable<any>
    {
        return this.http.post<any>("http://localhost:8085/admin/changeContent",horaire);
    }
}
