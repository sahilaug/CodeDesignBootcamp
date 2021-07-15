const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'] as const;
const suits = ['club', 'heart', 'spade', 'diamond'] as const;

type Rank = typeof ranks[number];
type Suit = typeof suits[number];

type Card = {
  rank: Rank,
  suit: Suit
}

const getSuit = (card: string) => suits.find(suit => card.toLowerCase().includes(suit)) as Suit;
const getRank = (card: string) => ranks.find(cardRank => card.toLowerCase().includes(cardRank)) as Rank;

const processInput = (card: string) => ({ rank: getRank(card), suit: getSuit(card) });

const getWeight = <T>(array: readonly T[], rank: T) => array.indexOf(rank);

const isGreaterRank = (card1: Card, card2: Card) => getWeight(ranks, card1.rank) > getWeight(ranks, card2.rank);
const isGreaterSuit = (card1: Card, card2: Card) => getWeight(suits, card1.suit) > getWeight(suits, card2.suit);

const isRankEqual = (card1: Card, card2: Card) => getWeight(ranks, card1.rank) === getWeight(ranks, card2.rank);
const isSuitEqual = (card1: Card, card2: Card) => getWeight(suits, card1.suit) === getWeight(suits, card2.suit);

const getComparison = (card1: Card, card2: Card) => {
  if (isRankEqual(card1, card2)) {
    if (isSuitEqual(card1, card2)) return '=';
    return isGreaterSuit(card1, card2) ? '>' : '<';
  }
  return isGreaterRank(card1, card2) ? '>' : '<';
};

export const compare = (cardInput1: string, cardInput2: string) => {
  const card1 = processInput(cardInput1);
  const card2 = processInput(cardInput2);
  const comparison = getComparison(card1, card2);
  return `${cardInput1} ${comparison} ${cardInput2}`;
};
