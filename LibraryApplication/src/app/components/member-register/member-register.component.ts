

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MemberModel } from './memberReg.model';

import { MemberServiceService } from 'src/app/shared/member-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-register',
  templateUrl: './member-register.component.html',
  styleUrls: ['./member-register.component.css']
})
export class MemberRegisterComponent {
 
}

