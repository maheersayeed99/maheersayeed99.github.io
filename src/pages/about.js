import React from 'react';
import '../stylesheets/project.css';
import '../components/home_post'
import { Title } from '../components/title';
import { useState, useEffect } from 'react';


function About_Page() {



  return (
        <body class="wholeBody">
            
    <Title list={["Resume"]}/>

    <main>

        <div class="pdf-test">
            <embed src="/resume/maheer-resume.pdf" type="application/pdf" width="100%" height="1000px" />
        </div>

    </main>
            
</body>
  );
}

export default About_Page;