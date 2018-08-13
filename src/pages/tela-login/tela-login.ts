import { Component } from '@angular/core';
import { Storage  } from '@ionic/storage';
import { ApiProvider } from "../../providers/api/api";
import { IonicPage, NavController, NavParams, Nav, ViewController, LoadingController, AlertController } from 'ionic-angular';
// import { TelaPrincipalPage } from '../tela-principal/tela-principal';

@IonicPage()
@Component({
  selector: 'page-tela-login',
  templateUrl: 'tela-login.html',
})
export class TelaLoginPage {
  
  login: string = "";
  senha: string = "";
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public nav: Nav, 
              public view: ViewController,
              public api: ApiProvider,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public storage: Storage ) {
  }

  fazerLogin() {
  	// console.log(this.login, this.senha);
    let carregando = this.loadingCtrl.create({
      content: 'Aguarde um momento...'
    });
    carregando.present();
        
    this.api.autenticarUsuario(this.login, this.senha).subscribe(
      (data) => { 
        /* Tirando o efeito de loading */
        carregando.dismiss();

        if(data.codigo == "01"){ 
          // salvando o nome do usuario logado
          this.storage.set('usuario', data.usuario);
          this.storage.set('usuario_id', data.paciente_id);

          /* Redirecionando para a Tele Principal */
          this.nav.setRoot('TelaPrincipalPage');
        }
        else{
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

  fecharPagina(){
    this.view.dismiss();
  }

}
