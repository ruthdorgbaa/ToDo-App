document.querySelector(`#push`).onclick = function() {
    if(document.querySelector(`#newtask input`).value.lenght == 0){
        alert("Please Enter Task")
    }
    else{
        document.querySelector(`#tasks`).innerHTML +=
         `
        <div class="tasks">
         <span id="taskname">
             ${document.querySelector(`#newtask input`).value}
             </span>
             
             <button class="delete">
                 <i class="far fa-trash-alt"></i>
                 </button>
                 </div>

                 `;
                 
                 var close = document.getElementsByClassName("delete");
                 var i;
                 for (i = 0; i < close.length; i++) {
                   close[i].onclick = function() {
                     var div = this.parentElement;
                     div.style.display = "none";
                   }
                 }                


    }

 }  
             
 