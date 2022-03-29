import './App.css';
import AddForm from './components/AddForm';
import Posts from './components/Posts';
import store from "./store";
import {Provider} from "react-redux"

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AddForm />
      <Posts/>
    </div>
    </Provider>
  );
}

export default App;
