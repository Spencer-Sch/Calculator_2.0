import App from './App';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { configureDataStore } from './hooks-store/data-store';
import { configureHistoryStore } from './hooks-store/history-store';
import { configureRenderStore } from './hooks-store/render-store';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme/theme';

describe('E2E tests of user-events', () => {
  describe('operator button events render accurately', () => {
    test('click on "=" button', async () => {
      configureDataStore();
      configureHistoryStore();
      configureRenderStore();
      render(
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      );

      const equationOutputElement = screen.getByTestId('equationOutputH3');
      const equationResultOutputElement = screen.getByRole('heading', {
        level: 1,
        name: '0',
      });
      const equalsButtonElement = screen.getByTestId('=');

      userEvent.click(equalsButtonElement);

      const historyCard = await waitFor(() => screen.getByRole('listitem'));
      const historyCardEquation = await waitFor(() =>
        within(historyCard).getByRole('heading', {
          level: 6,
        })
      );
      const historyCardEquationResult = await waitFor(() =>
        within(historyCard).getByRole('heading', { level: 3 })
      );

      expect(equationOutputElement).toHaveTextContent('0 = 0');
      expect(equationResultOutputElement).toHaveTextContent('0');
      expect(historyCardEquation).toHaveTextContent('0 = 0');
      expect(historyCardEquationResult).toHaveTextContent('0');
    });

    test('click on "+" button', () => {
      configureDataStore();
      configureHistoryStore();
      configureRenderStore();
      render(
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      );

      const equationOutputElement = screen.getByTestId('equationOutputH3');
      const equationResultOutputElement = screen.getByRole('heading', {
        level: 1,
        name: '0',
      });
      const additionButtonElement = screen.getByTestId('+');

      userEvent.click(additionButtonElement);

      expect(equationOutputElement).toHaveTextContent('0 +');
      expect(equationResultOutputElement).toHaveTextContent('0');
    });

    test('click on "-" button', () => {
      configureDataStore();
      configureHistoryStore();
      configureRenderStore();
      render(
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      );

      const equationOutputElement = screen.getByTestId('equationOutputH3');
      const equationResultOutputElement = screen.getByRole('heading', {
        level: 1,
        name: '0',
      });
      const additionButtonElement = screen.getByTestId('-');

      userEvent.click(additionButtonElement);

      expect(equationOutputElement).toHaveTextContent('0 -');
      expect(equationResultOutputElement).toHaveTextContent('0');
    });

    test('click on "x" button', () => {
      configureDataStore();
      configureHistoryStore();
      configureRenderStore();
      render(
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      );

      const equationOutputElement = screen.getByTestId('equationOutputH3');
      const equationResultOutputElement = screen.getByRole('heading', {
        level: 1,
        name: '0',
      });
      const additionButtonElement = screen.getByTestId('x');

      userEvent.click(additionButtonElement);

      expect(equationOutputElement).toHaveTextContent('0 x');
      expect(equationResultOutputElement).toHaveTextContent('0');
    });

    test('click on "/" button', () => {
      configureDataStore();
      configureHistoryStore();
      configureRenderStore();
      render(
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      );

      const equationOutputElement = screen.getByTestId('equationOutputH3');
      const equationResultOutputElement = screen.getByRole('heading', {
        level: 1,
        name: '0',
      });
      const additionButtonElement = screen.getByTestId('/');

      userEvent.click(additionButtonElement);

      expect(equationOutputElement).toHaveTextContent('0 /');
      expect(equationResultOutputElement).toHaveTextContent('0');
    });
  });
});
