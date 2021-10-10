import App from './App';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { configureDataStore } from './hooks-store/data-store';
import { configureHistoryStore } from './hooks-store/history-store';
import { configureRenderStore } from './hooks-store/render-store';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme/theme';

describe('E2E tests of user-events', () => {
  describe('operator button events render accurately', () => {
    test('click on "+" button', () => {
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

      const equationOutputElement = screen.getByTestId('equationOutputH3');

      const additionButtonElement = screen.getByTestId('+');
      userEvent.click(additionButtonElement);

      expect(equationOutputElement).toHaveTextContent('0 +');
      expect(equationResultOutputElement).toHaveTextContent('0');
    });

    // test('1 + 2 =', () => {
    //   configureDataStore();
    //   configureHistoryStore();
    //   configureRenderStore();
    //   render(
    //     <ThemeProvider theme={theme}>
    //       <App />
    //     </ThemeProvider>
    //   );

    //   const equationResultOutputElement = screen.getByRole('heading', {
    //     level: 1,
    //     name: '0',
    //   });

    //   const equationOutputElement = screen.getByTestId('equationOutputH3');

    //   const numberOneButtonElement = screen.getByRole('button', {
    //     name: '1',
    //   });
    //   const numberTwoButtonElement = screen.getByRole('button', {
    //     name: '2',
    //   });
    //   const additionButtonElement = screen.getByTestId('+');
    //   const equalsButtonElement = screen.getByTestId('=');

    //   userEvent.click(numberOneButtonElement);
    //   userEvent.click(additionButtonElement);
    //   userEvent.click(numberTwoButtonElement);
    //   userEvent.click(equalsButtonElement);

    //   expect(equationOutputElement).toHaveTextContent('1 +');
    //   expect(equationResultOutputElement).toHaveTextContent('1');
    // });

    // test('click on "3" button', () => {
    //   configureDataStore();
    //   configureHistoryStore();
    //   configureRenderStore();
    //   render(
    //     <ThemeProvider theme={theme}>
    //       <App />
    //     </ThemeProvider>
    //   );

    //   const numberThreeButtonElement = screen.getByRole('button', {
    //     name: '3',
    //   });
    //   const equationResultOutputElement = screen.getByRole('heading', {
    //     level: 1,
    //     name: '0',
    //   });

    //   userEvent.click(numberThreeButtonElement);
    //   expect(equationResultOutputElement).toHaveTextContent('3');
    // });

    // test('click on "4" button', () => {
    //   configureDataStore();
    //   configureHistoryStore();
    //   configureRenderStore();
    //   render(
    //     <ThemeProvider theme={theme}>
    //       <App />
    //     </ThemeProvider>
    //   );

    //   const numberFourButtonElement = screen.getByRole('button', {
    //     name: '4',
    //   });
    //   const equationResultOutputElement = screen.getByRole('heading', {
    //     level: 1,
    //     name: '0',
    //   });

    //   userEvent.click(numberFourButtonElement);
    //   expect(equationResultOutputElement).toHaveTextContent('4');
    // });

    // test('click on "5" button', () => {
    //   configureDataStore();
    //   configureHistoryStore();
    //   configureRenderStore();
    //   render(
    //     <ThemeProvider theme={theme}>
    //       <App />
    //     </ThemeProvider>
    //   );

    //   const numberFiveButtonElement = screen.getByRole('button', {
    //     name: '5',
    //   });
    //   const equationResultOutputElement = screen.getByRole('heading', {
    //     level: 1,
    //     name: '0',
    //   });

    //   userEvent.click(numberFiveButtonElement);
    //   expect(equationResultOutputElement).toHaveTextContent('5');
    // });
  });
});
