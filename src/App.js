
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Video from './components/Video';
import Content from './components/Content';
import Footer from './components/Footer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch } from "react-router-dom";



function App() {
  return (
    <div className="App">
            
      <Navbar/>
      <Home/>
      <Video/>
      <Content/>
      <Footer/>
      
    </div>
  );
}

export default App;
