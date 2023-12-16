import '../stylesheets/project.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Menu = () => {
    const navigate = useNavigate();

    const navigateToPage = (route) => {
        navigate(route);
    };
    
    return(

        <div class="controls" data-id="controls">

            <div class="control control-2 active-btn" data-id="projects"
            onClick={()=>{navigateToPage("/")}}>    
                <i class="fa-solid fa-screwdriver-wrench"></i>
            </div>

            <div class="control control-3" data-id="about"
            onClick={()=>{navigateToPage("/about")}}>
                <i class="fa-solid fa-user-tie"></i>
            </div>


        </div>
    )
}


export  { Menu }