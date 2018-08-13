import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
// import { AutoCompleteModule } from 'ionic2-auto-complete';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
// import { PaginaOpcoesPage } from '../pages/pagina-opcoes/pagina-opcoes';
// import { TelaLoginPage } from '../pages/tela-login/tela-login';
// import { TelaCadastroPage } from '../pages/tela-cadastro/tela-cadastro';
// import { TelaAgradecimentoPage } from '../pages/tela-agradecimento/tela-agradecimento';
// import { TelaPrincipalPage } from '../pages/tela-principal/tela-principal';
// import { AgendamentoExamesPage } from '../pages/agendamento-exames/agendamento-exames';
// import { AgendamentoConsultasPage } from '../pages/agendamento-consultas/agendamento-consultas';
// import { SolicitacaoConsultaPage } from '../pages/solicitacao-consulta/solicitacao-consulta';
// import { LocaisAtendimentoPage } from '../pages/locais-atendimento/locais-atendimento';
// import { AtendimentoVirtualPage } from '../pages/atendimento-virtual/atendimento-virtual';
// import { SolicitacaoExamePage } from '../pages/solicitacao-exame/solicitacao-exame';
// import { ListaProcedimentosPage } from '../pages/lista-procedimentos/lista-procedimentos';

import { ApiProvider } from '../providers/api/api';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // PaginaOpcoesPage,
    // TelaLoginPage,
    // TelaCadastroPage,
    // TelaAgradecimentoPage,
    // TelaPrincipalPage,
    // AgendamentoExamesPage,
    // AgendamentoConsultasPage,
    // SolicitacaoConsultaPage,
    // LocaisAtendimentoPage,
    // AtendimentoVirtualPage,
    // SolicitacaoExamePage,
    // ListaProcedimentosPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // AutoCompleteModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    // PaginaOpcoesPage,
    // TelaLoginPage,
    // TelaCadastroPage,
    // TelaAgradecimentoPage,
    // TelaPrincipalPage,
    // AgendamentoExamesPage,
    // AgendamentoConsultasPage,
    // SolicitacaoConsultaPage,
    // LocaisAtendimentoPage,
    // AtendimentoVirtualPage,
    // SolicitacaoExamePage,
    // ListaProcedimentosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}
