import HistoryClearButton from '../HistoryClearButton';
import { render, screen } from '@testing-library/react';
import { configureDataStore } from '../../../hooks-store/data-store';
import { configureHistoryStore } from '../../../hooks-store/history-store';
import { configureRenderStore } from '../../../hooks-store/render-store';

configureDataStore();
configureHistoryStore();
configureRenderStore();

describe('HistoryClearButton component', () => {
  test('renders HistoryClearButton', () => {
    render(<HistoryClearButton />);

    const HistoryClearButtonElement = screen.getByRole('button', {
      name: /clear history/i,
    });
    expect(HistoryClearButtonElement).toBeInTheDocument();
  });
});
