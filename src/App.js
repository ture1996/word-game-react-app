import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Register } from './pages/components/Register';
import { Login } from './pages/components/Login';
import Page from './pages/layouts/Layout';
import { Main } from './pages/components/Main';
import { Game } from './pages/components/Game';
import { PersonalInfo } from './pages/components/PersonalInfo';
import { HighScores } from './pages/components/HighScores';
import { MainNavBar } from './pages/layouts/MainNavBar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Page />}>
          <Route element={<Main />}>
            <Route path="/" element={<MainNavBar />} />
            <Route path="/users/:id" element={<PersonalInfo />} />
            <Route path="/highscores" element={<HighScores />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/games/:id" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
