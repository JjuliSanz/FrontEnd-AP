import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HardSkill } from '../entities/hardSkill';

@Injectable({
  providedIn: 'root'
})
export class HardSkillService {

  // url = 'http://localhost:8080/hardSkill/';

  url = 'https://backend-ap-yky6.onrender.com/hardSkill/';

  constructor(private http:HttpClient) { }

  public list():Observable<HardSkill[]>{
    return this.http.get<HardSkill[]>(this.url + 'list');
  }

  public getById(id: number):Observable<HardSkill>{
    return this.http.get<HardSkill>(this.url + `view/${id}`);
  }

  public create(hardSkill: HardSkill):Observable<any>{
    return this.http.post<any>(this.url + 'create', hardSkill);
  }

  public update(hardSkill: HardSkill):Observable<any>{
    return this.http.put<any>(this.url + 'update', hardSkill);
  }

  public delete(id: number):Observable<any>{
    return this.http.delete<any>(this.url + `delete/${id}`);
  }

}
