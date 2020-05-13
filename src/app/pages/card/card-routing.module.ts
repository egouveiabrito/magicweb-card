import { CardComponent } from './card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from '../card/card-list/card-list.component';

const routes: Routes = [
  {
    path: '',
    component: CardComponent,
    children: [
      {
        path: 'list',
        component: CardListComponent,
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

