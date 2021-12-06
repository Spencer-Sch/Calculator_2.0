import CalculatorButtonArea from '../CalculatorButtonArea';
import { render, screen } from '@testing-library/react';
import { configureDataStore } from '../../../hooks-store/data-store';
import { configureHistoryStore } from '../../../hooks-store/history-store';
import { configureRenderStore } from '../../../hooks-store/render-store';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../../theme/theme';

configureDataStore();
configureHistoryStore();
configureRenderStore();

describe('CalculatorButtonArea component', () => {
  test('renders CalculatorButtonArea in default state', () => {
    render(
      <ThemeProvider theme={theme}>
        <CalculatorButtonArea />
      </ThemeProvider>
    );
    const CalculatorButtonAreaElement = screen.getByTestId('buttonArea');
    expect(CalculatorButtonAreaElement).toBeInTheDocument();
  });

  // testing for Misc buttons
  test('renders "%" button inside CalculatorButtonArea component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CalculatorButtonArea />
      </ThemeProvider>
    );
    const percentButtonElement = screen.getByTestId('%');
    expect(percentButtonElement).toBeInTheDocument();
  });

  test('renders "CE" button inside CalculatorButtonArea component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CalculatorButtonArea />
      </ThemeProvider>
    );
    const clearEntryButtonElement = screen.getByTestId('CE');
    expect(clearEntryButtonElement).toBeInTheDocument();
  });

  test('renders "C" button inside CalculatorButtonArea component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CalculatorButtonArea />
      </ThemeProvider>
    );
    const clearAllButtonElement = screen.getByTestId('C');
    expect(clearAllButtonElement).toBeInTheDocument();
  });

  test('renders backspace button inside CalculatorButtonArea component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CalculatorButtonArea />
      </ThemeProvider>
    );
    const backspaceButtonElement = screen.getByTestId('<-');
    expect(backspaceButtonElement).toBeInTheDocument();
  });

  test('renders "+/-" button inside CalculatorButtonArea component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CalculatorButtonArea />
      </ThemeProvider>
    );
    const positiveNegativeButtonElement = screen.getByTestId('+/-');
    expect(positiveNegativeButtonElement).toBeInTheDocument();
  });

  test('renders "." button inside CalculatorButtonArea component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CalculatorButtonArea />
      </ThemeProvider>
    );
    const decimalButtonElement = screen.getByTestId('.');
    expect(decimalButtonElement).toBeInTheDocument();
  });

  // testing for disabled buttons
  test('renders only three disabled buttons inside CalculatorButtonArea component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CalculatorButtonArea />
      </ThemeProvider>
    );
    const disabledButtonsArr = screen.getAllByTestId('disabled');
    expect(disabledButtonsArr).toHaveLength(3);
  });

  test('renders first disabled buttons inside CalculatorButtonArea component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CalculatorButtonArea />
      </ThemeProvider>
    );
    const disabledButtonElement = screen.getAllByTestId('disabled');
    expect(disabledButtonElement[0]).toBeInTheDocument();
  });

  test('renders second disabled buttons inside CalculatorButtonArea component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CalculatorButtonArea />
      </ThemeProvider>
    );
    const disabledButtonElement = screen.getAllByTestId('disabled');
    expect(disabledButtonElement[1]).toBeInTheDocument();
  });

  test('renders third disabled buttons inside CalculatorButtonArea component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CalculatorButtonArea />
      </ThemeProvider>
    );
    const disabledButtonElement = screen.getAllByTestId('disabled');
    expect(disabledButtonElement[2]).toBeInTheDocument();
  });

  // testing for operator buttons
  test('renders "/" button inside CalculatorButtonArea component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CalculatorButtonArea />
      </ThemeProvider>
    );
    const divisionButtonElement = screen.getByTestId('/');
    expect(divisionButtonElement).toBeInTheDocument();
  });

  test('renders "x" button inside CalculatorButtonArea component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CalculatorButtonArea />
      </ThemeProvider>
    );
    const multiplicationButtonElement = screen.getByTestId('x');
    expect(multiplicationButtonElement).toBeInTheDocument();
  });

  test('renders "-" button inside CalculatorButtonArea component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CalculatorButtonArea />
      </ThemeProvider>
    );
    const minusButtonElement = screen.getByTestId('-');
    expect(minusButtonElement).toBeInTheDocument();
  });

  test('renders "+" button inside CalculatorButtonArea component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CalculatorButtonArea />
      </ThemeProvider>
    );
    const additionButtonElement = screen.getByTestId('+');
    expect(additionButtonElement).toBeInTheDocument();
  });

  test('renders "=" button inside CalculatorButtonArea component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CalculatorButtonArea />
      </ThemeProvider>
    );
    const equalsButtonElement = screen.getByTestId('=');
    expect(equalsButtonElement).toBeInTheDocument();
  });

  // testing for number buttons
  test('renders "1" button inside CalculatorButtonArea component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CalculatorButtonArea />
      </ThemeProvider>
    );
    const oneButtonElement = screen.getByTestId('1');
    expect(oneButtonElement).toBeInTheDocument();
  });
  test('renders "2" button inside CalculatorButtonArea component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CalculatorButtonArea />
      </ThemeProvider>
    );
    const twoButtonElement = screen.getByTestId('2');
    expect(twoButtonElement).toBeInTheDocument();
  });
  test('renders "3" button inside CalculatorButtonArea component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CalculatorButtonArea />
      </ThemeProvider>
    );
    const threeButtonElement = screen.getByTestId('3');
    expect(threeButtonElement).toBeInTheDocument();
  });
  test('renders "4" button inside CalculatorButtonArea component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CalculatorButtonArea />
      </ThemeProvider>
    );
    const fourButtonElement = screen.getByTestId('4');
    expect(fourButtonElement).toBeInTheDocument();
  });
  test('renders "5" button inside CalculatorButtonArea component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CalculatorButtonArea />
      </ThemeProvider>
    );
    const fiveButtonElement = screen.getByTestId('5');
    expect(fiveButtonElement).toBeInTheDocument();
  });
  test('renders "6" button inside CalculatorButtonArea component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CalculatorButtonArea />
      </ThemeProvider>
    );
    const sixButtonElement = screen.getByTestId('6');
    expect(sixButtonElement).toBeInTheDocument();
  });
  test('renders "7" button inside CalculatorButtonArea component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CalculatorButtonArea />
      </ThemeProvider>
    );
    const sevenButtonElement = screen.getByTestId('7');
    expect(sevenButtonElement).toBeInTheDocument();
  });
  test('renders "8" button inside CalculatorButtonArea component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CalculatorButtonArea />
      </ThemeProvider>
    );
    const eightButtonElement = screen.getByTestId('8');
    expect(eightButtonElement).toBeInTheDocument();
  });
  test('renders "9" button inside CalculatorButtonArea component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CalculatorButtonArea />
      </ThemeProvider>
    );
    const nineButtonElement = screen.getByTestId('9');
    expect(nineButtonElement).toBeInTheDocument();
  });
  test('renders "0" button inside CalculatorButtonArea component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CalculatorButtonArea />
      </ThemeProvider>
    );
    const zeroButtonElement = screen.getByTestId('0');
    expect(zeroButtonElement).toBeInTheDocument();
  });
});
