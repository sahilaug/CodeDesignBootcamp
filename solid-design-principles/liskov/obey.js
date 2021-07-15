/*
  Warning: Class Explosion!!!
*/

class Bird {
  eat() {
    console.log('Bird is eating');
  }
}

class FlyingBird extends Bird {
  fly() {
    console.log('Bird is flying');
  }
}

class SwimmingBird extends Bird {
  fly() {
    console.log('Bird is swimming');
  }
}

class Duck extends FlyingBird {
  quack() {
    console.log('Duck is quacking');
  }
}

class Penguin extends SwimmingBird {
  swim() {
    console.log('Penguin is swimming');
  }
}

const makeBirdEat = bird => {
  bird.eat();
};

const makeBirdFly = bird => {
  bird.fly();
};

const donaldDuck = new Duck();
console.log('Lets see what a duck can do');
makeBirdEat(donaldDuck);
makeBirdFly(donaldDuck);

const penguin = new Penguin();
console.log('Lets see what a penguin can do');
makeBirdEat(penguin);
makeBirdFly(penguin);
