import { ANIMAL, NO_CARRY, HAND_WEAPON, DAGGER, TWO_HANDED_WEAPON, STAFF, SHIELD, MAIL_ARMOUR, START_WITH_HEALING_POTION, CROSSBOW, LEATHER_ARMOUR, BOW, abilities, UNARMED } from "./CharacterFeatures";
import { ABILITIES, ARMOUR, BASE, EQUIPMENT, FACTION, KEYWORDS, MELEE, MOVEMENT, RANGED, ATTRIBUTES }from './Misc';
import {NEW_ANTIOCH,HERETIC_LEGION,SEVEN_HEADED,TRENCH_PILGRIMS,GRAIL_CULT,IRON_SULTANATE} from "./Factions";
import Keywords, {PDICE,MDICE,ACTION,ARTIFICIAL,ASSAULT,BLACK_GRAIL,BLAST,BLESSING_MARKER,
    BLOOD_MARKER,CONSUMABLE,CRITICAL,CUMBERSOME,DEMONIC,ELITE,FEAR,FIRE,FIRETEAM,GAS,GOLEM,GRENADE,HEAVY,
    HERETIC,INFILTRATOR,LEADER,LIMIT,ANTIOCH,PILGRIM,RISKY_ACTION,SHRAPNEL,SKIRMISHER,STRONG,SULTANATE,COURT,TOUGH} from "./Keywords";

export const HERETIC_PRIEST = 'Heretic Priest';
export const HERETIC_DEATH_COMMANDO = 'Heretic Death Commando';
export const HERETIC_CHORISTER = 'Heretic Chorister';
export const HERETIC_TROOPER = 'Heretic Trooper';
export const HERETIC_LEGIONNAIRE = 'Heretic Legionnaire';
export const ANOINTED_HEAVY_INFANTRY = 'Anointed Heavy Infantry';
export const WAR_WOLF_ASSAULT_BEAST = 'War Wolf Assault Beast';
export const ARTILLERY_WITCH = 'Artillery Witch';
export const WRETCHED_B = 'Wretched';
export const WRETCHED_C = 'Wretched';
export const WAR_PROPHET = 'War Prophet';
export const CASTIGATOR = 'Castigator';
export const COMMUNICANT = 'Communicant';
export const TRENCH_PILGRIM = 'Trench Pilgrim';
export const MARTYR_PENITENT = 'Martyr Penitent';
export const ECCLESIASTIC_PRISONER = 'Ecclesiastic Prisoner';
export const STIGMATIC_NUN = 'Stigmatic Nun';
export const SHRINE_ANCHORITE = 'Shrine Anchorite';
export const PRAETOR = 'Praetor';
export const SORCERER = 'Sorcerer';
export const HUNTER_OF_THE_LEFT_HAND_PATH = 'Hunter of the Left Hand Path';
export const HELL_KNIGHT = 'Hell Knight';
export const YOKE_FIEND = 'Yoke Fiend';
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
export const SNIPER_PRIEST = 'Sniper Priest';
export const YEOMAN = 'Yeoman';
export const TRENCH_MOLE = 'Trench Mole';
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
export const JANISSARY = 'Janissaries';
export const BRAZEN_BULL = 'Brazen Bull';

export const soldierTypes = [HERETIC_PRIEST, HERETIC_DEATH_COMMANDO, HERETIC_CHORISTER,
  HERETIC_TROOPER,HERETIC_LEGIONNAIRE,ANOINTED_HEAVY_INFANTRY,WAR_WOLF_ASSAULT_BEAST,ARTILLERY_WITCH,WRETCHED_B,
  WAR_PROPHET,CASTIGATOR,COMMUNICANT,TRENCH_PILGRIM, MARTYR_PENITENT, ECCLESIASTIC_PRISONER,STIGMATIC_NUN,SHRINE_ANCHORITE,
  YUZBASI_CAPTAIN,JABIREAN_ALCHEMIST,SULTANATE_ASSASSIN,AZEB,SULTANATE_SAPPER,LION_OF_JABIR,JANISSARY,BRAZEN_BULL,
  LIEUTENANT,TRENCH_CLERIC,SNIPER_PRIEST,YEOMAN,TRENCH_MOLE,SHOCKTROOPER,COMBAT_ENGINEER,MECHANIZED_HEAVY_INFANTRY,COMBAT_MEDIC,
  LORD_OF_TUMOURS,PLAGUE_KNIGHT,CORPSE_GUARD,HOUND_OF_THE_BLACK_GRAIL,GRAIL_THRALL,FLY_THRALL,HERALD_OF_BEELZEBUB,AMALGAM,
  PRAETOR,SORCERER,HUNTER_OF_THE_LEFT_HAND_PATH,HELL_KNIGHT,YOKE_FIEND,WRETCHED_C, PIT_LOCUST,DESECRATED_SAINT];

export default {
  [HERETIC_PRIEST]: {
    name: 'Heretic Priest',
    [MOVEMENT]: 6,
    [MELEE]: 2,
    [RANGED]: 2,
    [ARMOUR]: 0,
    [BASE]: 32,
    [KEYWORDS]: [HERETIC, ELITE, TOUGH, LEADER],
    [FACTION]: [HERETIC_LEGION]
  },
  [HERETIC_DEATH_COMMANDO]: {
    name: 'Death Commando',
    [MOVEMENT]: 6,
    [MELEE]: 2,
    [RANGED]: 1,
    [ARMOUR]: 0,
    [BASE]: 32,
    [KEYWORDS]: [HERETIC, ELITE, INFILTRATOR],
    [FACTION]: [HERETIC_LEGION]
  },
  [HERETIC_CHORISTER]: {
    name: 'Chorister',
    [MOVEMENT]: 6,
    [MELEE]: 2,
    [RANGED]: -2,
    [ARMOUR]: 0,
    [BASE]: 32,
    [KEYWORDS]: [HERETIC, ELITE, FEAR],
    [FACTION]: [HERETIC_LEGION]
  },
  [HERETIC_TROOPER]: {
    name: 'Heretic Trooper',
    [MOVEMENT]: 6,
    [MELEE]: 2,
    [RANGED]: -2,
    [ARMOUR]: 0,
    [BASE]: 32,
    [KEYWORDS]: [HERETIC],
    [FACTION]: [HERETIC_LEGION]
  },
  [HERETIC_LEGIONNAIRE]: {
    name: 'Legionnaire',
    [MOVEMENT]: 6,
    [MELEE]: 2,
    [RANGED]: -2,
    [ARMOUR]: 0,
    [BASE]: 32,
    [KEYWORDS]: [HERETIC, ELITE, FEAR],
    [FACTION]: [HERETIC_LEGION]
  },
  [ANOINTED_HEAVY_INFANTRY]: {
    name: 'Anointed',
    [MOVEMENT]: 6,
    [MELEE]: 1,
    [RANGED]: 1,
    [ARMOUR]: -2,
    [BASE]: 32,
    [ABILITIES]: [TWO_HANDED_WEAPON],
    [KEYWORDS]: [HERETIC, STRONG],
    [FACTION]: [HERETIC_LEGION]
  },
  [WAR_WOLF_ASSAULT_BEAST]: {
    name: 'War Wolf',
    [MOVEMENT]: 8,
    [MELEE]: 2,
    [RANGED]: 'N/A',
    [ARMOUR]: -3,
    [BASE]: 50,
    [KEYWORDS]: [HERETIC, FEAR, TOUGH, ARTIFICIAL],
    [FACTION]: [HERETIC_LEGION]
  },
  [ARTILLERY_WITCH]: {
    name: 'Artillery Witch',
    [MOVEMENT]: 6,
    [MELEE]: -1,
    [RANGED]: 0,
    [ARMOUR]: 0,
    [BASE]: 25,
    [KEYWORDS]: [HERETIC, ARTIFICIAL],
    [FACTION]: [HERETIC_LEGION]
  },
  [WRETCHED_B]: {
    name: 'Wretched',
    [MOVEMENT]: 6,
    [MELEE]: -1,
    [RANGED]: -1,
    [ARMOUR]: 0,
    [BASE]: 25,
    [FACTION]: [GRAIL_CULT]
  },
  [WAR_PROPHET]: {
    name: 'War Prophet',
    [MOVEMENT]: 6,
    [MELEE]: 2,
    [RANGED]: 2,
    [ARMOUR]: 0,
    [BASE]: 32,
    [KEYWORDS]: [PILGRIM, ELITE, LEADER],
    [FACTION]: [TRENCH_PILGRIMS]
  },
  [CASTIGATOR]: {
    name: 'Castigator',
    [MOVEMENT]: 6,
    [MELEE]: 1,
    [RANGED]: 1,
    [ARMOUR]: 0,
    [BASE]: 32,
    [KEYWORDS]: [PILGRIM, ELITE],
    [FACTION]: [TRENCH_PILGRIMS]
  },
  [COMMUNICANT]: {
    name: 'Communicant',
    [MOVEMENT]: 6,
    [MELEE]: 2,
    [RANGED]: -3,
    [ARMOUR]: 0,
    [BASE]: 40,
    [KEYWORDS]: [PILGRIM, ELITE, STRONG, TOUGH],
    [FACTION]: [TRENCH_PILGRIMS]
  },
  [TRENCH_PILGRIM]: {
    name: 'Trench Pilgrim',
    [MOVEMENT]: 6,
    [MELEE]: 0,
    [RANGED]: 0,
    [ARMOUR]: 0,
    [BASE]: 25,
    [KEYWORDS]: [PILGRIM],
    [FACTION]: [TRENCH_PILGRIMS]
  },
  [MARTYR_PENITENT]: {
    name: 'Martyr Penitent',
    [MOVEMENT]: 6,
    [MELEE]: 1,
    [RANGED]: 0,
    [ARMOUR]: 0,
    [BASE]: 25,
    [KEYWORDS]: [PILGRIM],
    [FACTION]: [TRENCH_PILGRIMS]
  },
  [ECCLESIASTIC_PRISONER]: {
    name: 'Prisoner',
    [MOVEMENT]: 6,
    [MELEE]: -1,
    [RANGED]: 'N/A',
    [ARMOUR]: 0,
    [BASE]: 25,
    [KEYWORDS]: [PILGRIM],
    [FACTION]: [TRENCH_PILGRIMS]
  },
  [STIGMATIC_NUN]: {
    name: 'Nun',
    [MOVEMENT]: 8,
    [MELEE]: 1,
    [RANGED]: 1,
    [ARMOUR]: 0,
    [BASE]: 25,
    [KEYWORDS]: [PILGRIM],
    [FACTION]: [TRENCH_PILGRIMS]
  },
  [SHRINE_ANCHORITE]: {
    name: 'Anchorite',
    [MOVEMENT]: 6,
    [MELEE]: 2,
    [RANGED]: 'N/A',
    [ARMOUR]: -3,
    [BASE]: 60,
    [KEYWORDS]: [PILGRIM, FEAR, TOUGH, STRONG],
    [FACTION]: [TRENCH_PILGRIMS]
  },
  [YUZBASI_CAPTAIN]: {
    name: 'Yuzbasi',
    [MOVEMENT]: 6,
    [MELEE]: 2,
    [RANGED]: 2,
    [ARMOUR]: 0,
    [BASE]: 32,
    [KEYWORDS]: [SULTANATE, ELITE, TOUGH, LEADER],
    [FACTION]: [IRON_SULTANATE]
  },
  [JABIREAN_ALCHEMIST]: {
    name: 'Alchemist',
    [MOVEMENT]: 6,
    [MELEE]: 1,
    [RANGED]: 2,
    [ARMOUR]: 0,
    [BASE]: 32,
    [KEYWORDS]: [SULTANATE, ELITE],
    [FACTION]: [IRON_SULTANATE]
  },
  [SULTANATE_ASSASSIN]: {
    name: 'Assassin',
    [MOVEMENT]: 6,
    [MELEE]: 2,
    [RANGED]: 1,
    [ARMOUR]: 0,
    [BASE]: 32,
    [KEYWORDS]: [SULTANATE, ELITE, INFILTRATOR],
    [FACTION]: [IRON_SULTANATE]
  },
  [AZEB]: {
    name: 'Azeb',
    [MOVEMENT]: 6,
    [MELEE]: -1,
    [RANGED]: 0,
    [ARMOUR]: 0,
    [BASE]: 25,
    [KEYWORDS]: [SULTANATE],
    [FACTION]: [IRON_SULTANATE]
  },
  [SULTANATE_SAPPER]: {
    name: 'Sapper',
    [MOVEMENT]: 6,
    [MELEE]: 1,
    [RANGED]: 0,
    [ARMOUR]: 0,
    [BASE]: 25,
    [KEYWORDS]: [SULTANATE],
    [FACTION]: [IRON_SULTANATE]
  },
  [LION_OF_JABIR]: {
    name: 'Lion of Jabir',
    [MOVEMENT]: 8,
    [MELEE]: 1,
    [RANGED]: 'N/A',
    [ARMOUR]: 0,
    [BASE]: '30 x 60/50',
    [KEYWORDS]: [SULTANATE, ELITE, FEAR],
    [FACTION]: [IRON_SULTANATE]
  },
  [JANISSARY]: {
    name: 'Janissary',
    [MOVEMENT]: 6,
    [MELEE]: 1,
    [RANGED]: 1,
    [ARMOUR]: 0,
    [BASE]: 32,
    [KEYWORDS]: [SULTANATE, STRONG],
    [FACTION]: [IRON_SULTANATE]
  },
  [BRAZEN_BULL]: {
    name: 'Brazen Bull',
    [MOVEMENT]: 6,
    [MELEE]: 2,
    [RANGED]: 0,
    [ARMOUR]: 0,
    [BASE]: 60,
    [KEYWORDS]: [SULTANATE,FEAR,TOUGH,STRONG],
    [FACTION]: [IRON_SULTANATE]
  },
  [LIEUTENANT]: {
    name: 'Lieutenant',
    [MOVEMENT]: 6,
    [MELEE]: 2,
    [RANGED]: 2,
    [ARMOUR]: 0,
    [BASE]: 32,
    [KEYWORDS]: [ANTIOCH, ELITE, TOUGH, LEADER],
    [FACTION]: [NEW_ANTIOCH]
  },
  [TRENCH_CLERIC]: {
    name: 'Trench Cleric',
    [MOVEMENT]: 6,
    [MELEE]: 1,
    [RANGED]: 1,
    [ARMOUR]: 0,
    [BASE]: 32,
    [KEYWORDS]: [ANTIOCH, ELITE],
    [FACTION]: [NEW_ANTIOCH]
  },
  [SNIPER_PRIEST]: {
    name: 'Sniper Priest',
    [MOVEMENT]: 6,
    [MELEE]: 1,
    [RANGED]: 1,
    [ARMOUR]: 0,
    [BASE]: 32,
    [KEYWORDS]: [ANTIOCH, ELITE],
    [FACTION]: [NEW_ANTIOCH]
  },
  [YEOMAN]: {
    name: 'Yeoman',
    [MOVEMENT]: 6,
    [MELEE]: 0,
    [RANGED]: 0,
    [ARMOUR]: 0,
    [BASE]: 25,
    [KEYWORDS]: [ANTIOCH],
    [FACTION]: [NEW_ANTIOCH]
  },
  [TRENCH_MOLE]: {
    name: 'Trench Mole',
    [MOVEMENT]: 6,
    [MELEE]: 0,
    [RANGED]: 0,
    [ARMOUR]: 0,
    [BASE]: 25,
    [KEYWORDS]: [ANTIOCH, INFILTRATOR],
    [FACTION]: [NEW_ANTIOCH]
  },
  [SHOCKTROOPER]: {
    name: 'Shocktrooper',
    [MOVEMENT]: 6,
    [MELEE]: 1,
    [RANGED]: 0,
    [ARMOUR]: 0,
    [BASE]: 25,
    [KEYWORDS]: [ANTIOCH],
    [FACTION]: [NEW_ANTIOCH]
  },
  [COMBAT_ENGINEER]: {
    name: 'Combat Engineer',
    [MOVEMENT]: 6,
    [MELEE]: 0,
    [RANGED]: 1,
    [ARMOUR]: -2,
    [BASE]: 25,
    [KEYWORDS]: [ANTIOCH],
    [FACTION]: [NEW_ANTIOCH]
  },
  [MECHANIZED_HEAVY_INFANTRY]: {
    name: 'Heavy Infantry',
    [MOVEMENT]: 6,
    [MELEE]: 0,
    [RANGED]: 1,
    [ARMOUR]: -2,
    [BASE]: '32/40',
    [KEYWORDS]: [ANTIOCH, STRONG],
    [FACTION]: [NEW_ANTIOCH]
  },
  [COMBAT_MEDIC]: {
    name: 'Medic',
    [MOVEMENT]: 6,
    [MELEE]: 0,
    [RANGED]: 0,
    [ARMOUR]: -1,
    [BASE]: 25,
    [KEYWORDS]: [ANTIOCH],
    [FACTION]: [NEW_ANTIOCH]
  },
  [LORD_OF_TUMOURS]: {
    name: 'Lord of Tumours',
    [MOVEMENT]: 6,
    [MELEE]: 4,
    [RANGED]: 1,
    [ARMOUR]: 0,
    [BASE]: '40/50',
    [KEYWORDS]: [BLACK_GRAIL,ELITE,TOUGH,STRONG,FEAR,LEADER],
    [FACTION]: [GRAIL_CULT]
  },
  [PLAGUE_KNIGHT]: {
    name: 'Plague Knight',
    [MOVEMENT]: 6,
    [MELEE]: 2,
    [RANGED]: 0,
    [ARMOUR]: 0,
    [BASE]: 32,
    [KEYWORDS]: [BLACK_GRAIL, ELITE, FEAR, STRONG],
    [FACTION]: [GRAIL_CULT]
  },
  [CORPSE_GUARD]: {
    name: 'Corpse Guard',
    [MOVEMENT]: 6,
    [MELEE]: 1,
    [RANGED]: 0,
    [ARMOUR]: 0,
    [BASE]: 32,
    [KEYWORDS]: [BLACK_GRAIL, ELITE, FEAR],
    [FACTION]: [GRAIL_CULT]
  },
  [HOUND_OF_THE_BLACK_GRAIL]: {
    name: 'Hound',
    [MOVEMENT]: 8,
    [MELEE]: 1,
    [RANGED]: 'N/A',
    [ARMOUR]: 0,
    [BASE]: '30 X 60',
    [KEYWORDS]: [BLACK_GRAIL, FEAR],
    [FACTION]: [GRAIL_CULT]
  },
  [GRAIL_THRALL]: {
    name: 'Grail Thrall',
    [MOVEMENT]: 5,
    [MELEE]: -1,
    [RANGED]: 'N/A',
    [ARMOUR]: 0,
    [BASE]: 25,
    [KEYWORDS]: [BLACK_GRAIL, FEAR],
    [FACTION]: [GRAIL_CULT]
  },
  [FLY_THRALL]: {
    name: 'Fly Thrall',
    [MOVEMENT]: '6 / Flying',
    [MELEE]: -1,
    [RANGED]: 'N/A',
    [ARMOUR]: 0,
    [BASE]: 25,
    [KEYWORDS]: [BLACK_GRAIL,FEAR],
    [FACTION]: [GRAIL_CULT]
  },
  [HERALD_OF_BEELZEBUB]: {
    name: 'Herald',
    [MOVEMENT]: '10 / Flying',
    [MELEE]: 0,
    [RANGED]: 0,
    [ARMOUR]: 0,
    [BASE]: 40,
    [KEYWORDS]: [BLACK_GRAIL, FEAR, SKIRMISHER],
    [FACTION]: [GRAIL_CULT]
  },
  [AMALGAM]: {
    name: 'Amalgam',
    [MOVEMENT]: 6,
    [MELEE]: 0,
    [RANGED]: 0,
    [ARMOUR]: 0,
    [BASE]: 60,
    [KEYWORDS]: [BLACK_GRAIL, FEAR, TOUGH, STRONG],
    [FACTION]: [GRAIL_CULT]
  },
  [PRAETOR]: {
    name: 'Praetor',
    [MOVEMENT]: '8 / Flying',
    [MELEE]: 3,
    [RANGED]: 3,
    [ARMOUR]: 0,
    [BASE]: 50,
    [KEYWORDS]: [COURT, DEMONIC, ELITE, TOUGH, STRONG, FEAR, LEADER],
    [FACTION]: [SEVEN_HEADED]
  },
  [SORCERER]: {
    name: 'Sorcerer',
    [MOVEMENT]: '6 / Flying',
    [MELEE]: 1,
    [RANGED]: 1,
    [ARMOUR]: 0,
    [BASE]: 50,
    [KEYWORDS]: [COURT, DEMONIC, ELITE, FEAR],
    [FACTION]: [SEVEN_HEADED]
  },
  [HUNTER_OF_THE_LEFT_HAND_PATH]: {
    name: 'Hunter',
    [MOVEMENT]: 6,
    [MELEE]: 1,
    [RANGED]: 2,
    [ARMOUR]: 0,
    [BASE]: 32,
    [KEYWORDS]: [COURT, DEMONIC, ELITE, INFILTRATOR],
    [FACTION]: [SEVEN_HEADED]
  },
  [HELL_KNIGHT]: {
    name: 'Hell Knight',
    [MOVEMENT]: 6,
    [MELEE]: 2,
    [RANGED]: 0,
    [ARMOUR]: -2,
    [BASE]: 40,
    [KEYWORDS]: [COURT, DEMONIC, ELITE, STRONG],
    [FACTION]: [SEVEN_HEADED]
  },
  [YOKE_FIEND]: {
    name: 'Yoke Fiend',
    [MOVEMENT]: 6,
    [MELEE]: 1,
    [RANGED]: 0,
    [ARMOUR]: 0,
    [BASE]: 32,
    [KEYWORDS]: [COURT, DEMONIC],
    [FACTION]: [SEVEN_HEADED]
  },
  [WRETCHED_C]: {
    name: 'Wretched',
    [MOVEMENT]: 6,
    [MELEE]: -1,
    [RANGED]: -1,
    [ARMOUR]: 0,
    [BASE]: 25,
    [FACTION]: [COURT]
  },
  [PIT_LOCUST]: {
    name: 'Pit Locust',
    [MOVEMENT]: '8 / Flying',
    [MELEE]: 2,
    [RANGED]: 0,
    [ARMOUR]: -2,
    [BASE]: '30 x 60',
    [KEYWORDS]: [COURT, DEMONIC, FEAR],
    [FACTION]: [SEVEN_HEADED]
  },
  [DESECRATED_SAINT]: {
    name: 'Desecrated Saint',
    [MOVEMENT]: 6,
    [MELEE]: 3,
    [RANGED]: 'N/A',
    [ARMOUR]: -3,
    [BASE]: 60,
    [KEYWORDS]: [COURT, DEMONIC, FEAR, TOUGH, STRONG],
    [FACTION]: [SEVEN_HEADED]
  }
};