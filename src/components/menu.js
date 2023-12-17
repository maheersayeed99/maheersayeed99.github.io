import '../stylesheets/project.css';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Menu = () => {
    const navigate = useNavigate();

    const location = useLocation()

    const navigateToPage = (route) => {
        // const buttons = document.querySelectorAll('.control');
        // buttons.forEach((button) => {
        // button.classList.remove('active-btn');
        // });

        // const current_button = document.querySelector(`[data-id="${id}"]`);
        // current_button.classList.add('active-btn');
        navigate(route);
    };

    const refresh = useEffect(()=>{
        

        const buttons = document.querySelectorAll('.control');
        buttons.forEach((button) => {
        button.classList.remove('active-btn');
        });

        if (location.pathname === "/"){
            const current_button = document.querySelector(`[data-id="projects"]`);
            current_button.classList.add('active-btn');
            return;
        }

        for (let button of buttons){
            const current_id = button.getAttribute("data-id")
            if (location.pathname == `/${current_id}`){
                const current_button = document.querySelector(`[data-id="${current_id}"]`);
                current_button.classList.add('active-btn');
                return;
            }
        }

        





    })
    
    return(

        <div class="controls" data-id="controls">

            <div class="control control-2" data-id="projects"
            onClick={()=>{navigateToPage("/")}}>    
                <i class="fa-solid fa-diagram-project"></i>
            </div>

            <div class="control control-3" data-id="resume"
            onClick={()=>{navigateToPage("/resume")}}>
                <i class="fa-solid fa-file-lines"></i>
            </div>
        </div>
    )
}


export  { Menu }