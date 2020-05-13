import { Card } from './../card';
import { ApiService } from './../../service/api-service';
import { Component, OnInit, Input } from '@angular/core';
import { NbComponentStatus } from '@nebular/theme';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'ngx-card-action-list',
  templateUrl: './card-action-list.component.html',
  styleUrls: ['./card-action-list.component.scss']
})
export class CardActionListComponent implements OnInit {

  Count: number = 0;

  Value = new Observable<string>(observer => {
    setInterval(() => observer.next(this.Count.toString()), 1);
  });

  @Input() value: string;

  constructor(private service: ApiService) { }

  ngOnInit() {
    this.refresh(this.value.toString());
  }
  refresh(oracle_id: string) {
    this.service.getCardDeckByOracleId(oracle_id).subscribe(
      cards => {
        this.Count = cards.length;
      },
    );
  }
  OnCreate(event) {
    event.rowData.id = Math.random();
    this.service.create(event.rowData).subscribe(card => {
      this.refresh(event.rowData.oracle_id);
    });
  }
  OnRemove(event) {
    if (this.Count > 0) {
      this.service.getCardDeckByOracleId(event.rowData.oracle_id).subscribe(cards => {
        this.service.remove(cards[0].id).subscribe();
        this.refresh(event.rowData.oracle_id);
      });
    }
  }
}
