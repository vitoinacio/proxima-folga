import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButtons, IonIcon, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { Api, Feriado } from '../services/api';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    IonButtons,
    IonIcon,
    RouterLink,
    IonButton
],
})
export class CalendarioPage implements OnInit {
  public anoSelecionado: number;
  public feriados: Feriado[] = [];

  constructor(private api: Api) {
    this.anoSelecionado = new Date().getFullYear();
  }

  ngOnInit() {
    this.buscarFeriadosDoAno();
  }

  anoAnterior() {
    this.anoSelecionado--;
    this.buscarFeriadosDoAno();
  }

  proximoAno() {
    this.anoSelecionado++;
    this.buscarFeriadosDoAno();
  }

  buscarFeriadosDoAno() {
    console.log(`Buscando feriados para o ano ${this.anoSelecionado}...`);
    this.api.getFeriados(this.anoSelecionado).subscribe((dados) => {
      this.feriados = dados;
      console.log(dados)
    });
  }
}
