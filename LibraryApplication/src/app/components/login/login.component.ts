import { Component } from '@angular/core';
import {Router} from'@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router){}
  goTomember(memberLogin:string):void{
         this.router.navigate([`${memberLogin}`]);
  }
  goTostaff(staffLogin:string):void{
    this.router.navigate([`${staffLogin}`]);
}
}
