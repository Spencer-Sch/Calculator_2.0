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
  { id: 1, icon: <FontAwesomeIcon icon={faPercentage} /> },
  { id: 2, icon: 'CE' },
  { id: 3, icon: 'C' },
  { id: 4, icon: <FontAwesomeIcon icon={faBackspace} /> },
  { id: 5, icon: null },
  { id: 6, icon: null },
  { id: 7, icon: null },
  { id: 8, icon: <FontAwesomeIcon icon={faDivide} /> },
  { id: 9, icon: '7' },
  { id: 10, icon: '8' },
  { id: 11, icon: '9' },
  { id: 12, icon: <FontAwesomeIcon icon={faTimes} /> },
  { id: 13, icon: '4' },
  { id: 14, icon: '5' },
  { id: 15, icon: '6' },
  { id: 16, icon: <FontAwesomeIcon icon={faMinus} /> },
  { id: 17, icon: '1' },
  { id: 18, icon: '2' },
  { id: 19, icon: '3' },
  { id: 20, icon: <FontAwesomeIcon icon={faPlus} /> },
  { id: 21, icon: '+/-' },
  { id: 22, icon: '0' },
  { id: 23, icon: '.' },
  { id: 24, icon: <FontAwesomeIcon icon={faEquals} /> },
];

export default buttonMap;
