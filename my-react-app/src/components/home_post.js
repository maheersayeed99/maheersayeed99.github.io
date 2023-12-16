import '../stylesheets/project.css';
import { useNavigate } from 'react-router-dom';

const Home_Post = (props) => {

    const navigate = useNavigate();

    const navigateToPage = (route) => {
        navigate(route);
    };
    
    return(

        <div class="post">                
            <div class="picture" data-id={props.data_id}><img src={props.image_src}
            onClick={()=>{navigateToPage(props.data_id)}}/></div>
            <h4 class="text">
                {props.title}
                
                <div class="icon">
                    <a href={props.link}><i class="fa-brands fa-github"></i></a>
                </div>
                
            </h4>
            <h5>
                {props.text}
            </h5>
        </div>
    )
}


export  default Home_Post