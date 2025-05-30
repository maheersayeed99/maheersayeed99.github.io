import '../stylesheets/project.css';
import { Horizontal_Image_Array } from '../components/horizontal_image_array';
import { Title } from '../components/title';

function Chassis_Page() {

  return (
    <body class = "wholeBody">
        
        <Title list={["Robosub","Chassis"]}/>


        <main>
            <div class="preview">
                <img src="img/chassis/chassis_preview.webp" alt=""/>
            </div>

            <p>Tartan AUV is Carnegie Mellon University’s Autonomous Underwater Vehicle team. Every year, students build a submarine and submit it for competition in August. The submarine has to operate underwater by itself and complete designated tasks.</p>
            <p>I worked with the mechanical team to design and build the body of the submarine the last two years. This year, I mainly worked on the chassis of the submarine, which engulfs the electronics tubes and holds all thrusters and actuators.</p>
            <div class="pic"><img src="/img/chassis/1.gif"/></div>
            <p>This year’s chassis features a unique rib cage design that allows it to open up about the undercarriage so that the electronics tubes can be easily accessed.</p>
            <div class="pic"><img src="/img/chassis/2.png"/></div>
            <p>The chassis has eight rib plates connected by four sternum plates. I designed the rib with efficient cutouts to provide ample support while keeping the chassis light. The sternum plates connect to the ribs with a shoulder bolt and two thrust bearings at every joint. This design also allows the chassis to be created with a water-jet and limited post machining.</p>
            <div class="pic"><img src="/img/chassis/3.png"/></div>
            <p>These 3D printed connectors go inside the tube. The purpose of the connector is to securely move a hex-nut within the tubes so that the ribs can be screwed in without much difficulty. I also included a square cutout on one side of the connector so that the connectors can be rotated within the tube.</p>
            <div class="pic"><img src="/img/chassis/4.png"/></div>
            <p>I modeled the mounts above so that the thrusters can be evenly supported. Each cylindrical guard is designed to be CNC machined with minimal post machining. The mounts also utilize both tubes for support, so that they are less likely to loosen over time. The thrusters also mount to the guard as opposed to the tubes. This allows easy removal of the thrusters if anything goes wrong.</p>
            <div class="pic"><img src="/img/chassis/5.png"/></div>
            <p>I improved on my mount design by looking at 3D printed parts rather than metal parts. This way, they would be lighter and I would have more freedom to design interesting shapes. The 3D printed mounts above were designed to protect the thrusters from every angle while using the least amount of material possible. This is why it has half guards.</p>
            <div class="pic"><img src="/img/chassis/6.png"/></div>
            <p>I re-designed the mounts a second time to make them easier to 3D print. Now, each mount has three distinct parts: The mount, the guard and the split clamp connectors. The connectors were necessary because we wanted to be able to take the mounts off without disassembling anything else. The guards are now a separate piece that is the same file for both mount types.</p>
            
        </main>
        
    </body>

  );
}

export default Chassis_Page;