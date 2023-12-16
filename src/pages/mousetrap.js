import '../stylesheets/project.css';
import { Horizontal_Image_Array } from '../components/horizontal_image_array';


function Mousetrap_Page() {

  return (
    <body class = "wholeBody">
        
        <header>

            <div class="title">
                <h2>Mousetrap<span>Car</span><span class="shadow">MousetrapCar</span></h2>
            </div>

        </header>


        <main>
            <div class="preview">
                <img src="img/mousetrap/mousetrap_preview.jpeg" alt=""/>
            </div>
            
            <p>I led a group of four people to build a mousetrap powered car that can travel in an arc and stop inside a box. Our car won a CMU design award due to its unique two wheeled design and braking mechanism.</p>
            <div class="pic"><img src="/img/mousetrap/1.webp"/></div>
            <p>The design has only one axle and two wheels. This means that the mousetrap body has to hang freely in order for the car to roll. However, the two wheel design allows the car to easily curve if one wheel is smaller than the other. We performed calculations in order to figure out the exact difference in wheel diameters so that the desired curve is achieved. The wheels themselves were laser cut. The axle was a threaded rod in order to easily connect the wheels and help with the braking mechanism.</p>
            <div class="pic"><img src="/img/mousetrap/2.jpeg"/></div>
            <p>The car has a very unique method for braking. The large wheels give the car a large rotational inertia which could not be stopped with the normal braking mechanism. The solution was to lube the fixture at the large wheel. This let the fixture loosen as the car moves so that by the time the string brake is applied, the car simply spins about the rigid wheel until it runs out of energy.</p>
            <p>The car was also the second fastest in our initial testing section, which allowed it to move on to final testing.</p>
        </main>
        
    </body>
    
    
  );
}

export default Mousetrap_Page;