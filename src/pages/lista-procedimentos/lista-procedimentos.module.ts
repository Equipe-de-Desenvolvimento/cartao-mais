import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaProcedimentosPage } from './lista-procedimentos';

@NgModule({
  declarations: [
    ListaProcedimentosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaProcedimentosPage),
  ],
})
export class ListaProcedimentosPageModule {}
