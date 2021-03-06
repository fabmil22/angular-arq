import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [

{ path: 'home' , component: HomeComponent},
{ path: 'dashboard' , component: DashboardComponent},
{ path: '', redirectTo: 'home', pathMatch: 'full'},
{ path: '**' , component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
