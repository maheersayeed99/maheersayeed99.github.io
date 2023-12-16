import '../stylesheets/project.css';

const Horizontal_Image_Array = (props) => {
    
    return(

        <div class="table">

            {props.images.map((img_src) => (
                <div class="child">
                    <img src={img_src}/>
                </div>
            ))}
            
        </div>

    )
}


export  { Horizontal_Image_Array }