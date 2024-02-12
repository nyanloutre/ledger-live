import CosmosBase from "./cosmosBase";

class Celestia extends CosmosBase {
  stakingDocUrl: string;
  unbondingPeriod: number;
  prefix: string;
  validatorPrefix: string;
  // Provided by coin config
  ledgerValidator!: string;
  lcd!: string;
  constructor() {
    super();
    this.stakingDocUrl = "https://support.ledger.com/hc/en-us/articles/9603789661085?support=true";
    this.unbondingPeriod = 21;
    this.prefix = "celestia";
    this.validatorPrefix = `${this.prefix}valoper`;
  }
}

export default Celestia;
