import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { CardsComponent } from './cards/cards.component';
import { ChartComponent } from './chart/chart.component';
import { MapComponent } from './map/map.component';
import { TablesComponent } from './tables/tables.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { BarchartComponent } from './barchart/barchart.component';

import { routes as centralesRoutes } from './centrales-routing.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { UtilisateurComponent } from './chat/utilisateur/utilisateur.component';
import { ConversationListComponent } from './chat/conversation-list/conversation-list.component';
const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: '', redirectTo: '/signin', pathMatch: 'full' },

  
  {path: 'chart' , component:ChartComponent},
  {path:'map' , component:MapComponent},
  
  {path:'signin' , component:SigninComponent},
  {path:'signup' , component:SignupComponent},
  {path:'barchart' , component:BarchartComponent},
  {path:'conversation' , component:ConversationListComponent},

  //dashboard
  {
    path:'dashboard',
    component:DashboardComponent,
    children:[
      {path:'' ,redirectTo:'cards' , pathMatch:'full'},
      {path: 'cards' , component:CardsComponent},
      {path:'tables' , component:TablesComponent},
      {path: 'header' , component:HeaderComponent},
      {path: 'utilisateur' , component:UtilisateurComponent}
    ],
  },


  ...centralesRoutes,

 // Page non trouvée
 { path: '**', component:NotfoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
