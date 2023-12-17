import '../stylesheets/project.css';
import { useState } from 'react';

const Sliding_Image = (props) => {


    const [sliderShow, setSliderShow] = useState(50)

    const dragSlider = (event) => {
        
        const mouseX = event.clientX
        
        const element = document.getElementById(props.image_element_id)
        const rect = element.getBoundingClientRect();
        const leftBound = rect.left;
        const rightBound = rect.right;
        var percent = (mouseX-leftBound)/(rightBound-leftBound)*100
        if (percent >= 100){
            percent = 100;
        }
        if (percent <= 0){
            percent = 0;
        }
        console.log(percent)
        setSliderShow(percent)
         
    }

    const dragSliderTouch = (event) => {
        
        const touchX = event.touchX

        const element = document.getElementById(props.image_element_id)
        const rect = element.getBoundingClientRect();
        const leftBound = rect.left;
        const rightBound = rect.right;
        var percent = (touchX-leftBound)/(rightBound-leftBound)*100
        if (percent >= 100){
            percent = 100;
        }
        if (percent <= 0){
            percent = 0;
        }
        console.log(percent)
        setSliderShow(percent)
         
    }

    const handleMouseDown = (e) => {
        document.addEventListener('mousemove', dragSlider);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleTouchDown = (e) => {
        document.addEventListener('touchmove', dragSliderTouch);
        document.addEventListener('touchstart', handleTouchUp);
    };

    const handleMouseUp = (e) => {
        document.removeEventListener('mousemove', dragSlider);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    const handleTouchUp = (e) => {
        document.removeEventListener('touchmove', dragSliderTouch);
        document.removeEventListener('touchstart', handleTouchUp);
    };

    
    return(

        <div class="img-comp-container">
            
            <div class="img-comp-slider" style={{marginLeft:`${sliderShow}%`}} onTouchStart={(event)=>{handleTouchDown(event)}} onMouseDown={(event)=>{handleMouseDown(event)}}></div>

            <div class="img-comp-img" id={props.image_element_id}>
                <img src={props.image_left}/>
                
            </div>

            <div class="img-comp-overlay" style={{width:`${sliderShow}%`}} >
                <img src={props.image_right}/>
                
            </div>


        </div>

    )
}


export  { Sliding_Image }