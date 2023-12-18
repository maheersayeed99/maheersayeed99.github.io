import '../stylesheets/project.css';
import { Horizontal_Image_Array } from '../components/horizontal_image_array';
import { Title } from '../components/title';

function Productlogic_Page() {

  return (
    <body class = "wholeBody">
        
        <Title list={["ProductLogic","Projects"]}/>

        <main>
            <div class="preview">
                <img src="img/pl/pl_preview.jpeg" alt=""/>
            </div>

            
            <p>During the summer of 2020, I worked on a few products at the Industrial Engineering firm ProductLogic LLC. The first project I worked on was a locking mechanism for a foldable product. I designed a lock that took advantage of twisting stress to upgrade the old design that would jam often. The second project I worked on was a latching mechanism for a tool that would not close properly. I introduced a torsional spring to the system to make the mechanism functional.</p>
            <h4>Twisting Lock</h4>
            <p>The client wanted a folding product that can fit inside a large purse. To accomplish this, the team at product logic built a frame with 3 hinges. By unlatching the outer locks, the mechanism collapses inward into a flat shape. By unlatching the middle locks, the mechanism folds one more time, further reducing the area it occupies. The problem was that when fabric was put onto the frame, there is tension on the vertical arms that jams the outer locks. I was given the task of fixing that lock and making the mechanism work.</p>
            <p>I had to diagnose the problem first. Looking at the CAD model, the lock is a ball that slides into a socket on the hinge, locking its motion. When the latch is pressed, the ball leaves the socket, freeing the hinge.</p>
            <div class="pic"><img src="/img/pl/1.gif"/></div>
            <p>The problem is that the socket does not enter the hinge at the center of rotation. Because of this, when the lock is active and tension is introduced, there is a lot of bending stress on the lock arm. This pushes the arm into the plastic ribs holding it in place and creates a lot of friction. This jams the lock.</p>
            <p>In order to fix this, I repositioned the lock so that the ball enters the socket at the center of the hinge. However, the ball-end will no longer work, so I designed a key shape that does not allow rotation when inserted into a socket at the center of rotation. Now, the bending stress is replaced by twisting stress when the lock is active. There is no longer any friction at the ribs.</p>
            <div class="pic"><img src="/img/pl/2.gif"/></div>
            <p>The last thing I did was introduce a draft on lock. This serves two purposes. It makes the lock is easier to remove when the latch is pressed and it also makes the part very easy to mass manufacture with injection molding.</p>
            <div class="pic"><img src="/img/pl/3.jpeg"/></div>
            <p>We tested the new lock by 3D printing all the parts, and the mechanism did not jam.</p>
            <h4>Torsional Spring Latch</h4>
            <p>The second project I worked on was a spring latching mechanism. The product was designed to be adjustable using incremental teeth and a stationary latch. However, the spring used to keep the lath pressed on the teeth was not working properly. I was given the task to make the latch functional.</p>
            <div class="pic"><img src="/img/pl/4.jpeg"/></div>
            <p>I diagnosed the problem, and realized that the location of the spring was the main issue. The latch needed to always push into the teeth regardless of how wide the vice grip is opened. However, the spring was being used as a compression spring positioned below the arm of the latch. This would push the latch out only slightly, which did not work very well.</p>
            <p>I thought of somehow implementing a tension spring at the far end of the latch, but that would not work at small angles and it would also look very awkward. I realized that the best way to solve the problem was to introduce a torsional spring that sits underneath the latch. As I did not have a torsional spring at the time, I designed a leaf spring that serves the same purpose.</p>
            
            <Horizontal_Image_Array images={["/img/pl/5.jpeg", "/img/pl/6.jpeg"]}/>

            <p>Adding the leaf spring solved the problem, and the latch now worked as intended.</p>
            <div class="pic"><img src="/img/pl/7.gif"/></div>
            
        </main>
        
        
    </body>
    
  );
}

export default Productlogic_Page;