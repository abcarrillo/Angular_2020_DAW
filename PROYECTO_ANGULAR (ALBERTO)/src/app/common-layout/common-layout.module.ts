import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonLayoutComponent } from './common-layout.component';
import { PokemonsModule } from '../pokemons/pokemons.module';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { LoginModule } from '../login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainNavComponent, CommonLayoutComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    PokemonsModule,
    SharedModule,
    AppRoutingModule,
    LoginModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatPseudoCheckboxModule,
    MatButtonModule,
    
    
  ],
  exports: [
    CommonLayoutComponent
  ]

})
export class CommonLayoutModule { }
