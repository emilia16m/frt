import { findByRole } from '@testing-library/react';
import React from 'react'; 
import ReactDOM from 'react-dom/client';
import App from '../App';
import state, { addMessage } from './state';
import '../index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
    root.render(
    <React.StrictMode>
        <App appState={state} addMessage = {addMessage}/>
    </React.StrictMode>
);
}

