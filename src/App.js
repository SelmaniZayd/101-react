import './App.css';
import Counter from './components/Counter/Counter';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <Counter />
      </div>
    </div>
  );
}

export default App;
