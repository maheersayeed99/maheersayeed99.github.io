import '../stylesheets/project.css';
import { Horizontal_Image_Array } from '../components/horizontal_image_array';
import { Title } from '../components/title';

function Gripper_Page() {

  return (

    <body class = "wholeBody">
        
        <Title list={["Mechanical","Gripper"]}/>


        <main>
            <div class="preview">
                <img src="img/gripper/gripper_preview.jpeg" alt=""/>
            </div>


            <p>The Objective of the project was to work in a group of four to build a gripper that could use a motor to grip an artifact. The gripper would then be swung around while holding the artifact, which is not allowed to displace during this time.</p>
            <p>We decided to make our gripper laser-cutter friendly, so that building new iterations would be easy. Everything red and black in the picture below is made of acrylic.</p>
            <div class="pic"><img src="/img/gripper/1.png"/></div>
            <p>We used machined metal blocks to connect the “claw” portion of the gripper arms to the rest of the body.</p>
            <p>Our design was one of the few that had two moving arms. This was accomplished by designing the gripper arms to have gear teeth that mesh on a 1:1 ratio. We also added a material called dycem on the inside of the claws to produce better friction between the claws and the artifact.</p>
            <div class="pic"><img src="/img/gripper/2.webp"/></div>
            <p>We did design a lighter assembly that was 3D-printed, but we decided not to use it since we had more testing hours put into the original acrylic design.</p>

            
        </main>

        
    </body>
    
  );
}

export default Gripper_Page;