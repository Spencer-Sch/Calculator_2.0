import OperatorButton from '../OperatorButton';
import { render, screen } from '@testing-library/react';
import { configureDataStore } from '../../../../hooks-store/data-store';
import { configureHistoryStore } from '../../../../hooks-store/history-store';
import { configureRenderStore } from '../../../../hooks-store/render-store';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../../../theme/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEquals } from '@fortawesome/free-solid-svg-icons';

configureDataStore();
configureHistoryStore();
configureRenderStore();

describe('OperatorButton component', () => {
  test('renders OperatorButton component', () => {
    render(
      <ThemeProvider theme={theme}>
        <OperatorButton
          key="24"
          icon={<FontAwesomeIcon icon={faEquals} />}
          value="="
          classesFlag={true}
        />
      </ThemeProvider>
    );

    const operatorButtonElement = screen.getByRole('button');
    expect(operatorButtonElement).toBeInTheDocument();
  });
});
