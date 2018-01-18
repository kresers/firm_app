import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TableauPage } from './tableau';

@NgModule({
  declarations: [
    TableauPage,
  ],
  imports: [
    IonicPageModule.forChild(TableauPage),
  ],
})
export class TableauPageModule {}
