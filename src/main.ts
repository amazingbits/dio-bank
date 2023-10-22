import { CompanyAccount } from "./classes/CompanyAccount";
import { NewAccount } from "./classes/NewAccount";
import { PeopleAccount } from "./classes/PeopleAccount";
import { CurrencyHelper } from "./helpers/CurrencyHelper";

// Marcos da Silva
// Conta de Pessoa Física comum
// Conta: 551045
// Saldo: R$ 5.000,00
const marcosDaSilva = new PeopleAccount(1, "Marcos da Silva", 551045);
marcosDaSilva.setBalance(5000);

console.log(`[CONTA COMUM DE PESSOA FÍSICA]`);
console.log(`Nome: ${marcosDaSilva.getName()}`);
console.log(`Número da conta: ${marcosDaSilva.getAccountNumber()}`);
console.log(
  `Saldo inicial: ${CurrencyHelper.fromNumberToBRL(
    marcosDaSilva.getBalance(),
  )}`,
);

// Depositando R$ 500,00
marcosDaSilva.deposit(500);

// Sacando R$ 2.500,00
marcosDaSilva.withdraw(2500);

// Imprimindo informações de Marcos da Silva
console.log(
  `${marcosDaSilva.getName()} possui um saldo final de ${CurrencyHelper.fromNumberToBRL(
    marcosDaSilva.getBalance(),
  )}`,
);

// Júlia Batista
// Conta de Pessoa Física especial
// Conta: 551050
// Saldo: R$ 10.000,00
const juliaBatista = new NewAccount("Júlia Batista", 551050);
juliaBatista.setBalance(10000);

console.log("---");
console.log(`[CONTA COMUM DE PESSOA FÍSICA ESPECIAL]`);
console.log(`Nome: ${juliaBatista.getName()}`);
console.log(`Número da conta: ${juliaBatista.getAccountNumber()}`);
console.log(
  `Saldo inicial: ${CurrencyHelper.fromNumberToBRL(juliaBatista.getBalance())}`,
);

// Depositando R$ 200,00
juliaBatista.deposit(200);

// Sacando R$ 5.800,00
juliaBatista.withdraw(5800);

// Empréstimo de R$ 1.000,00
juliaBatista.getLoan(1000);

// Imprimindo informações de Júlia Batista
console.log(
  `${juliaBatista.getName()} possui um saldo final de ${CurrencyHelper.fromNumberToBRL(
    juliaBatista.getBalance(),
  )}`,
);

// Empresa X-Motors
// Conta de Pessoa Jurídica
// Conta: 551000
// Saldo: R$ 50.000,00
const xMotors = new CompanyAccount("X-Motors", 551000);
xMotors.setBalance(50000);

console.log("---");
console.log(`[CONTA COMUM DE PESSOA JURÍDICA]`);
console.log(`Nome: ${xMotors.getName()}`);
console.log(`Número da conta: ${xMotors.getAccountNumber()}`);
console.log(
  `Saldo inicial: ${CurrencyHelper.fromNumberToBRL(xMotors.getBalance())}`,
);

// Depositando R$ 10.000,00
xMotors.deposit(10000);

// Sacando R$ 45.000,00
xMotors.withdraw(45000);

// Empréstimo de R$ 25.400,00
xMotors.getLoan(25400);

// Imprimindo informações de X-Motors
console.log(
  `${xMotors.getName()} possui um saldo final de ${CurrencyHelper.fromNumberToBRL(
    xMotors.getBalance(),
  )}`,
);
