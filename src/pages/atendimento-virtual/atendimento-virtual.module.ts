import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AtendimentoVirtualPage } from './atendimento-virtual';

@NgModule({
  declarations: [
    AtendimentoVirtualPage,
  ],
  imports: [
    IonicPageModule.forChild(AtendimentoVirtualPage),
  ],
})
export class AtendimentoVirtualPageModule {}
