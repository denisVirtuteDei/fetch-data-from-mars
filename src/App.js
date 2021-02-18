import { Provider } from 'react-redux'
import { UserList } from './components/blocks/Users/UserList';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <UserList />
    </Provider>
  );
}

export default App;
