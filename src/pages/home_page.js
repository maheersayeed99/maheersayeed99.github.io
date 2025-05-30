import React from 'react';
import '../stylesheets/project.css';
import '../components/home_post'
import Home_Post from '../components/home_post';
import { Title } from '../components/title';

function Home_Page() {

  return (
        <body class = "wholeBody">
            
            
            <Title list={["Engineering","Projects"]}/>

            <main>

                    <div class="posts">
                        
                        <Home_Post
                        data_id = "interstellar" 
                        image_src = "img/interstellar/1.png"
                        title = "Interstellar Jobs"
                        text = "This is an AI powered job board that I made with three other students for the March Microsoft Innovation Challenge. We finished first place out of 60+ teams."
                        link = "https://github.com/zachpatrignani/microsoft-hackathon"
                        />
                    
                        <Home_Post
                        data_id = "habbit" 
                        image_src = "img/habbit/5.jpeg"
                        title = "Habbit"
                        text = "This is a habit tracking web app that I built that lets me log my chores using only voice commands."
                        link = "https://github.com/maheersayeed99/habbit"
                        />

                        <Home_Post
                        data_id = "cuberobot" 
                        image_src = "img/cuberobot/preview.jpg"
                        title = "Rubik's Cube Robot"
                        text = "I built a robot to pair with my Rubik's Cube solving algorithm. This design is able to turn all 6 sides of the cube using only 2 motors."
                        link = "https://github.com/maheersayeed99/RubiksSolver"
                        />
                        
                        <Home_Post
                        data_id = "cube" 
                        image_src = "img/cube/rubiks_preview.webp"
                        title = "Rubik's Cube Solver"
                        text = "I wrote a program that is able to take in the colors of a scrambled Rubik's Cube, and return a series of moves that will solve it."
                        link = "https://github.com/maheersayeed99/RubiksSolver"
                        />


                        <Home_Post
                        data_id = "drone" 
                        image_src = "img/drone/drone_preview.png"
                        title = "Crazyflie Drone LQR Controller"
                        text = "I worked in a team of five people in my Advanced Control Systems Integration class to reprogram the attitude and height controller of a Crazyflie Hobby drone to make it more robust and handle motor loss."
                        link = "https://github.com/maheersayeed99/crazyflie-firmware"
                        />
                        

                        <Home_Post
                        data_id = "balance" 
                        image_src = "img/balancer/preview.jpg"
                        title = "Ball Balancing Robot"
                        text = "I designed and built a two degree-of-freedom ball balancing robot for my feedback controls class."
                        link = "https://github.com/maheersayeed99/BallBalancingRobot"
                        />


                        <Home_Post
                        data_id = "rviz" 
                        image_src = "img/rviz/rviz_preview.webp"
                        title = "Robot Workspace Visualizer"
                        text = "This is a group project that I did in my data structures class where we built a visualizer that takes a ROS urdf file and displays the reachable workspace of the linkage."
                        link = "https://github.com/maheersayeed99/RobotWorkspaceVisualizer"
                        />


                        <Home_Post
                        data_id = "blackjack" 
                        image_src = "img/blackjack/blackjack_preview.webp"
                        title = "BlackJack Trainer"
                        text = "For my engineering computation course, me and my parter decided to build a program that simulates the game of BlackJack and teaches the user optimal strategy to improve their odds of winning at a real casino."
                        link = "https://github.com/maheersayeed99/BlackJackTrain"
                        />


                        <Home_Post
                        data_id = "gym" 
                        image_src = "img/gym/capstone_preview.webp"
                        title = "Haptic Gym"
                        text = "For my engineering capstone project, I was in a group of five people that built an electronic workout platform."
                        />

                        
                        <Home_Post
                        data_id = "mousetrap" 
                        image_src = "img/mousetrap/mousetrap_preview.jpeg"
                        title = "Mousetrap Car Project"
                        text = "I led a group of four people to build a mousetrap powered car that can travel in an arc and stop inside a box."
                        />


                        <Home_Post
                        data_id = "shoerack" 
                        image_src = "img/shoerack/wireframe_preview.webp"
                        title = "Collapsible Shoerack"
                        text = "At ProductLogic, I designed and built a prototype of a shoerack that can collapse in a certain way."
                        />


                        <Home_Post
                        data_id = "productlogic" 
                        image_src = "img/pl/pl_preview.jpeg"
                        title = "ProductLogic Projects"
                        text = "During the summer of 2020, I worked on a few products at the Industrial Engineering firm ProductLogic LLC."
                        />
                        

                        <Home_Post
                        data_id = "linkage" 
                        image_src = "img/linkage/linkage_preview.png"
                        title = "4-bar Linkage Project"
                        text = "I created a linkage assembly with three other people in my Design one class. "
                        />


                        <Home_Post
                        data_id = "bracket" 
                        image_src = "img/bracket/bracket_preview.png"
                        title = "Acrylic Bracket Project"
                        text = "The challenge was to laser-cut a bracket out of 3/8 inch acrylic that can support a 40 lb weight. "
                        />
                        

                        <Home_Post
                        data_id = "crane" 
                        image_src = "img/crane/truss_preview.webp"
                        title = "Aluminum Crane Project"
                        text = "I built an aluminum crane with two other people for my Stress Analysis class."
                        />
                        


                        <Home_Post
                        data_id = "chassis" 
                        image_src = "img/chassis/chassis_preview.webp"
                        title = "Tartan AUV Chassis"
                        text = "I am currently using SolidWorks to design an Autonomous Underwater Submarine for my schools's robosub team. "
                        />


                        <Home_Post
                        data_id = "gripper" 
                        image_src = "img/gripper/gripper_preview.jpeg"
                        title = "Mechanical Gripper Project"
                        text = "The Objective of the project was to work in a group of four to build a gripper that could use a motor to grip an artifact. "
                        />

                    </div>

            </main>
            
            
        </body>
  );
}

export default Home_Page;