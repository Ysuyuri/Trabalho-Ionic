import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

import { IonicModule } from '@ionic/angular';

import { DadosPessoaisPageRoutingModule } from './dados-pessoais-routing.module';

import { DadosPessoaisPage } from './dados-pessoais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    DadosPessoaisPageRoutingModule
  ],
  declarations: [DadosPessoaisPage]
})
export class DadosPessoaisPageModule {}
