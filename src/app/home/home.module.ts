import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FiltroComponent } from '../filtro/filtro.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { PipelinesComponent } from '../pipelines/pipelines.component';
import { SelectComponent } from '../select/select.component';
import { ExpansivelComponent } from '../expansivel/expansivel.component';
import {MatIconModule} from '@angular/material/icon';
import { CardDadosGlobaisComponent } from '../card-dados-globais/card-dados-globais.component';
import { DadosGlobaisComponent } from '../dados-globais/dados-globais.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent, 
    FiltroComponent, 
    PipelinesComponent, 
    SelectComponent, 
    ExpansivelComponent, 
    CardDadosGlobaisComponent, 
    DadosGlobaisComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
