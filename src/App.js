import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Header from './Header';
import About from './About';
import { Routes,Route } from 'react-router-dom';
import Menus from './Menus';
import Blog from './Blog';
import Contact from './Contact';

function App() {
  return (
   <>
      {/* <Header></Header> */}
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/menu' element={<Menus></Menus>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
   </>
  );
}

export default App;
