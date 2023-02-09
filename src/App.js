import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Content/Dialogs/Dialogs';
import Music from './components/Content/Music/Music';
import News from './components/Content/News/News';
import Profile from './components/Content/Profile/Profile';
import Settings from './components/Content/Settings/Settings';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper' >
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/*' element={<Profile />} />
            <Route path='/dialogs/*' element=
            {<Dialogs dialogs={props.appState.dialogs}  message={props.appState.message} addMessage={props.addMessage} />} />
            <Route path='/music/*' element={<Music />} />
            <Route path='/news/*' element={<News />} />
            <Route path='/settings/*' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
