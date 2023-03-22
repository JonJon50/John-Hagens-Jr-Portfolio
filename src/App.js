import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import "./App.css"
import { Parallax } from 'react-parallax';
import Nav from './components/Nav';
import Resume from './components/Resume';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className="App">
       <BrowserRouter >
       {/* <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage="https://external-preview.redd.it/SPxj-nuKwhl798gR0La6Wy9AwyRRCEM0f8YSCMQoxLE.jpg?auto=webp&s=4f2719e21b0064d96be0216531c2dcc8571c8924"
        bgImageAlt="the dog"
        strength={500}
    >
        Blur transition from min to max */}
      
       <Header></Header>
       
  
       <body>
       <Nav></Nav>
       <Routes>
      <Route path ="/" element={<About/>}/>
      <Route path ="/Portfolio" element={<Portfolio/>}/>
      <Route path ="/Contact" element={<Contact/>}/>
      <Route path ="/Resume" element={<Resume/>}/>
      </Routes>
      <Footer></Footer>
       </body>

         {/* <div style={{ height: '1000px' }} />
    </Parallax> */}
        </BrowserRouter>
        
    </div>
    
  );
}

export default App;
