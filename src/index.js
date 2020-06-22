import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
let posts = [
    {id: 1, message: 'Hi,how are you?' },
    {id: 2, message: 'Hello'}
]
let dialogs = [
    {id: 1, name: 'Dmitriy'},
    {id: 2, name: 'Hilory'},
    {id: 3, name: 'Viktor'},
    {id: 4, name: 'Arsen'},
    {id: 5, name: 'Petro'}

]


let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Good weather'},
    {id: 3, message: 'I passed all exams'},
    {id: 4, message: 'I have 2 sons'},
    {id: 5, message: 'How are you,mate?'}

]
ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
