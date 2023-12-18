import '../stylesheets/project.css';
import { Horizontal_Image_Array } from '../components/horizontal_image_array';
import { Title } from '../components/title';

function Crane_Page() {

  return (
    <body class = "wholeBody">
        
        <Title list={["Aluminum","Crane"]}/>


        <main>
            <div class="preview">
                <img src="img/crane/truss_preview.webp" alt=""/>
            </div>

            <p>I built an aluminum crane with two other people for my Stress Analysis class. The entire crane was made out of aluminum sheet metal and fasteners. The crane successfully supported one pound of force at the tip without deflecting more than two inches.</p>
            <p>In order to reach the weight, the crane had to reach around a wall and go through a tiny window. This created bending and twisting moments about three separate members of the crane.</p>
            <div class="pic"><img src="/img/crane/1.jpeg"/></div>
            <p>The base was created with I members and cross members made of sheet metal. The broad base is capable of supporting all the stresses and 3D moments produced by the weight.</p>
            <div class="pic"><img src="/img/crane/2.jpeg"/></div>
            <p>The center arm is made of one giant piece of aluminum supported with many cross members. There are members in place to prevent twisting of this member. The joint also had to be made with perfect geometry so that the crane never touches the wall.</p>
            <div class="pic"><img src="/img/crane/3.jpeg"/></div>
            <p>The third arm that supports the weight was thinner than the others. This is because as long as the member is symmetric about the weight, it does not have to worry about twisting.</p>
            <div class="pic"><img src="/img/crane/4.jpeg"/></div>
            <p>The entire project involved a lot of collaboration and teamwork, and was ultimately successful. The member did not displace more than two inches.</p>
        </main>
        
        
    </body>
    
  );
}

export default Crane_Page;