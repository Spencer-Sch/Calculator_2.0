import EquationResultOutput from './EquationResultOutput';
import { render, screen } from '@testing-library/react';
import { configureDataStore } from '../hooks-store/data-store';
import { configureHistoryStore } from '../hooks-store/history-store';
import { configureRenderStore } from '../hooks-store/render-store';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../theme/theme';

configureDataStore();
configureHistoryStore();
configureRenderStore();

describe('EquationResultOutput component', () => {
  test('renders EquationResultOutput in default state', () => {
    render(
      <ThemeProvider theme={theme}>
        <EquationResultOutput />
      </ThemeProvider>
    );
    const EquationResultOutputElement = screen.getByText('0');
    expect(EquationResultOutputElement).toBeInTheDocument();
  });
});
