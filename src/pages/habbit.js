import '../stylesheets/project.css';
import { Horizontal_Image_Array } from '../components/horizontal_image_array';
import { Title } from '../components/title';

function Habbit_Page() {

  return (
    <body class = "wholeBody">
        
    <Title list={["Habit","Tracker"]}/>


    <main>
        <div class="preview">
            <img src="img/habbit/4.jpeg" style={{width:'50%;', marginLeft: '25%;'}} alt=""/>
        </div>
        
        <h4>Functionality:</h4>

        <p>This is a habit tracking web app called "Habbit" that is used to log chores. It is designed to keep track of chore streaks with minimal input from the user. The site can be found at <a href="https://habbit.azurewebsites.net">https://habbit.azurewebsites.net</a></p>

        <p>The base functionality is using voice commands with Siri to update the status of a list of chores. A demo is shown below.</p>

        <h4>Demo:</h4>
        <iframe width="362" height="644" src="https://www.youtube.com/embed/OsiZjBKLHwo" title="Habbit Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <p>Additional functionality is available using the web UI (Adding, Removing, Disabling and creating temporary chores etc).</p>        
        
        <div class="pic"><img src="/img/habbit/preview.jpg"/></div>

        <p>Most chores are recurring, but "Daily" chores go away after they are completed once. This can let the app be treated like a to-do list when necessary. </p>
        
        <div class="widepic"><img src="/img/habbit/modal.png"/></div>

        
        <h4>Stack:</h4>
        <p>The web app is written almost entirely in Typescript. The backend uses an express framework, while the front is in React. The app uses a Postgresql database. All the deployment was done with azure web services. Finally, Apple shortcuts scripts to handle sending requests with Siri.</p>
        
        <h4>Backend:</h4>
        
        <p>The back-end of this app is written in the express framework, using MVC architecture. The app uses a single database table that manages the status of every activity that is tracked. </p>
        
        <div class="widepic"><img src="/img/habbit/schema.png"/></div>

        <p>The schema of the table is shown. Each activity has a “frequency”, “span”, and “streak” field. The frequency is how many times the activity needs to be logged in order for it to be marked as complete. The span is how much time the user has to complete the activity before the streak resets. Activities like “brush” needs to be logged multiple times in a single day. Other activities like “Laundry” needs to be done once every seven days.  </p>

        <p>Every morning at 5:30 AM, the app resets. At this point, all completed activities have their streak incremented by 1. All red activities will have their streak reset to 0. I added this feature to motivate myself to keep using the tracker.</p>

        <h4>Frontend:</h4>
        
        <p>The app has a React front-end. All client-side input is password protected. The web UI requires a password for any change to the database. Siri commands require the password to be included as a field in the post request. The main table can then be displayed on a phone as a widget using a 3rd party app.</p>
        
        <div class="pic"><img src="img/habbit/habbitphone.jpg"/></div>

        <p>Colors and brightness are used to provide the user as much information as possible at a glance. Green signifies that the activity was completed today. Yellow activities don’t necessarily need to be done today, but the user still has the option to do them anyway and extend the deadline. Red activities need to be done today before the app resets, or the streak for that activity will reset to 0. Furthermore, some activities need to be performed multiple times on the same day. These activities will have bright progress bars that increase as the user get closer to the daily target.</p> 
        
        <p>Ideally, each morning you will wake up with lots of red and yellow on the app. By the end of the day, the goal is to turn every red cell green, and maybe some yellow ones too. </p>

        <p>The way to interact with the app is through post-requests sent by Siri to the appropriate endpoint. The Siri shortcut scripts lets the user specify a batch of activities that they want to update. For example, once the Habbit app is called, it asks for the Activity to update. At this point, the user can say “Water water exercise shower”. This will send a post request to Habbit, and update the table, making the exercise and shower cells green and incrementing the water progress bar by 2. The results are shown: </p>

        <Horizontal_Image_Array images={["/img/habbit/1.jpeg","/img/habbit/2.jpeg"]}/> 
        
        <h4>Deployment:</h4>
        
        <p>Deployment was done using Azure web services. Deployment is done by building the react app and then starting the express server connected to the static react build directory. The database is deployed separately as another azure web service. The password protected database can be modified by the remote web app as long as the correct credentials are given as environment variables.</p>
        
    </main>
    </body>     
  );
}

export default Habbit_Page;