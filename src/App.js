import { Route, Routes } from 'react-router-dom';
import './App.css';
import Agrobhai from './Components/Agrobhai/Agrobhai';
import Blog from './Components/Blog/Blog';
import Catering from './Components/Catering/Catering';
import Contact from './Components/Contact/Contact';
import Grocery from './Components/Grocery/Grocery';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Intro from './Components/Intro/Intro';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agrobhai' element={<Agrobhai />} />
        <Route path='/grocery' element={<Grocery />} />
        <Route path='/catering' element={<Catering />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      
    </div>
  );
}


export default App;
