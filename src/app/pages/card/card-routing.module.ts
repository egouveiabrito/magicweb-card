import { CardComponent } from './card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from '../card/card-list/card-list.component';
import { CardDeckComponent } from '../card/card-deck/card-deck.component';

const routes: Routes = [
  {
    path: '',
    component: CardComponent,
    children: [
      {
        path: '',
        component: CardListComponent,
      },
      {
        path: 'deck',
        component: CardDeckComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class CardRoutingModule {
}

