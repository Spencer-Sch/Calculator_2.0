import App from './App';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { configureDataStore } from './hooks-store/data-store';
import { configureHistoryStore } from './hooks-store/history-store';
import { configureRenderStore } from './hooks-store/render-store';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme/theme';

describe('E2E tests of user-events', () => {
  describe('button combos involving backspace render accurately', () => {
    test('click sequence: 1 2 + <-', () => {
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
      const backspaceButtonElement = screen.getByTestId('<-');

      userEvent.click(numberOneButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(additionButtonElement);
      userEvent.click(backspaceButtonElement);

      expect(equationOutputElement).toHaveTextContent('12 +');
      expect(equationResultOutputElement).toHaveTextContent('12');
    });

    test('click sequence: 1 + 2 = <-', async () => {
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
      const backspaceButtonElement = screen.getByTestId('<-');

      userEvent.click(numberOneButtonElement);
      userEvent.click(additionButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(equalsButtonElement);
      userEvent.click(backspaceButtonElement);

      const historyCard = await waitFor(() => screen.getByRole('listitem'));
      const historyCardEquation = await waitFor(() =>
        within(historyCard).getByRole('heading', {
          level: 6,
        })
      );
      const historyCardEquationResult = await waitFor(() =>
        within(historyCard).getByRole('heading', { level: 3 })
      );

      expect(equationOutputElement).toHaveTextContent('1 + 2 =');
      expect(equationResultOutputElement).toHaveTextContent('3');
      expect(historyCardEquation).toHaveTextContent('1 + 2 =');
      expect(historyCardEquationResult).toHaveTextContent('3');
    });

    test('click sequence: 1 2 + 3 4 <-', () => {
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
      const numberFourButtonElement = screen.getByRole('button', { name: '4' });
      const additionButtonElement = screen.getByTestId('+');
      const backspaceButtonElement = screen.getByTestId('<-');

      userEvent.click(numberOneButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(additionButtonElement);
      userEvent.click(numberThreeButtonElement);
      userEvent.click(numberFourButtonElement);
      userEvent.click(backspaceButtonElement);

      expect(equationOutputElement).toHaveTextContent('12 +');
      expect(equationResultOutputElement).toHaveTextContent('3');
    });

    test('click sequence: 1 2 + 3 <-', () => {
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
      const backspaceButtonElement = screen.getByTestId('<-');

      userEvent.click(numberOneButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(additionButtonElement);
      userEvent.click(numberThreeButtonElement);
      userEvent.click(backspaceButtonElement);

      expect(equationOutputElement).toHaveTextContent('12 +');
      expect(equationResultOutputElement).toHaveTextContent('0');
    });

    test('click sequence: . <-', () => {
      configureDataStore();
      configureHistoryStore();
      configureRenderStore();
      render(
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      );

      const equationResultOutputElement = screen.getByRole('heading', {
        level: 1,
        name: '0',
      });
      const decimalButtonElement = screen.getByTestId('.');
      const backspaceButtonElement = screen.getByTestId('<-');

      userEvent.click(decimalButtonElement);
      userEvent.click(backspaceButtonElement);

      expect(equationResultOutputElement).toHaveTextContent('0');
    });

    test('click sequence: 1 . <-', () => {
      configureDataStore();
      configureHistoryStore();
      configureRenderStore();
      render(
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      );

      const equationResultOutputElement = screen.getByRole('heading', {
        level: 1,
        name: '0',
      });
      const numberOneButtonElement = screen.getByRole('button', { name: '1' });
      const decimalButtonElement = screen.getByTestId('.');
      const backspaceButtonElement = screen.getByTestId('<-');

      userEvent.click(numberOneButtonElement);
      userEvent.click(decimalButtonElement);
      userEvent.click(backspaceButtonElement);

      expect(equationResultOutputElement).toHaveTextContent('1');
    });

    test('click sequence: 1 . 2 <-', () => {
      configureDataStore();
      configureHistoryStore();
      configureRenderStore();
      render(
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      );

      const equationResultOutputElement = screen.getByRole('heading', {
        level: 1,
        name: '0',
      });
      const numberOneButtonElement = screen.getByRole('button', { name: '1' });
      const numberTwoButtonElement = screen.getByRole('button', { name: '2' });
      const decimalButtonElement = screen.getByTestId('.');
      const backspaceButtonElement = screen.getByTestId('<-');

      userEvent.click(numberOneButtonElement);
      userEvent.click(decimalButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(backspaceButtonElement);

      expect(equationResultOutputElement).toHaveTextContent('1.');
    });

    test('click sequence: 1 . 2 3 <-', () => {
      configureDataStore();
      configureHistoryStore();
      configureRenderStore();
      render(
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      );

      const equationResultOutputElement = screen.getByRole('heading', {
        level: 1,
        name: '0',
      });
      const numberOneButtonElement = screen.getByRole('button', { name: '1' });
      const numberTwoButtonElement = screen.getByRole('button', { name: '2' });
      const numberThreeButtonElement = screen.getByRole('button', {
        name: '3',
      });
      const decimalButtonElement = screen.getByTestId('.');
      const backspaceButtonElement = screen.getByTestId('<-');

      userEvent.click(numberOneButtonElement);
      userEvent.click(decimalButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(numberThreeButtonElement);
      userEvent.click(backspaceButtonElement);

      expect(equationResultOutputElement).toHaveTextContent('1.2');
    });
  });
});
