function addTask(){
    if(document.getElementById("taskBox").value != ""){
    const input = document.getElementById("taskBox").value;
    const li = document.createElement("li");
    li.id = "myTaskLi";
    const task = document.createElement("p");
    task.id = "myTaskP";
    const dButton = document.createElement("button");
    dButton.appendChild(document.createTextNode("X"));
    dButton.id = "myTaskDelete";
    li.appendChild(document.createTextNode(input));
    li.appendChild(dButton);
    
    document.getElementById("tasks").appendChild(li);

    document.getElementById("taskBox").value = "";
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
const input2 = document.getElementById("taskBox");
input2.addEventListener("keydown", addListAfterPress);



function addListAfterPress(event){
    if(event.keyCode === 13){
        addTask();
    }


}