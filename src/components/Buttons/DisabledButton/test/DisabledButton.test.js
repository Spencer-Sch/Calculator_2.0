import DisabledButton from '../DisabledButton';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../../../theme/theme';

describe('DisabledButton component', () => {
  test('renders DisabledButton component', () => {
    render(
      <ThemeProvider theme={theme}>
        <DisabledButton key="5" disabled={true} />
      </ThemeProvider>
    );

    const disabledButtonElement = screen.getByRole('button');
    expect(disabledButtonElement).toBeInTheDocument();
  });
});
