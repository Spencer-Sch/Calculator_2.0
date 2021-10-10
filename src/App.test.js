import App from './App';
import { render, screen } from '@testing-library/react';
import { configureDataStore } from './hooks-store/data-store';
import { configureHistoryStore } from './hooks-store/history-store';
import { configureRenderStore } from './hooks-store/render-store';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme/theme';

describe('App component', () => {
  describe('renders foundational components', () => {
    test('renders App component', () => {
      configureDataStore();
      configureHistoryStore();
      configureRenderStore();
      render(
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      );
      const historySectionElement = screen.getByTestId('app');
      expect(historySectionElement).toBeInTheDocument();
    });

    test('renders CalculatorSection inside of App component', () => {
      configureDataStore();
      configureHistoryStore();
      configureRenderStore();
      render(
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      );
      const calculatorSectionElement = screen.getByTestId('calculatorSection');
      expect(calculatorSectionElement).toBeInTheDocument();
    });

    test('renders HistorySection inside of App component', () => {
      configureDataStore();
      configureHistoryStore();
      configureRenderStore();
      render(
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      );
      const historySectionElement = screen.getByTestId('historySection');
      expect(historySectionElement).toBeInTheDocument();
    });
  });
});
