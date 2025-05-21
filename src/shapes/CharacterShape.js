import PropTypes from 'prop-types';
import { ABILITIES, ARMOUR, BASE, KEYWORDS, MELEE, MOVEMENT, RANGED, FACTION } from '../data/Misc';
import { abilities } from '../data/CharacterFeatures';
import { factionTypes } from '../data/Factions';

export default {
  name: PropTypes.string,
  [MOVEMENT]: PropTypes.number.isRequired,
  [MELEE]: PropTypes.number.isRequired,
  [RANGED]: PropTypes.number.isRequired,
  [ARMOUR]: PropTypes.number.isRequired,
  [BASE]: PropTypes.number.isRequired,
  [KEYWORDS]: PropTypes.string.isRequired,
  [FACTION]: PropTypes.oneOf(factionTypes),
  [ABILITIES]: PropTypes.arrayOf(PropTypes.oneOf(abilities))
};
