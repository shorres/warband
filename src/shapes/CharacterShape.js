import PropTypes from 'prop-types';
import { ARMOUR, BASE, KEYWORDS, MELEE, MOVEMENT, RANGED } from '../data/Misc';

export default {
  name: PropTypes.string,
  [MOVEMENT]: PropTypes.number.isRequired,
  [MELEE]: PropTypes.number.isRequired,
  [RANGED]: PropTypes.number.isRequired,
  [ARMOUR]: PropTypes.number.isRequired,
  [BASE]: PropTypes.number.isRequired,
  [KEYWORDS]: PropTypes.string.isRequired,
};
