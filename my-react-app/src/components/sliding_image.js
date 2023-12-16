import '../stylesheets/project.css';
import { useState } from 'react';

const Sliding_Image = (props) => {

    const [show, setShow] = useState(50)



    
    return(

        <div class="img-comp-container">
            
            <div class="img-comp-img">
                <img src="img/cuberobot/4.png"/>
            </div>

            <div class="img-comp-overlay" style={{left:'50%', overflow:'hidden'}}>
                <img src="img/cuberobot/5.png" />
            </div>

            <div class="img-comp-slider" style={{marginLeft:'50%'}}></div>


        </div>

    )
}


export  { Sliding_Image }