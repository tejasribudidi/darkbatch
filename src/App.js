import logo from './logo.svg';
import './App.css';
import First from './Components/First';
import Second from './Components/Second';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <center>
    <h1 style={{color:"#00215E",fontFamily:"Monaco"}}>To Do List</h1>
    </center>
    <br/>
    <center>
    <div className='row'>
      <BrowserRouter>
      <First/>
      <div className='col-md-1'></div>
      <Second/>
      </BrowserRouter>
    </div>
    </center>
    </>
  );
}

export default App;
