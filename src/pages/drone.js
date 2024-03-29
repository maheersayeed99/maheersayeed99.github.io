import '../stylesheets/project.css';
import { Horizontal_Image_Array } from '../components/horizontal_image_array';
import { Title } from '../components/title';

function Drone_Page() {

  return (
    <body class = "wholeBody">
        
        <Title list={["LQR","Drone Controller"]}/>


    <main>
        <div class="preview">
            <img src="img/drone/drone_preview.png" alt=""/>
        </div>
        
        <p>I worked in a team of five people in my Advanced Control Systems Integration class to reprogram the attitude and height controller of a Crazyflie Hobby drone to make it more robust and handle motor loss. The built in controller was a poorly implemented cascading PID controller. Our goal was to change it into an LQR controller so that a change of state, such as motor loss, can be handled quickly. My responsibilities in the group was hardware implementation, so I spent the majority of my time altering the firmware C code of the drone and tuning the controller parameters.</p>
        <p>The two goals of our team for this project was for the drone to be able to handle gust disturbances and motor-loss. Gust disturbance is something that the on-board PID controller could already handle, so we decided that it would be a good way to test the robustness of our new controller. The drone would need to fly stably through bursts of compressed air. It would need to reposition itself as well. The second test was motor loss. This is something that the onboard controller could not handle. Our plan was to set a voltage ceiling on one of the four motors at 50 percent after a certain amount of time had passed. The drone would need to then react accordingly and land safely without flipping over.</p>
        <p>System modeling was done in Matlab and Simulink, the firmware was edited in C and logging commands were written in Python. The updated firmware can be found in the crazyflie github repository. </p>
        <p>First, a simulink model was developed that mimicked the behavior of the real drone. This model was then given a Q and R matrix to determine the K transformation matrix with the Matlab lqr() command.</p>
        <div class="widepic"><img src="/img/drone/1.png"/></div>
        <p>The system was modeled as the following</p>
        <div class="widepic"><img src="/img/drone/2.png"/></div>
        <p>Position, attitude, velocity and attitude rate was the input state array, and the output was thrust followed by the torque at each direction. Using this, and the Simulink model, we were able to find the following gain K matrix.</p>
        <div class="widepic"><img src="/img/drone/3.png"/></div>
        <p>As a sanity check, notice that the first row, which finds the output thrust signal, is only affected by the errors in column 3 and 9, which correspond to the position and velocity in the z direction.</p>
        <p>Once this base gain matrix was obtained, it was time to move on to firmware. The first thing to do was to deactivate the onboard cascading PID controller. The state errors were instead fed to an LQR controller which we developed. Here is the flow that the state error signal goes through before reaching the 4 motors.</p>
        <div class="widepic"><img src="/img/drone/4.png"/></div>
        <p>Using the gain K matrix, we are able to transform the state errors into an output control signal. After this, a conversion matrix is used to transform the torque and force values into equivalent thrust values at each motor. Finally, the thrust values are mapped to PWM values that can produce these forces. This last step required more system modeling. Researching the drone motors revealed a non-linear relationship between thrust and PWM. I used an inverse polyfit to map these values accordingly. The equation and graph for that is provided below.</p>
        <div class="pic"><img src="/img/drone/5.jpeg"/></div>
        <p>PWM = -1.4e6 • Force² + 6.099e5 • Force + 2.1177e3</p>
        <p>After all this is done, the last step is to tune the gain matrices for the base hardware, as well as the motor loss state.</p>
        <div class="widepic"><img src="/img/drone/6.png"/></div>
        <p>The base gain matrix was tuned until the attitude controller was working stably. The height controller was fixed afterwards by further tuning the values in the first row. This resulted in a drone that is able to handle gust disturbances. This is shown in the video below.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZTgSIGz5txA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>As you can see, the drone is robust, and the attitude controller quickly recovers from the gust disturbance. The position controller responds after the attitude controller is stable. With this done, the final step was to tune a second gain matrix for the motor loss state.</p>
        <div class="widepic"><img src="/img/drone/7.png"/></div>
        <p>The values were altered so that the drone is able to control itself and land gently when one motor gives out. Roll and pitch signals were the most affected by this change. Yaw was not altered, as we felt it was not useful in preventing the drone from flipping over. The thrust values were also lowered, as it was evident that the drone would not be able to stay in the air with one motor at 50 percent. LQR comes in really handy here, because the gain matrix is the only thing that needs to be changed in order to handle a completely new physical state. I programmed this in the firmware, to switch gain matrices as soon as motor loss is detected. The results are shown in the video below, as well as a comparison to the previous controller and its inability to handle motor loss.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/CKas2CD47sc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </main>

    
</body>        
  );
}

export default Drone_Page;