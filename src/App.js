import './App.css';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-body flex">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
