import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberServiceService {

  constructor(private http: HttpClient) { }

  memberReg(data:any){
    return this.http.post('http://127.0.0.1:8000/staff',data)
  }
}
