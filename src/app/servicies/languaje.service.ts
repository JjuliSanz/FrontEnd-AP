import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Languaje } from '../entities/languaje';

@Injectable({
  providedIn: 'root'
})
export class LanguajeService {

  // url = 'http://localhost:8080/languaje/';

  url = 'https://backend-ap-yky6.onrender.com/languaje/';

  constructor(private http:HttpClient) { }

  public list():Observable<Languaje[]>{
    return this.http.get<Languaje[]>(this.url + 'list');
  }

  public getById(id: number):Observable<Languaje>{
    return this.http.get<Languaje>(this.url + `view/${id}`);
  }

  public create(languaje: Languaje):Observable<any>{
    return this.http.post<any>(this.url + 'create', languaje);
  }

  public update(languaje: Languaje):Observable<any>{
    return this.http.put<any>(this.url + 'update', languaje);
  }

  public delete(id: number):Observable<any>{
    return this.http.delete<any>(this.url + `delete/${id}`);
  }

}