import { JogadorComponent } from './jogador.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JogadorListComponent } from '../jogador/jogador-list/jogador-list.component';
import { JogadorFormComponent } from '../jogador/jogador-form/jogador-form.component';

const routes: Routes = [
  {
    path: '',
    component: JogadorComponent,
    children: [
      {
        path: 'list',
        component: JogadorListComponent,
      },
      {
        path: 'form',
        component: JogadorFormComponent,
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
export class JogadorRoutingModule {
}

