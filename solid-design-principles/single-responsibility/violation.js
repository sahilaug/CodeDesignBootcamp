/*
  Violation:
  Calories class needs to change if there is a change in logic of how we calculate the calories
  Calories class also needs to change if there is a change in how we log surplus, lets say by sending an email alert
*/
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

  logSurplus() {
    console.log('Max calories exceeded !!!');
  }
}

const calories = new Calories(100);
calories.track(20);
calories.track(40);
calories.track(30);
calories.track(50);
