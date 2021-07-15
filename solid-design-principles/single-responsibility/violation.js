class Calories {
  constructor(maxCalories) {
    this.max = maxCalories;
    this.current = 0;
  }

  track(count) {
    this.current += count;
    if (this.current > this.max) {
      this.logSurplus();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  logSurplus() {
    // eslint-disable-next-line no-console
    console.log('Max calories exceeded !!!');
  }
}

const calories = new Calories(100);
calories.track(20);
calories.track(40);
calories.track(30);
calories.track(50);
