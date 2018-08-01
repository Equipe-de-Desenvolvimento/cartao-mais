import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendamentoConsultasPage } from './agendamento-consultas';

@NgModule({
  declarations: [
    AgendamentoConsultasPage,
  ],
  imports: [
    IonicPageModule.forChild(AgendamentoConsultasPage),
  ],
})
export class AgendamentoConsultasPageModule {}
