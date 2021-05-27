import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Provider store={store}>
        <TodoList></TodoList>
      </Provider>
    </div>

  );
}

export default App;
