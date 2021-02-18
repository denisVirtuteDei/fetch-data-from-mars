import React from 'react';
import { Provider } from 'react-redux';
import { UserList } from './components/blocks/userList/UsersList';
import { StyledThemeProvider } from './components/themeProviderWrapper/StyledThemeProvider';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <StyledThemeProvider>
        <UserList />
      </StyledThemeProvider>
    </Provider>
  );
}

export default App;
