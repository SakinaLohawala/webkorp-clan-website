import './Navbar.css'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About.jsx';
import Careers from './Careers.jsx';
import Foter from './Foter.jsx';
import CES from '../Events/ces.jsx';
import IndiaSoft from '../Events/IndiaSoft.jsx';
import Inbound from '../Events/Inbound.jsx';
import Mwc from '../Events/Mwc.jsx';
import Gitex from '../Events/Gitex.jsx';

function App() {

  return (
    <>
     <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/career' element={<Careers/>}/>
        <Route path='/ces' element={<CES/>}/>
        <Route path='/indiasoft' element={<IndiaSoft/>}/>
        <Route path='/inbound' element={<Inbound/>}/>
        <Route path='/mwc' element={<Mwc/>}/>
        <Route path='/Gitex' element={<Gitex/>}/>
        
      </Routes>
      <Foter/>
     </Router>

    </>
  )
}

export default App
