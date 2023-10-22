import { CurrencyHelper } from "../helpers/CurrencyHelper";
import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan(ammount: number) {
    if (this.validateStatus()) {
      const newBalance = this.getBalance() + ammount + 10;
      const value = CurrencyHelper.fromNumberToBRL(newBalance);
      console.log(
        `${this.getName()} pegou um empréstimo de ${CurrencyHelper.fromNumberToBRL(
          ammount,
        )} (com um acréscimo especial de ${CurrencyHelper.fromNumberToBRL(
          10,
        )}), ficando com um saldo de: ${value}`,
      );
    }
  }
}
