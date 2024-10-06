import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { ListComponent } from './list/list.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AjoutNextComponent } from './ajout-next/ajout-next.component';
import { AuthentificationComponent } from './authentification/authentification.component';

const routes: Routes = [
  
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:"/home",pathMatch:'full'},
  {path:'authentification',component:AuthentificationComponent},
  {path:'ajout',component:AjoutComponent},
  {path:'next',component:AjoutNextComponent},
  {path: 'list', component:ListComponent},
  {path:'about',component:AboutComponent},

  
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
