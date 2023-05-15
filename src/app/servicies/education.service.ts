import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../entities/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  // url = 'http://localhost:8080/education/';

  url = 'https://backend-ap-yky6.onrender.com/education/';

  constructor(private http:HttpClient) { }

  public list():Observable<Education[]>{
    return this.http.get<Education[]>(this.url + 'list');
  }

  public getById(id: number):Observable<Education>{
    return this.http.get<Education>(this.url + `view/${id}`);
  }

  public create(education: Education):Observable<any>{
    return this.http.post<any>(this.url + 'create', education);
  }

  public update(education: Education):Observable<any>{
    return this.http.put<any>(this.url + 'update', education);
  }

  public updateById(education: Education, id: number):Observable<any>{
    return this.http.put<any>(this.url + `update/${id}`, education);
  }

  public delete(id: number):Observable<any>{
    return this.http.delete<any>(this.url + `delete/${id}`);
  }

}
