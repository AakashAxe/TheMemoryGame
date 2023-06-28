
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartScreen from './start_screen/StartScreen';
import Game from './game/Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/game/:levelId' element={<Game/>}/>
            <Route index element={<StartScreen />}/>
          </Routes>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
