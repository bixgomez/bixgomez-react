import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Use Routes instead of Switch
import MainMenu from './components/MainMenu/MainMenu';
import HomePage from './pages/HomePage';
import Page from './pages/Page';

function App() {
  return (
    <Router>
      <div className="App">
        <MainMenu />
        <Routes>  {/* Use Routes here */}
          <Route path="/" element={<HomePage />} />  {/* Update Route syntax */}
          <Route path="/:slug" element={<Page />} />  {/* Dynamic route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
