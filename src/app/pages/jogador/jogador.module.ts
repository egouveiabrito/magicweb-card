import { NgModule } from '@angular/core';

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbSearchModule,
  NbAlertModule,
  NbPopoverModule,

} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { JogadorRoutingModule } from './jogador-routing.module';
import { JogadorComponent } from './jogador.component';
import { JogadorListComponent } from './jogador-list/jogador-list.component';
import { JogadorFormComponent } from './jogador-form/jogador-form.component';
import { FormsModule as ngFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    Ng2SmartTableModule,
    NbSearchModule,
    NbAlertModule,
    NbPopoverModule,
    JogadorRoutingModule,
  ],
  declarations: [
    JogadorComponent,
    JogadorListComponent,
    JogadorFormComponent,
  ],
})
export class JogadorModule { }
