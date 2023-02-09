const input = document.getElementById("taskBox");

function addTask(){
    if(input.value != ""){
        const taskList = document.getElementById("tasks");
        const li = document.createElement("li");
        const task = document.createElement("p");
        const dButton = document.createElement("button");

        li.id = "myTaskLi";
        task.id = "myTaskP";

        dButton.appendChild(document.createTextNode("X"));
        li.appendChild(document.createTextNode(input.value));
        li.appendChild(dButton);
        
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