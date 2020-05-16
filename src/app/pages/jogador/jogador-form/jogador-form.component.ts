import { ToastProvider } from './../../../shared/toast/toast.provider';
import { Address } from './../../../entity/address';
import { ApiService } from './../../../@service/api-service';
import { Jogador } from './../../jogador';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'ngx-jogador-form',
  templateUrl: './jogador-form.component.html',
  styleUrls: ['./jogador-form.component.scss'],
  preserveWhitespaces: true,
})
export class JogadorFormComponent implements OnInit {

  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;

  ufs: String[];


  model = new Jogador(null, null, null, null, null);
  address = new Address(null, null, null, null, null, null);

  constructor(private fb: FormBuilder, private service: ApiService, private toast: ToastProvider) {
    this.firstForm = this.fb.group({
      id: 0,
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      // tslint:disable-next-line: max-line-length
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    });

    this.secondForm = this.fb.group({
      cep: ['', [Validators.required, Validators.minLength(9)]],
      localidade: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      uf: [''],
      bairro: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      logradouro: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      complemento: '',
    });

    this.thirdForm = this.fb.group({
      estilo: [''],
    });
  }
  getUfs() {
    this.ufs = ['PE', 'RJ', 'SP', 'BA', 'BH', 'ES', 'RO', 'AM'];
  }
  ngOnInit(): void {
    this.getUfs();
    console.info(this.ufs);
  }
  OnFirstSubmit() {
    this.firstForm.markAsDirty();
  }
  OnSecondSubmit() {
    this.secondForm.markAsDirty();
  }
  OnThirdSubmit() {
    this.thirdForm.markAsDirty();
  }
  OnSave() {
    // tslint:disable-next-line: no-console
    console.info(this.model);
    this.service.saveJogador(this.model).subscribe(
      success => this.toast.showToast(this.toast.success, 'Player registered!', ''),
      erro => console.error(erro),
    );
  }
  OnSearchJogador() {
    this.service.getJogador(this.model.email).subscribe(
      jogadores => {
        if (jogadores[0] !== undefined) {
          console.info(jogadores[0]);
          this.fillJogador(jogadores[0]);
          this.fillAddress(jogadores[0].address);
          this.toast.showToast(this.toast.warning, 'player already has registration!', '');
        }
      },
      erro => console.error(erro),
    );

  }
  OnSearchCep() {
    this.service.getAddress(this.address.cep).subscribe(address => {
      this.fillAddress(address);
    });
  }
  fillJogador(jogador) {
    this.model = jogador;
    this.firstForm.patchValue({
      id: this.model.id,
      name: this.model.name,
      email: this.model.email,
      estilo: this.model.estilo,
    });
  }
  fillAddress(address: Address) {
    this.model.address = address;
    this.secondForm.patchValue({
      cep: this.model.address.cep,
      localidade: this.model.address.localidade,
      uf: this.model.address.uf,
      bairro: this.model.address.bairro,
      complemento: this.model.address.complemento,
      logradouro: this.model.address.logradouro,
    });
  }

}
