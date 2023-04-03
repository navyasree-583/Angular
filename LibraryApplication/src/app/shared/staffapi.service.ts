import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StaffapiService {

  constructor(private http: HttpClient) { }

  postStaff(data:any){
    return this.http.post<any>("http://127.0.0.1:8000/staff",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getallStaff(){
    return this.http.get<any>("http://127.0.0.1:8000/allStaff")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getStaffbyId(id:number){
    return this.http.get<any>("http://127.0.0.1:8000/allStaff/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateStaff(data:any,id:number){
    return this.http.put<any>("http://127.0.0.1:8000/staff/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteStaff(data:any,id:number){
    return this.http.delete<any>("http://127.0.0.1:8000/staff/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
