const unitPool = [
  { name: 'axe', remaining: 45, cost: 1 },
  { name: 'enchantress', remaining: 45, cost: 1 },
  { name: 'ogremagi', remaining: 45, cost: 1 },
  { name: 'tusk', remaining: 45, cost: 1 },
  { name: 'drowranger', remaining: 45, cost: 1 },
  { name: 'bountyhunter', remaining: 45, cost: 1 },
  { name: 'clockwerk', remaining: 45, cost: 1 },
  { name: 'shadowshaman', remaining: 45, cost: 1 },
  { name: 'batrider', remaining: 45, cost: 1 },
  { name: 'tinker', remaining: 45, cost: 1 },
  { name: 'antimage', remaining: 45, cost: 1 },
  { name: 'tiny', remaining: 45, cost: 1 },
  { name: 'mars', remaining: 45, cost: 1 },
  { name: 'winterwyvern', remaining: 45, cost: 1 },
  { name: 'crystalmaiden', remaining: 30, cost: 2 },
  { name: 'beastmaster', remaining: 30, cost: 2 },
  { name: 'juggernaut', remaining: 30, cost: 2 },
  { name: 'timbersaw', remaining: 30, cost: 2 },
  { name: 'queenofpain', remaining: 30, cost: 2 },
  { name: 'puck', remaining: 30, cost: 2 },
  { name: 'witchdoctor', remaining: 30, cost: 2 },
  { name: 'slardar', remaining: 30, cost: 2 },
  { name: 'chaosknight', remaining: 30, cost: 2 },
  { name: 'morphling', remaining: 30, cost: 2 },
  { name: 'luna', remaining: 30, cost: 2 },
  { name: 'furion', remaining: 30, cost: 2 },
  { name: 'mirana', remaining: 30, cost: 2 },
  { name: 'lich', remaining: 30, cost: 2 },
  { name: 'lycan', remaining: 25, cost: 3 },
  { name: 'venomancer', remaining: 25, cost: 3 },
  { name: 'omniknight', remaining: 25, cost: 3 },
  { name: 'razor', remaining: 25, cost: 3 },
  { name: 'windranger', remaining: 25, cost: 3 },
  { name: 'phantomassassin', remaining: 25, cost: 3 },
  { name: 'treantprotector', remaining: 25, cost: 3 },
  { name: 'abaddon', remaining: 25, cost: 3 },
  { name: 'sniper', remaining: 25, cost: 3 },
  { name: 'terrorblade', remaining: 25, cost: 3 },
  { name: 'viper', remaining: 25, cost: 3 },
  { name: 'shadowfiend', remaining: 25, cost: 3 },
  { name: 'lina', remaining: 25, cost: 3 },
  { name: 'dazzle', remaining: 25, cost: 3 },
  { name: 'doom', remaining: 15, cost: 4 },
  { name: 'kunkka', remaining: 15, cost: 4 },
  { name: 'trollwarlord', remaining: 15, cost: 4 },
  { name: 'keeperofthelight', remaining: 15, cost: 4 },
  { name: 'necrophos', remaining: 15, cost: 4 },
  { name: 'templarassassin', remaining: 15, cost: 4 },
  { name: 'alchemist', remaining: 15, cost: 4 },
  { name: 'disruptor', remaining: 15, cost: 4 },
  { name: 'medusa', remaining: 15, cost: 4 },
  { name: 'dragonknight', remaining: 15, cost: 4 },
  { name: 'lonedruid', remaining: 15, cost: 4 },
  { name: 'gyrocopter', remaining: 10, cost: 5 },
  { name: 'tidehunter', remaining: 10, cost: 5 },
  { name: 'enigma', remaining: 10, cost: 5 },
  { name: 'techies', remaining: 10, cost: 5 },
  { name: 'deathprophet', remaining: 10, cost: 5 },
  { name: 'zeus', remaining: 10, cost: 5 },
]

export default unitPool;

const chancesPerLevel = {
  1: { 1: 1, 2: .00, 3: .00, 4: .00, 5: .00 },
  2: { 1: .70, 2: .30, 3: .00, 4: .00, 5: .00 },
  3: { 1: .60, 2: .35, 3: .05, 4: .00, 5: .00 },
  4: { 1: .50, 2: .35, 3: .15, 4: .00, 5: .00 },
  5: { 1: .40, 2: .35, 3: .23, 4: .02, 5: .00 },
  6: { 1: .33, 2: .30, 3: .30, 4: .07, 5: .00 },
  7: { 1: .30, 2: .30, 3: .30, 4: .10, 5: .00 },
  8: { 1: .24, 2: .30, 3: .30, 4: .15, 5: .01 },
  9: { 1: .22, 2: .30, 3: .25, 4: .20, 5: .03 },
  10: { 1: .19, 2: .25, 3: .25, 4: .25, 5: .06 }
}

class Pool {
  constructor(level = 8, excludedPieces = []) {
    this.pieces = [
      { name: 'axe', remaining: 45, cost: 1 },
      { name: 'enchantress', remaining: 45, cost: 1 },
      { name: 'ogremagi', remaining: 45, cost: 1 },
      { name: 'tusk', remaining: 45, cost: 1 },
      { name: 'drowranger', remaining: 45, cost: 1 },
      { name: 'bountyhunter', remaining: 45, cost: 1 },
      { name: 'clockwerk', remaining: 45, cost: 1 },
      { name: 'shadowshaman', remaining: 45, cost: 1 },
      { name: 'batrider', remaining: 45, cost: 1 },
      { name: 'tinker', remaining: 45, cost: 1 },
      { name: 'antimage', remaining: 45, cost: 1 },
      { name: 'tiny', remaining: 45, cost: 1 },
      { name: 'mars', remaining: 45, cost: 1 },
      { name: 'crystalmaiden', remaining: 30, cost: 2 },
      { name: 'beastmaster', remaining: 30, cost: 2 },
      { name: 'juggernaut', remaining: 30, cost: 2 },
      { name: 'timbersaw', remaining: 30, cost: 2 },
      { name: 'queenofpain', remaining: 30, cost: 2 },
      { name: 'puck', remaining: 30, cost: 2 },
      { name: 'witchdoctor', remaining: 30, cost: 2 },
      { name: 'slardar', remaining: 30, cost: 2 },
      { name: 'chaosknight', remaining: 30, cost: 2 },
      { name: 'morphling', remaining: 30, cost: 2 },
      { name: 'luna', remaining: 30, cost: 2 },
      { name: 'furion', remaining: 30, cost: 2 },
      { name: 'mirana', remaining: 30, cost: 2 },
      { name: 'lich', remaining: 30, cost: 2 },
      { name: 'lycan', remaining: 25, cost: 3 },
      { name: 'venomancer', remaining: 25, cost: 3 },
      { name: 'omniknight', remaining: 25, cost: 3 },
      { name: 'razor', remaining: 25, cost: 3 },
      { name: 'windranger', remaining: 25, cost: 3 },
      { name: 'phantomassassin', remaining: 25, cost: 3 },
      { name: 'treantprotector', remaining: 25, cost: 3 },
      { name: 'abaddon', remaining: 25, cost: 3 },
      { name: 'sniper', remaining: 25, cost: 3 },
      { name: 'terrorblade', remaining: 25, cost: 3 },
      { name: 'viper', remaining: 25, cost: 3 },
      { name: 'shadowfiend', remaining: 25, cost: 3 },
      { name: 'lina', remaining: 25, cost: 3 },
      { name: 'dazzle', remaining: 25, cost: 3 },
      { name: 'doom', remaining: 15, cost: 4 },
      { name: 'kunkka', remaining: 15, cost: 4 },
      { name: 'trollwarlord', remaining: 15, cost: 4 },
      { name: 'keeperofthelight', remaining: 15, cost: 4 },
      { name: 'necrophos', remaining: 15, cost: 4 },
      { name: 'templarassassin', remaining: 15, cost: 4 },
      { name: 'alchemist', remaining: 15, cost: 4 },
      { name: 'disruptor', remaining: 15, cost: 4 },
      { name: 'medusa', remaining: 15, cost: 4 },
      { name: 'dragonknight', remaining: 15, cost: 4 },
      { name: 'lonedruid', remaining: 15, cost: 4 },
      { name: 'gyrocopter', remaining: 10, cost: 5 },
      { name: 'tidehunter', remaining: 10, cost: 5 },
      { name: 'enigma', remaining: 10, cost: 5 },
      { name: 'techies', remaining: 10, cost: 5 },
      { name: 'deathprophet', remaining: 10, cost: 5 },
      { name: 'zeus', remaining: 10, cost: 5 },
    ]
    this.chancesPerLevel = {
      1: { 1: 1, 2: .00, 3: .00, 4: .00, 5: .00 },
      2: { 1: .70, 2: .30, 3: .00, 4: .00, 5: .00 },
      3: { 1: .60, 2: .35, 3: .05, 4: .00, 5: .00 },
      4: { 1: .50, 2: .35, 3: .15, 4: .00, 5: .00 },
      5: { 1: .40, 2: .35, 3: .23, 4: .02, 5: .00 },
      6: { 1: .33, 2: .30, 3: .30, 4: .07, 5: .00 },
      7: { 1: .30, 2: .30, 3: .30, 4: .10, 5: .00 },
      8: { 1: .24, 2: .30, 3: .30, 4: .15, 5: .01 },
      9: { 1: .22, 2: .30, 3: .25, 4: .20, 5: .03 },
      10: { 1: .19, 2: .25, 3: .25, 4: .25, 5: .06 }
    }
    this.level = level;
    this.excludedPieces = excludedPieces;
    this.lastRoll = [];
  }

  removePiece(name, amount = 1) {
    this.pieces[name] -= amount;
  }

  setPieceAmount(name, amount) {
    this.pieces[name] = amount;
  }

  changeLevel(level = 8) {
    if (level >= 1 && level <= 10) {
      this.level = level;
    }
  }

  rollOne() {
    const self = this;
    function getUnitCost() {
      let ranNum = Math.random();
      const chances = self.chancesPerLevel[self.level];

      for (let i = 1; i <= 5; i++) {
        if (ranNum <= chances[i]) {
          return i;
        }
        ranNum -= chances[i];
      }
    }

    const isIo = Math.random() <= 0.003;
    if (isIo) return { name: 'io', remaining: 0, cost: 5 };

    const unitCost = getUnitCost();
    let unitPoolPerCost = this.pieces.filter(piece => piece.cost === unitCost);
    unitPoolPerCost = unitPoolPerCost.filter(piece => !this.excludedPieces.includes(piece.name))

    const totalUnitsPerCost = unitPoolPerCost.reduce((acc, piece) => acc + piece.remaining, 0)

    let unitCounter = Math.floor(Math.random() * totalUnitsPerCost);

    for (let i = 0; i < unitPoolPerCost.length; i++) {
      if (unitCounter < unitPoolPerCost[i].remaining) {
        return unitPoolPerCost[i];
      }
      unitCounter -= unitPoolPerCost[i].remaining
    }
  }

  rollTwenty() {
    for (let i = 0; i < 20; i++) {
      console.log(this.rollOne());
    }
  }
}
