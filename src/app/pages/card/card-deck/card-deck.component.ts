import { Card } from './../card';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../@service/api-service';

@Component({
  selector: 'ngx-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.scss'],
})
export class CardDeckComponent implements OnInit {

  source: Card[];

  settings = {
    actions: { add: false, edit: false, delete: false },
    columns: {
      count: {
        title: 'Count',
        type: 'string',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      lang: {
        title: 'Lang',
        type: 'string',
      },
      oracle_text: {
        title: 'Description',
        type: 'string',
      },
      image: {
        title: 'Lang',
        type: 'html',
        valuePrepareFunction: (image) => {
          return image !== null ? `<img src="${image}}" >` : 'NOT IMAGE';
        },
      },
    },
  };

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.OnDeck();
  }
  OnDeck() {
    const cards$ = this.service.getDeck();
    cards$.subscribe(
      cards => {
        this.source = this.addImages(cards);
      });
  }
  addImages(cards) {
    cards.forEach(card => {
      card.image = card.image_uris !== undefined ? card.image_uris.small : null;
    });
    return cards;
  }
}
