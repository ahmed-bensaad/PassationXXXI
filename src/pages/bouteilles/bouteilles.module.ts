import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BouteillesPage } from './bouteilles';

@NgModule({
  declarations: [
    BouteillesPage,
  ],
  imports: [
    IonicPageModule.forChild(BouteillesPage),
  ],
})
export class BouteillesPageModule {}
