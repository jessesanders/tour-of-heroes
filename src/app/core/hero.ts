export class Hero {
  id: number;
  name: string;
}


// for testing
export const generateHero = (idOverride?: number): Hero => ({
  id: idOverride || (Math.floor(Math.random() * 100) + 1),
  name: 'Test name'
});

export const generateHeroArray = (count = 10): Hero[] =>
  // Overwrite random id generation to prevent duplicate IDs:
  Array.apply(null, Array(count)).map((value, index) => generateHero(index + 1));

export const generateHeroMap = (
  heroArray: Array<Hero> = generateHeroArray()
): { ids: Array<number>, entities: any } => ({
  entities: heroArray.reduce(
    (heroMap, hero) => ({ ...heroMap, [hero.id]: hero }),
    {}
  ),
  ids: heroArray.map(hero => hero.id)
});
