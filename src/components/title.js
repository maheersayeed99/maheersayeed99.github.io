import '../stylesheets/project.css';

const Title = (props) => {

    return(

        <div class="title-container">
            
            <div class="title">
                <h2>{props.list[0]}</h2>
                <h2 class="red">{props.list[1]}</h2>
                <h2>{props.list[2]}</h2>
            </div>
            <div class="banner"></div>
        </div>

        
    )
}


export  { Title }