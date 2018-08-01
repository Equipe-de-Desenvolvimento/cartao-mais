import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaginaOpcoesPage } from './pagina-opcoes';

@NgModule({
  declarations: [
    PaginaOpcoesPage,
  ],
  imports: [
    IonicPageModule.forChild(PaginaOpcoesPage),
  ],
})
export class PaginaOpcoesPageModule {}
