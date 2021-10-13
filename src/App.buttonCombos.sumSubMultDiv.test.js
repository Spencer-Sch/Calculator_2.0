import App from './App';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { configureDataStore } from './hooks-store/data-store';
import { configureHistoryStore } from './hooks-store/history-store';
import { configureRenderStore } from './hooks-store/render-store';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme/theme';

describe('E2E tests of user-events', () => {
  describe('button combos which trigger sumSubMultDivLogic render accurately', () => {
    test('click sequence: 1 + 2 = -', async () => {
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

      const numberOneButtonElement = screen.getByRole('button', { name: '1' });
      const numberTwoButtonElement = screen.getByRole('button', { name: '2' });
      const additionButtonElement = screen.getByTestId('+');
      const subtractionButtonElement = screen.getByTestId('-');
      const equalsButtonElement = screen.getByTestId('=');

      userEvent.click(numberOneButtonElement);
      userEvent.click(additionButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(equalsButtonElement);
      userEvent.click(subtractionButtonElement);

      const historyCard = await waitFor(() => screen.getByRole('listitem'));
      const historyCardEquation = await waitFor(() =>
        within(historyCard).getByRole('heading', {
          level: 6,
        })
      );
      const historyCardEquationResult = await waitFor(() =>
        within(historyCard).getByRole('heading', { level: 3 })
      );

      expect(equationOutputElement).toHaveTextContent('3 -');
      expect(equationResultOutputElement).toHaveTextContent('3');
      expect(historyCardEquation).toHaveTextContent('1 + 2 =');
      expect(historyCardEquationResult).toHaveTextContent('3');
    });

    test('click sequence: +', () => {
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

    test('click sequence: 1 +', () => {
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

      const numberOneButtonElement = screen.getByRole('button', { name: '1' });
      const additionButtonElement = screen.getByTestId('+');

      userEvent.click(numberOneButtonElement);
      userEvent.click(additionButtonElement);

      expect(equationOutputElement).toHaveTextContent('1 +');
      expect(equationResultOutputElement).toHaveTextContent('1');
    });

    test('click sequence: 1 + -', () => {
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

      const numberOneButtonElement = screen.getByRole('button', { name: '1' });
      const additionButtonElement = screen.getByTestId('+');
      const subtractionButtonElement = screen.getByTestId('-');

      userEvent.click(numberOneButtonElement);
      userEvent.click(additionButtonElement);
      userEvent.click(subtractionButtonElement);

      expect(equationOutputElement).toHaveTextContent('1 -');
      expect(equationResultOutputElement).toHaveTextContent('1');
    });

    test('click sequence: 1 - x', () => {
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

      const numberOneButtonElement = screen.getByRole('button', { name: '1' });
      const subtractionButtonElement = screen.getByTestId('-');
      const multiplicationButtonElement = screen.getByTestId('x');

      userEvent.click(numberOneButtonElement);
      userEvent.click(subtractionButtonElement);
      userEvent.click(multiplicationButtonElement);

      expect(equationOutputElement).toHaveTextContent('1 x');
      expect(equationResultOutputElement).toHaveTextContent('1');
    });

    test('click sequence: 1 x /', () => {
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

      const numberOneButtonElement = screen.getByRole('button', { name: '1' });
      const multiplicationButtonElement = screen.getByTestId('x');
      const divisionButtonElement = screen.getByTestId('/');

      userEvent.click(numberOneButtonElement);
      userEvent.click(multiplicationButtonElement);
      userEvent.click(divisionButtonElement);

      expect(equationOutputElement).toHaveTextContent('1 /');
      expect(equationResultOutputElement).toHaveTextContent('1');
    });
  });
});
