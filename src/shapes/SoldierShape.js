import PropTypes from 'prop-types';

import CharacterShape from "./CharacterShape";
import { abilities } from '../data/CharacterFeatures';

export default PropTypes.shape({
  ...CharacterShape,
  isSpecialist: PropTypes.bool.isRequired,
  cost: PropTypes.number.isRequired,
})