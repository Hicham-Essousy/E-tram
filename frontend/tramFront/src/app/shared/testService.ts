import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ligne } from '../model/model.ligne';


@Injectable({
  providedIn: 'root'
})
export class TestService {

    headers : HttpHeaders;

  constructor(private http : HttpClient) {
      

   }

  public sendrequest(file):Observable<any>
  {
      return this.http.post<any>("http://localhost:8080/home/save",file);
  }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    const data:any={nom:"amine",prenom:"harka"};
    formData.append('user',JSON.stringify(data))
    return this.http.post<HttpEvent<any>>("http://localhost:8080/upload",formData,{
      reportProgress: true,
      responseType: 'json'
    })
  }


  getFiles(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/home/save");
  }


}
