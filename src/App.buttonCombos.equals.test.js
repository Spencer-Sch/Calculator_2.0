import App from './App';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { configureDataStore } from './hooks-store/data-store';
import { configureHistoryStore } from './hooks-store/history-store';
import { configureRenderStore } from './hooks-store/render-store';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme/theme';

describe('E2E tests of user-events', () => {
  describe('button combos which trigger equalsLogic render accurately', () => {
    test('click sequence: 1 =', async () => {
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
      const equalsButtonElement = screen.getByTestId('=');

      userEvent.click(numberOneButtonElement);
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

      expect(equationOutputElement).toHaveTextContent('1 = 1');
      expect(equationResultOutputElement).toHaveTextContent('1');
      expect(historyCardEquation).toHaveTextContent('1 = 1');
      expect(historyCardEquationResult).toHaveTextContent('1');
    });

    test('click sequence: 1 + 2 = 4', async () => {
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
      const numberFourButtonElement = screen.getByRole('button', { name: '4' });
      const additionButtonElement = screen.getByTestId('+');
      const equalsButtonElement = screen.getByTestId('=');

      userEvent.click(numberOneButtonElement);
      userEvent.click(additionButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(equalsButtonElement);
      userEvent.click(numberFourButtonElement);

      const historyCard = await waitFor(() => screen.getByRole('listitem'));
      const historyCardEquation = await waitFor(() =>
        within(historyCard).getByRole('heading', {
          level: 6,
        })
      );
      const historyCardEquationResult = await waitFor(() =>
        within(historyCard).getByRole('heading', { level: 3 })
      );

      expect(equationOutputElement).toHaveTextContent('');
      expect(equationResultOutputElement).toHaveTextContent('4');
      expect(historyCardEquation).toHaveTextContent('1 + 2 =');
      expect(historyCardEquationResult).toHaveTextContent('3');
    });

    test('click sequence: 1 + 2 = 4 =', async () => {
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
      const numberFourButtonElement = screen.getByRole('button', { name: '4' });
      const additionButtonElement = screen.getByTestId('+');
      const equalsButtonElement = screen.getByTestId('=');

      userEvent.click(numberOneButtonElement);
      userEvent.click(additionButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(equalsButtonElement);
      userEvent.click(numberFourButtonElement);
      userEvent.click(equalsButtonElement);

      const historyCardArea = await waitFor(() => screen.getByRole('list'));

      const historyCardsArr = await waitFor(() =>
        within(historyCardArea).getAllByRole('listitem')
      );

      const historyCardEquation1 = await waitFor(() =>
        within(historyCardsArr[0]).getByRole('heading', {
          level: 6,
        })
      );
      const historyCardEquationResult1 = await waitFor(() =>
        within(historyCardsArr[0]).getByRole('heading', { level: 3 })
      );

      const historyCardEquation2 = await waitFor(() =>
        within(historyCardsArr[1]).getByRole('heading', {
          level: 6,
        })
      );
      const historyCardEquationResult2 = await waitFor(() =>
        within(historyCardsArr[1]).getByRole('heading', { level: 3 })
      );

      expect(equationOutputElement).toHaveTextContent('4 + 2 =');
      expect(equationResultOutputElement).toHaveTextContent('6');
      expect(historyCardEquation1).toHaveTextContent('1 + 2 =');
      expect(historyCardEquationResult1).toHaveTextContent('3');
      expect(historyCardEquation2).toHaveTextContent('4 + 2 =');
      expect(historyCardEquationResult2).toHaveTextContent('6');
    });

    test('click sequence: 1 + 2 = =', async () => {
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
      const equalsButtonElement = screen.getByTestId('=');

      userEvent.click(numberOneButtonElement);
      userEvent.click(additionButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(equalsButtonElement);
      userEvent.click(equalsButtonElement);

      const historyCardArea = await waitFor(() => screen.getByRole('list'));

      const historyCardsArr = await waitFor(() =>
        within(historyCardArea).getAllByRole('listitem')
      );

      const historyCardEquation1 = await waitFor(() =>
        within(historyCardsArr[0]).getByRole('heading', {
          level: 6,
        })
      );
      const historyCardEquationResult1 = await waitFor(() =>
        within(historyCardsArr[0]).getByRole('heading', { level: 3 })
      );

      const historyCardEquation2 = await waitFor(() =>
        within(historyCardsArr[1]).getByRole('heading', {
          level: 6,
        })
      );
      const historyCardEquationResult2 = await waitFor(() =>
        within(historyCardsArr[1]).getByRole('heading', { level: 3 })
      );

      expect(equationOutputElement).toHaveTextContent('3 + 2 =');
      expect(equationResultOutputElement).toHaveTextContent('5');
      expect(historyCardEquation1).toHaveTextContent('1 + 2 =');
      expect(historyCardEquationResult1).toHaveTextContent('3');
      expect(historyCardEquation2).toHaveTextContent('3 + 2 =');
      expect(historyCardEquationResult2).toHaveTextContent('5');
    });

    test('click sequence: 1 + =', async () => {
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
      const equalsButtonElement = screen.getByTestId('=');

      userEvent.click(numberOneButtonElement);
      userEvent.click(additionButtonElement);
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

      expect(equationOutputElement).toHaveTextContent('1 + 1 =');
      expect(equationResultOutputElement).toHaveTextContent('2');
      expect(historyCardEquation).toHaveTextContent('1 + 1 =');
      expect(historyCardEquationResult).toHaveTextContent('2');
    });
  });
});
