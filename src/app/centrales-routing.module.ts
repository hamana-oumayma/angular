import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importer les composants des centrales
import { TG1Component as TG1ComponentBirmchergua } from './Birmchergua/TGs/tg1/tg1.component';
import { TG2Component as TG2ComponentBirmchergua } from './Birmchergua/TGs/tg2/tg2.component';
import { TG3Component as TG3ComponentBirmchergua } from './Birmchergua/TGs/tg3/tg3.component';
import { TG4Component as TG4ComponentBirmchergua } from './Birmchergua/TGs/tg4/tg4.component';
import { INFOComponent as INFOComponentBirmchergua } from './Birmchergua/info/info.component';

import { TG1Component as TG1ComponentSousse } from './sousse/TGs/tg1/tg1.component';
import { TG2Component as TG2ComponentSousse } from './sousse/TGs/tg2/tg2.component';
import { INFOComponent as INFOComponentSousse } from './sousse/info/info.component';

import { TG1Component as TG1ComponentRades } from './Rades/TGs/tg1/tg1.component';
import { INFOComponent as INFOComponentRades } from './Rades/info/info.component';

import { TG1Component as TG1ComponentThyna } from './Thyna/TGs/tg1/tg1.component';
import { TG2Component as TG2ComponentThyna } from './Thyna/TGs/tg2/tg2.component';
import { INFOComponent as INFOComponentThyna } from './Thyna/info/info.component';

import { TG1Component as TG1ComponentFeriana } from './Feriana/TGs/tg1/tg1.component';
import { TG2Component as TG2ComponentFeriana } from './Feriana/TGs/tg2/tg2.component';
import { INFOComponent as INFOComponentFeriana } from './Feriana/info/info.component';

import { TG1Component as TG1ComponentGoulette } from './Goulette/TGs/tg1/tg1.component';
import { INFOComponent as INFOComponentGoulette } from './Goulette/info/info.component';

import { TG3Component as TG3ComponentBouchemma } from './Bouchemma/TGs/tg3/tg3.component';
import { TG4Component as TG4ComponentBouchemma } from './Bouchemma/TGs/tg4/tg4.component';
import { TG5Component as TG5ComponentBouchemma } from './Bouchemma/TGs/tg5/tg5.component';
import { INFOComponent as INFOComponentBouchemma } from './Bouchemma/info/info.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

import { TG3Component } from './Thyna/TGs/tg3/tg3.component';
const routes: Routes = [
    // Birmchergua
    {
      path: 'Birmchergua',
      children: [
        { path: 'tg1', component: TG1ComponentBirmchergua },
        { path: 'tg2', component: TG2ComponentBirmchergua },
        { path: 'tg3', component: TG3ComponentBirmchergua },
        { path: 'tg4', component: TG4ComponentBirmchergua },
        { path: 'info', component: INFOComponentBirmchergua },
       
      ]
    },
    // Sousse
    {
      path: 'Sousse',
      children: [
        { path: 'tg1', component: TG1ComponentSousse },
        { path: 'tg2', component: TG2ComponentSousse },
        { path: 'info', component: INFOComponentSousse }
      ]
    },
    // Rades
    {
      path: 'Rades',
      children: [
        { path: 'tg1', component: TG1ComponentRades },
        { path: 'info', component: INFOComponentRades }
      ]
    },
    // Thyna
    {
      path: 'Thyna',
      children: [
        { path: 'tg1', component: TG1ComponentThyna },
        { path: 'tg2', component: TG2ComponentThyna },
        { path: 'tg3', component: TG3Component },
        { path: 'info', component: INFOComponentThyna }
      ]
    },
    // Feriana
    {
      path: 'Feriana',
      children: [
        { path: 'tg1', component: TG1ComponentFeriana },
        { path: 'tg2', component: TG2ComponentFeriana },
        { path: 'info', component: INFOComponentFeriana }
      ]
    },
    // Goulette
    {
      path: 'Goulette',
      children: [
        { path: 'tg1', component: TG1ComponentGoulette },
        { path: 'info', component: INFOComponentGoulette }
      ]
    },
    // Bouchemma
    {
      path: 'Bouchemma',
      children: [
        { path: 'tg3', component: TG3ComponentBouchemma },
        { path: 'tg4', component: TG4ComponentBouchemma },
        { path: 'tg5', component: TG5ComponentBouchemma },
        { path: 'info', component: INFOComponentBouchemma }
      ]
    },
    // Page non trouvée
    { path: '**', component: NotfoundComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CentralesRoutingModule {}
  
  // Exporter le tableau routes
  export { routes };