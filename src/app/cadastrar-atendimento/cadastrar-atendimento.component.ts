import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-atendimento',
  templateUrl: './cadastrar-atendimento.component.html',
  styleUrls: ['./cadastrar-atendimento.component.css']
})
export class CadastrarAtendimentoComponent implements OnInit{
  medicos: any[] = [];
  pacientes: any[] = [];

  mensagem: string = "";

  constructor(
    private httpClient: HttpClient
  ) {}

  formCadastro = new FormGroup({
    dataHora: new FormControl('', [Validators.required]),
    idMedico: new FormControl('', [Validators.required]),
    idPaciente: new FormControl('', [Validators.required]),
    medicamento: new FormControl('', [Validators.required]),
    prescricao: new FormControl('', [Validators.required])
  });

  get form(): any {
    return this.formCadastro.controls;
  }

  ngOnInit(): void{
    this.httpClient.get('http://localhost:8080/api/pacientes')
      .subscribe(
        (data) => {
          this.pacientes = data as any[];
        },
        (e) => {
          console.log(e);
        }
      )
    this.httpClient.get('http://localhost:8080/api/medicos')
      .subscribe(
        (data) => {
          this.medicos = data as any[];
        },
        (e) => {
          console.log(e);
        }
      )
  }

  onSubmit(): void {
     var request = {
       dataHora: this.formCadastro.value.dataHora,
       idPaciente: this.formCadastro.value.idPaciente,
       idMedico: this.formCadastro.value.idMedico,
       receitas: [
         {
           medicamento: this.formCadastro.value.medicamento,
           prescricao: this.formCadastro.value.prescricao
         }
       ]
     };

     this.httpClient.post('http://localhost:8080/api/atendimentos', request, {responseType : 'text'})
       .subscribe(
         (data) => {
           this.mensagem = data;
           this.formCadastro.reset();
         },
         (e) => {
           console.log(e);
         }
       )
  }
}
