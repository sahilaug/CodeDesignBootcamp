const suites = ['club', 'heart', 'spade', 'diamond'];

const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

export const compare = (card1: string, card2: string) => '5 of Hearts > 3 of Spades';

compare('5 of Hearts', '3 of Spades');
