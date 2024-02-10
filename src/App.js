import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Register } from './pages/components/Register';
import { Login } from './pages/components/Login';
import Layout from './pages/layouts/Layout';
import { Game } from './pages/components/Game';
import { PersonalInfo } from './pages/components/PersonalInfo';
import { HighScores } from './pages/components/HighScores';
import { Main } from './pages/layouts/Main';
import { MainNavBar } from './pages/navbars/MainNavBar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<Main />}>
            <Route path="/" element={<MainNavBar />} />
            <Route path="/users/:id" element={<PersonalInfo />} />
            <Route path="/highscores" element={<HighScores />} />
          </Route></Route>
        <Route path="/games/:id" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
