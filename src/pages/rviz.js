import '../stylesheets/project.css';
import { Horizontal_Image_Array } from '../components/horizontal_image_array';
import { Sliding_Image } from '../components/sliding_image';

function Rviz_Page() {

  return (
    <body class = "wholeBody">

        <header>

            <div class="title">
                <h2>Workspace<span>Viewer</span><span class="shadow">workspaceviewer</span></h2>
            </div>

        </header>


        <main>
            <div class="preview">
                <img src="img/rviz/rviz_preview.webp" alt=""/>
            </div>
            

            <p>This is a group project that I did in my data structures class where we built a visualizer that takes a ROS urdf file and displays the reachable workspace of the linkage. The goal of the project was to utilize the different data structures we learned about in class to produce a useful engineering tool.</p>
            <p>My responsibilities in this project was to create the graphics for the workspace, create an output pcd file and handle the inverse kinematics.</p>
            <p>I used OpenGL to display a 3D point cloud of the robot workspace. There are 5 steps to obtain the workspace from the urdf file. The urdf file contains information about link length, origin, rotation axis and rotation constraints. A sample urdf file is shown below:</p>
            
            <Horizontal_Image_Array images={["/img/rviz/1.png","/img/rviz/2.webp"]}/>

            <p>This sample robot has 2 additional links. One team member developed a parser that takes this information, and stores it in the robot workspace class. Forward kinematics is then performed to find the end effector location given the angle constraints. The angles are chosen from the constraint range in distinct increments. The density of these increments can be changed with an input argument when running the file. Multithreading was also done to speed up the point cloud generation process. A maximum of 8 threads can be used, which is also specified with the second input argument. The following images show the difference between a density of 10 and a density of 100.</p>

            <Sliding_Image image_left="img/rviz/3.png" image_right="img/rviz/4.png" image_element_id="pointcloud_compare"/>
            
            <h4>Visual Display</h4>
            <p>After the point cloud is generated, I mapped them on 3D space in an OpenGL window. The orientation of the point cloud can be updated with the arrow keys. This is done by updating the OpenGL modelView with rotation matrices. All the code for the visual display can be found in the main.cpp file. Using this method, both 2D and 3D point clouds can be displayed.</p>
            
            <Horizontal_Image_Array images={["/img/rviz/5.webp","/img/rviz/6.webp"]}/>
            
            <h4>Saving XML</h4>
            <p>We also wanted to save the point cloud data in a pcd file. So that the point cloud can be exported to e used elsewhere as necessary. I developed a function that takes the point cloud position data and formats it as a pcd file. Every time the project is run, the xml file is developed and saved in the build directory.</p>
            <div class="pic"><img src="/img/rviz/7.png"/></div>
            <h4>Inverse Kinematics</h4>
            <p>The final thing I worked on in this project was the inverse kinematics angle generation. Essentially, the user should be able to pick a point from the workspace, and the program will give them the angles that each joint needs to be set at to have the robot reach that point.</p>
            <p>Instead of solving this problem with inverse kinematics formulas, I decided to use a proximity based 3D lattice approach. I dynamically created a lattice class where each distinct cell occupies a certain portion of the 3D space. When the point cloud is generated, each point is also assigned to its respective lattice cell. When the user inputs a new point, a function determines which lattice cell it would occupy. Once this is found, the angles for the closest point in that lattice space is returned. This gives approximate angles, and is a quick and dirty solution to an otherwise complex problem. The user can press enter and then follow instructions in the terminal to find the return angles for their desired point. The closest point is also colored red on the display.</p>
            
            <Horizontal_Image_Array images={["/img/rviz/8.png","/img/rviz/9.png"]}/>
            
            

        </main>
        
    </body>
    
  );
}

export default Rviz_Page;