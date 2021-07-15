/*
  While trying to add a new question type, original classes are close for modification but open for addition
*/

class BooleanQuestion {
  constructor(description) {
    this.description = description;
  }

  print() {
    console.log('1. True');
    console.log('2. false');
  }
}

class McqQuestion {
  constructor(description, options) {
    this.description = description;
    this.options = options;
  }

  print() {
    this.options.forEach((option, index) => console.log(`${index}. ${option}`));
  }
}

const questions = [
  new BooleanQuestion('Is cryptocurrency a bubble?'),
  new McqQuestion('Which all cryptocurrencies have you invested in?', ['Bitcoin', 'Ethereum', 'Dogecoin'])
];

const printQuiz = questions => questions.forEach(question => {
  console.log(question.description);
  question.print();
});

printQuiz(questions);
