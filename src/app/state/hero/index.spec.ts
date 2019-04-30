import { topHeroes, heroes, selectedHeroId, selectedHero } from './index';
import { Hero } from '../../core/hero';

// State Factory
const createHero = ({
  id = 0,
  name = ''
} = {}): Hero => ({
  id: id,
  name: name || 'name'
});

const createHeroState = ({
  entities = {
    '1': createHero({ id: 1, name: 'Bob' }),
    '2': createHero({ id: 2, name: 'Sue' }),
    '3': createHero({ id: 3, name: 'Mary' }),
    '4': createHero({ id: 4, name: 'Jim' }),
    '5': createHero({ id: 5, name: 'Jane' })
  },
  ids = ['1', '2', '3', '4', '5'],
  selectedId = 0,
  loading = false,
  error = ''
} = {}) => ({
  hero: {
    ids,
    entities,
    selectedId,
    loading,
    error
  }
});

describe('hero selectors', () => {
  it('should return all heroes', () => {
    const state = createHeroState();
    expect(heroes(state)).toMatchSnapshot();
  });

  it('should return top 4 heroes', () => {
    const state = createHeroState();
    expect(topHeroes(state)).toMatchSnapshot();
  });

  it('should return selectedId', () => {
    const state = createHeroState();
    state.hero.selectedId = 3;
    expect(selectedHeroId(state)).toEqual(3);
  });

  it('should return selected Hero', () => {
    const state = createHeroState();
    state.hero.selectedId = 3;
    expect(selectedHero(state)).toMatchSnapshot();
  });
});
