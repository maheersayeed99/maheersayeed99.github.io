import './stylesheets/project.css';
import "./pages/home_page"
import Home_Page from './pages/home_page';
import Cube_Page from './pages/cube';
import Cube_Robot_Page from './pages/cuberobot';
import { Menu } from './components/menu';
import { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Page_Router from './Router';

function App() {


  return (
    <Router>
    <div className="App">
      <head>
        <meta charset="UTF-8"/>
        <meta name = "viewport" content="width=device-width, initial-scale=1"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <title>Portfolio</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel = "stylesheet" href = "project.css"/>
      </head>
      
      <Page_Router/>
      
      <Menu/>

    </div>
    </Router>
  );
}

export default App;
