import React from 'react';
import Home from './components/Home';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import News from './components/news/News';

function App() {
  return (
    <>
    {/* <Home /> */}
    

    <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/news' element={<News/>}/>
  </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
