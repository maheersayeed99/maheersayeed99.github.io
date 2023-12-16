import '../stylesheets/project.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Menu = () => {
    const navigate = useNavigate();

    const navigateToPage = (route,id) => {
        const buttons = document.querySelectorAll('.control');
        buttons.forEach((button) => {
        button.classList.remove('active-btn');
        });

        const current_button = document.querySelector(`[data-id="${id}"]`);
        current_button.classList.add('active-btn');
        navigate(route);
    };
    
    return(

        <div class="controls" data-id="controls">

            <div class="control control-2 active-btn" data-id="projects"
            onClick={()=>{navigateToPage("/","projects")}}>    
                <i class="fa-solid fa-diagram-project"></i>
            </div>

            <div class="control control-3" data-id="about"
            onClick={()=>{navigateToPage("/resume","about")}}>
                <i class="fa-solid fa-file-lines"></i>
            </div>
        </div>
    )
}


export  { Menu }