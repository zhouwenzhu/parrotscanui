export class Token {
  constructor({
    address,
    name,
    symbol,
    decimals,
    icon,
    contract,
  }) {
    this.address = address;
    this.name = name;
    this.symbol = symbol;
    this.decimals = parseInt(decimals);
    this.icon = icon;
    this.contract = contract;

    if (!this.contract) {
      this.isNative = true;
    }
  }
}
