import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './public/about/about.component';
import { ContactComponent } from './public/contact/contact.component';
import { LoginComponent } from './login/login.component';

// import { AuthGuardService } from './core/auth-guard.service';
// import { PokemonsRoutingModule } from './pokemons/pokemons-routing.module';
// import { PokemonsComponent } from './pokemons/pokemons.component';
// import { PokemonsRawComponent } from './pokemons/pokemons-raw/pokemons-raw.component';
const routes: Routes = [

  
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  // {path: 'pokemons/full-details/:id/:name/:xxx'}
  
//  { path: 'pokemons', component: PokemonsComponent, canActivate: [AuthGuardService]},
//  { path: 'pokemons/raw/:id', component: PokemonsRawComponent, canActivate: [AuthGuardService]},

  // Login
  { path: 'login', component: LoginComponent },

  // Por defecto lo mandamos a pokemons
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'pokemons', loadChildren: () => import('./pokemons/pokemons.module').then(m => m.PokemonsModule) },

  
  { path: 'naves', loadChildren: () => import('./naves/naves.module').then(m => m.NavesModule) },

  // Si no es válida, también lo mandamos a pokemons (o a 404)
 { path: '**', redirectTo: '/login' }

];

@NgModule({
  //imports: [PokemonsRoutingModule, RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
