import { Component } from '@angular/core';
import { Storage  } from '@ionic/storage';

import { IonicPage, NavController, NavParams, Nav, AlertController } from 'ionic-angular';
import { PaginaOpcoesPage } from '../pagina-opcoes/pagina-opcoes';
import { AgendamentoExamesPage } from '../agendamento-exames/agendamento-exames';
import { AgendamentoConsultasPage } from '../agendamento-consultas/agendamento-consultas';
import { LocaisAtendimentoPage } from '../locais-atendimento/locais-atendimento';
import { AtendimentoVirtualPage } from '../atendimento-virtual/atendimento-virtual';

@IonicPage()
@Component({
  selector: 'page-tela-principal',
  templateUrl: 'tela-principal.html',
})
export class TelaPrincipalPage {

  usuarioNome: string;

  constructor ( public navCtrl: NavController, 
                public navParams: NavParams, 
                public nav: Nav, 
                public storage: Storage,
                public alertCtrl: AlertController ) {
    storage.get('usuario').then((val) => {
      this.usuarioNome = val;
    });
  }

  public logout() {
    let alert = this.alertCtrl.create({
      title: 'Atenção!',
      subTitle: "Deseja realmente fazer logout?",
      buttons : [
       {
        text: "Cancelar",
        handler: data => {
          console.log("cancel clicked");
        }
       },
       {
        text: "OK",
        handler: data => {
          this.storage.set('usuario', null);
          this.storage.set('usuario_id', null);
          this.nav.setRoot(PaginaOpcoesPage);
        }
      }]
    });
    alert.present();
  }

  public agendamentoExames() {
    this.nav.push(AgendamentoExamesPage);
  }

  public agendamentoConsultas() {
    this.nav.push(AgendamentoConsultasPage);
  }

  public locaisAtendimento() {
    this.nav.push(LocaisAtendimentoPage);
  }

  public atendimentoVirtual() {
    this.nav.push(AtendimentoVirtualPage);
  }
}
