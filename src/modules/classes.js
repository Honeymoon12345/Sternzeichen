export class Sternzeichen {
  constructor(name, element, description, love, gem, color) {
    this.symbol = new Image();
    this.name = name;
    this.element = element;
    this.description = description;
    this.love = love;
    this.gem = gem;
    this.color = color;
    //this.work = work;
  }
}

export class Gem {
  constructor(name, description, effect) {
    this.name = name;
    this.description = description;
    this.effect = effect;
  }
}

export class Color {
  constructor(name, effect) {
    this.name = name;
    this.effect = effect;
  }
}

export class History {
  constructor(history) {
    this.history = history;
  }
}
export class Descriptions {
  constructor(descriptions) {
    this.descriptions = descriptions;
  }
}

export class Love {
  constructor(name, name2, hearts, strong) {
    this.name = name;
    this.name2 = name2;
    this.hearts = hearts;
    this.strong = strong;
  }
}
