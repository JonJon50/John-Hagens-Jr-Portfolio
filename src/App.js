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
        blur={{ min: 0, max: 2 }}
        bgImage="https://www.springboard.com/blog/wp-content/uploads/2019/07/sb-blog-programming.png"
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
