import { Card } from './../card';
import { ApiService } from '../../../@service/api-service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'ngx-card-action-list',
  templateUrl: './card-action-list.component.html',
  styleUrls: ['./card-action-list.component.scss'],
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
  refresh(id) {
    this.service.getCardDeckById(id).subscribe(
      card => this.Count = card.count,
    );
  }
  OnCreate(event) {
    event.rowData.count += 1;
    this.service.getCardDeckById(event.rowData.id).subscribe(
      success => {
        this.service.update(event.rowData).subscribe(card => {
          this.Count = event.rowData.count;
        });
      },
      notExist => {
        this.service.create(event.rowData).subscribe(card => {
          this.Count = event.rowData.count;
        });
      },
    );
  }
  OnRemove(event) {
    if (event.Count === 0) return;
    event.rowData.count = event.Count - 1;
    this.Count = event.rowData.count;
    if (event.rowData.count <= 0) {
      this.service.remove(event.rowData.id).subscribe();
    } else {
      this.service.update(event.rowData).subscribe();
    }
  }
}
