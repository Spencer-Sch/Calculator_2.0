import HistorySection from '../HistorySection';
import { render, screen } from '@testing-library/react';
import { configureDataStore } from '../../../hooks-store/data-store';
import { configureHistoryStore } from '../../../hooks-store/history-store';
import { configureRenderStore } from '../../../hooks-store/render-store';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../../theme/theme';

configureDataStore();
configureHistoryStore();
configureRenderStore();

describe('HistorySection component', () => {
  test('renders HistorySection in default state', () => {
    render(
      <ThemeProvider theme={theme}>
        <HistorySection />
      </ThemeProvider>
    );
    const HistorySectionElement = screen.getByTestId('historySection');
    expect(HistorySectionElement).toBeInTheDocument();
  });

  test('renders HistoryTitle component inside of HistorySection component', () => {
    render(
      <ThemeProvider theme={theme}>
        <HistorySection />
      </ThemeProvider>
    );
    const HistoryTitleElement = screen.getByRole('heading', { level: 3 });
    expect(HistoryTitleElement).toBeInTheDocument();
  });

  test('renders HistoryCardArea component inside of HistorySection component', () => {
    render(
      <ThemeProvider theme={theme}>
        <HistorySection />
      </ThemeProvider>
    );
    const HistoryCardAreaElement = screen.getByTestId('historyCardArea');
    expect(HistoryCardAreaElement).toBeInTheDocument();
  });

  test('renders HistoryClearButton component inside of HistorySection component', () => {
    render(
      <ThemeProvider theme={theme}>
        <HistorySection />
      </ThemeProvider>
    );
    const HistoryClearButtonElement = screen.getByRole('button', {
      name: /clear history/i,
    });
    expect(HistoryClearButtonElement).toBeInTheDocument();
  });
});
