import App from '../../App';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { configureDataStore } from '../../../hooks-store/data-store';
import { configureHistoryStore } from '../../../hooks-store/history-store';
import { configureRenderStore } from '../../../hooks-store/render-store';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../../theme/theme';

describe('E2E tests of user-events', () => {
  describe('button combos which trigger percentLogic render accurately', () => {
    test('click sequence: 12 %', () => {
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
      const percentButtonElement = screen.getByTestId('%');

      userEvent.click(numberOneButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(percentButtonElement);

      expect(equationOutputElement).toHaveTextContent('');
      expect(equationResultOutputElement).toHaveTextContent('0');
    });

    test('click sequence: 12 + %', () => {
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
      const percentButtonElement = screen.getByTestId('%');

      userEvent.click(numberOneButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(additionButtonElement);
      userEvent.click(percentButtonElement);

      expect(equationOutputElement).toHaveTextContent('12 + 1.44');
      expect(equationResultOutputElement).toHaveTextContent('1.44');
    });

    test('click sequence: 12 + 3 %', () => {
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

      userEvent.click(numberOneButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(additionButtonElement);
      userEvent.click(numberThreeButtonElement);
      userEvent.click(percentButtonElement);

      expect(equationOutputElement).toHaveTextContent('12 + 0.36');
      expect(equationResultOutputElement).toHaveTextContent('0.36');
    });

    test('click sequence: 12 + 3 = %', async () => {
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
      const percentButtonElement = screen.getByTestId('%');

      userEvent.click(numberOneButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(additionButtonElement);
      userEvent.click(numberThreeButtonElement);
      userEvent.click(equalsButtonElement);
      userEvent.click(percentButtonElement);

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
      expect(equationResultOutputElement).toHaveTextContent('2.25');
      expect(historyCardEquation).toHaveTextContent('12 + 3 =');
      expect(historyCardEquationResult).toHaveTextContent('15');
    });

    test('click sequence: 12 + % 3', () => {
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

      userEvent.click(numberOneButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(additionButtonElement);
      userEvent.click(percentButtonElement);
      userEvent.click(numberThreeButtonElement);

      expect(equationOutputElement).toHaveTextContent('12 +');
      expect(equationResultOutputElement).toHaveTextContent('3');
    });

    test('click sequence: 12 + % 3 =', async () => {
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
      const percentButtonElement = screen.getByTestId('%');

      userEvent.click(numberOneButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(additionButtonElement);
      userEvent.click(percentButtonElement);
      userEvent.click(numberThreeButtonElement);
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

      expect(equationOutputElement).toHaveTextContent('12 + 3 =');
      expect(equationResultOutputElement).toHaveTextContent('15');
      expect(historyCardEquation).toHaveTextContent('12 + 3 =');
      expect(historyCardEquationResult).toHaveTextContent('15');
    });
  });
});
