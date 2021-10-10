import App from './App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { configureDataStore } from './hooks-store/data-store';
import { configureHistoryStore } from './hooks-store/history-store';
import { configureRenderStore } from './hooks-store/render-store';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme/theme';

describe('E2E tests of user-events', () => {
  describe('number button events render accurately', () => {
    test('click on "1" button', () => {
      configureDataStore();
      configureHistoryStore();
      configureRenderStore();
      render(
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      );

      const numberOneButtonElement = screen.getByRole('button', {
        name: '1',
      });
      const equationResultOutputElement = screen.getByRole('heading', {
        level: 1,
        name: '0',
      });

      userEvent.click(numberOneButtonElement);
      expect(equationResultOutputElement).toHaveTextContent('1');
    });

    test('click on "2" button', () => {
      configureDataStore();
      configureHistoryStore();
      configureRenderStore();
      render(
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      );

      const numberTwoButtonElement = screen.getByRole('button', {
        name: '2',
      });
      const equationResultOutputElement = screen.getByRole('heading', {
        level: 1,
        name: '0',
      });

      userEvent.click(numberTwoButtonElement);
      expect(equationResultOutputElement).toHaveTextContent('2');
    });

    test('click on "3" button', () => {
      configureDataStore();
      configureHistoryStore();
      configureRenderStore();
      render(
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      );

      const numberThreeButtonElement = screen.getByRole('button', {
        name: '3',
      });
      const equationResultOutputElement = screen.getByRole('heading', {
        level: 1,
        name: '0',
      });

      userEvent.click(numberThreeButtonElement);
      expect(equationResultOutputElement).toHaveTextContent('3');
    });

    test('click on "4" button', () => {
      configureDataStore();
      configureHistoryStore();
      configureRenderStore();
      render(
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      );

      const numberFourButtonElement = screen.getByRole('button', {
        name: '4',
      });
      const equationResultOutputElement = screen.getByRole('heading', {
        level: 1,
        name: '0',
      });

      userEvent.click(numberFourButtonElement);
      expect(equationResultOutputElement).toHaveTextContent('4');
    });
  });
});
