import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavesRoutingModule } from './naves-routing.module';
import { NavesComponent } from './naves.component';
import { NavesListComponent } from './naves-list/naves-list.component';
import { NavesDetailsComponent } from './naves-details/naves-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { NavesEditComponent } from './naves-edit/naves-edit.component';
import { ResaltarNombreDirective } from './shared/directives/resaltar-nombre.directive';
import { NavesNewComponent } from './naves-new/naves-new.component';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { FormateoNumerosPipe } from './shared/pipes/formateo-numeros.pipe';


@NgModule({
  declarations: [NavesListComponent, NavesComponent, NavesDetailsComponent, NavesEditComponent, ResaltarNombreDirective, NavesNewComponent, FormateoNumerosPipe],
  imports: [
    CommonModule,
    NavesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatSliderModule,
    MatFormFieldModule,
    MatDividerModule,
    MatInputModule,
  ],
  exports: [
    NavesComponent
  ]
})
export class NavesModule { }
