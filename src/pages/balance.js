import '../stylesheets/project.css';
import { Horizontal_Image_Array } from '../components/horizontal_image_array';
import { Title } from '../components/title';

function Balance_Page() {

  return (
    <body class = "wholeBody">
        
        <Title list={["Ball-Balancing","Robot"]}/>




        <main>
            <div class="preview">
                <img src="img/balancer/balancer_preview.jpeg" alt=""/>
            </div>

            <p>I designed and built a two degree-of-freedom ball balancing robot for my feedback controls class. The robot uses a resistive touch screen sensor and two actuating PID controlled servo motors to control the position of a steel ball.</p>
            <div class="pic"><img src="/img/balancer/1.gif"/></div>
            <p>I started the project by modeling my design on SolidWorks.</p>
            <div class="pic"><img src="/img/balancer/2.png"/></div>
            <p>The design involves a sandwiched acrylic plate design so that the top acrylic plate can have a smooth platform to attach the touchscreen. The acrylic plate right beneath that has holes for mounting the flange that connects the main support rod and universal join to the plate.</p>
            <p>I also designed a shelf to optimize the space that the robot occupies. This way, the Arduino and breadboard are stowed away, and easily accessible by removing four screws.</p>
            <h4>Mechanical Design</h4>
            <p>The main off-the-shelf mechanical parts are the universal joint and the servo pushrods. These allow the system to have two degrees of freedom within a decent range of servo angles. The universal joint lets the top platform rotate in only two-directions, while the pushrods have ball joints that ensure that the connections stay rigid while being unaffected by small displacements at the joint.</p>
            <div class="pic"><img src="/img/balancer/3.jpeg"/></div>
            <p>There were 5 machined parts in this design:</p>
            <ul>
                <li>The flange connecting the universal joint to the platform.</li>
                <li>The main support rod suspending the platform</li>
                <li>The base support cylinder connecting the main rod to the base plate</li>
                <li>The 4 smaller support rods that hold up the servo shelf</li>
                <li>The 2 pushrod joints that ensure each servo can operate independently</li>
            </ul>
            <p>All the parts were machined out of aluminum using a mill and a lathe.</p>
        

            <div class="pic"><img src="/img/balancer/4.jpeg"/></div>
            <p>There are 4 acrylic parts in the design that were laser-cut from quarter-inch acrylic:</p>
            <ul>
                <li>The top plate that holds the touch screen.</li>
                <li>The sandwiched bottom plate that is connected to the flange and pushrod joints</li>
                <li>The shelf that holds the servo motors</li>
                <li>The base the holds the Arduino and Breadboard</li>
            </ul>
            <p>There are 4 3-D printed servo mounts in this design. The mounts were designed with holes small enough so that the mounting screws would tap the holes as they were inserted the first time. They also had slots for connecting to the servo shelf so that the servos can be positioned afterwards.</p>
            
            <div class="pic"><img src="/img/balancer/5.gif"/></div>
            <h4>Electrical Components</h4>
            <p>The controller used for this project is an Arduino MEGA. The sensor used in this project is a 4-wire resistive touch screen with an 8.4 inch diagonal. One of the challenges I faced was finding a way to connect the FPC cable of the touch screen to the Arduino breadboard.</p>
            <p>I purchased an Adafruit FPC stick and FPC connector with 1mm pitch to solve this problem. The connectors were soldered on to the circuit board and pin headers were soldered to the other side, which can be connected directly to the Arduino. The stick can also be securely mounted to the rotating plate with a couple M3 screws.</p>
            <div class="pic"><img src="/img/balancer/6.jpeg"/></div>
            <p>Two Hitec HS-322 analog servo motors were used as the actuators in this project. They each control rotation in a direction independently of the other thanks to the universal joint.</p>
            <p>Finally, an IR receiver and remote were included at the end to allow for controlling the ball once it is balanced</p>
            <h4>Programming / Code</h4>
            <p>Arduino IDE was used. PID, IRRemote and SimpleKalmanFilter libraries were included from the library manager.</p>
            <p>The servo motors were first calibrated to be at rest with an input of 90 degrees to each motor. The allowable range of motion for the servo motors is kept between 60 and 120 because of mechanical limitations of the system.</p>
            <div class="pic"><img src="/img/balancer/7.gif"/></div>
            <p>After the touchscreen is connected, x, y and z data is obtained from it by flipping the 4 analog inputs into outputs when necessary and measuring the voltage gradient. The z input is used to determine if the ball is on the plate at all, because the plate needs to stop reacting to the sensor otherwise.</p>
            <p>X and Y Input from the touchscreen is fed into two independent PID controllers that control the output angle of the servo motors. The tuned coefficients that let the ball balance is:
                Kp = 0.3 , Kd = 0.1, Ki = 0.08</p>
            <p>After, this was done, the ball can balance to the center, but it was not very stable, and could not stay in the middle for long before vibrating out of control. This is because the sensor was very noisy. To reduce the fluctuation of the data from the touch screen, I applied a Kalman filter with a variance of 1cm to the ball position sensor data. This made the motion much smoother and less noisy. The sensor data (black) is plotted with the filtered data (green) below.</p>
            <div class="pic"><img src="/img/balancer/8.png"/></div>
            <p>The final step is to use the infrared remote and receiver to change the setpoint of the ball, thereby giving it a step input. The ball is also responsive from outside disturbances. I also coded in a sine wave input that makes the ball go in a circle around the plate. The plate and serial plotter data is given below.</p>
            <h4>Step Input:</h4>
            <div class="pic"><img src="/img/balancer/9.gif"/></div>
            <h4>Impulse Input (Disturbance):</h4>
            <div class="pic"><img src="/img/balancer/10.gif"/></div>
            <h4>Sinusoidal Input:</h4>
            <div class="pic"><img src="/img/balancer/11.gif"/></div>
            
        </main>
        
    </body>
    
  );
}

export default Balance_Page;