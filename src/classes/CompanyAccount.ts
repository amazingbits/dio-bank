import { CurrencyHelper } from "../helpers/CurrencyHelper";
import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (ammount: number): void => {
    if (this.validateStatus()) {
      const newBalance = this.getBalance() + ammount;
      const value = CurrencyHelper.fromNumberToBRL(newBalance);
      console.log(
        `${this.getName()} pegou um empréstimo de ${CurrencyHelper.fromNumberToBRL(
          ammount,
        )}, ficando com um saldo de: ${value}`,
      );
    }
  };
}
