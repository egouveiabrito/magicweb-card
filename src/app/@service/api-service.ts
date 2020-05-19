import { Jogador } from './../pages/jogador';
import { Address } from './../entity/address';
import { Card } from './../../app/pages/card/card';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { ResponseCard } from '../pages/card/pagination';
import { take, delay } from 'rxjs/operators';

@Injectable({
  // tslint:disable-next-line: trailing-comma
  providedIn: 'root'
})

export class ApiService {

  private readonly API = environment.API_MAGIC;

  private readonly BANCO_DADOS = environment.BANCO_DADOS;

  constructor(private httpClient: HttpClient) { }

  public getCards(search: string): Observable<ResponseCard> {
    return this.httpClient.get<ResponseCard>(`${this.API}/cards/search?q=${search}`).pipe(delay(1000)).pipe(take(1));
  }



  // tslint:disable-next-line: comment-format
  //Banco de dados.
  public create(card: Card) {
    return this.httpClient.post(`${this.BANCO_DADOS}/deck`, card).pipe(take(1));
  }
  public update(card) {
    return this.httpClient.put(`${this.BANCO_DADOS}/deck/${card.id}`, card).pipe(take(1));
  }
  public getCardDeckById(id): Observable<Card> {
    return this.httpClient.get<Card>(`${this.BANCO_DADOS}/deck/${id}`).pipe(take(1));
  }
  public getDeck() {
    return this.httpClient.get<Card[]>(`${this.BANCO_DADOS}/deck`).pipe(take(1));
  }
  remove(id) {
    return this.httpClient.delete(`${this.BANCO_DADOS}/deck/${id}`).pipe(take(1));
  }




  createJogador(jogador: Jogador) {
    return this.httpClient.post(`${this.BANCO_DADOS}/jogador`, jogador).pipe(take(1));
  }
  public updateJogador(jogador: Jogador) {
    return this.httpClient.put(`${this.BANCO_DADOS}/jogador/${jogador.id}`, jogador).pipe(take(1));
  }
  public getJogador(email): Observable<Jogador> {
    return this.httpClient.get<Jogador>(`${this.BANCO_DADOS}/Jogador?email=${email}`).pipe(take(1));
  }
  public getAllJogador(): Observable<Jogador[]> {
    return this.httpClient.get<Jogador[]>(`${this.BANCO_DADOS}/Jogador`).pipe(take(1));
  }
  public getJogadorByName(name: string): Observable<Jogador[]> {
    return this.httpClient.get<Jogador[]>(`${this.BANCO_DADOS}/Jogador?q=${name}`).pipe(take(1));
  }
  public getJogadorById(id): Observable<Jogador> {
    return this.httpClient.get<Jogador>(`${this.BANCO_DADOS}/Jogador?id=${id}`).pipe(take(1));
  }
  public saveJogador(jogador: Jogador) {
    if (jogador.id > 0)
      return this.updateJogador(jogador);
    else
      return this.createJogador(jogador);
  }

  // tslint:disable-next-line: comment-format
  //Correios.
  public getAddress(cep: any): Observable<Address> {
    let address: Address;
    return new Observable((x) => {
      const request = new XMLHttpRequest();
      request.open('get', `https://viacep.com.br/ws/${cep}/json/`, true);
      request.send();
      request.onload = function () {
        address = JSON.parse(this.response);
        x.next(address);
      };
    });
  }
}
