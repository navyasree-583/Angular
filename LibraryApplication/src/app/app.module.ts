import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MemberLoginComponent } from './components/member-login/member-login.component';
import { MemberRegisterComponent } from './components/member-register/member-register.component';
import { StaffLoginComponent } from './components/staff-login/staff-login.component';

import { AppRoutingModule } from './app-routing.module';
import { NgImageSliderModule } from 'ng-image-slider';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MembersDashboardComponent } from './components/members-dashboard/members-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { StaffRegisterComponent } from './components/staff-register/staff-register.component';
import { BookSearchComponent } from './components/members-dashboard/book-search/book-search.component';
import { IssueBookComponent } from './components/members-dashboard/issue-book/issue-book.component';
import { ReturnBookComponent } from './components/members-dashboard/return-book/return-book.component';
import { StaffDashboardComponent } from './components/staff-dashboard/staff-dashboard.component';
import { AddBookComponent } from './components/staff-dashboard/add-book/add-book.component';
import { BookUpdateComponent } from './components/staff-dashboard/book-update/book-update.component';
import { ViewOrderComponent } from './components/staff-dashboard/view-order/view-order.component';
import { SearchBookComponent } from './components/staff-dashboard/search-book/search-book.component';
import { CartComponent } from './components/members-dashboard/cart/cart.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MemberLoginComponent,
    MemberRegisterComponent,
    StaffLoginComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    MembersDashboardComponent,
    StaffRegisterComponent,
    BookSearchComponent,
    IssueBookComponent,
    ReturnBookComponent,
    StaffDashboardComponent,
    AddBookComponent,
    BookUpdateComponent,
    ViewOrderComponent,
    SearchBookComponent,
    CartComponent,
   

    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgImageSliderModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    FormsModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
