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
  NbAccordionModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule,
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { JogadorRoutingModule } from './jogador-routing.module';
import { JogadorComponent } from './jogador.component';
import { JogadorListComponent } from './jogador-list/jogador-list.component';
import { JogadorFormComponent } from './jogador-form/jogador-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastProvider } from '../../shared/toast/toast.provider';
import { NgxMaskModule, IConfig } from 'ngx-mask';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

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
    Ng2SmartTableModule,
    NbSearchModule,
    NbAlertModule,
    NbPopoverModule,
    JogadorRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    NgxMaskModule.forRoot(maskConfigFunction),
  ],
  declarations: [
    JogadorComponent,
    JogadorListComponent,
    JogadorFormComponent,
  ],
  providers: [
    ToastProvider,
  ],
})
export class JogadorModule { }
