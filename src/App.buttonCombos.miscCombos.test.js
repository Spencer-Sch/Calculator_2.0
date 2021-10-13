import App from './App';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { configureDataStore } from './hooks-store/data-store';
import { configureHistoryStore } from './hooks-store/history-store';
import { configureRenderStore } from './hooks-store/render-store';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme/theme';

describe('E2E tests of user-events', () => {
  describe('button combos that previously caused bugs', () => {
    test('click sequence: 0 +/- 1', async () => {
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

      const numberOneButtonElement = screen.getByRole('button', { name: '0' });
      const positiveNegativeButtonElement = screen.getByTestId('+/-');
      const numberZeroButtonElement = screen.getByRole('button', { name: '1' });

      userEvent.click(numberZeroButtonElement);
      userEvent.click(positiveNegativeButtonElement);
      userEvent.click(numberOneButtonElement);

      expect(equationOutputElement).toHaveTextContent('');
      expect(equationResultOutputElement).toHaveTextContent('1');
    });

    test('click sequence: 6 x 5 = +', async () => {
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

      const numberSixButtonElement = screen.getByRole('button', { name: '6' });
      const numberFiveButtonElement = screen.getByRole('button', { name: '5' });
      const multiplicationButtonElement = screen.getByTestId('x');
      const additionButtonElement = screen.getByTestId('+');
      const equalsButtonElement = screen.getByTestId('=');

      userEvent.click(numberSixButtonElement);
      userEvent.click(multiplicationButtonElement);
      userEvent.click(numberFiveButtonElement);
      userEvent.click(equalsButtonElement);
      userEvent.click(additionButtonElement);

      const historyCard = await waitFor(() => screen.getByRole('listitem'));
      const historyCardEquation = await waitFor(() =>
        within(historyCard).getByRole('heading', {
          level: 6,
        })
      );
      const historyCardEquationResult = await waitFor(() =>
        within(historyCard).getByRole('heading', { level: 3 })
      );

      expect(equationOutputElement).toHaveTextContent('30 +');
      expect(equationResultOutputElement).toHaveTextContent('30');
      expect(historyCardEquation).toHaveTextContent('6 x 5 =');
      expect(historyCardEquationResult).toHaveTextContent('30');
    });

    test('click sequence: 12 + 3 = 2 +', async () => {
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
      const numberThreeButtonElement = screen.getByRole('button', {
        name: '3',
      });
      const additionButtonElement = screen.getByTestId('+');
      const equalsButtonElement = screen.getByTestId('=');

      userEvent.click(numberOneButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(additionButtonElement);
      userEvent.click(numberThreeButtonElement);
      userEvent.click(equalsButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(additionButtonElement);

      const historyCard = await waitFor(() => screen.getByRole('listitem'));
      const historyCardEquation = await waitFor(() =>
        within(historyCard).getByRole('heading', {
          level: 6,
        })
      );
      const historyCardEquationResult = await waitFor(() =>
        within(historyCard).getByRole('heading', { level: 3 })
      );

      expect(equationOutputElement).toHaveTextContent('2 +');
      expect(equationResultOutputElement).toHaveTextContent('2');
      expect(historyCardEquation).toHaveTextContent('12 + 3 =');
      expect(historyCardEquationResult).toHaveTextContent('15');
    });

    test('click sequence: 12 + 3 = 2 + =', async () => {
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
      const numberThreeButtonElement = screen.getByRole('button', {
        name: '3',
      });
      const additionButtonElement = screen.getByTestId('+');
      const equalsButtonElement = screen.getByTestId('=');

      userEvent.click(numberOneButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(additionButtonElement);
      userEvent.click(numberThreeButtonElement);
      userEvent.click(equalsButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(additionButtonElement);
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

      expect(equationOutputElement).toHaveTextContent('2 + 2 =');
      expect(equationResultOutputElement).toHaveTextContent('4');
      expect(historyCardEquation1).toHaveTextContent('12 + 3 =');
      expect(historyCardEquationResult1).toHaveTextContent('15');
      expect(historyCardEquation2).toHaveTextContent('2 + 2 =');
      expect(historyCardEquationResult2).toHaveTextContent('4');
    });

    test('click sequence: 12 + 3 = 2 + 3 =', async () => {
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
      const numberThreeButtonElement = screen.getByRole('button', {
        name: '3',
      });
      const additionButtonElement = screen.getByTestId('+');
      const equalsButtonElement = screen.getByTestId('=');

      userEvent.click(numberOneButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(additionButtonElement);
      userEvent.click(numberThreeButtonElement);
      userEvent.click(equalsButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(additionButtonElement);
      userEvent.click(numberThreeButtonElement);
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

      expect(equationOutputElement).toHaveTextContent('2 + 3 =');
      expect(equationResultOutputElement).toHaveTextContent('5');
      expect(historyCardEquation1).toHaveTextContent('12 + 3 =');
      expect(historyCardEquationResult1).toHaveTextContent('15');
      expect(historyCardEquation2).toHaveTextContent('2 + 3 =');
      expect(historyCardEquationResult2).toHaveTextContent('5');
    });

    test('click sequence: 12 + 3 = % =', async () => {
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
      const numberThreeButtonElement = screen.getByRole('button', {
        name: '3',
      });
      const additionButtonElement = screen.getByTestId('+');
      const percentButtonElement = screen.getByTestId('%');
      const equalsButtonElement = screen.getByTestId('=');

      userEvent.click(numberOneButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(additionButtonElement);
      userEvent.click(numberThreeButtonElement);
      userEvent.click(equalsButtonElement);
      userEvent.click(percentButtonElement);
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

      expect(equationOutputElement).toHaveTextContent('2.25 + 3 =');
      expect(equationResultOutputElement).toHaveTextContent('5.25');
      expect(historyCardEquation1).toHaveTextContent('12 + 3 =');
      expect(historyCardEquationResult1).toHaveTextContent('15');
      expect(historyCardEquation2).toHaveTextContent('2.25 + 3 =');
      expect(historyCardEquationResult2).toHaveTextContent('5.25');
    });

    test('click sequence: 12 + 3 = % +', async () => {
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
      const numberThreeButtonElement = screen.getByRole('button', {
        name: '3',
      });
      const additionButtonElement = screen.getByTestId('+');
      const percentButtonElement = screen.getByTestId('%');
      const equalsButtonElement = screen.getByTestId('=');

      userEvent.click(numberOneButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(additionButtonElement);
      userEvent.click(numberThreeButtonElement);
      userEvent.click(equalsButtonElement);
      userEvent.click(percentButtonElement);
      userEvent.click(additionButtonElement);

      const historyCard = await waitFor(() => screen.getByRole('listitem'));
      const historyCardEquation = await waitFor(() =>
        within(historyCard).getByRole('heading', {
          level: 6,
        })
      );
      const historyCardEquationResult = await waitFor(() =>
        within(historyCard).getByRole('heading', { level: 3 })
      );

      expect(equationOutputElement).toHaveTextContent('2.25 +');
      expect(equationResultOutputElement).toHaveTextContent('2.25');
      expect(historyCardEquation).toHaveTextContent('12 + 3 =');
      expect(historyCardEquationResult).toHaveTextContent('15');
    });

    test('click sequence: 12 + 3 = % 2 =', async () => {
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
      const numberThreeButtonElement = screen.getByRole('button', {
        name: '3',
      });
      const additionButtonElement = screen.getByTestId('+');
      const percentButtonElement = screen.getByTestId('%');
      const equalsButtonElement = screen.getByTestId('=');

      userEvent.click(numberOneButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(additionButtonElement);
      userEvent.click(numberThreeButtonElement);
      userEvent.click(equalsButtonElement);
      userEvent.click(percentButtonElement);
      userEvent.click(numberTwoButtonElement);
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

      expect(equationOutputElement).toHaveTextContent('2 + 3 =');
      expect(equationResultOutputElement).toHaveTextContent('5');
      expect(historyCardEquation1).toHaveTextContent('12 + 3 =');
      expect(historyCardEquationResult1).toHaveTextContent('15');
      expect(historyCardEquation2).toHaveTextContent('2 + 3 =');
      expect(historyCardEquationResult2).toHaveTextContent('5');
    });

    test('click sequence: 12 + 3 = % 2 + =', async () => {
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
      const numberThreeButtonElement = screen.getByRole('button', {
        name: '3',
      });
      const additionButtonElement = screen.getByTestId('+');
      const percentButtonElement = screen.getByTestId('%');
      const equalsButtonElement = screen.getByTestId('=');

      userEvent.click(numberOneButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(additionButtonElement);
      userEvent.click(numberThreeButtonElement);
      userEvent.click(equalsButtonElement);
      userEvent.click(percentButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(additionButtonElement);
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

      expect(equationOutputElement).toHaveTextContent('2 + 2 =');
      expect(equationResultOutputElement).toHaveTextContent('4');
      expect(historyCardEquation1).toHaveTextContent('12 + 3 =');
      expect(historyCardEquationResult1).toHaveTextContent('15');
      expect(historyCardEquation2).toHaveTextContent('2 + 2 =');
      expect(historyCardEquationResult2).toHaveTextContent('4');
    });

    test('click sequence: 12 + 3 = % 2 + 3 =', async () => {
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
      const numberThreeButtonElement = screen.getByRole('button', {
        name: '3',
      });
      const additionButtonElement = screen.getByTestId('+');
      const percentButtonElement = screen.getByTestId('%');
      const equalsButtonElement = screen.getByTestId('=');

      userEvent.click(numberOneButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(additionButtonElement);
      userEvent.click(numberThreeButtonElement);
      userEvent.click(equalsButtonElement);
      userEvent.click(percentButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(additionButtonElement);
      userEvent.click(numberThreeButtonElement);
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

      expect(equationOutputElement).toHaveTextContent('2 + 3 =');
      expect(equationResultOutputElement).toHaveTextContent('5');
      expect(historyCardEquation1).toHaveTextContent('12 + 3 =');
      expect(historyCardEquationResult1).toHaveTextContent('15');
      expect(historyCardEquation2).toHaveTextContent('2 + 3 =');
      expect(historyCardEquationResult2).toHaveTextContent('5');
    });
  });
});
