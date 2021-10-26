import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalModule, } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { GoogleChartsModule } from 'angular-google-charts';


import { AppComponent } from './app.component';
import { GestionComponent } from './gestion/gestion.component';
import { UtilisationComponent } from './utilisation/utilisation.component';
import { AdminComponent } from './gestion/admin/admin.component';
import { ResponsableComponent } from './gestion/responsable/responsable.component';
import { StatistiquesComponent } from './gestion/admin/statistiques/statistiques.component';
import { VoyageursComponent } from './gestion/admin/voyageurs/voyageurs.component';
import { ResponsablesComponent } from './gestion/admin/responsables/responsables.component';
import { HomeComponent } from './utilisation/home/home.component';
import { DashbordComponent } from './utilisation/dashbord/dashbord.component';
import { SoldeComponent } from './utilisation/dashbord/solde/solde.component';
import { SignComponent } from './utilisation/sign/sign.component';
import { TestComponent } from './test/test.component';
import {AuthInterceptor} from './service/auth.interceptor';
import { SigngestionComponent } from './gestion/signgestion/signgestion.component';
import { MyAlimentationsComponent } from './utilisation/dashbord/my-alimentations/my-alimentations.component';
import { TicketsComponent } from './utilisation/dashbord/tickets/tickets.component';
import { HoraireComponent } from './utilisation/dashbord/horaire/horaire.component';
import { ProfileComponent } from './profile/profile.component';
import { PayementComponent } from './utilisation/dashbord/payement/payement.component';
import { ContentComponent } from './gestion/admin/content/content.component'; 
import { Home2Component } from './utilisation/dashbord/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionComponent,
    UtilisationComponent,
    AdminComponent,
    ResponsableComponent,
    StatistiquesComponent,
    VoyageursComponent,
    ResponsablesComponent,
    HomeComponent,
    DashbordComponent,
    SoldeComponent,
    SignComponent,
    TestComponent,
    SigngestionComponent,
    MyAlimentationsComponent,
    TicketsComponent,
    HoraireComponent,
    ProfileComponent,
    PayementComponent,
    ContentComponent,
    Home2Component
    
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    NgxQRCodeModule,
    GoogleChartsModule,
    
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

