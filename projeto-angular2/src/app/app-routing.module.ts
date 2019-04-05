import { CadastroVisitantesComponent } from './cadastro-visitantes/cadastro-visitantes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroCondominosComponent } from './cadastro-condominos/cadastro-condominos.component';
import { CadastroFuncionariosComponent } from './cadastro-funcionarios/cadastro-funcionarios.component';
import { FormMensagemComponent } from './form-mensagem/form-mensagem.component';

const routes: Routes = [

  { path: 'cadastroCondominos', component: CadastroCondominosComponent },
  { path: 'cadastroFuncionarios', component: CadastroFuncionariosComponent },
  { path: 'cadastroVisitantes', component: CadastroVisitantesComponent },
  { path: 'formMensagem', component: FormMensagemComponent },
  { path: '', pathMatch: 'full', redirectTo: 'pathtemplateForm' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
