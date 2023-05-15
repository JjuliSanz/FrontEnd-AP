import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SoftSkill } from '../entities/softSkill';

@Injectable({
  providedIn: 'root'
})
export class SoftSkillService {

  // url = 'http://localhost:8080/softSkill/';

  url = 'https://backend-ap-yky6.onrender.com/softSkill/';

  constructor(private http:HttpClient) { }

  public list():Observable<SoftSkill[]>{
    return this.http.get<SoftSkill[]>(this.url + 'list');
  }

  public getById(id: number):Observable<SoftSkill>{
    return this.http.get<SoftSkill>(this.url + `view/${id}`);
  }

  public create(softSkill: SoftSkill):Observable<any>{
    return this.http.post<any>(this.url + 'create', softSkill);
  }

  public update(softSkill: SoftSkill):Observable<any>{
    return this.http.put<any>(this.url + 'update', softSkill);
  }

  public delete(id: number):Observable<any>{
    return this.http.delete<any>(this.url + `delete/${id}`);
  }

}