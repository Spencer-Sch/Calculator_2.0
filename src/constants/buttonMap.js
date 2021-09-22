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
  {
    id: 1,
    type: 'misc',
    icon: <FontAwesomeIcon icon={faPercentage} />,
    value: '%',
  },
  { id: 2, type: 'misc', icon: 'CE', value: 'CE' },
  { id: 3, type: 'misc', icon: 'C', value: 'C' },
  {
    id: 4,
    type: 'misc',
    icon: <FontAwesomeIcon icon={faBackspace} />,
    value: '<-',
  },
  { id: 5, type: 'disabled', icon: null, value: null },
  { id: 6, type: 'disabled', icon: null, value: null },
  { id: 7, type: 'disabled', icon: null, value: null },
  {
    id: 8,
    type: 'operator',
    icon: <FontAwesomeIcon icon={faDivide} />,
    value: '/',
  },
  { id: 9, type: 'number', icon: '7', value: '7' },
  { id: 10, type: 'number', icon: '8', value: '8' },
  { id: 11, type: 'number', icon: '9', value: '9' },
  {
    id: 12,
    type: 'operator',
    icon: <FontAwesomeIcon icon={faTimes} />,
    value: 'x',
  },
  { id: 13, type: 'number', icon: '4', value: '4' },
  { id: 14, type: 'number', icon: '5', value: '5' },
  { id: 15, type: 'number', icon: '6', value: '6' },
  {
    id: 16,
    type: 'operator',
    icon: <FontAwesomeIcon icon={faMinus} />,
    value: '-',
  },
  { id: 17, type: 'number', icon: '1', value: '1' },
  { id: 18, type: 'number', icon: '2', value: '2' },
  { id: 19, type: 'number', icon: '3', value: '3' },
  {
    id: 20,
    type: 'operator',
    icon: <FontAwesomeIcon icon={faPlus} />,
    value: '+',
  },
  { id: 21, type: 'misc', icon: '+/-', value: '+/-' },
  { id: 22, type: 'number', icon: '0', value: '0' },
  { id: 23, type: 'misc', icon: '.', value: '.' },
  {
    id: 24,
    type: 'operator',
    icon: <FontAwesomeIcon icon={faEquals} />,
    value: '=',
  },
];

export default buttonMap;
