import {Outlet} from 'react-router-dom'
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Feature from './Feature';
import Buynow from './Buynow'
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
