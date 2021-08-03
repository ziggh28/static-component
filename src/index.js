import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rating from './Rating'
import Sidebar from './Sidebar'
import Reviews from './Reviews'
import Sentimentanalysis from './Sentimentanalysis';
import Websitevisitors from './Websitevisitors'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    
    <Websitevisitors className='websitevisitors'/>
    
    <Sentimentanalysis className='sentimentanalysis'/>
    
    <Reviews className='reviews'/>
    
    <Rating className="rating" />
    
    <Sidebar className="sidebar"/>
  

  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
