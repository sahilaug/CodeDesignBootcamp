import { compare } from './Cards';

describe('Cards test suite', () => {
  it('compares two cards correctly', () => {
    const card1 = '5 of Hearts';
    const card2 = '3 of Spades';

    const result = compare(card1, card2);

    expect(result).toBe('5 of Hearts > 3 of Spades');
  });
});
