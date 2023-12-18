import '../stylesheets/project.css';
import { Horizontal_Image_Array } from '../components/horizontal_image_array';


function Habbit_Page() {

  return (
    <body class = "wholeBody">
        
    <header>

        <div class="title">
            <h2>Habbit<span>Tracker</span><span class="shadow">habbittracker</span></h2>
        </div>

    </header>


    <main>
        <div class="preview">
            <img src="img/habbit/4.jpeg" style={{width:'50%;', marginLeft: '25%;'}} alt=""/>
        </div>
        
        <h4>Functionality:</h4>

        <p>This is a habit tracking web app that I built that lets me log my chores using voice commands only. This helps me keep my life organized, with as little hassle as possible. The site can be found <a href="https://habbit.azurewebsites.net/">here</a>.</p>

        
        <h4>Demo:</h4>
        <iframe width="362" height="644" src="https://www.youtube.com/embed/OsiZjBKLHwo" title="Habbit Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    
        
        <h4>Stack:</h4>

        <p>The web app is written almost entirely in Typescript. The backend uses an express framework, while the front end does not use any additional frameworks. The app uses a Postgresql database. Styling is provided with css. All the deployment was done with azure web services, which provided the hostname and database for the app. Finally, the app uses shortcuts scripts to handle sending requests with Siri.</p>
        
        <h4>Backend:</h4>
        
        <p>The back-end of this app is written in the express framework, using MVC architecture. All requests to update the table are sent in the form of a post request. I designed the app to get all updates from voice commands dictated to Siri. These commands are sent in the form of a string, along with a password to prevent updates from sources other than myself.</p>
        
        <p>The app uses a single database table that manages the status of every activity that is tracked. </p>
        
        <div class="pic"><img src="/img/habbit/schema.png"/></div>

        <p>The schema of the table is shown. Each activity has a “frequency”, “span”, and “streak” field. The frequency is how many times the activity needs to be logged in order for it to be marked as complete. The span is how much time the user has to complete the activity before the streak resets. Daily activities like “brush” needs to be logged multiple times in a single day. Other activities like “Laundry” needs to be done once every seven days.  </p>

        <p>Every morning at 5:30 AM, the app resets. At this point, all completed activities have their streak incremented by 1. All red activities will have their streak reset to 0. I added this feature to motivate myself to keep using the tracker.</p>

        <h4>Frontend:</h4>
        <div class="pic"><img src="img/habbit/habbitphone.jpg"/></div>

        <p>The front-end for the Habbit website is a single table on the home page. This page can then be displayed on the phone as a widget using a 3rd party app. The user cannot interact with the app directly from the website. Instead, the intent of Habbit is to use Siri to interact with all aspects of this table. The table shows the user the current status of all their activities, as well as the current and maximum streak of days that the user has performed the activities at the required frequency.</p>

        <p>Colors and brightness are used to provide the user as much information as possible at a glance. Green signifies that the activity was completed today. Yellow activities don’t necessarily need to be done today, but the user still has the option to do them anyway and extend the deadline. Red activities need to be done today before the app resets, or the streak for that activity will reset to 0. Furthermore, some activities need to be performed multiple times on the same day. These activities will have bright progress bars that increase as the user get closer to the daily target.</p> 
        
        <p>Ideally, each morning you will wake up with lots of red and yellow on the app. By the end of the day, the goal is to turn every red cell green, and maybe some yellow ones too. </p>

        <p>The way to interact with the app is through post-requests sent by Siri to the appropriate endpoint. The Siri shortcut scripts lets the user specify a batch of activities that they want to update. For example, once the Hobbit app is called, it asks for the Activity to update. At this point, the user can say “Water water exercise shower”. This will send a post request to Habbit, and update the table, making the exercise and shower cells green and incrementing the water progress bar by 2. The results are shown: </p>

        <Horizontal_Image_Array images={["/img/habbit/1.jpeg","/img/habbit/2.jpeg"]}/> 
        
        <h4>Deployment:</h4>
        
        <p>Deployment was done using Azure web services. This website runs on the free tier, which is why it has a few limitations. For starters, the app will not run 24/7. If the app is idle for 30 minutes, I need to wait for it to start again when I make my next update. Furthermore, there is a compute and space limitation, which prevented me from using a more complex front-end framework such as react.</p>
        
    </main>
    </body>     
  );
}

export default Habbit_Page;