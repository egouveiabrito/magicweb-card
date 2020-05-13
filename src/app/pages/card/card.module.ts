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

} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './card.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardActionListComponent } from './card-action-list/card-action-list.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { CardDeckComponent } from './card-deck/card-deck.component';

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
    CardRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    CardComponent,
    CardListComponent,
    CardActionListComponent,
    CardDeckComponent,
  ],
})
export class CardModule { }
