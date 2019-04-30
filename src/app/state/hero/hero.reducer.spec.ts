import {
  Hero,
  generateHero,
  generateHeroArray,
  generateHeroMap
} from '../../core/hero';
import * as actions from './hero.actions';
import {
  heroReducer,
  initialHeroState,
  getSelectedId,
  getLoading,
  getError
} from './hero.reducer';
import { Update } from '@ngrx/entity';

const INITIAL_STATE_WITH_ERROR = {
  ...initialHeroState,
  error: 'some error'
};
const BLANK_ERROR_MESSAGE = '';

describe('heroReducer', () => {
  describe('upon an undefined action', () => {
    it('should return the default state upon an undefined action', () => {
      const action = { type: 'NOT DEFINED' } as any;

      expect(heroReducer(initialHeroState, action)).toEqual(initialHeroState);
    });
  });

  describe('upon SearchAllHeroEntities', () => {
    it('should remove Hero entities, set loading to true, and clear any error', () => {
      const initialHeroStateWithHeroEntities = {
        ...INITIAL_STATE_WITH_ERROR,
        ...generateHeroMap()
      };
      const action = new actions.SearchAllHeroEntities();

      expect(heroReducer(initialHeroStateWithHeroEntities, action)).toMatchSnapshot();
    });
  });

  describe('upon SearchAllHeroEntitiesSuccess', () => {
    it('should add Hero entities, set loading to false, and clear any error', () => {
      const result = generateHeroArray();
      const action = new actions.SearchAllHeroEntitiesSuccess({ result });

      expect(heroReducer(INITIAL_STATE_WITH_ERROR, action)).toMatchSnapshot();
    });
  });

  describe('upon SearchAllHeroEntitiesFail', () => {
    it('should set loading to false and echo the error', () => {
      const error = 'test search error';
      const action = new actions.SearchAllHeroEntitiesFail({ error });

      expect(heroReducer(initialHeroState, action)).toMatchSnapshot();
    });
  });

  describe('upon LoadHeroById', () => {
    it('should remove hero entities, set selected id, and clear any error', () => {
      const id = 8675309;
      const initialHeroStateWithHeroEntities = {
        ...INITIAL_STATE_WITH_ERROR,
        ...generateHeroMap()
      };
      const action = new actions.LoadHeroById({ id });

      expect(heroReducer(initialHeroStateWithHeroEntities, action)).toMatchSnapshot();
    });
  });

  describe('upon LoadHeroByIdSuccess', () => {
    it('should add the given Hero, set loading to false, and clear any error', () => {
      const result = generateHero(54);
      const action = new actions.LoadHeroByIdSuccess({ result });

      expect(heroReducer(INITIAL_STATE_WITH_ERROR, action)).toMatchSnapshot();
    });
  });

  describe('upon LoadHeroByIdFail', () => {
    it('should set loading to false and echo the error', () => {
      const error = 'test load by id error';
      const action = new actions.LoadHeroByIdFail({ error });

      expect(heroReducer(initialHeroState, action)).toMatchSnapshot();
    });
  });
});

describe('getters', () => {
  describe('getSelectedId', () => {
    it('should return the selected id', () => {
      expect(getSelectedId(initialHeroState)).toEqual(initialHeroState.selectedId);
    });
  });
  describe('getLoading', () => {
    it('should return the selected id', () => {
      expect(getLoading(initialHeroState)).toEqual(initialHeroState.loading);
    });
  });
  describe('getError', () => {
    it('should return the selected id', () => {
      expect(getError(INITIAL_STATE_WITH_ERROR))
        .toEqual(INITIAL_STATE_WITH_ERROR.error);
    });
  });
});
