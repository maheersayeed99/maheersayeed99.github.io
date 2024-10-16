import '../stylesheets/project.css';
import { Horizontal_Image_Array } from '../components/horizontal_image_array';
import { Title } from '../components/title';

function Cube_Page() {

  return (
        <html>
        

        <body class = "wholeBody">

            <Title list={["Rubik's Cube","Solver"]}/>
            
            <main>
                <div class="preview">
                    <img src="img/cube/rubiks_preview.webp" alt=""/>
                </div>
                
                <p>I wrote a program that is able to take in the colors of a scrambled Rubik’s Cube, and return a series of moves that will solve it. For detecting the colors, I used OpenCV and my webcam. Once the scrambled cube is scanned into the program, it is fed into the solving algorithm which uses graph generation along with Dijkstra shortest path-finding to return a valid solution. Ideally, I will pair this with a robot capable of solving the real cube using the generated algorithm. The project is made in Python, and the code can be found at https://github.com/maheersayeed99/RubiksSolver.</p>
                <h4>Demo:</h4>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/7jCuPY_rh_M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h4>Modeling:</h4>
                <p>The first challenge was to develop a model for the cube that mimics a physical cube in every single way. This virtual cube should be able to perform clockwise and counterclockwise rotations on all six faces and track where all the pieces move after each rotation. To make this possible, a cube class, face class and facet class are made. A cube object contains a 3x3x6 array of facet objects. This is the data structure that will be used to represent the rubik’s cube. The facets contain information about its own color, as well as the color of every other facet that is connected to it. This way, each facet is unique and each corner/edge piece can be identified. Along with this, there are six instances of face objects that represent the 6 sides of the cube. The face objects are mainly used to perform rotations. The modeled cube is printed on the terminal, with the facets represented by their color string.</p>
                <div class="pic"><img src="/img/cube/1.png"/></div>
                <p>Once the cube is modeled, rotations can be performed. Upper-case letters represent clockwise rotations and lower-case letters represents counterclockwise rotations. The following is a solved cube after the rotation “RDr” is performed. A physical cube is shown alongside it with the same moves:</p>
                
                <Horizontal_Image_Array
                images = {["/img/cube/2.png","/img/cube/3.webp"]}
                />

                <p>With sufficient unit testing, it was determined that the model cube behaves exactly like a physical cube, and we can move on to programming a solving algorithm.</p>
                <h4>Solving</h4>
                <p>The solving algorithm follows the rules of the beginner method. Specific details of the beginner method can be found here: https://ruwix.com/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/</p>
                <p>Here's how it works. A new node class is created, and a 3x3x6 array is populated with these nodes. After this, a list of possible moves is given to the graph generation algorithm (ex. [“r”,”b”,”Rbr”]). Node positions are marked, then a move is made, and node positions are marked again. After this the move is reversed. By the end of the algorithm, each node knows which neighboring node it will change to after each move. For example, after a right clockwise rotation, the node at [2][1][2] changes to the node at [0][1][2]. The code for the generateGraph function is below:</p>
                <div class="widepic"><img src="/img/cube/4.webp"/></div>
                <p>The key is that each node can move independently. We don’t need to worry about the rest of the nodes moving accordingly like we did when we were programming the behavior of the facets. This lets us do the next part of the solution algorithm: pathfinding. Any pathfinding algorithm works. I experimented with bfs and Dijkstra using the length of the move string as the weight. For each individual node, the target location is the location of that node in the solved state. We will perform dijkstra on that node with a list of moves until the node is in the correct location, while remembering to avoid nodes that have already been visited. We will keep track of parent nodes so that once the correct position is found, we can backtrack and return the optimal moves that led to that state.</p>
                <p>This technique needs to be done with every piece in a certain order. The beginner method solves the bottom cross, bottom corners, middle edges, top cross, top face, top corners and finally the top edges. At each stage, the list of usable moves are altered so that the already positioned pieces are not accidentally scrambled again. The usable moves can be found in the beginner method wikipedia page. Using this method, the cube can be solved with an average of 107 moves. More importantly, the solve is extremely fast, taking almost no time to perform. A sample solution is provided below.</p>
                <div class="widepic"><img src="/img/cube/5.png"/></div>
                <h4>Detection:</h4>
                <p>The final piece of the puzzle is automating the input of a manual scramble. I found that the best way to do this was to use Computer Vision to quickly detect all the colors. I used the OpenCV library to create a GUI that helps the user orient the cube correctly and then automatically detects and populates the colors of the scrambled faces.</p>
                <p>Sticking to the pattern of 3D arrays, we will fill another 3x3x6 array, this time with strings representing the color of the facets. One challenge was that the cube needs to be oriented properly. This is manually done by the user. Orientation lines create a square on the screen where the cube needs to be faced for proper color detection. The colors of the lines also lets the user know how to orient the cube properly. The user needs to rotate through each face manually until all six faces are detected properly.</p>
                <p>As for the actual color detection, masks are created for all six colors. The mask allows pixels of only that color through. However, the thresholds of the mask needed to be tuned to identify the colors through different light conditions. This is done by converting from the brg color space to the hsv color space. The cube I am using is also very old, so worn out colors were also a problem. Tuning the upper and lower hsv thresholds ultimately resulted in high functioning masks that let only one color through without any noise. The following is a screenshot of the yellow and green masks in action.</p>
                <div class="pic"><img src="/img/cube/6.png"/></div>
                <p>The final step is to program the application to detect the colors automatically. This is done using a canny mask conversion that detects shadow contours. When the cube is oriented correctly, the contour will occupy the entire mask. This starts a timer that will auto detect after 3 seconds. Once all six sides are detected properly, pressing “m” calls on the solving algorithm and returns the solution on the OpenCV window as well as the terminal.</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/NMPrSj7lLms" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


            </main>

            <script src="project.js"></script>
            
        </body>
        </html>        
  );
}

export default Cube_Page;