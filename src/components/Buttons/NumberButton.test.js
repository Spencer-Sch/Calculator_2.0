import NumberButton from './NumberButton';
import { render, screen } from '@testing-library/react';
import { configureDataStore } from '../../hooks-store/data-store';
import { configureHistoryStore } from '../../hooks-store/history-store';
import { configureRenderStore } from '../../hooks-store/render-store';

configureDataStore();
configureHistoryStore();
configureRenderStore();

describe('NumberButton component', () => {
  test('renders NumberButton component', () => {
    render(<NumberButton key="17" icon="1" value="1" />);

    const numberButtonElement = screen.getByRole('button');
    expect(numberButtonElement).toBeInTheDocument();
  });
});
