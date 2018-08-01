import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocaisAtendimentoPage } from './locais-atendimento';

@NgModule({
  declarations: [
    LocaisAtendimentoPage,
  ],
  imports: [
    IonicPageModule.forChild(LocaisAtendimentoPage),
  ],
})
export class LocaisAtendimentoPageModule {}
