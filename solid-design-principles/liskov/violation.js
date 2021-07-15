/*
  Violation: By requirement penguins can't fly, duh.. Hence we have to override the fly method
  in the parent class. But this means we are curbing a behaviour of the parent type which is the violation of LSP
*/

class Bird {
  fly() {
    console.log('Bird is flying');
  }

  eat() {
    console.log('Bird is eating');
  }
}

class Duck extends Bird {
  quack() {
    console.log('Duck is quacking');
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error('Penguins cant fly!!!');
  }

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
