
import Jsx_comp from './JSX/Jsx_comp';
import Bootstrap from './JSX/Bootstrap';
import Class_comp from './component/Class_comp';
import Func_comp from './component/Func_comp';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './design/component/Header';
import Home from './design/pages/Home';
import Footer from './design/component/Footer';
import About from './design/pages/About';
import Contact from './design/pages/Contact';
import Func_props from './props/Func_Props/Func_props';
import Class_props from './props/Class_Props/Class_props';

function App() {
  return (
    <>
      {/* <h1>This is App Component</h1>
      <Home/>
      <Func_comp/>
      <Class_comp/>
      <Jsx_comp/>
      <Bootstrap/> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<> <Header/> <Home/> <Footer/> </>}></Route>
          <Route path="/about" element={<> <Header/> <About/> <Footer/> </>}></Route>
          <Route path="/contact" element={<> <Header/> <Contact/> <Footer/> </>}></Route>
        </Routes>
      </BrowserRouter> */}

      {/* <Func_props/> */}
      <Class_props/>
    </>
  );
}
 
export default App;
