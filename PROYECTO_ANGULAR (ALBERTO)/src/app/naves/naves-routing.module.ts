import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavesComponent } from './naves.component';
import { AuthGuardService } from '../core/auth-guard.service';

const navesRoutes: Routes = [

  // Para que funcione el lazy loading
  { path: '', component: NavesComponent, canActivate: [AuthGuardService] },

];

@NgModule({
  imports: [RouterModule.forChild(navesRoutes)],
  exports: [RouterModule]
})
export class NavesRoutingModule {



}
