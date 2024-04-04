import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import{ MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material/card'
import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { MapComponent } from './map/map.component';
import { ChartComponent } from './chart/chart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TablesComponent } from './tables/tables.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
//BIRMCHERGUA
import { TG1Component as TG1ComponentBirmchergua } from './Birmchergua/TGs/tg1/tg1.component';
import { TG2Component as TG2ComponentBirmchergua } from './Birmchergua/TGs/tg2/tg2.component';
import { TG3Component as TG3ComponentBirmchergua  } from './Birmchergua/TGs/tg3/tg3.component';
import { TG4Component as TG4ComponentBirmchergua } from './Birmchergua/TGs/tg4/tg4.component';
import { INFOComponent as INFOComponentBirmchergua } from './Birmchergua/info/info.component';
//BOUCHEMMA
import { TG3Component as TG3ComponentBouchemma} from './Bouchemma/TGs/tg3/tg3.component';
import { TG4Component as TG4ComponentBouchemma} from './Bouchemma/TGs/tg4/tg4.component';
import { TG5Component as TG5ComponentBouchemma} from './Bouchemma/TGs/tg5/tg5.component';
import { INFOComponent as INFOComponentBouchemma } from './Bouchemma/info/info.component';
//Thyna
import { TG1Component as TG1ComponentThyna } from './Thyna/TGs/tg1/tg1.component';
import { TG2Component as TG2ComponentThyna } from './Thyna/TGs/tg2/tg2.component';
import { TG3Component as TG3ComponentThyna } from './Thyna/TGs/tg3/tg3.component';
import { INFOComponent as INFOComponentThyna} from './Thyna/info/info.component';
//Sousse
import { TG1Component as TG1ComponentSousse} from './sousse/TGs/tg1/tg1.component';
import { TG2Component as TG2ComponentSousse } from './sousse/TGs/tg2/tg2.component';
import { INFOComponent as INFOComponentSousse } from './sousse/info/info.component';
//RADES
import { TG1Component as TG1ComponentRades} from './Rades/TGs/tg1/tg1.component';
import { INFOComponent as INFOComponentRades } from './Rades/info/info.component';
//Feriana
import { TG1Component as TG1ComponentFeriana } from './Feriana/TGs/tg1/tg1.component';
import { TG2Component as TG2ComponentFeriana } from './Feriana/TGs/tg2/tg2.component';
import { INFOComponent as INFOComponentFeriana} from './Feriana/info/info.component';
//Goulette
import { TG1Component as TG1ComponentGoulette} from './Goulette/TGs/tg1/tg1.component';
import { INFOComponent as INFOComponentGoulette } from './Goulette/info/info.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ConversationListComponent } from './chat/conversation-list/conversation-list.component';
import { UtilisateurComponent } from './chat/utilisateur/utilisateur.component';




@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    MapComponent,
    ChartComponent,
    BarchartComponent,
    PiechartComponent,
    DashboardComponent,
    CardsComponent,
    SidenavComponent,
    TablesComponent,
     //birmchergua
     TG1ComponentBirmchergua,
     TG2ComponentBirmchergua,
     TG3ComponentBirmchergua,
     TG4ComponentBirmchergua,
     INFOComponentBirmchergua,
     //Bouchemma
     TG3ComponentBouchemma,
     TG4ComponentBouchemma,
     TG5ComponentBouchemma,
     INFOComponentBouchemma,
     //THYNA
     TG1ComponentThyna,
     TG2ComponentThyna,
     TG3ComponentThyna,
     INFOComponentThyna,
     //SOUSSE
     TG1ComponentSousse,
     TG2ComponentSousse,
     INFOComponentSousse,
     //FERIANA
     TG1ComponentFeriana,
     TG2ComponentFeriana,
     INFOComponentFeriana,
     //GOULETTE
     TG1ComponentGoulette,
     INFOComponentGoulette,
     //RADES
     TG1ComponentRades,
     INFOComponentRades,
     TablesComponent,
     HeaderComponent,
     NotfoundComponent,
     ConversationListComponent,
     UtilisateurComponent,
     
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatFormFieldModule,
   MatCardModule,
   MatInputModule,
   NgbModule,
   MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
