import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UtilisationComponent } from './utilisation.component';
import { HomeComponent } from './home/home.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SoldeComponent } from './dashbord/solde/solde.component';
import { SignComponent } from './sign/sign.component';
import { MyAlimentationsComponent } from './dashbord/my-alimentations/my-alimentations.component';
import { HoraireComponent } from './dashbord/horaire/horaire.component';
import { TicketsComponent } from './dashbord/tickets/tickets.component';
import { ProfileComponent } from '../profile/profile.component';
import { PayementComponent } from './dashbord/payement/payement.component';
import { Home2Component } from './dashbord/home/home.component';
import { VoyageurGuard } from '../service/voyageur.guard';

const routes : Routes =
[
  {path : 'public',component : UtilisationComponent,
   children : [
     {path : 'home',component:HomeComponent},
     {path : 'sign',component:SignComponent},
     {path : 'dashbord',component:DashbordComponent,canActivate:[VoyageurGuard],
      children : [
        {path:'solde' , component :SoldeComponent,canActivate:[VoyageurGuard]},
        {path:'profile' , component :ProfileComponent,canActivate:[VoyageurGuard]},
        {path:'myAlimentations' , component :MyAlimentationsComponent,canActivate:[VoyageurGuard]},
        {path:'horaire' , component :HoraireComponent,canActivate:[VoyageurGuard]},
        {path:'tickets' , component :TicketsComponent,canActivate:[VoyageurGuard]},
        {path:'payement' , component :PayementComponent,canActivate:[VoyageurGuard]},
        {path:'home' , component :Home2Component,canActivate:[VoyageurGuard]},
        {path:'' , component :Home2Component,canActivate:[VoyageurGuard]}
        
      ]}
   ]}
];



@NgModule({
  imports : [RouterModule.forRoot(routes,  { anchorScrolling: 'enabled' })],
  exports : [RouterModule]
})
export class UtilisationRoutingModule { }
