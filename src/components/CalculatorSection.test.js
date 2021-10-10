import CalculatorSection from './CalculatorSection';
import { render, screen } from '@testing-library/react';
import { configureDataStore } from '../hooks-store/data-store';
import { configureHistoryStore } from '../hooks-store/history-store';
import { configureRenderStore } from '../hooks-store/render-store';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../theme/theme';

configureDataStore();
configureHistoryStore();
configureRenderStore();

describe('CalculatorSection component', () => {
  test('renders CalculatorSection in default state', () => {
    render(
      <ThemeProvider theme={theme}>
        <CalculatorSection />
      </ThemeProvider>
    );
    const CalculatorSectionElement = screen.getByTestId('calculatorSection');
    expect(CalculatorSectionElement).toBeInTheDocument();
  });

  test('renders EquationArea component inside of CalculatorSection component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CalculatorSection />
      </ThemeProvider>
    );
    const EquationAreaElement = screen.getByTestId('equationArea');
    expect(EquationAreaElement).toBeInTheDocument();
  });

  test('renders CalculatorButtonArea component inside of CalculatorSection component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CalculatorSection />
      </ThemeProvider>
    );
    const CalculatorButtonAreaElement = screen.getByTestId('buttonArea');
    expect(CalculatorButtonAreaElement).toBeInTheDocument();
  });
});
