import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../entities/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService { 

  // url = 'http://localhost:8080/persona/';

  url = 'https://backend-ap-yky6.onrender.com/persona/';

  constructor(private http:HttpClient) { }

  public list():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.url + 'list');
  }

  public getById(id: number):Observable<Persona>{
    return this.http.get<Persona>(this.url + `view/${id}`);
  }

  public create(person: Persona):Observable<any>{
    return this.http.post<any>(this.url + 'create', person);
  }

  public update(person: Persona):Observable<any>{
    return this.http.put<any>(this.url + 'update', person);
  }

  public delete(id: number):Observable<any>{
    return this.http.delete<any>(this.url + `delete/${id}`);
  }

}
