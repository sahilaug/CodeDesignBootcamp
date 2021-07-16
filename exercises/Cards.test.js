import { compare } from './Cards';

describe('Cards test suite', () => {
  it('compares two cards correctly', () => {
    const card1 = '5 of Hearts';
    const card2 = '3 of Spades';

    const result = compare(card1, card2);

    expect(result).toBe('5 of Hearts > 3 of Spades');
  });

  it('compares a different set of cards correctly', () => {
    const card1 = '3 of Hearts';
    const card2 = 'Ace of Diamonds';

    const result = compare(card1, card2);

    expect(result).toBe('3 of Hearts < Ace of Diamonds');
  });

  it('compares a cards with same rank correctly', () => {
    const card1 = '3 of Hearts';
    const card2 = '3 of Diamonds';

    const result = compare(card1, card2);

    expect(result).toBe('3 of Hearts < 3 of Diamonds');
  });

  it('compares another set of cards cards with same rank correctly', () => {
    const card1 = '3 of Diamonds';
    const card2 = '3 of Hearts';

    const result = compare(card1, card2);

    expect(result).toBe('3 of Diamonds > 3 of Hearts');
  });

  it('compares equal cards correctly', () => {
    const card1 = '3 of Hearts';
    const card2 = '3 of Heart';

    const result = compare(card1, card2);

    expect(result).toBe('3 of Hearts = 3 of Heart');
  });

  it('compares correctly when input is not in plural', () => {
    const card1 = '3 of Heart';
    const card2 = 'Ace of Diamond';

    const result = compare(card1, card2);

    expect(result).toBe('3 of Heart < Ace of Diamond');
  });

  it('compares correctly when input is case sensitive', () => {
    const card1 = '3 of heart';
    const card2 = 'Ace of diamond';

    const result = compare(card1, card2);

    expect(result).toBe('3 of heart < Ace of diamond');
  });
});
