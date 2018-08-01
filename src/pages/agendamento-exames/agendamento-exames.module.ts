import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendamentoExamesPage } from './agendamento-exames';

@NgModule({
  declarations: [
    AgendamentoExamesPage,
  ],
  imports: [
    IonicPageModule.forChild(AgendamentoExamesPage),
  ],
})
export class AgendamentoExamesPageModule {}
