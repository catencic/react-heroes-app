
import { heroes } from "../data/heroes"

export const getHeroById=heroeId=> heroes.find(hero => hero.id===heroeId);
