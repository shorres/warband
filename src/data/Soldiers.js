import { ANIMAL, NO_CARRY, HAND_WEAPON, DAGGER, TWO_HANDED_WEAPON, STAFF, SHIELD, MAIL_ARMOUR, START_WITH_HEALING_POTION, CROSSBOW, LEATHER_ARMOUR, BOW } from "./CharacterFeatures";
import { ABILITIES, ARMOUR, BASE, EQUIPMENT, FACTION, KEYWORDS, MELEE, MOVEMENT, RANGED, ATTRIBUTES }from './Misc';

export const WAR_HOUND = 'War Hound';
export const THUG = 'Thug';
export const THIEF = 'Thief';
export const ARCHER = 'Archer';
export const CROSSBOWMAN = 'Crossbowman';
export const INFANTRYMAN = 'Infantryman';
export const TRACKER = 'Tracker';
export const MAN_AT_ARMS = 'Man-at-arms';
export const TREASURE_HUNTER = 'Treasure Hunter';
export const KNIGHT = 'Knight';
export const TEMPLAR = 'Templar';
export const RANGER = 'Ranger';
export const BARBARIAN = 'Barbarian';
export const APOTHECARY = 'Apothecary';
export const MARKSMAN = 'Marksman';

export const soldierTypes = [WAR_HOUND, THUG, THIEF, ARCHER, CROSSBOWMAN, INFANTRYMAN, TRACKER, MAN_AT_ARMS, TREASURE_HUNTER, KNIGHT, TEMPLAR, RANGER, BARBARIAN, APOTHECARY, MARKSMAN];

export default {
  [WAR_HOUND]: {
    name: 'War Hound',
  },
  [THUG]: {
    name: 'Thug',
  },
  [THIEF]: {
    name: 'Thief',
  },
  [ARCHER]: {
    name: 'Archer',
  },
  [CROSSBOWMAN]: {
    name: 'Crossbowman',
  },
  [INFANTRYMAN]: {
    name: 'Infantryman',
  },
  [TRACKER]: {
    name: 'Tracker',
  },
  [MAN_AT_ARMS]: {
    name: 'Man-at-Arms',
  },
  [TREASURE_HUNTER]: {
    name: 'Treasure Hunter',
  },
  [KNIGHT]: {
    name: 'Knight',
  },
  [TEMPLAR]: {
    name: 'Templar',
  },
  [RANGER]: {
    name: 'Ranger',
    [MOVEMENT]: 5,
    [MELEE]: 2,
    [RANGED]: 3,
    [ARMOUR]: 12,
    [BASE]: 28,
    cost: 125,
    soldierType: RANGER
  },
  [BARBARIAN]: {
    name: 'Barbarian',
    [MOVEMENT]: 5,
    [MELEE]: 2,
    [RANGED]: 3,
    [ARMOUR]: 12,
    [BASE]: 28,
    cost: 125,
    soldierType: BARBARIAN
  },
  [APOTHECARY]: {
    name: 'Apothecary',
    [MOVEMENT]: 5,
    [MELEE]: 2,
    [RANGED]: 3,
    [ARMOUR]: 12,
    [BASE]: 28,
    cost: 125,
    soldierType: APOTHECARY
  },
  [MARKSMAN]: {
    name: 'Marksman',
    [MOVEMENT]: 5,
    [MELEE]: 2,
    [RANGED]: 3,
    [ARMOUR]: 12,
    [BASE]: 28,
    cost: 125,
    soldierType: MARKSMAN
  },
};