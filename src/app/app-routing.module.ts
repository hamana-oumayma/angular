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

import { routes as taskboardRoutes } from 'src/app/taskboard/taskboard-routing.module';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { UtilisateurComponent } from './chat/utilisateur/utilisateur.component';
import { ConversationListComponent } from './chat/conversation-list/conversation-list.component';

import { TasksComponent } from './tasks/tasks.component';
import { WeatherComponent } from './weather/weather.component';
import { AchatComponent } from './achat/achat.component';
import { AjoutModalComponent } from './achat/ajout-modal/ajout-modal.component';
import { ReportComponent } from './report/report.component';
import { ReportModalComponent } from './report/report-modal/report-modal.component';
const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: '', redirectTo: '/signin', pathMatch: 'full' },

  
  {path: 'chart' , component:ChartComponent},
  {path:'map' , component:MapComponent},
  {path:'tasks' , component:TasksComponent},
  {path:'signin' , component:SigninComponent},
  {path:'signup' , component:SignupComponent},
  {path:'barchart' , component:BarchartComponent},
  {path:'conversation' , component:ConversationListComponent},
  { path: 'taskboard', loadChildren: () => import('./taskboard/taskboard.module').then(m => m.TaskboardModule) },
  {path:'weather' , component:WeatherComponent},
  {path:'achat' , component:AchatComponent},
  {path:'ajoutmodal' , component:AjoutModalComponent},
  {path:'report' , component:ReportComponent},
  {path:'reportmodal' , component:ReportModalComponent},
    // Autres routes de votre application
 
  
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
  ...taskboardRoutes,
 // Page non trouvée
 { path: '**', component:NotfoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
