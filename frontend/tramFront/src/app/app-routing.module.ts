import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UtilisationComponent } from './utilisation/utilisation.component';
import { GestionComponent } from './gestion/gestion.component';
import { GestionRoutingModule } from './gestion/gestion-routing.module';
import { AdminComponent } from './gestion/admin/admin.component';
import { ResponsableComponent } from './gestion/responsable/responsable.component';
import { UtilisationRoutingModule } from './utilisation/utilisation-routing.module';
import { TestComponent } from './test/test.component';

const routes : Routes =
[
  {path : "test" , component : TestComponent}  
] ;



@NgModule({
  imports: [RouterModule.forRoot(routes),GestionRoutingModule,UtilisationRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
