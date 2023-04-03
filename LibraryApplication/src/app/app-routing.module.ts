import {NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { MemberLoginComponent } from './components/member-login/member-login.component';
import { MemberRegisterComponent } from './components/member-register/member-register.component';
import { StaffLoginComponent } from './components/staff-login/staff-login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { MembersDashboardComponent } from './components/members-dashboard/members-dashboard.component';
import { StaffRegisterComponent } from './components/staff-register/staff-register.component';
import { BookSearchComponent } from './components/members-dashboard/book-search/book-search.component';
import { IssueBookComponent } from './components/members-dashboard/issue-book/issue-book.component';
import { ReturnBookComponent } from './components/members-dashboard/return-book/return-book.component';
import { StaffDashboardComponent } from './components/staff-dashboard/staff-dashboard.component';
import { AddBookComponent } from './components/staff-dashboard/add-book/add-book.component';
import { ViewOrderComponent } from './components/staff-dashboard/view-order/view-order.component';
import { SearchBookComponent } from './components/staff-dashboard/search-book/search-book.component';
import { BookUpdateComponent } from './components/staff-dashboard/book-update/book-update.component';
import { CartComponent } from './components/members-dashboard/cart/cart.component';



const appRoutes: Routes =[
    {path:'',redirectTo:'/home',pathMatch:'full'},
    { path: 'home', component: HomeComponent},
    { path:'signup', component: SignupComponent},
    {path: 'memberRegister', component: MemberRegisterComponent },
    {path: 'staffRegister',component:StaffRegisterComponent},
    {path:'login', component: LoginComponent},
    {path:'stafflogin', component: StaffLoginComponent},
    {path:'memberlogin', component: MemberLoginComponent}, 
    {path:'dashboard',component: MembersDashboardComponent},  
    {path:'Bsearch',component: BookSearchComponent},  
    {path:'IssueB',component: IssueBookComponent},  
    {path:'ReturnB',component: ReturnBookComponent},
    {path:'staffDash',component: StaffDashboardComponent},
    {path:'addBook',component: AddBookComponent},
    {path:'bookSearch',component: SearchBookComponent},
    {path:'bookUpdate',component: BookUpdateComponent},
    {path:'viewOrder',component: ViewOrderComponent},
    {path:'cart',component: CartComponent}

   
    
    
];
@NgModule({
   imports:[RouterModule.forRoot(appRoutes)],
   exports:[RouterModule]
})
export class AppRoutingModule{

}