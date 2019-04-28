import { EntityMetadataMap } from 'ngrx-data';

const entityMetadata: EntityMetadataMap = {
  Hero: {}
};

// because the plural of "hero" is not "heros"
const pluralNames = { Hero: 'Heroes' };

export const entityConfig = {
  entityMetadata,
  pluralNames
};
