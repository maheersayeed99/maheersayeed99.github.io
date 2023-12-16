import './stylesheets/project.css';
import "./pages/home_page"
import Home_Page from './pages/home_page';
import Cube_Page from './pages/cube';
import Cube_Robot_Page from './pages/cuberobot';
import Habbit_Page from './pages/habbit';
import About_Page from './pages/about';






import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Page_Router() {

  
  return (
    
    <Routes>
        <Route path="/" element={<Home_Page/>} />
        <Route path="/cube" element={<Cube_Page/>} />
        <Route path="/cuberobot" element={<Cube_Robot_Page/>} />
        <Route path="/habbit" element={<Habbit_Page/>} />
        <Route path="/about" element={<About_Page/>} />
    </Routes>

    
  );
}

export default Page_Router;
