import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LoginGuard } from './login.guard';
import { DetailPageComponent } from './detail-page/detail-page.component';

const routes: Routes = [
  {path:'' , redirectTo:'/login',pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'shopping-guide', component:HomeComponent , canActivate : [LoginGuard]},
  {path: 'posts/:id', component:DetailPageComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
