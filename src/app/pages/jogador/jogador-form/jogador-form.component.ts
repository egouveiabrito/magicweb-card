import { ToastProvider } from './../../../shared/toast/toast.provider';
import { Address } from './../../../entity/address';
import { ApiService } from './../../../@service/api-service';
import { Jogador } from './../../jogador';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

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
  formatos: String[];

  model = new Jogador(null, null, null, null, null);
  address = new Address(null, null, null, null, null, null);

  constructor(private fb: FormBuilder,
    private service: ApiService,
    private toast: ToastProvider,
    private route: ActivatedRoute) {

    this.firstForm = this.fb.group({
      id: 0,
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
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
  ngOnInit(): void {
    this.getUfs();
    this.getFormatos();
    this.IsEdit(this.route.snapshot.paramMap.get('id'));
  }
  getUfs() {
    this.ufs = ['RJ', 'SP', 'BA', 'BH', 'ES', 'RO', 'AM'];
  }
  getFormatos() {
    this.formatos = ['Padrão', 'Pioneer', 'Commander', 'Moderno'];
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
   this.model.address = this.address;
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
          this.FillJogador(jogadores[0]);
          this.FillAddress(jogadores[0].address);
          this.toast.showToast(this.toast.warning, 'player already has registration!', '');
        }
      },
      erro => console.error(erro),
    );

  }
  OnSearchCep() {
    this.service.getAddress(this.address.cep).subscribe(address => {
      this.FillAddress(address);
    });
  }
  GetJogadorById(id) {
    this.service.getJogadorById(id).subscribe(
      jogadores => {
        if (jogadores[0] !== undefined) {
          console.info(jogadores[0]);
          this.FillJogador(jogadores[0]);
          this.FillAddress(jogadores[0].address);
          this.toast.showToast(this.toast.warning, 'player already has registration!', '');
        }
      },
      erro => console.error(erro),
    );
  }
  IsEdit(id) {
    if (id !== undefined)
      this.GetJogadorById(id);
  }
  FillJogador(jogador) {
    this.model = jogador;
    this.firstForm.patchValue({
      id: this.model.id,
      name: this.model.name,
      email: this.model.email,
      estilo: this.model.estilo,
    });
  }
  FillAddress(address: Address) {
    this.address = address;
    this.secondForm.patchValue({
      cep: this.address.cep,
      localidade: this.address.localidade,
      uf: this.address.uf,
      bairro: this.address.bairro,
      complemento: this.address.complemento,
      logradouro: this.address.logradouro,
    });
  }

}
