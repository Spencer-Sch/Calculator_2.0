import HistoryCard from '../HistoryCard';
import { render, screen } from '@testing-library/react';
import { configureDataStore } from '../../../hooks-store/data-store';
import { configureHistoryStore } from '../../../hooks-store/history-store';
import { configureRenderStore } from '../../../hooks-store/render-store';

configureDataStore();
configureHistoryStore();
configureRenderStore();

describe('HistoryCard component', () => {
  test('renders HistoryCard in default state', () => {
    render(
      <HistoryCard key={1} id={1} equation="1 + 2 =" equationResult="3" />
    );
    const HistoryCardElement = screen.getByRole('listitem');
    expect(HistoryCardElement).toBeInTheDocument();
  });
});
