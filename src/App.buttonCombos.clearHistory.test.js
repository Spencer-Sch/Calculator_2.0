import App from './App';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { configureDataStore } from './hooks-store/data-store';
import { configureHistoryStore } from './hooks-store/history-store';
import { configureRenderStore } from './hooks-store/render-store';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme/theme';

jest.setTimeout(10000);

describe('E2E tests of user-events', () => {
  describe('"clear history" button removes all history cards from the DOM and returns placeholder text.', () => {
    test('click sequence: 1 + 2 = x 3 = clearHistory', async () => {
      configureDataStore();
      configureHistoryStore();
      configureRenderStore();
      render(
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      );

      const numberOneButtonElement = screen.getByRole('button', { name: '1' });
      const numberTwoButtonElement = screen.getByRole('button', { name: '2' });
      const numberThreeButtonElement = screen.getByRole('button', {
        name: '3',
      });
      const additionButtonElement = screen.getByTestId('+');
      const multiplicationButtonElement = screen.getByTestId('x');
      const equalsButtonElement = screen.getByTestId('=');
      const historyClearButtonElement = screen.getByRole('button', {
        name: /clear history/i,
      });

      userEvent.click(numberOneButtonElement);
      userEvent.click(additionButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(equalsButtonElement);
      userEvent.click(multiplicationButtonElement);
      userEvent.click(numberThreeButtonElement);
      userEvent.click(equalsButtonElement);

      const historyCardArea = await waitFor(() =>
        screen.getByTestId('historyCardArea')
      );

      const historyCardsArr1 = await waitFor(() =>
        within(historyCardArea).getAllByRole('listitem')
      );

      const historyCardEquation1 = await waitFor(() =>
        within(historyCardsArr1[0]).getByRole('heading', {
          level: 6,
        })
      );
      const historyCardEquationResult1 = await waitFor(() =>
        within(historyCardsArr1[0]).getByRole('heading', { level: 3 })
      );

      const historyCardEquation2 = await waitFor(() =>
        within(historyCardsArr1[1]).getByRole('heading', {
          level: 6,
        })
      );
      const historyCardEquationResult2 = await waitFor(() =>
        within(historyCardsArr1[1]).getByRole('heading', { level: 3 })
      );

      expect(historyCardEquation1).toHaveTextContent('1 + 2 =');
      expect(historyCardEquationResult1).toHaveTextContent('3');
      expect(historyCardEquation2).toHaveTextContent('3 x 3 =');
      expect(historyCardEquationResult2).toHaveTextContent('9');

      userEvent.click(historyClearButtonElement);

      const historyCardsArr2 = await waitFor(() =>
        within(historyCardArea).queryAllByRole('listitem')
      );

      const historyCardPlaceholderElement = await waitFor(() =>
        within(historyCardArea).getByText('There is no history yet...')
      );

      expect(historyCardsArr2).toHaveLength(0);
      expect(historyCardEquation1).not.toBeInTheDocument();
      expect(historyCardEquationResult1).not.toBeInTheDocument();
      expect(historyCardEquation2).not.toBeInTheDocument();
      expect(historyCardEquationResult2).not.toBeInTheDocument();
      expect(historyCardPlaceholderElement).toBeInTheDocument();
    });
  });
});
