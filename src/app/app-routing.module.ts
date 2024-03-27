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

import { TG1Component as TG1ComponentBirmchergua } from './Birmchergua/TGs/tg1/tg1.component';
import { TG2Component as TG2ComponentBirmchergua } from './Birmchergua/TGs/tg2/tg2.component';
import { TG3Component as TG3ComponentBirmchergua } from './Birmchergua/TGs/tg3/tg3.component';
import { TG4Component as TG4ComponentBirmchergua } from './Birmchergua/TGs/tg4/tg4.component';
import { INFOComponent as INFOComponentBirmchergua } from './Birmchergua/info/info.component';

import { TG1Component as TG1ComponentSousse} from './sousse/TGs/tg1/tg1.component';
import { TG2Component as TG2ComponentSousse } from './sousse/TGs/tg2/tg2.component';
import { INFOComponent as INFOComponentSousse } from './sousse/info/info.component';

import { TG1Component as TG1ComponentRades} from './Rades/TGs/tg1/tg1.component';
import { INFOComponent as INFOComponentRades } from './Rades/info/info.component';

import { TG1Component as TG1ComponentThyna } from './Thyna/TGs/tg1/tg1.component';
import { TG2Component as TG2ComponentThyna } from './Thyna/TGs/tg2/tg2.component';
import { INFOComponent as INFOComponentThyna} from './Thyna/info/info.component';

import { TG1Component as TG1ComponentFeriana } from './Feriana/TGs/tg1/tg1.component';
import { TG2Component as TG2ComponentFeriana } from './Feriana/TGs/tg2/tg2.component';
import { INFOComponent as INFOComponentFeriana} from './Feriana/info/info.component';

import { TG1Component as TG1ComponentGoulette} from './Goulette/TGs/tg1/tg1.component';
import { INFOComponent as INFOComponentGoulette } from './Goulette/info/info.component';

import { TG3Component as TG3ComponentBouchemma} from './Bouchemma/TGs/tg3/tg3.component';
import { TG4Component as TG4ComponentBouchemma} from './Bouchemma/TGs/tg4/tg4.component';
import { TG5Component as TG5ComponentBouchemma} from './Bouchemma/TGs/tg5/tg5.component';
import { INFOComponent as INFOComponentBouchemma } from './Bouchemma/info/info.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  {path:'dashboard' , component:DashboardComponent},
  {path: 'header' , component:HeaderComponent},
  {path: 'cards' , component:CardsComponent},
  {path: 'chart' , component:ChartComponent},
  {path:'map' , component:MapComponent},
  {path:'tables' , component:TablesComponent},
  {path:'signin' , component:SigninComponent},
  {path:'signup' , component:SignupComponent},
  {path:'barchart' , component:BarchartComponent},
  {path:'tables' , component:TablesComponent},
//birmchergua
  { path: 'Birmchergua', children: [
    { path:'tg1', component: TG1ComponentBirmchergua },
    { path: 'TG2', component: TG2ComponentBirmchergua },
    { path: 'TG3', component: TG3ComponentBirmchergua },
    { path: 'TG4', component: TG4ComponentBirmchergua },
    { path: 'info', component: INFOComponentBirmchergua }
  ]},
  //sousse
  { path: 'Sousse', children: [
    { path: 'TG1', component: TG1ComponentSousse },
    { path: 'TG2', component: TG2ComponentSousse },
    { path: 'info', component: INFOComponentSousse }
  ]},
  //Rades
  { path: 'Rades', children: [
    { path: 'tg1', component: TG1ComponentRades },
    { path: 'info', component: INFOComponentRades }
  ]},
  //thyna
  { path: 'Thyna', children: [
    { path: 'TG1', component: TG1ComponentThyna },
    { path: 'TG2', component: TG2ComponentThyna },
    { path: 'info', component: INFOComponentThyna }
  ]},
  //feriana
  { path: 'Feriana', children: [
    { path: 'TG1', component: TG1ComponentFeriana },
    { path: 'TG2', component: TG2ComponentFeriana },
    { path: 'info', component: INFOComponentFeriana }
  ]},
  //goulette
  { path: 'Goulette', children: [
    { path: 'TG1', component: TG1ComponentGoulette },
    { path: 'info', component: INFOComponentGoulette }
  ]},
  //bouchemma
  { path: 'Bouchemma', children: [
    { path: 'TG3', component: TG3ComponentBouchemma },
    { path: 'TG4', component: TG4ComponentBouchemma },
    { path: 'TG5', component: TG5ComponentBouchemma },
    { path: 'info', component: INFOComponentBouchemma }
  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
