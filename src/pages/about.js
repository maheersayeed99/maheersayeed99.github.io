import React from 'react';
import '../stylesheets/project.css';
import '../components/home_post'
import Home_Post from '../components/home_post';

function About_Page() {

  return (
        <body class = "wholeBody">
            
            <header class="section sec1 header" id="home">
                <i class="fa-solid fa-house-chimney"></i>
            </header>


            <main>
                <section class="section sec2 projects active-sec" id="projects">
                    <div class="title">
                        <h2>Resume<span class="shadow">Resume</span></h2>
                    </div>
                </section>

                <div class="pdf" >
                <iframe
                    class = "pdf_frame"
                    title="PDF Viewer"
                    src="/resume/maheer_resume.pdf"
                />
                </div>


            </main>
            
        </body>
  );
}

export default About_Page;