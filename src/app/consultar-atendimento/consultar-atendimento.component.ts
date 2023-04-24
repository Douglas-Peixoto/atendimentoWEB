import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consultar-atendimento',
  templateUrl: './consultar-atendimento.component.html',
  styleUrls: ['./consultar-atendimento.component.css']
})
export class ConsultarAtendimentoComponent implements OnInit{

atendimentos: any[] = [];

constructor(
  private httpClient: HttpClient
) {}

  ngOnInit(): void {

    this.httpClient.get('http://localhost:8080/api/atendimentos')
      .subscribe(
        (data) => {
          this.atendimentos = data as any[];
        },
        (e) => {
          console.log(e);
        }
      )
  }
}
