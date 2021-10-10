import App from './App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { configureDataStore } from './hooks-store/data-store';
import { configureHistoryStore } from './hooks-store/history-store';
import { configureRenderStore } from './hooks-store/render-store';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme/theme';

describe('E2E tests of user-events', () => {
  describe('button combos involving backspace render accurately', () => {
    test('click sequence: 1 2 3', () => {
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

      userEvent.click(numberOneButtonElement);
      userEvent.click(numberTwoButtonElement);
      userEvent.click(numberThreeButtonElement);

      expect(equationResultOutputElement).toHaveTextContent('123');
    });

    test('click sequence: 1 (14 times) 2', () => {
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

      for (let i = 0; i < 14; i++) {
        userEvent.click(numberOneButtonElement);
      }
      userEvent.click(numberTwoButtonElement);

      expect(equationResultOutputElement).toHaveTextContent('11111111111111');
    });
  });
});
