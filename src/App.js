import React from 'react';
import MainMenu from './components/MainMenu/MainMenu';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <div className="App">
      <h1 className="text-4xl mb-4 font-bold">Llano Kid Books</h1>
      <MainMenu />
      <Posts />
    </div>
  );
}

export default App;
