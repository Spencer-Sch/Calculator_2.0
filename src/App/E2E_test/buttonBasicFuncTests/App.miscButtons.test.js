import App from '../../App';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { configureDataStore } from '../../../hooks-store/data-store';
import { configureHistoryStore } from '../../../hooks-store/history-store';
import { configureRenderStore } from '../../../hooks-store/render-store';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../../theme/theme';

describe('E2E tests of user-events', () => {
  describe('misc button events render accurately', () => {
    test('click sequence: 1 %', () => {
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
      const percentButtonElement = screen.getByTestId('%');

      userEvent.click(numberOneButtonElement);
      userEvent.click(percentButtonElement);

      expect(equationResultOutputElement).toHaveTextContent('0');
    });

    test('click sequence: 1 CE', () => {
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
      const clearEntryButtonElement = screen.getByTestId('CE');

      userEvent.click(numberOneButtonElement);
      userEvent.click(clearEntryButtonElement);

      expect(equationResultOutputElement).toHaveTextContent('0');
    });

    test('click sequence: 1 = 2 CE', async () => {
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
      const equalsButtonElement = screen.getByTestId('=');
      const clearEntryButtonElement = screen.getByTestId('CE');

      userEvent.click(numberOneButtonElement);
      userEvent.click(equalsButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(clearEntryButtonElement);

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
      expect(equationResultOutputElement).toHaveTextContent('0');
      expect(historyCardEquation).toHaveTextContent('1 = 1');
      expect(historyCardEquationResult).toHaveTextContent('1');
    });

    test('click sequence: 1 = 2 C', () => {
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
      const equalsButtonElement = screen.getByTestId('=');
      const clearAllButtonElement = screen.getByTestId('C');

      userEvent.click(numberOneButtonElement);
      userEvent.click(equalsButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(clearAllButtonElement);

      expect(equationOutputElement).toHaveTextContent('');
      expect(equationResultOutputElement).toHaveTextContent('0');
    });

    test('click sequence: 1 <-', () => {
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
      const backspaceButtonElement = screen.getByTestId('<-');

      userEvent.click(numberOneButtonElement);
      userEvent.click(backspaceButtonElement);

      expect(equationResultOutputElement).toHaveTextContent('0');
    });

    test('click sequence: 1 2 <-', () => {
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
      const backspaceButtonElement = screen.getByTestId('<-');

      userEvent.click(numberOneButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(backspaceButtonElement);

      expect(equationResultOutputElement).toHaveTextContent('1');
    });

    test('click sequence: 1 +/-', () => {
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
      const positiveNegativeButtonElement = screen.getByTestId('+/-');

      userEvent.click(numberOneButtonElement);
      userEvent.click(positiveNegativeButtonElement);

      expect(equationResultOutputElement).toHaveTextContent('-1');
    });

    test('click sequence: 1 +/- +/-', () => {
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
      const positiveNegativeButtonElement = screen.getByTestId('+/-');

      userEvent.click(numberOneButtonElement);
      userEvent.click(positiveNegativeButtonElement);
      userEvent.click(positiveNegativeButtonElement);

      expect(equationResultOutputElement).toHaveTextContent('1');
    });

    test('click sequence: .', () => {
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

      userEvent.click(decimalButtonElement);

      expect(equationResultOutputElement).toHaveTextContent('0.');
    });

    test('click sequence: . 1', () => {
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

      userEvent.click(decimalButtonElement);
      userEvent.click(numberOneButtonElement);

      expect(equationResultOutputElement).toHaveTextContent('0.1');
    });

    test('click sequence: 1 .', () => {
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

      userEvent.click(numberOneButtonElement);
      userEvent.click(decimalButtonElement);

      expect(equationResultOutputElement).toHaveTextContent('1.');
    });

    test('click sequence: 1 . 2', () => {
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

      userEvent.click(numberOneButtonElement);
      userEvent.click(decimalButtonElement);
      userEvent.click(numberTwoButtonElement);

      expect(equationResultOutputElement).toHaveTextContent('1.2');
    });

    test('click sequence: 1 . 2 .', () => {
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

      userEvent.click(numberOneButtonElement);
      userEvent.click(decimalButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(decimalButtonElement);

      expect(equationResultOutputElement).toHaveTextContent('1.2');
    });
  });
});
