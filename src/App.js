import './App.css';
import { Provider } from 'react-redux'
import UserContainer from './components/UserContainer'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <UserContainer />
    </Provider>
  );
}

export default App;
