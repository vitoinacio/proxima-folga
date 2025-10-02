import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Feriado {
  date: string;
  name: string;
  type: string;
}

@Injectable({
  providedIn: 'root',
})
export class Api {
  private apiUrl = 'https://brasilapi.com.br/api/feriados/v1';

  constructor(private http: HttpClient) {}

  public getFeriados(ano: number): Observable<Feriado[]> {
    const url = `${this.apiUrl}/${ano}`;

    return this.http.get<Feriado[]>(url);
  }
}
