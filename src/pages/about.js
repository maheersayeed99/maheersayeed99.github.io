import React from 'react';
import '../stylesheets/project.css';
import '../components/home_post'
import { Title } from '../components/title';
import { useState, useEffect } from 'react';


function About_Page() {



  return (
        <body class = "wholeBody">
            
            <Title list={["Resume"]}/>

            <main>

                <div class="pdf-img" >
                    <img src="/resume/maheer-resume.jpg"></img>
                </div>


            </main>
            
        </body>
  );
}

export default About_Page;