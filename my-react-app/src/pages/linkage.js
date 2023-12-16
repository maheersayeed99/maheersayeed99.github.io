import '../stylesheets/project.css';
import { Horizontal_Image_Array } from '../components/horizontal_image_array';


function Linkage_Page() {

  return (

    <body class = "wholeBody">
        
        <header>

            <div class="title">
                <h2>4Bar<span>Linkage</span><span class="shadow">4barLinkage</span></h2>
            </div>

        </header>


        <main>
            <div class="preview">
                <img src="img/linkage/linkage_preview.png" alt=""/>
            </div>


            <p>I created a linkage assembly with three other people in my Design one class. The purpose of the linkage was to press up against a heavy plate to press on a button. My contribution to the team consisted of creating the CAD for the linkage, and some machining.</p>
            <div class="pic"><img src="/img/linkage/1.jpeg"/></div>
            <p>The linkage above was the design that we used for test day one. Due to ignorance towards the member thicknesses, the design failed during testing day. When it worked, it was capable of keeping the button pressed for 45% of the testing duration.</p>
            <div class="pic"><img src="/img/linkage/2.gif"/></div>
            <p>The design used during the second day of testing had the two top members removed. This reduces the number of planes used by the linkage, which solves the outward moment problem that caused the other design to fail. However, it needed to be machined entirely out of aluminum, as acrylic could not handle the added stress caused by the springs on the plate. The second linkage kept the button pressed for 50 % of the testing duration.</p>
            <p>Below is a side-by-side comparison of the two designs:</p>
            
            <Horizontal_Image_Array images={["/img/linkage/3.gif","/img/linkage/4.gif"]}/>
            
            <p>Furthermore, my group and I created a full report for the entire design. This covered stress calculations, FEA analysis, and many design iterations. The FEA analysis of the second design is shown below:</p>
            <div class="pic"><img src="/img/linkage/5.png"/></div>
            <p>My group and I also had to present our entire design process and testing in front of the class.</p>

        </main>
        
        
    </body>
    
    
  );
}

export default Linkage_Page;