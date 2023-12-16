import './stylesheets/project.css';
import "./pages/home_page"
import Home_Page from './pages/home_page';
import Cube_Page from './pages/cube';
import Cube_Robot_Page from './pages/cuberobot';
import Habbit_Page from './pages/habbit';
import About_Page from './pages/about';
import Drone_Page from './pages/drone';
import Balance_Page from './pages/balance';
import Rviz_Page from './pages/rviz';
import Blackjack_Page from './pages/blackjack';
import Gym_Page from './pages/gym';
import Mousetrap_Page from './pages/mousetrap';
import Shoerack_Page from './pages/shoerack';
import Productlogic_Page from './pages/productlogic';
import Bracket_Page from './pages/bracket';
import Linkage_Page from './pages/linkage';
import Crane_Page from './pages/crane';



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Page_Router() {

  
  return (
    
    <Routes>
        <Route path="/" element={<Home_Page/>} />
        <Route path="/cube" element={<Cube_Page/>} />
        <Route path="/cuberobot" element={<Cube_Robot_Page/>} />
        <Route path="/habbit" element={<Habbit_Page/>} />
        <Route path="/about" element={<About_Page/>} />
        <Route path="/drone" element={<Drone_Page/>} />
        <Route path="/balance" element={<Balance_Page/>} />
        <Route path="/rviz" element={<Rviz_Page/>} />
        <Route path="/blackjack" element={<Blackjack_Page/>} />
        <Route path="/gym" element={<Gym_Page/>} />
        <Route path="/mousetrap" element={<Mousetrap_Page/>} />
        <Route path="/shoerack" element={<Shoerack_Page/>} />
        <Route path="/productlogic" element={<Productlogic_Page/>} />
        <Route path="/crane" element={<Crane_Page/>} />
        <Route path="/bracket" element={<Bracket_Page/>} />
        <Route path="/linkage" element={<Linkage_Page/>} />
    </Routes>

    
  );
}

export default Page_Router;
