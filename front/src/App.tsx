import { Provider } from 'react-redux';
import { store } from './state/store';

import UsersList from './components/views/UsersList';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import { ModalProvider } from 'styled-react-modal';

const App: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <GlobalStyles />
          <UsersList />
        </ModalProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
