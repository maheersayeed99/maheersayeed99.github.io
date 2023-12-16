import React from 'react';
import '../stylesheets/project.css';
import '../components/home_post'
import Home_Post from '../components/home_post';

function Home_Page() {

  return (
        <body class = "wholeBody">
            
            <div class="back"></div>
            
            <header class="section sec1 header" id="home">
                <i class="fa-solid fa-house-chimney"></i>
            </header>



            <main>
                <section class="section sec2 projects active-sec" id="projects">
                    <div class="title">
                        <h2>Engineering<span>Portfolio</span><span class="shadow">EngineeringPortfolio</span></h2>
                    </div>

                    <div class="posts">
                        
                        
                        <Home_Post
                        data_id = "habbit" 
                        image_src = "img/habbit/5.jpeg"
                        title = "Habbit"
                        text = "This is a habit tracking web app that I built that lets me log my chores using only voice commands."
                        link = "https://github.com/maheersayeed99/habbit"
                        />

                        <Home_Post
                        data_id = "cuberobot" 
                        image_src = "img/cuberobot/cuberobotmain.png"
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
                        image_src = "img/balancer/balancer_preview.jpeg"
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
                        

                        

                    </div>


                </section>


                <section class="section sec3 about" id="about">
                    <div class="title">
                        <h2>Maheer<span>Sayeed</span><span class="shadow">MaheerSayeed</span></h2>
                    </div>
                </section>

            </main>
            

            <script src="project.js"></script>
            
        </body>
  );
}

export default Home_Page;