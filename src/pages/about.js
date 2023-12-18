import React from 'react';
import '../stylesheets/project.css';
import '../components/home_post'
import { Title } from '../components/title';
import { useState, useEffect } from 'react';


function About_Page() {

    const [zoomVal, setZoomVal] = useState(window.innerWidth);
    
    const updateWidth = useEffect(()=> {
        const width = window.innerWidth;
        
        if (width < 600){
            setZoomVal(50)
        }
        else{
            setZoomVal(100)
        }
    })

    
  return (
        <body class = "wholeBody">
            
            <Title list={["Resume"]}/>

            <main>

                <div class="pdf-container" >
                    <iframe
                        class = "pdf-frame"
                        title="PDF Viewer"
                        src={`/resume/maheer_resume.pdf#zoom=${zoomVal}`}
                    />
                </div>


            </main>
            
        </body>
  );
}

export default About_Page;