import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroCondominosComponent } from './cadastro-condominos/cadastro-condominos.component';
import { CadastroFuncionariosComponent } from './cadastro-funcionarios/cadastro-funcionarios.component';
import { CadastroVisitantesComponent } from './cadastro-visitantes/cadastro-visitantes.component';
import { FormMensagemComponent } from './form-mensagem/form-mensagem.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroCondominosComponent,
    CadastroFuncionariosComponent,
    CadastroVisitantesComponent,
    FormMensagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
