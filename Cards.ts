const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'] as const;
const suits = ['club', 'heart', 'spade', 'diamond'] as const;

type Value = typeof values[number];
type Suit = typeof suits[number];

type Card = {
  value: Value,
  suit: Suit
}

const getSuit = (card: string) => suits.find(suit => card.toLowerCase().includes(suit)) as Suit;
const getValue = (card: string) => values.find(cardValue => card.toLowerCase().includes(cardValue)) as Value;

const processInput = (card: string) => ({ value: getValue(card), suit: getSuit(card) });

const getRank = <T>(array: readonly T[], value: T) => array.indexOf(value);

const isGreaterValue = (card1: Card, card2: Card) => getRank(values, card1.value) > getRank(values, card2.value);
const isGreaterSuit = (card1: Card, card2: Card) => getRank(suits, card1.suit) > getRank(suits, card2.suit);

const isValueEqual = (card1: Card, card2: Card) => getRank(values, card1.value) === getRank(values, card2.value);
const isSuitEqual = (card1: Card, card2: Card) => getRank(suits, card1.suit) === getRank(suits, card2.suit);

const getResult = (card1: Card, card2: Card) => {
  if (isValueEqual(card1, card2)) {
    if (isSuitEqual(card1, card2)) return '=';
    return isGreaterSuit(card1, card2) ? '>' : '<';
  }
  return isGreaterValue(card1, card2) ? '>' : '<';
};

const processOutput = (input1: string, input2: string, result: string) => `${input1} ${result} ${input2}`;

export const compare = (cardInput1: string, cardInput2: string) => {
  const card1 = processInput(cardInput1);
  const card2 = processInput(cardInput2);
  const result = getResult(card1, card2);
  return processOutput(cardInput1, cardInput2, result);
};
