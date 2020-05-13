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

  constructor(private http: HttpClient) { }

  public getCards(search: string): Observable<ResponseCard> {
    return this.http.get<ResponseCard>(`${this.API}/cards/search?q=${search}`).pipe(delay(1000)).pipe(take(1));
  }
  public create(card: Card) {
    return this.http.post(`${this.BANCO_DADOS}/deck`, card).pipe(take(1));
  }
  public update(card) {
    return this.http.put(`${this.BANCO_DADOS}/deck/${card.id}`, card).pipe(take(1));
  }
  public getCardDeckById(id): Observable<Card> {
    return this.http.get<Card>(`${this.BANCO_DADOS}/deck/${id}`).pipe(take(1));
  }
  public getDeck() {
    return this.http.get<Card[]>(`${this.BANCO_DADOS}/deck`).pipe(take(1));
  }
  remove(id) {
    return this.http.delete(`${this.BANCO_DADOS}/deck/${id}`).pipe(take(1));
  }
}
