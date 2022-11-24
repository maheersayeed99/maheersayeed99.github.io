// All Buttons
const buttons = document.querySelectorAll('.controls')
// Individual Button
const button = document.querySelectorAll('.control')
// Main Content


function transitionPage(){

    for (let i = 0; i<button.length; ++i){
        
        button[i].addEventListener('click', function(){

            

            const id = this.dataset.id;
            console.log(id);
            window.location.href = "index.html";
            
            /*
            const active = document.querySelectorAll('.active-sec');
            active[0].classList.remove("active-sec");
            const element = document.getElementById(id);
            element.classList.add("active-sec");
            */
            
        })
    }

}


transitionPage();