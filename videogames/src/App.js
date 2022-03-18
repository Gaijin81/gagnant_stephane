
import './App.css';
import GameList from './components/GameList';
import Header from './components/Header';
import GameDetails from './components/GameDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header name={"Welcome to React Video Games List"} />
        <Routes>
          <Route path="/" element={<GameList />} />
          <Route path="/games/:id" element={<GameDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
