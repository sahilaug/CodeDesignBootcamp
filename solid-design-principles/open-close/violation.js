/*
  Violation: Try adding another question type by just adding a new object to the questions array
*/

const printQuiz = questions => {
  questions.forEach(question => {
    console.log(question.description);
    switch (question.type) {
      case 'boolean': {
        console.log('1. True');
        console.log('2. false');
        break;
      }
      case 'mcq': {
        question.options.forEach((option, index) => console.log(`${index}. ${option}`));
        break;
      }
      default: {
        console.log(`${question.type} does not exist in the system !!`);
      }
    }
  });
};

const questions = [
  {
    type: 'boolean',
    description: 'Is cryptocurrency a bubble?'
  },
  {
    type: 'mcq',
    description: 'Which all cryptocurrencies have you invested in?',
    options: ['Bitcoin', 'Ethereum', 'Dogecoin']
  }
];

printQuiz(questions);
