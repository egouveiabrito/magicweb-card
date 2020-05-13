import { Card } from './../card/card';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take, delay, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { ResponseCard } from '../card/pagination';

@Injectable({
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
  public getCardDeckById(id) {
    return this.http.get<Card[]>(`${this.BANCO_DADOS}/deck/${id}`).pipe(take(1));
  }
  public getCardDeckByOracleId(oracle_id): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.BANCO_DADOS}/deck?oracle_id=${oracle_id}`);
  }
  remove(id) {
    return this.http.delete(`${this.BANCO_DADOS}/deck/${id}`).pipe(take(1));
  }
}
