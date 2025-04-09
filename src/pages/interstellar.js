import '../stylesheets/project.css';
import { Horizontal_Image_Array } from '../components/horizontal_image_array';
import { Title } from '../components/title';

function Interstellar_Page() {

  return (
    <body class = "wholeBody">
        
    <Title list={["Intersteller","Jobs"]}/>


    <main>
        <div class="preview">
            <img src="img/interstellar/1.png" style={{width:'50%;', marginLeft: '25%;'}} alt=""/>
        </div>
        
        <h4>Overview:</h4>

        <p>This is an AI powered job board that I made with three other students for the March Microsoft Innovation Challenge. Our team ended up finishing first place out of 60+ teams world-wide, winning the grand prize of $10,000. </p>
        <p>More information about the competition can be found in this post <a href="https://techcommunity.microsoft.com/discussions/azure/announcing-the-winners-of-the-march-innovation-challenge-hackathon/4398522">March 2025 Innovation Challenge Winners Announcement</a></p>
        <p>The job board app intended to help job seekers who may have impairments that make it difficult for them to find suitable jobs.</p>
        
        <h4>Demo:</h4>
        {/* <iframe width="362" height="644" src="https://www.youtube.com/watch?v=szrq1NR8Ii0" title="Interstellar Jobs Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        <iframe width="362" height="644" src="https://www.youtube.com/embed/szrq1NR8Ii0?si=bvFMYTJy4vlapa64" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <h4>Stack / Flow Diagram:</h4>
        <p>The tech stack used is Typescript, React, Flask and MongoDB. Additionally we made use of the Azure OpenAI service with GPT-40 and the Azure CosmosDB service with mongoDB.</p>
        <div class="widepic"><img src="/img/interstellar/6.png"/></div>
        <p>The functionality of the app is that users interact with a job board component. They are able to add jobs to the job board, which stores the job data in the cosmosDB container. These jobs are then fetched from the database 30 at a time. The user is also able to take an existsing job and generate additional notes for the job using the Azure OpenAI conteianer. Finally, the user is able to export all the jobs, along with the notes to a downloaded pdf.</p>

        <h4>Features:</h4>
        <p>The user can interact with the job board in a very user friendly manner. The left side displays the avialble jobs, while the right displays the active job. The pagination is done on the server side so that the app is able to scale properly as more jobs are added. Additionally, the user can filter the job board to find specific jobs. In the example, the user has filtered for In person, full-time jobs based out of New York city that have a salary greater than $90000/ year.</p>
        <div class="widepic"><img src="/img/interstellar/2.png"/></div>
        
        <p>On an active job, the user is able to see the job details, like description, salary etc. They are also able to click the generate AI notes to get insights on the job</p>
        <div class="pic"><img src="/img/interstellar/3.png"/></div>

        <p>The user is able to enter some job preferences and some impairments they might have. The idea is to generate some reasons why the job might be a good fit for the person, as well as some notes on what the user can do to manage a potential disablity they might have while doing this job.</p>
        <div class="pic"><img src="/img/interstellar/4.png"/></div>

        <p>The user notes as well as the job specifications are fed into the Azure OpenAI service. With some prompt engineering and response parsing, we are able to extract useful notes and return them to be displayed on the view</p>
        <p>Here, the user is given some information about whether the salary is reasonable for the area, how their cretivity can help in the role, as well as how they can manage their dyslexia</p>
        <div class="pic"><img src="/img/interstellar/5.png"/></div>
        
        
    </main>
    </body>     
  );
}

export default Interstellar_Page;