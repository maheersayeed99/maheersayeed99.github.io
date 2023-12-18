import React from 'react';
import '../stylesheets/project.css';
import '../components/home_post'
import { Title } from '../components/title';


function About_Page() {

  return (
        <body class = "wholeBody">
            
            <Title list={["Resume"]}/>

            <main>

                <div class="pdf-container" >
                    <iframe
                        class = "pdf-frame"
                        title="PDF Viewer"
                        src="/resume/maheer_resume.pdf" 
                    />
                </div>


            </main>
            
        </body>
  );
}

export default About_Page;