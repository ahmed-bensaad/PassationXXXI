import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BierePage } from './biere';

@NgModule({
  declarations: [
    BierePage,
  ],
  imports: [
    IonicPageModule.forChild(BierePage),
  ],
})
export class BierePageModule {}
