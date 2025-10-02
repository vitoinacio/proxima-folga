import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonLabel,
  IonItem,
  IonList,
  IonIcon,
  IonNote,
  IonText,
  IonButton,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { Api, Feriado } from '../services/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,

    IonContent,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonLabel,
    IonItem,
    IonList,
    IonIcon,
    IonNote,
    IonText,
    IonButton,

    RouterLink,
  ],
})
export class HomePage implements OnInit {
  proximoFeriado?: Feriado;
  proximosFeriados: Feriado[] = [];
  ano = new Date().getFullYear();
  dataAtual = new Date().toISOString().slice(0, 10);

  constructor(private api: Api) {}

  ngOnInit() {
    this.api.getFeriados(this.ano).subscribe((dados) => {
      const feriadosFuturos = dados.filter(
        (feriado) => feriado.date >= this.dataAtual
      );
      this.proximoFeriado = feriadosFuturos[0];
      this.proximosFeriados = feriadosFuturos.slice(1, 3);
    });
  }
}
