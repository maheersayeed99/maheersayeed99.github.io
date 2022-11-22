// All Sections
const sections = document.querySelectorAll('.section')
// All Buttons
const buttons = document.querySelectorAll('.controls')
// Individual Button
const button = document.querySelectorAll('.control')
// Main Content
const wholeBody = document.querySelectorAll('.wholeBody')
// Posts
const post = document.querySelectorAll('.picture')


function transitionPage(){

    for (let i = 0; i<button.length; ++i){
        button[i].addEventListener('click', function(){
            let activeButton = document.querySelectorAll('.active-btn');
            let activeSection = document.querySelectorAll('.active-sec');

            if (activeButton.length != 0)
            {
                activeButton[0].classList.remove("active-btn");
            }
            
            activeSection[0].classList.remove("active-sec");

            this.classList.add("active-btn");
            const id = this.dataset.id;
            const element = document.getElementById(id);
            element.classList.add("active-sec")    
            
            console.log(id)
        })
    }
    
    for (let i = 0; i<post.length; ++i)
    {
        post[i].addEventListener('click', function(){
            let activeButton = document.querySelectorAll('.active-btn');
            let activeSection = document.querySelectorAll('.active-sec');

            if (activeButton.length != 0)
            {
                activeButton[0].classList.remove("active-btn");
            }

            activeSection[0].classList.remove("active-sec");

            const id = this.dataset.id;
            const element = document.getElementById(id);
            element.classList.add("active-sec")    
        })
    }
    



}


transitionPage();