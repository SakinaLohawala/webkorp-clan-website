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
import Cloud from "./Services/Cloud.jsx";
import Commerce from "./Services/Commerce.jsx";
import Aiml from "./Services/Ai&ml.jsx";
import Mobiledev from "./Services/Mobiledev.jsx";
import Web from "./Services/Web.jsx";
import Android from "./Technology/Android.jsx";
import Java from "./Technology/Java.jsx";
import Python from "./Technology/Python.jsx";
import Ror from "./Technology/Ror.jsx";
import IOS from "./Technology/IOS.jsx";
import Fin from "./Industry/Fin.jsx";
import Real from "./Industry/Real.jsx";
import Logistic from "./Industry/Logistic.jsx";
import Asset from "./Industry/Asset.jsx";
import Health from "./Industry/Health.jsx";
import Case from "./Insights/Case.jsx";
import Blog from "./Insights/Blog.jsx"
import Iot from "./Services/Iot.jsx";
import Custom from "./Services/Custom.jsx";
import Blockchain from "./Services/Blockchain.jsx";
import Managed from "./Services/Managed.jsx";
import Augmentation from "./Services/Augmentation.jsx";
import Enterprise from "./Services/Enterprise.jsx";
import Net from "./Technology/Net.jsx";
import React from "./Technology/React.jsx";
import Php from "./Technology/Php.jsx";
import Retail from "./Industry/Retail.jsx";
import Travel from "./Industry/Travel.jsx";
import Warehouse from "./Industry/Warehouse.jsx";

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
        <Route path='/gitex' element={<Gitex/>}/>
        <Route path='/mobile' element={<Mobiledev/>}/>
        <Route path='/cloud' element={<Cloud/>}/>
        <Route path='/commerce' element={<Commerce/>}/>
        <Route path='/web' element={<Web/>}/>
        <Route path='/ai&ml' element={<Aiml/>}/>
        <Route path='/android' element={<Android/>}/>
        <Route path='/java' element={<Java/>}/>
        <Route path='/ios' element={<IOS/>}/>
        <Route path='/ror' element={<Ror/>}/>
        <Route path='/python' element={<Python/>}/>
        <Route path='/fin' element={<Fin/>}/>
        <Route path='/healthcare' element={<Health/>}/>
        <Route path='/real' element={<Real/>}/>
        <Route path='/logistic' element={<Logistic/>}/>
        <Route path='/asset' element={<Asset/>}/>
        <Route path='/case' element={<Case/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/iot' element={<Iot/>}/>
        <Route path='/custom' element={<Custom/>}/>
        <Route path='/blockchain' element={<Blockchain/>}/>
        <Route path='/managed' element={<Managed/>}/>
        <Route path='/augmentation' element={<Augmentation/>}/>
        <Route path='/enterprise' element={<Enterprise/>}/>
        <Route path='/net' element={<Net/>}/>
        <Route path='/php' element={<Php/>}/>
        <Route path='/react' element={<React/>}/>
        <Route path='/retail' element={<Retail/>}/>
        <Route path='/warehouse' element={<Warehouse/>}/>
        <Route path='/travel' element={<Travel/>}/>
      </Routes>
      <Foter/>
     </Router>

    </>
  )
}

export default App
