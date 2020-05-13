import { CardActionListComponent } from './../card-action-list/card-action-list.component';
import { Card } from './../card';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../@service/api-service';
import { NbSearchService } from '@nebular/theme';

@Component({
  selector: 'ngx-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {

  search: string;

  source: Card[];

  settings = {
    actions: { add: false, edit: false, delete: false },
    columns: {
      id: {
        filter: false,
        title: 'Action',
        type: 'custom',
        valuePrepareFunction: (id: string) => {
          return id;
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
  constructor(private service: ApiService, private searchService: NbSearchService) {
    this.searchService.onSearchSubmit()
      .subscribe((search: any) => {
        this.search = search.term;
        this.OnSearch();
     });
   }

  ngOnInit(): void {
  }
  OnSearch() {
    const cards$ = this.service.getCards(this.search);
    cards$.subscribe(
      cards => {
        this.source = this.addImages(cards.data);
      });
  }
  addImages(cards) {
    cards.forEach(card => {
      card.image = card.image_uris !== undefined ? card.image_uris.small : null;
      card.count = 0;
    });
    return cards;
  }
}
