import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CadastrarAtendimentoComponent } from './cadastrar-atendimento/cadastrar-atendimento.component';
import { ConsultarAtendimentoComponent } from './consultar-atendimento/consultar-atendimento.component';


const routes: Routes = [
  { path: 'cadastrar-atendimento', component: CadastrarAtendimentoComponent },
  { path: 'consultar-atendimento', component: ConsultarAtendimentoComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CadastrarAtendimentoComponent,
    ConsultarAtendimentoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
