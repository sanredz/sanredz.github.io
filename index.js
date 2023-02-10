const input = document.getElementById("taskBox");
const checkboxSocial = document.getElementById("social");
const checkboxWork = document.getElementById("work");

function addTask(){
    if(input.value != ""){
        const taskList = document.getElementById("tasks");
        const li = document.createElement("li");
        const dButton = document.createElement("button");
        const iconSocial = document.createElement("i");
        const iconWork = document.createElement("i");

        iconSocial.innerHTML = "<i class='fa-regular fa-face-grin-beam' id='testi'></i>";
        iconSocial.id = "icon";
        iconWork.innerHTML = "<i class='fa-regular fa-id-badge'></i>";
        iconWork.id = "icon";
        li.id = "myTaskLi";

        dButton.appendChild(document.createTextNode("X"));
        li.appendChild(document.createTextNode(input.value));
        li.appendChild(dButton);
        if (checkboxSocial.checked){
            li.appendChild(iconSocial);
        }
        if (checkboxWork.checked){
            li.appendChild(iconWork);
        }

        taskList.appendChild(li);

        input.value = "";
        dButton.addEventListener("click", deleteTask)
        

        function deleteTask(){
            li.classList.add("delete");
        }

        li.addEventListener("click", toggleDone);

        function toggleDone(){
            li.classList.toggle("done");
        }
}
}

input.addEventListener("keydown", addListAfterPress);

function addListAfterPress(event){
    if(event.keyCode === 13){
        addTask();
    }
}