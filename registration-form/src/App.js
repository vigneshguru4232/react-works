import logo from './logo.svg';
import './App.css';
import UserRegistration from './components/UserRegistration';
import { Provider } from 'react-redux';
import store from './store';
import UserLists from './components/UserLists';

function App() {
  return (
    <Provider store={store}>
    <div >
      <UserRegistration />
      <UserLists />
    </div>
    </Provider>
  );
}

export default App;
