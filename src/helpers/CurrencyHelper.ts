export class CurrencyHelper {
  public static fromNumberToBRL(ammount: number): string {
    return ammount.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
}
