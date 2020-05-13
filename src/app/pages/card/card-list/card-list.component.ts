import { CardActionListComponent } from './../card-action-list/card-action-list.component';
import { Card } from './../card';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api-service';

@Component({
  selector: 'ngx-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {

  source: Card[];

  settings = {
    actions: { add: false, edit: false, delete: false },
    columns: {
      oracle_id: {
        title: 'ID',
        type: 'custom',
        valuePrepareFunction: (oracle_id) => {
          return oracle_id;
        },
        renderComponent: CardActionListComponent,
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
    this.OnSearch();
  }

  OnSearch() {
    const cards$ = this.service.getCards('chandra');
    cards$.subscribe(
      cards => {
        this.source = this.addImages(cards.data);
      });
  }
  addImages(cards) {
    cards.forEach(card => {
      card.image = card.image_uris !== undefined ? card.image_uris.small : null;
    });
    return cards;
  }
}
