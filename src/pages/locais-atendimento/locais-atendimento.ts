import { Component } from '@angular/core';
import { ApiProvider } from "../../providers/api/api";
import { IonicPage, NavController, NavParams, LoadingController, ViewController, AlertController, ModalController } from 'ionic-angular';
import { ListaProcedimentosPage } from '../lista-procedimentos/lista-procedimentos';

@IonicPage()
@Component({
  selector: 'page-locais-atendimento',
  templateUrl: 'locais-atendimento.html',
})
export class LocaisAtendimentoPage {

  public locais = [];

  constructor (public navCtrl: NavController, 
               public navParams: NavParams, 
               public view: ViewController, 
               public api: ApiProvider,
               public loadingCtrl: LoadingController,
               public alertCtrl: AlertController, 
               public modalCtrl: ModalController) {

    let carregando = this.loadingCtrl.create({
      content: 'Aguarde um momento...'
    });
    carregando.present();

    this.api.listarParceiros().subscribe(
      (data) => {
        this.locais = data;
        carregando.dismiss();
      },
      (erro) => {
        carregando.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Erro!',
          subTitle: 'Não foi possivel obter a lista de parceiros.',
          buttons: ['OK']
        });
        alert.present();

        this.view.dismiss();
      },
      () => {
        // carregando.dismiss();
      }
    );
  }

  fecharPagina(){
	  this.view.dismiss();
  }

  listarProcedimentos(parceiro){
    let profileModal = this.modalCtrl.create(ListaProcedimentosPage, { dados: parceiro });
    profileModal.present();
  }



}
