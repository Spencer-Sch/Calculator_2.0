import App from '../../App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { configureDataStore } from '../../../hooks-store/data-store';
import { configureHistoryStore } from '../../../hooks-store/history-store';
import { configureRenderStore } from '../../../hooks-store/render-store';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../../theme/theme';

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

    test('click on "5" button', () => {
      configureDataStore();
      configureHistoryStore();
      configureRenderStore();
      render(
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      );

      const numberFiveButtonElement = screen.getByRole('button', {
        name: '5',
      });
      const equationResultOutputElement = screen.getByRole('heading', {
        level: 1,
        name: '0',
      });

      userEvent.click(numberFiveButtonElement);

      expect(equationResultOutputElement).toHaveTextContent('5');
    });

    test('click on "6" button', () => {
      configureDataStore();
      configureHistoryStore();
      configureRenderStore();
      render(
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      );

      const numberSixButtonElement = screen.getByRole('button', {
        name: '6',
      });
      const equationResultOutputElement = screen.getByRole('heading', {
        level: 1,
        name: '0',
      });

      userEvent.click(numberSixButtonElement);

      expect(equationResultOutputElement).toHaveTextContent('6');
    });

    test('click on "7" button', () => {
      configureDataStore();
      configureHistoryStore();
      configureRenderStore();
      render(
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      );

      const numberSevenButtonElement = screen.getByRole('button', {
        name: '7',
      });
      const equationResultOutputElement = screen.getByRole('heading', {
        level: 1,
        name: '0',
      });

      userEvent.click(numberSevenButtonElement);

      expect(equationResultOutputElement).toHaveTextContent('7');
    });

    test('click on "8" button', () => {
      configureDataStore();
      configureHistoryStore();
      configureRenderStore();
      render(
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      );

      const numberEightButtonElement = screen.getByRole('button', {
        name: '8',
      });
      const equationResultOutputElement = screen.getByRole('heading', {
        level: 1,
        name: '0',
      });

      userEvent.click(numberEightButtonElement);

      expect(equationResultOutputElement).toHaveTextContent('8');
    });

    test('click on "9" button', () => {
      configureDataStore();
      configureHistoryStore();
      configureRenderStore();
      render(
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      );

      const numberNineButtonElement = screen.getByRole('button', {
        name: '9',
      });
      const equationResultOutputElement = screen.getByRole('heading', {
        level: 1,
        name: '0',
      });

      userEvent.click(numberNineButtonElement);

      expect(equationResultOutputElement).toHaveTextContent('9');
    });

    test('click on "0" button', () => {
      configureDataStore();
      configureHistoryStore();
      configureRenderStore();
      render(
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      );

      const numberZeroButtonElement = screen.getByRole('button', {
        name: '0',
      });
      const equationResultOutputElement = screen.getByRole('heading', {
        level: 1,
        name: '0',
      });

      userEvent.click(numberZeroButtonElement);

      expect(equationResultOutputElement).toHaveTextContent('0');
    });
  });
});
