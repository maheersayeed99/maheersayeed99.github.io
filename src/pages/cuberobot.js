import '../stylesheets/project.css';
import { Horizontal_Image_Array } from '../components/horizontal_image_array';
import { Sliding_Image } from '../components/sliding_image';
import { Title } from '../components/title';

function Cube_Robot_Page() {

  return (
    <body class = "wholeBody">
        
        <Title list={["Rubik's Cube","Robot"]}/>


        <main>
            <div class="preview">
                <img src="img/cuberobot/cuberobotmain.png" alt=""/>
            </div>
            
            <p>I designed and built a robot to pair with my Rubik's Cube solving algorithm. With this robot, a user can scramble a real cube, scan it, have the solver generate an algorithm, and let the robot perform the algorithm until the cube is solved. This was a 3 month long personal project. The results are shown in the following demo.</p>
            <h4>Demo (x6.5 speed for the middle of the video):</h4>
            <iframe width="260" height="200" src="https://www.youtube.com/embed/6kkz0aLYfp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            
            <h4>Design:</h4>
            <p>The goal of this design was to make the robot function with the least number of actuators. There was no emphasis on getting a quick solve. Instead, this design successfully reduced the number of required motors to 2. This is difficult, because three different motions are required in order to solve a cube. The robot must be able to turn the whole cube along two rotational axes, and at least one of the sides on its own. Getting three functions out of two motors is difficult, but it can be achieved with some trickery.</p>
            
{/*             
            <div class="img-comp-container">
                <div class="img-comp-img">
                <img src="img/cuberobot/4.png"/>
                </div>
                <div class="img-comp-overlay">
                <img src="img/cuberobot/5.png"/>
                </div>
            </div> */}


            <Sliding_Image image_left="img/cuberobot/4.png" image_right="img/cuberobot/5.png" image_element_id="cube_compare"/>
            
            <p>The first step was to design a component that can turn the cube in the yaw direction. I call this part the tray. It is a 3d printed part controlled with a stepper motor. There is a slight dip in the tray that is sized to fit the cube perfectly. This locks the cube in place when the tray turns.</p>
            
            <Horizontal_Image_Array
            images=  {["/img/cuberobot/9.png","/img/cuberobot/6.gif"]}
            />
            
            <p>The second step was to design a component that can turn the cube in the pitch direction. The part that does this is called the shroud. It is connected to a DC encoder motor. As the shroud spins, it tips the cube over onto the tray. Since the sides of the tray are sloped, and the entire assembly is tilted at a 5 degree angle, the cube falls back into place every time.</p>
            
            <Horizontal_Image_Array
            images=  {["/img/cuberobot/10.png","/img/cuberobot/7.gif"]}
            />
            
            <p>The final motion is achieved when the tray and the shroud work together. The shroud has an active position, where it envelops the cube with it’s stiff walls. The walls hold the top two layers in place. At this point, the tray spinning will only move the bottom layer.</p>
            

            <div class="picSmall"><img src="/img/cuberobot/8.gif"/></div>
            
            
            <h4>Electrical:</h4>
            <p>The main microcontroller used for this project is an ESP8266. There are 8 usable digital IO pins in this board. Since only two motors are used in this design, the low number of pins is not a problem. Two L298N motor drivers are used to control the two motors. The stepper motor that controls the tray is a Nema17 Bipolar Stepper Motor. The DC motor that controls the shroud is a Bemonoc 60rpm DC gear motor with an encoder. Although all the peripherals can operate on 12V, the system I powered with a 9V power wall power supply. The circuit diagram and picture of the circuitry is shown below:</p>
            
            <div class="pic"><img src="/img/cuberobot/3.png"/></div>
            <div class="pic"><img src="/img/cuberobot/11.png"/></div>

            <h4>Control Software:</h4>
            
            <p>The microcontroller firmware is written using Arduino IDE. The stepper motor code is taken straight from a library. The DC motor needs to be controlled as though it were a servo motor. This is done using PID control with the encoder error. The PID constants are tuned to produce stable step responses with no overshoot. The step input and response are plotted below.</p>
            <div class="widepic"><img src="/img/cuberobot/12.png"/></div>
            <p>An important change needs to be made in the solver code to make the solution readable by the robot. The solver returns a series of moves that would solve the cube if the frame of reference is never changed. This is because the solver treats the white face as the top face at all times. However, the robot changes references every time it makes a move. The solver algorithm is processed with a function that keeps track of the frame of reference after every move.</p>
            <div class="widepic"><img src="/img/cuberobot/13.png"/></div>
            <p>Finally, the robot needs to get the solution from the solver. There are two ways to do this. The ESP8266 has a wifi module that can connect to the internet. The user can send the solution over wifi to the robot. However, it is just as easy to copy/paste the solution string to the serial monitor.</p>


            

            
        </main>
        
    </body>      
  );
}

export default Cube_Robot_Page;