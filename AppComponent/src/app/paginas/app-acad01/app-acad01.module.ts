import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

import { IonicModule } from '@ionic/angular';

import { AppAcad01PageRoutingModule } from './app-acad01-routing.module';

import { AppAcad01Page } from './app-acad01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    AppAcad01PageRoutingModule
  ],
  declarations: [AppAcad01Page]
})
export class AppAcad01PageModule {}
