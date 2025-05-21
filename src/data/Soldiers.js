import { ANIMAL, NO_CARRY, HAND_WEAPON, DAGGER, TWO_HANDED_WEAPON, STAFF, SHIELD, MAIL_ARMOUR, START_WITH_HEALING_POTION, CROSSBOW, LEATHER_ARMOUR, BOW, abilities, UNARMED } from "./CharacterFeatures";
import { ABILITIES, ARMOUR, BASE, EQUIPMENT, FACTION, KEYWORDS, MELEE, MOVEMENT, RANGED, ATTRIBUTES }from './Misc';

export const HERETIC_PRIEST = 'Heretic Priest';
export const HERETIC_DEATH_COMMANDO = 'Heretic Death Commando';
export const HERETIC_CHORISTER = 'Heretic Chorister';
export const HERETIC_TROOPER = 'Heretic Trooper';
export const ANOINTED_HEAVY_INFANTRY = 'Anointed Heavy Infantry';
export const WAR_WOLF_ASSAULT_BEAST = 'War Wolf Assault Beast';
export const ARTILLERY_WITCH = 'Artillery Witch';
export const WRETCHED = 'Wretched';
export const WAR_PROPHET = 'War Prophet';
export const CASTIGATOR = 'Castigator';
export const COMMUNICANT = 'Communicant';
export const TRENCH_PILGRIM = 'Trench Pilgrim';
export const ECCLESIASTIC_PRISONER = 'Ecclesiastic Prisoner';
export const STIGMATIC_NUN = 'Stigmatic Nun';
export const SHRINE_ANCHORITE = 'Shrine Anchorite';
export const PRAETOR = 'Praetor';
export const SORCERER = 'Sorcerer';
export const HUNTER_OF_THE_LEFT_HAND_PATH = 'Hunter of the Left Hand Path';
export const HELL_KNIGHT = 'Hell Knight';
export const YOKE_FIEND = 'Yoke Fiend';
export const WRETCH = 'Wretch';
export const PIT_LOCUST = 'Pit Locust';
export const DESECRATED_SAINT = 'Desecrated Saint';
export const LORD_OF_TUMOURS = 'Lord of Tumours';
export const PLAGUE_KNIGHT = 'Plague Knight';
export const CORPSE_GUARD = 'Corpse Guard';
export const HOUND_OF_THE_BLACK_GRAIL = 'Hound of the Black Grail';
export const GRAIL_THRALL = 'Grail Thrall';
export const FLY_THRALL = 'Fly Thrall';
export const HERALD_OF_BEELZEBUB = 'Herald of Beelzebub';
export const AMALGAM = 'Amalgam';
export const LIEUTENANT = 'Lieutenant';
export const TRENCH_CLERIC = 'Trench Cleric';
export const YEOMAN = 'Yeoman';
export const SHOCKTROOPER = 'Shocktrooper';
export const COMBAT_ENGINEER = 'Combat Engineer';
export const MECHANIZED_HEAVY_INFANTRY = 'Mechanized Heavy Infantry';
export const COMBAT_MEDIC = 'Combat Medic';
export const YUZBASI_CAPTAIN = 'Yuzbasi Captain';
export const JABIREAN_ALCHEMIST = 'Jabirean Alchemist';
export const SULTANATE_ASSASSIN = 'Sultanate Assassin';
export const AZEB = 'Azeb';
export const SULTANATE_SAPPER = 'Sultanate Sapper';
export const LION_OF_JABIR = 'Lion of Jabir';
export const JANISSARIES = 'Janissaries';
export const BRAZEN_BULL = 'Brazen Bull';

export const soldierTypes = [HERETIC_PRIEST, HERETIC_DEATH_COMMANDO, HERETIC_CHORISTER,
  HERETIC_TROOPER,ANOINTED_HEAVY_INFANTRY,WAR_WOLF_ASSAULT_BEAST,ARTILLERY_WITCH,WRETCHED,
  WAR_PROPHET,CASTIGATOR,COMMUNICANT,TRENCH_PILGRIM,ECCLESIASTIC_PRISONER,STIGMATIC_NUN,SHRINE_ANCHORITE,
  YUZBASI_CAPTAIN,JABIREAN_ALCHEMIST,SULTANATE_ASSASSIN,AZEB,SULTANATE_SAPPER,LION_OF_JABIR,JANISSARIES,BRAZEN_BULL,
  LIEUTENANT,TRENCH_CLERIC,YEOMAN,SHOCKTROOPER,COMBAT_ENGINEER,MECHANIZED_HEAVY_INFANTRY,COMBAT_MEDIC,
  LORD_OF_TUMOURS,PLAGUE_KNIGHT,CORPSE_GUARD,HOUND_OF_THE_BLACK_GRAIL,GRAIL_THRALL,FLY_THRALL,HERALD_OF_BEELZEBUB,AMALGAM,
  PRAETOR,SORCERER,HUNTER_OF_THE_LEFT_HAND_PATH,HELL_KNIGHT,YOKE_FIEND,WRETCH,PIT_LOCUST,DESECRATED_SAINT];

export default {
  [HERETIC_PRIEST]: {
    name: 'Heretic Priest',
    [MOVEMENT]: 4,
    [MELEE]: 2,
    [RANGED]: 2,
    [ARMOUR]: 23,
    [BASE]: 28,
    [ABILITIES]: [NO_CARRY, LEATHER_ARMOUR],
    [KEYWORDS]: 'ELITE'
  },
  [HERETIC_DEATH_COMMANDO]: {
    name: 'Heretic Death Commando',
    [MOVEMENT]: 6,
    [MELEE]: 2,
    [RANGED]: 2,
    [ARMOUR]: 23,
    [BASE]: 32,
    [ABILITIES]: [TWO_HANDED_WEAPON],
    [KEYWORDS]: 'ELITE'
  },
  [HERETIC_CHORISTER]: {
    name: 'Heretic Chorister',
    [MOVEMENT]: 6,
    [MELEE]: 1,
    [RANGED]: 5,
    [ARMOUR]: 2,
    [BASE]: 28,
    [ABILITIES]: [UNARMED],
    [KEYWORDS]: 'LIKE REALLY STRAIGHT'
  },
  [HERETIC_TROOPER]: {
    name: 'Heretic Trooper',
  },
  [ANOINTED_HEAVY_INFANTRY]: {
    name: 'Anointed Heavy Infantry',
  },
  [WAR_WOLF_ASSAULT_BEAST]: {
    name: 'War Wolf Assault Beast',
  },
  [ARTILLERY_WITCH]: {
    name: 'Artillery Witch',
  },
  [WRETCHED]: {
    name: 'Wretched',
  },
  [WAR_PROPHET]: {
    name: 'War Prophet',
  },
  [CASTIGATOR]: {
    name: 'Castigator',
  },
  [COMMUNICANT]: {
    name: 'Communicant',
  },
  [TRENCH_PILGRIM]: {
    name: 'Trench Pilgrim',
  },
  [ECCLESIASTIC_PRISONER]: {
    name: 'Ecclesiastic Prisoner',
  },
  [STIGMATIC_NUN]: {
    name: 'Stigmatic Nun',
  },
  [SHRINE_ANCHORITE]: {
    name: 'Shrine Anchorite',
  },
  [YUZBASI_CAPTAIN]: {
    name: 'Yuzbasi Captain',
  },
  [JABIREAN_ALCHEMIST]: {
    name: 'Jabirean Alchemist',
  },
  [SULTANATE_ASSASSIN]: {
    name: 'Sultanate Assassin',
  },
  [AZEB]: {
    name: 'Azeb',
  },
  [SULTANATE_SAPPER]: {
    name: 'Sultanate Sapper',
  },
  [LION_OF_JABIR]: {
    name: 'Lion of Jabir',
  },
  [JANISSARIES]: {
    name: 'Janissaries',
  },
  [BRAZEN_BULL]: {
    name: 'Brazen Bull',
  },
  [LIEUTENANT]: {
    name: 'Lieutenant',
  },
  [TRENCH_CLERIC]: {
    name: 'Trench Cleric',
  },
  [YEOMAN]: {
    name: 'Yeoman',
  },
  [SHOCKTROOPER]: {
    name: 'Shocktrooper',
  },
  [COMBAT_ENGINEER]: {
    name: 'Combat Engineer',
  },
  [MECHANIZED_HEAVY_INFANTRY]: {
    name: 'Mechanized Heavy Infantry',
  },
  [COMBAT_MEDIC]: {
    name: 'Combat Medic',
  },
  [LORD_OF_TUMOURS]: {
    name: 'Lord of Tumours',
  },
  [PLAGUE_KNIGHT]: {
    name: 'Plague Knight',
  },
  [CORPSE_GUARD]: {
    name: 'Corpse Guard',
  },
  [HOUND_OF_THE_BLACK_GRAIL]: {
    name: 'Hound of the Black Grail',
  },
  [GRAIL_THRALL]: {
    name: 'Grail Thrall',
  },
  [FLY_THRALL]: {
    name: 'Fly Thrall',
  },
  [HERALD_OF_BEELZEBUB]: {
    name: 'Herald of Beelzebub',
  },
  [AMALGAM]: {
    name: 'Amalgam',
  },
  [PRAETOR]: {
    name: 'Praetor',
  },
  [SORCERER]: {
    name: 'Sorcerer',
  },
  [HUNTER_OF_THE_LEFT_HAND_PATH]: {
    name: 'Hunter of the Left Hand Path',
  },
  [HELL_KNIGHT]: {
    name: 'Hell Knight',
  },
  [YOKE_FIEND]: {
    name: 'Yoke Fiend',
  },
  [WRETCH]: {
    name: 'Wretch',
  },
  [PIT_LOCUST]: {
    name: 'Pit Locust',
  },
  [DESECRATED_SAINT]: {
    name: 'Desecrated Saint',
  }
};