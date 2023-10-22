import { CurrencyHelper } from "../helpers/CurrencyHelper";

export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado com sucesso!");
  };

  getName = (): string => {
    return this.name;
  };

  getAccountNumber(): number {
    return this.accountNumber;
  }

  deposit = (ammount: number): void => {
    if (this.validateStatus()) {
      this.balance += ammount;
      const value = CurrencyHelper.fromNumberToBRL(this.balance);
      console.log(
        `${this.name} fez um depósito de ${CurrencyHelper.fromNumberToBRL(
          ammount,
        )}, ficando com um saldo de: ${value}`,
      );
    }
  };

  withdraw = (ammount: number): void => {
    if (this.validateStatus()) {
      if (this.balance - ammount < 0) {
        console.log("Você não possui saldo suficiente para o saque");
      } else {
        this.balance -= ammount;
        const value = CurrencyHelper.fromNumberToBRL(this.balance);
        console.log(
          `${this.name} fez um saque de ${CurrencyHelper.fromNumberToBRL(
            ammount,
          )}, ficando com um saldo de: ${value}`,
        );
      }
    }
  };

  getBalance = (): number => {
    return this.balance;
  };

  setBalance = (ammount: number): void => {
    this.balance = ammount;
  };

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
