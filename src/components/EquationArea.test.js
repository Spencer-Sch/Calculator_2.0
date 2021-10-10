import EquationArea from './EquationArea';
import { render, screen } from '@testing-library/react';
import { configureDataStore } from '../hooks-store/data-store';
import { configureHistoryStore } from '../hooks-store/history-store';
import { configureRenderStore } from '../hooks-store/render-store';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../theme/theme';

configureDataStore();
configureHistoryStore();
configureRenderStore();

describe('EquationArea component', () => {
  test('renders EquationArea in default state', () => {
    render(
      <ThemeProvider theme={theme}>
        <EquationArea />
      </ThemeProvider>
    );
    const EquationAreaElement = screen.getByTestId('equationArea');
    expect(EquationAreaElement).toBeInTheDocument();
  });

  test('renders EquationOutput component inside of EquationArea component', () => {
    render(
      <ThemeProvider theme={theme}>
        <EquationArea />
      </ThemeProvider>
    );
    const EquationOutputElement = screen.getByRole('heading', { level: 3 });
    expect(EquationOutputElement).toBeInTheDocument();
  });

  test('renders EquationResultOutput component inside of EquationArea component', () => {
    render(
      <ThemeProvider theme={theme}>
        <EquationArea />
      </ThemeProvider>
    );
    const EquationResultOutputElement = screen.getByText('0');
    expect(EquationResultOutputElement).toBeInTheDocument();
  });
});
