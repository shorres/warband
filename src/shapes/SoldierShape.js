import PropTypes from 'prop-types';

import CharacterShape from "./CharacterShape";
import { abilities } from '../data/CharacterFeatures';
import { ABILITIES } from "../data/Misc";

export default PropTypes.shape({
  ...CharacterShape,
  isSpecialist: PropTypes.bool.isRequired,
  cost: PropTypes.number.isRequired,
  [ABILITIES]: PropTypes.arrayOf(PropTypes.oneOf(abilities))
})