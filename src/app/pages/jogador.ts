import { Address } from './../entity/address';
export class Jogador {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public estilo: string,
    public address: Address,
  ) { }
}
