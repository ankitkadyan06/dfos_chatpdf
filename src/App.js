import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Chat from './Pages/Chat'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route  path="/chat/:id"element={ <Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
