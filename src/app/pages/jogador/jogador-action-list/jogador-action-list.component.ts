import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-jogador-action-list',
  templateUrl: './jogador-action-list.component.html',
  styleUrls: ['./jogador-action-list.component.scss'],
})
export class JogadorActionListComponent implements OnInit {

  @Input() value: string;

  constructor(private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }
  OnEdit(event) {
    this.router.navigate(['editar', event.value], { relativeTo: this.route });
  }

}
