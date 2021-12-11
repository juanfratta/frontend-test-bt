import React from 'react';
import { Provider } from 'react-redux';
import { UsersList } from './components/views/UsersList/UsersList';
import { store } from './state/store';

const App: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <UsersList />
    </Provider>
  );
};

export default App;
