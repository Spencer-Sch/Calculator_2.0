import EquationOutput from './EquationOutput';
import { render, screen } from '@testing-library/react';
import { configureDataStore } from '../hooks-store/data-store';
import { configureHistoryStore } from '../hooks-store/history-store';
import { configureRenderStore } from '../hooks-store/render-store';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../theme/theme';

configureDataStore();
configureHistoryStore();
configureRenderStore();

describe('EquationOutput component', () => {
  test('renders EquationOutput in default state', () => {
    render(
      <ThemeProvider theme={theme}>
        <EquationOutput />
      </ThemeProvider>
    );
    const EquationOutputElement = screen.getByRole('heading', { level: 3 });
    expect(EquationOutputElement).toBeInTheDocument();
  });
});
