const unitPool = [
  { name: 'axe', count: 45, cost: 1 },
  { name: 'enchantress', count: 45, cost: 1 },
  { name: 'ogremagi', count: 45, cost: 1 },
  { name: 'tusk', count: 45, cost: 1 },
  { name: 'drowranger', count: 45, cost: 1 },
  { name: 'bountyhunter', count: 45, cost: 1 },
  { name: 'clockwerk', count: 45, cost: 1 },
  { name: 'shadowshaman', count: 45, cost: 1 },
  { name: 'batrider', count: 45, cost: 1 },
  { name: 'tinker', count: 45, cost: 1 },
  { name: 'antimage', count: 45, cost: 1 },
  { name: 'tiny', count: 45, cost: 1 },
  { name: 'mars', count: 45, cost: 1 },
  { name: 'winterwyvern', count: 45, cost: 1 },
  { name: 'crystalmaiden', count: 30, cost: 2 },
  { name: 'beastmaster', count: 30, cost: 2 },
  { name: 'juggernaut', count: 30, cost: 2 },
  { name: 'timbersaw', count: 30, cost: 2 },
  { name: 'queenofpain', count: 30, cost: 2 },
  { name: 'puck', count: 30, cost: 2 },
  { name: 'witchdoctor', count: 30, cost: 2 },
  { name: 'slardar', count: 30, cost: 2 },
  { name: 'chaosknight', count: 30, cost: 2 },
  { name: 'morphling', count: 30, cost: 2 },
  { name: 'luna', count: 30, cost: 2 },
  { name: 'furion', count: 30, cost: 2 },
  { name: 'mirana', count: 30, cost: 2 },
  { name: 'lich', count: 30, cost: 2 },
  { name: 'lycan', count: 25, cost: 3 },
  { name: 'venomancer', count: 25, cost: 3 },
  { name: 'omniknight', count: 25, cost: 3 },
  { name: 'razor', count: 25, cost: 3 },
  { name: 'windranger', count: 25, cost: 3 },
  { name: 'phantomassassin', count: 25, cost: 3 },
  { name: 'treantprotector', count: 25, cost: 3 },
  { name: 'abaddon', count: 25, cost: 3 },
  { name: 'sniper', count: 25, cost: 3 },
  { name: 'terrorblade', count: 25, cost: 3 },
  { name: 'viper', count: 25, cost: 3 },
  { name: 'shadowfiend', count: 25, cost: 3 },
  { name: 'lina', count: 25, cost: 3 },
  { name: 'dazzle', count: 25, cost: 3 },
  { name: 'doom', count: 15, cost: 4 },
  { name: 'kunkka', count: 15, cost: 4 },
  { name: 'trollwarlord', count: 15, cost: 4 },
  { name: 'keeperofthelight', count: 15, cost: 4 },
  { name: 'necrophos', count: 15, cost: 4 },
  { name: 'templarassassin', count: 15, cost: 4 },
  { name: 'alchemist', count: 15, cost: 4 },
  { name: 'disruptor', count: 15, cost: 4 },
  { name: 'medusa', count: 15, cost: 4 },
  { name: 'dragonknight', count: 15, cost: 4 },
  { name: 'lonedruid', count: 15, cost: 4 },
  { name: 'gyrocopter', count: 10, cost: 5 },
  { name: 'tidehunter', count: 10, cost: 5 },
  { name: 'enigma', count: 10, cost: 5 },
  { name: 'techies', count: 10, cost: 5 },
  { name: 'deathprophet', count: 10, cost: 5 },
  { name: 'zeus', count: 10, cost: 5 },
  { name: 'sven', count: 10, cost: 5 },
]

export default unitPool;

const unitPool2 = [
  { name: 'axe', count: 45, cost: 1 },
  { name: 'enchantress', count: 45, cost: 1 },
  { name: 'ogremagi', count: 45, cost: 1 },
  { name: 'crystalmaiden', count: 30, cost: 2 },
  { name: 'beastmaster', count: 30, cost: 2 },
  { name: 'juggernaut', count: 30, cost: 2 },
  { name: 'lycan', count: 25, cost: 3 },
  { name: 'venomancer', count: 25, cost: 3 },
  { name: 'omniknight', count: 25, cost: 3 },
  { name: 'doom', count: 15, cost: 4 },
  { name: 'kunkka', count: 15, cost: 4 },
  { name: 'trollwarlord', count: 15, cost: 4 },
  { name: 'gyrocopter', count: 10, cost: 5 },
  { name: 'tidehunter', count: 10, cost: 5 },
  { name: 'enigma', count: 10, cost: 5 },
];

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
      { name: 'axe', count: 45, cost: 1 },
      { name: 'enchantress', count: 45, cost: 1 },
      { name: 'ogremagi', count: 45, cost: 1 },
      { name: 'tusk', count: 45, cost: 1 },
      { name: 'drowranger', count: 45, cost: 1 },
      { name: 'bountyhunter', count: 45, cost: 1 },
      { name: 'clockwerk', count: 45, cost: 1 },
      { name: 'shadowshaman', count: 45, cost: 1 },
      { name: 'batrider', count: 45, cost: 1 },
      { name: 'tinker', count: 45, cost: 1 },
      { name: 'antimage', count: 45, cost: 1 },
      { name: 'tiny', count: 45, cost: 1 },
      { name: 'mars', count: 45, cost: 1 },
      { name: 'crystalmaiden', count: 30, cost: 2 },
      { name: 'beastmaster', count: 30, cost: 2 },
      { name: 'juggernaut', count: 30, cost: 2 },
      { name: 'timbersaw', count: 30, cost: 2 },
      { name: 'queenofpain', count: 30, cost: 2 },
      { name: 'puck', count: 30, cost: 2 },
      { name: 'witchdoctor', count: 30, cost: 2 },
      { name: 'slardar', count: 30, cost: 2 },
      { name: 'chaosknight', count: 30, cost: 2 },
      { name: 'morphling', count: 30, cost: 2 },
      { name: 'luna', count: 30, cost: 2 },
      { name: 'furion', count: 30, cost: 2 },
      { name: 'mirana', count: 30, cost: 2 },
      { name: 'lich', count: 30, cost: 2 },
      { name: 'lycan', count: 25, cost: 3 },
      { name: 'venomancer', count: 25, cost: 3 },
      { name: 'omniknight', count: 25, cost: 3 },
      { name: 'razor', count: 25, cost: 3 },
      { name: 'windranger', count: 25, cost: 3 },
      { name: 'phantomassassin', count: 25, cost: 3 },
      { name: 'treantprotector', count: 25, cost: 3 },
      { name: 'abaddon', count: 25, cost: 3 },
      { name: 'sniper', count: 25, cost: 3 },
      { name: 'terrorblade', count: 25, cost: 3 },
      { name: 'viper', count: 25, cost: 3 },
      { name: 'shadowfiend', count: 25, cost: 3 },
      { name: 'lina', count: 25, cost: 3 },
      { name: 'dazzle', count: 25, cost: 3 },
      { name: 'doom', count: 15, cost: 4 },
      { name: 'kunkka', count: 15, cost: 4 },
      { name: 'trollwarlord', count: 15, cost: 4 },
      { name: 'keeperofthelight', count: 15, cost: 4 },
      { name: 'necrophos', count: 15, cost: 4 },
      { name: 'templarassassin', count: 15, cost: 4 },
      { name: 'alchemist', count: 15, cost: 4 },
      { name: 'disruptor', count: 15, cost: 4 },
      { name: 'medusa', count: 15, cost: 4 },
      { name: 'dragonknight', count: 15, cost: 4 },
      { name: 'lonedruid', count: 15, cost: 4 },
      { name: 'gyrocopter', count: 10, cost: 5 },
      { name: 'tidehunter', count: 10, cost: 5 },
      { name: 'enigma', count: 10, cost: 5 },
      { name: 'techies', count: 10, cost: 5 },
      { name: 'deathprophet', count: 10, cost: 5 },
      { name: 'zeus', count: 10, cost: 5 },
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
    if (isIo) return { name: 'io', count: 0, cost: 5 };

    const unitCost = getUnitCost();
    let unitPoolPerCost = this.pieces.filter(piece => piece.cost === unitCost);
    unitPoolPerCost = unitPoolPerCost.filter(piece => !this.excludedPieces.includes(piece.name))

    const totalUnitsPerCost = unitPoolPerCost.reduce((acc, piece) => acc + piece.count, 0)

    let unitCounter = Math.floor(Math.random() * totalUnitsPerCost);

    for (let i = 0; i < unitPoolPerCost.length; i++) {
      if (unitCounter < unitPoolPerCost[i].count) {
        return unitPoolPerCost[i];
      }
      unitCounter -= unitPoolPerCost[i].count
    }
  }

  rollTwenty() {
    for (let i = 0; i < 20; i++) {
      console.log(this.rollOne());
    }
  }
}
