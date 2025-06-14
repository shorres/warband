import PropTypes from 'prop-types';
import { ABILITIES, ARMOUR, BASE, KEYWORDS, MELEE, MOVEMENT, RANGED, FACTION, EQUIPMENT } from '../data/Misc';
import { abilities } from '../data/UnitAbilities';
import { factionTypes } from '../data/Factions';
import { keywordList } from '../data/Keywords';
import { itemList } from '../data/Items';

export default {
  name: PropTypes.string,
  [MOVEMENT]: PropTypes.string.isRequired,
  [MELEE]: PropTypes.string.isRequired,
  [RANGED]: PropTypes.string.isRequired,
  [ARMOUR]: PropTypes.number.isRequired,
  [BASE]: PropTypes.string.isRequired,
  [KEYWORDS]: PropTypes.arrayOf(PropTypes.oneOf(keywordList)), 
  [FACTION]: PropTypes.arrayOf(PropTypes.oneOf(factionTypes)),
  [ABILITIES]: PropTypes.arrayOf(PropTypes.oneOf(abilities)),
  [EQUIPMENT]: PropTypes.arrayOf(PropTypes.oneOf(itemList))
};