import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PressionsPage } from './pressions';

@NgModule({
  declarations: [
    PressionsPage,
  ],
  imports: [
    IonicPageModule.forChild(PressionsPage),
  ],
})
export class PressionsPageModule {}
