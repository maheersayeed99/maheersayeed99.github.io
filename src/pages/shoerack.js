import '../stylesheets/project.css';
import { Horizontal_Image_Array } from '../components/horizontal_image_array';
import { Sliding_Image } from '../components/sliding_image';

function Shoerack_Page() {

  return (
    <body class = "wholeBody">
        
        
        <header>

            <div class="title">
                <h2>Collapsible<span>Rack</span><span class="shadow">CollapsibleRack</span></h2>
            </div>

        </header>

        <main>
            
            <div class="preview">
                <img src="img/shoerack/wireframe_preview.webp" alt=""/>
            </div>

            <p>In the winter of 2021, I completed my second internship at ProductLogic. My main project was to build a prototype of a product that could fold in a certain way. The client that we were working with on this product had already filed for a patent that gave an explicit description of how the product is to be folded, but no explanation of how it needs to be rigidized in the "open" position. I was tasked with designing an effective rigidization method that falls within the guidelines of the patent.</p>
            <div class="pic"><img src="img/shoerack/1.webp"/></div>
            <p>I decided to give the product a wire form skeleton inspired by foldable suit racks. Wire form companies can bend metal rods into shapes that can be interlocked to achieve desired folds. This can be done at a relatively cheap price. I designed the wire form within SolidWorks first to test the feasibility of the idea. The corner joints allow the legs to rotate only between the "open" and "closed" position while supporting the rest of the product on the upper horizontal rods. Once I had the dimensions and gauge right, I fabricated the skeleton with steel rods.</p>
            
            <Sliding_Image image_left="img/shoerack/2.jpeg" image_right="img/shoerack/3.jpeg" image_element_id="joint_compare"/>

            <p>The problem with rigidizing a product like this is that it needs to work against gravity in the "open" position. Existing products that perform the same function are usually meant to be hung in closets in order to solve this issue. By using a wire form skeleton, I can essentially do the same thing by hanging the rest of the product on upper rods of the skeleton. This solves the gravity problem and lets the product have a very small footprint when it is folded down.</p>
            <div class="pic"><img src="img/shoerack/4.webp"/></div>
            <p>A second demand by the client was to have adjustable dividers in the product that folded the same way as the outer walls. In order to make this possible, I had to connect the dividers in the upper and lower portion of the product so that they moved together. I accomplished this by designing a wire form connector. The connector not only connects the two divider walls, but it also supports the floor of the upper compartment.</p>
            <div class="pic"><img src="img/shoerack/5.webp"/></div>
            <p>I took advantage of the wire form skeleton once again by attaching the dividers to the upper rods. Now they can slide freely along those rods, as shown below. </p>
            <div class="pic"><img src="img/shoerack/6.webp"/></div>
            <p>Finally, I 3D printed some snap on feet that the metal legs could attach to in the "open" position. These legs have an elevated floor on them that forces the legs to be taut when snapped in the place. This further rigidizes the system in the "open" position.</p>
            <div class="pic"><img src="img/shoerack/7.webp"/></div>
            <p>Ultimately, this was a very fun hands-on project that got good approval from the client. It gave me great experience working with patents and finding creative solutions to real world problems. </p>
            
        </main>

    </body>
    
  );
}

export default Shoerack_Page;