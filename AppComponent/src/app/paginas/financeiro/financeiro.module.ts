import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

import { IonicModule } from '@ionic/angular';

import { FinanceiroPageRoutingModule } from './financeiro-routing.module';

import { FinanceiroPage } from './financeiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    FinanceiroPageRoutingModule
  ],
  declarations: [FinanceiroPage]
})
export class FinanceiroPageModule {}
