window.addEventListener("load", function(){
    const picArray = (document.querySelectorAll('.thumb-display'));   
    const formInput = document.querySelector(".frm-control");
    const tagArray = Array.from(document.querySelectorAll('p.tags'))
    const formReset = document.querySelector("a.reset");
     
    
    formReset.addEventListener('click',function(e){
        e.currentTarget.classList.add('hidden');
        formInput.value ="";
        picArray.forEach((elm)=>{
            elm.classList.remove('hidden');
        })
    })  
        
    formInput.addEventListener("input", function(e){
         textInput = e.currentTarget.value;
         formReset.classList.remove('hidden');
         if (textInput.trim() === ""){
            picArray.forEach((elm)=>{
                elm.classList.remove('hidden');
                formReset.classList.add('hidden');
            })
         }else
         {         
            tagArray.forEach((element, index)=>{
                if(element.textContent.includes(textInput)){
                    picArray[index].classList.remove('hidden');
                 }
                else{
                    picArray[index].classList.add('hidden');
                 }            
            })
        }
    })

    
})