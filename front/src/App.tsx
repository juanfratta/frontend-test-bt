import { Provider } from 'react-redux';
import { store } from './state/store';

import UsersList from './components/views/UsersList';

const App: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <UsersList />
    </Provider>
  );
};

export default App;
