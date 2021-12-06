import HistoryCardArea from '../HistoryCardArea';
import { render, screen } from '@testing-library/react';
import { configureDataStore } from '../../../hooks-store/data-store';
import { configureHistoryStore } from '../../../hooks-store/history-store';
import { configureRenderStore } from '../../../hooks-store/render-store';

configureDataStore();
configureHistoryStore();
configureRenderStore();

describe('HistoryCardArea component', () => {
  test('renders HistoryCardArea', () => {
    render(<HistoryCardArea />);

    const historyCardAreaElement = screen.getByTestId('historyCardArea');
    expect(historyCardAreaElement).toBeInTheDocument();
  });

  test('renders HistoryCardArea placeholder text', () => {
    render(<HistoryCardArea />);

    const historyCardPlaceholderElement = screen.getByText(
      'There is no history yet...'
    );
    expect(historyCardPlaceholderElement).toBeInTheDocument();
  });
});
