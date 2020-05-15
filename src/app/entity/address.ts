// tslint:disable-next-line: one-line
export class Address {
  constructor(
    public bairro: string,
    public cep: string,
    public complemento: string,
    public localidade: string,
    public uf: string,
    public logradouro: string,
  ) { }
}
