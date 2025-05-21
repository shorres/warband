import { ANIMAL, NO_CARRY, HAND_WEAPON, DAGGER, TWO_HANDED_WEAPON, STAFF, SHIELD, MAIL_ARMOUR, START_WITH_HEALING_POTION, CROSSBOW, LEATHER_ARMOUR, BOW, abilities, UNARMED } from "./CharacterFeatures";
import { ABILITIES, ARMOUR, BASE, EQUIPMENT, FACTION, KEYWORDS, MELEE, MOVEMENT, RANGED, ATTRIBUTES }from './Misc';
import {NEW_ANTIOCH,HERETIC_LEGION,SEVEN_HEADED,TRENCH_PILGRIMS,BLACK_GRAIL,IRON_SULTANATE} from "./Factions";

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
    [KEYWORDS]: 'ELITE',
    [FACTION]: [HERETIC_LEGION]
  },
  [HERETIC_DEATH_COMMANDO]: {
    name: 'Heretic Death Commando',
    [MOVEMENT]: 6,
    [MELEE]: 2,
    [RANGED]: 2,
    [ARMOUR]: 23,
    [BASE]: 32,
    [ABILITIES]: [TWO_HANDED_WEAPON],
    [KEYWORDS]: 'ELITE',
    [FACTION]: [HERETIC_LEGION]
  },
  [HERETIC_CHORISTER]: {
    name: 'Heretic Chorister',
    [MOVEMENT]: 6,
    [MELEE]: 1,
    [RANGED]: 5,
    [ARMOUR]: 2,
    [BASE]: 28,
    [ABILITIES]: [UNARMED],
    [KEYWORDS]: 'LIKE REALLY STRAIGHT',
    [FACTION]: [HERETIC_LEGION]
  },
  [HERETIC_TROOPER]: {
    name: 'Heretic Trooper',
    [FACTION]: [HERETIC_LEGION]
  },
  [ANOINTED_HEAVY_INFANTRY]: {
    name: 'Anointed Heavy Infantry',
    [FACTION]: [HERETIC_LEGION]
  },
  [WAR_WOLF_ASSAULT_BEAST]: {
    name: 'War Wolf Assault Beast',
    [FACTION]: [HERETIC_LEGION]
  },
  [ARTILLERY_WITCH]: {
    name: 'Artillery Witch',
    [FACTION]: [HERETIC_LEGION]
  },
  [WRETCHED]: {
    name: 'Wretched',
    [FACTION]: [HERETIC_LEGION]
  },
  [WAR_PROPHET]: {
    name: 'War Prophet',
    [FACTION]: [TRENCH_PILGRIMS]
  },
  [CASTIGATOR]: {
    name: 'Castigator',
    [FACTION]: [TRENCH_PILGRIMS]
  },
  [COMMUNICANT]: {
    name: 'Communicant',
    [FACTION]: [TRENCH_PILGRIMS]
  },
  [TRENCH_PILGRIM]: {
    name: 'Trench Pilgrim',
    [FACTION]: [TRENCH_PILGRIMS]
  },
  [ECCLESIASTIC_PRISONER]: {
    name: 'Ecclesiastic Prisoner',
    [FACTION]: [TRENCH_PILGRIMS]
  },
  [STIGMATIC_NUN]: {
    name: 'Stigmatic Nun',
    [FACTION]: [TRENCH_PILGRIMS]
  },
  [SHRINE_ANCHORITE]: {
    name: 'Shrine Anchorite',
    [FACTION]: [TRENCH_PILGRIMS]
  },
  [YUZBASI_CAPTAIN]: {
    name: 'Yuzbasi Captain',
    [FACTION]: [IRON_SULTANATE]
  },
  [JABIREAN_ALCHEMIST]: {
    name: 'Jabirean Alchemist',
    [FACTION]: [IRON_SULTANATE]
  },
  [SULTANATE_ASSASSIN]: {
    name: 'Sultanate Assassin',
    [FACTION]: [IRON_SULTANATE]
  },
  [AZEB]: {
    name: 'Azeb',
    [FACTION]: [IRON_SULTANATE]
  },
  [SULTANATE_SAPPER]: {
    name: 'Sultanate Sapper',
    [FACTION]: [IRON_SULTANATE]
  },
  [LION_OF_JABIR]: {
    name: 'Lion of Jabir',
    [FACTION]: [IRON_SULTANATE]
  },
  [JANISSARIES]: {
    name: 'Janissaries',
    [FACTION]: [IRON_SULTANATE]
  },
  [BRAZEN_BULL]: {
    name: 'Brazen Bull',
    [FACTION]: [IRON_SULTANATE]
  },
  [LIEUTENANT]: {
    name: 'Lieutenant',
    [FACTION]: [NEW_ANTIOCH]
  },
  [TRENCH_CLERIC]: {
    name: 'Trench Cleric',
    [FACTION]: [NEW_ANTIOCH]
  },
  [YEOMAN]: {
    name: 'Yeoman',
    [FACTION]: [NEW_ANTIOCH]
  },
  [SHOCKTROOPER]: {
    name: 'Shocktrooper',
    [FACTION]: [NEW_ANTIOCH]
  },
  [COMBAT_ENGINEER]: {
    name: 'Combat Engineer',
    [FACTION]: [NEW_ANTIOCH]
  },
  [MECHANIZED_HEAVY_INFANTRY]: {
    name: 'Mechanized Heavy Infantry',
    [FACTION]: [NEW_ANTIOCH]
  },
  [COMBAT_MEDIC]: {
    name: 'Combat Medic',
    [FACTION]: [NEW_ANTIOCH]
  },
  [LORD_OF_TUMOURS]: {
    name: 'Lord of Tumours',
    [FACTION]: [BLACK_GRAIL]
  },
  [PLAGUE_KNIGHT]: {
    name: 'Plague Knight',
    [FACTION]: [BLACK_GRAIL]
  },
  [CORPSE_GUARD]: {
    name: 'Corpse Guard',
    [FACTION]: [BLACK_GRAIL]
  },
  [HOUND_OF_THE_BLACK_GRAIL]: {
    name: 'Hound of the Black Grail',
    [FACTION]: [BLACK_GRAIL]
  },
  [GRAIL_THRALL]: {
    name: 'Grail Thrall',
    [FACTION]: [BLACK_GRAIL]
  },
  [FLY_THRALL]: {
    name: 'Fly Thrall',
    [FACTION]: [BLACK_GRAIL]
  },
  [HERALD_OF_BEELZEBUB]: {
    name: 'Herald of Beelzebub',
    [FACTION]: [BLACK_GRAIL]
  },
  [AMALGAM]: {
    name: 'Amalgam',
    [FACTION]: [BLACK_GRAIL]
  },
  [PRAETOR]: {
    name: 'Praetor',
    [FACTION]: [SEVEN_HEADED]
  },
  [SORCERER]: {
    name: 'Sorcerer',
    [FACTION]: [SEVEN_HEADED]
  },
  [HUNTER_OF_THE_LEFT_HAND_PATH]: {
    name: 'Hunter of the Left Hand Path',
    [FACTION]: [SEVEN_HEADED]
  },
  [HELL_KNIGHT]: {
    name: 'Hell Knight',
    [FACTION]: [SEVEN_HEADED]
  },
  [YOKE_FIEND]: {
    name: 'Yoke Fiend',
    [FACTION]: [SEVEN_HEADED]
  },
  [WRETCH]: {
    name: 'Wretch',
    [FACTION]: [SEVEN_HEADED]
  },
  [PIT_LOCUST]: {
    name: 'Pit Locust',
    [FACTION]: [SEVEN_HEADED]
  },
  [DESECRATED_SAINT]: {
    name: 'Desecrated Saint',
    [FACTION]: [SEVEN_HEADED]
  }
};