// All Buttons
const buttons = document.querySelectorAll('.controls')
// Individual Button
const button = document.querySelectorAll('.control')
// Main Content
const post = document.querySelectorAll('.picture')


function transitionPage(){

    for (let i = 0; i<button.length; ++i){
        
        button[i].addEventListener('click', function(){

            const id = this.dataset.id;
            
            if (id == "projects")
            {
                window.location.href = "index.html";
            }
            else if (id == "about")
            {
                window.location.href = "about.html";
            }
            if (id == "contact")
            {
                window.location.href = "contact.html";
            }
            
            
        })
    }

    for (let i = 0; i<post.length; ++i)
    {
        post[i].addEventListener('click', function(){
            const id = this.dataset.id;
            window.location.href =  id + ".html";    
        })
    }
   
}


transitionPage();