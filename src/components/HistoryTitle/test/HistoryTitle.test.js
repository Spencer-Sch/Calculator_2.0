import HistoryTitle from '../HistoryTitle';
import { render, screen } from '@testing-library/react';
import { configureDataStore } from '../../../hooks-store/data-store';
import { configureHistoryStore } from '../../../hooks-store/history-store';
import { configureRenderStore } from '../../../hooks-store/render-store';

configureDataStore();
configureHistoryStore();
configureRenderStore();

describe('HistoryTitle component', () => {
  test('renders HistoryTitle', () => {
    render(<HistoryTitle />);

    const HistoryTitleElement = screen.getByText(/history/i);
    expect(HistoryTitleElement).toBeInTheDocument();
  });
});
