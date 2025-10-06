import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './components/Signin';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Signup from './components/Signup';





function App() {
  return (
    <>
  <BrowserRouter>
  <Navbar></Navbar>
  {/* <Footer></Footer> */}
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/signin" element={<Signin/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/blog" element={<Blog/>}></Route>
   
  </Routes>
  
  
  </BrowserRouter>
  </>
  );
}

export default App;
