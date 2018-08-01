import { Component } from '@angular/core';
import { Storage  } from '@ionic/storage';
import { ApiProvider } from "../../providers/api/api";
import { IonicPage, NavController, NavParams, ViewController, LoadingController, AlertController  } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-solicitacao-consulta',
  templateUrl: 'solicitacao-consulta.html',
})
export class SolicitacaoConsultaPage {
  public consulta: string;
  public data: string;
  public turno: string;
  public paciente_id: string;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams, 
  			  public view: ViewController, 
  			  public api: ApiProvider,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public storage: Storage) {

  	this.consulta = navParams.get('consulta');
    storage.get('usuario_id').then((val) => {
      this.paciente_id = val;
    });

  }

  solicitarConsulta() {
    let carregando = this.loadingCtrl.create({
      content: 'Aguarde um momento...'
    });
    carregando.present();

    let dados = { paciente_id: this.paciente_id, consulta: this.consulta,
    			  data: this.data, turno: this.turno };
    			  
    this.api.solicitarConsulta(dados).subscribe(
      (data) => { 
        /* Tirando o efeito de loading */
        carregando.dismiss();

        if(data.codigo == "01"){ // SUCESSO
          let alert = this.alertCtrl.create({
            title: 'Sucesso!',
            subTitle: data.mensagem,
            buttons: ['OK']
          });
          alert.present();

          /* VOLTANDO PARA A TELA COM AS CONSULTAS */
    	  this.view.dismiss();
        }
        else{ // ERRO AO FAZER SOLICITAÇÃO
          // Mostrando o alerta em caso de erro
          let alert = this.alertCtrl.create({
            title: 'Erro!',
            subTitle: data.mensagem,
            buttons: ['OK']
          });
          alert.present();
        }
      },
      (erro) => {
        carregando.dismiss();

        // Mostrando o alerta em caso de erro
        let alert = this.alertCtrl.create({
          title: 'Erro!',
          subTitle: "Não foi possivel estabelecer conexão.",
          buttons: ['OK']
        });
        alert.present();
      },
      () => {
        /* Redirecionando para a lista de externos */
        // this.nav.setRoot(TelaPrincipalPage);
      }
    );
  }
}
