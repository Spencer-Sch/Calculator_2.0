import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBackspace,
  faDivide,
  faEquals,
  faMinus,
  faPercentage,
  faPlus,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

export const buttonMap = [
  { id: 1, icon: <FontAwesomeIcon icon={faPercentage} />, value: '%' },
  { id: 2, icon: 'CE', value: 'CE' },
  { id: 3, icon: 'C', value: 'C' },
  { id: 4, icon: <FontAwesomeIcon icon={faBackspace} />, value: '<-' },
  { id: 5, icon: null, value: null },
  { id: 6, icon: null, value: null },
  { id: 7, icon: null, value: null },
  { id: 8, icon: <FontAwesomeIcon icon={faDivide} />, value: '/' },
  { id: 9, icon: '7', value: '7' },
  { id: 10, icon: '8', value: '8' },
  { id: 11, icon: '9', value: '9' },
  { id: 12, icon: <FontAwesomeIcon icon={faTimes} />, value: 'x' },
  { id: 13, icon: '4', value: '4' },
  { id: 14, icon: '5', value: '5' },
  { id: 15, icon: '6', value: '6' },
  { id: 16, icon: <FontAwesomeIcon icon={faMinus} />, value: '-' },
  { id: 17, icon: '1', value: '1' },
  { id: 18, icon: '2', value: '2' },
  { id: 19, icon: '3', value: '3' },
  { id: 20, icon: <FontAwesomeIcon icon={faPlus} />, value: '+' },
  { id: 21, icon: '+/-', value: '+/-' },
  { id: 22, icon: '0', value: '0' },
  { id: 23, icon: '.', value: '.' },
  { id: 24, icon: <FontAwesomeIcon icon={faEquals} />, value: '=' },
];

export default buttonMap;
