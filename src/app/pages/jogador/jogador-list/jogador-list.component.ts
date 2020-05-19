import { JogadorActionListComponent } from './../jogador-action-list/jogador-action-list.component';
import { Jogador } from './../../jogador';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../@service/api-service';
import { NbSearchService } from '@nebular/theme';

@Component({
  selector: 'ngx-jogador-list',
  templateUrl: './jogador-list.component.html',
  styleUrls: ['./jogador-list.component.scss'],
})
export class JogadorListComponent implements OnInit {

  search: string;

  source: Jogador[];

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
        renderComponent: JogadorActionListComponent,
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      estilo: {
        title: 'Formato',
        type: 'string',
      },
    },
  };

  constructor(
    private service: ApiService
    , private searchService: NbSearchService,
  ) {
    this.searchService.onSearchSubmit()
      .subscribe((search: any) => {
        this.search = search.term;
        this.OnSearch();
      });
  }

  ngOnInit(): void {
    this.OnAll();
  }


  OnAll() {
    const jogadores$ = this.service.getAllJogador();
    jogadores$.subscribe(
      jogadores => {
        this.source = jogadores;
      });
  }

  OnSearch() {
    const jogadores$ = this.service.getJogadorByName(this.search);
    jogadores$.subscribe(
      jogadores => {
        this.source = jogadores;
      });
  }
}
