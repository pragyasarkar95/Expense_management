import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { ExpenseComponent } from './expense/expense.component';


const routes: Routes = [
  {
   path:'home',component:HomeComponent,
   children:[
     {path:'settings',component:SettingsComponent},
     {path:'profile',component:ProfileComponent},
     {path:'expense',component:ExpenseComponent},
   ]},
//  {
//    path:'\settings',component:SettingsComponent
//   },
//   {
//     path:'\profile',component:ProfileComponent
//   },
  {
    path:'',component:HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
