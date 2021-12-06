import MiscButton from '../MiscButton';
import { render, screen } from '@testing-library/react';
import { configureDataStore } from '../../../../hooks-store/data-store';
import { configureHistoryStore } from '../../../../hooks-store/history-store';
import { configureRenderStore } from '../../../../hooks-store/render-store';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../../../theme/theme';

configureDataStore();
configureHistoryStore();
configureRenderStore();

describe('MiscButton component', () => {
  test('renders MiscButton component', () => {
    render(
      <ThemeProvider theme={theme}>
        <MiscButton key="3" icon="C" value="C" />
      </ThemeProvider>
    );

    const miscButtonElement = screen.getByRole('button');
    expect(miscButtonElement).toBeInTheDocument();
  });
});
