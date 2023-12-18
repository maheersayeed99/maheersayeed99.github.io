import '../stylesheets/project.css';
import { Horizontal_Image_Array } from '../components/horizontal_image_array';
import { Title } from '../components/title';

function Bracket_Page() {

  return (
    
    <body class = "wholeBody">
        
        <Title list={["Acrylic","Bracket"]}/>



        <main>
            <div class="preview">
                <img src="img/bracket/bracket_preview.png" alt=""/>
            </div>
            <p>This was an independent project in my Design 1 class at Carnegie Mellon University. The challenge was to laser-cut a bracket out of 3/8 inch acrylic that can support a 40 lb weight.</p>
            <p>As shown, the challenge was to mount the acrylic on to the existing holes while avoiding any overlap with the red zone. My final design was a cantilever hook that hangs on one pin and rests on the other. This design was achieved after thirty different iterations on SolidWorks.</p>
            <p>Below is a comparison of the brackets that I used for the first and second testing day.</p>
            <div class="widepic"><img src="/img/bracket/1.png"/></div>
            <p>The first design is an s-shaped member that is symmetric about the mounting hole of the weight. This  allowed for the bracket arms to evenly distribute the weight between tension and compression. The maximum stress applied to the 4.25 gram member was 4085 psi according to the SolidWorks FEA. Below is a visual demonstration of the yield stress being applied.</p>
            <div class="pic"><img src="/img/bracket/2.webp"/></div>
            <p>There was a second red zone applied before the second testing day, which led me to make a cantilever design. The new member weighed only 3.81 grams, but the factor of safety was only 1.13. The yield stress was reached much earlier, but the design was still successful on testing day.</p>
            <div class="pic"><img src="/img/bracket/3.webp"/></div>



            
        </main>

        
    </body>
    
  );
}

export default Bracket_Page;