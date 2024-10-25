

function AddTask(){
    let TasksContainer=document.getElementById("tasksBag");
    let inputTag=document.getElementById("inputTag")
    let inputData=inputTag.value.trim();
    console.log(inputData)

    if(inputData===""){
        alert("pls enter the data to show in the doc")
        return console.log("enter the data ");
    }

    let liTag=document.createElement("li");
    liTag.innerHTML=`${inputData} <button class="editBtn">Edit</button> <button class="dlteBtn" onclick="DeleteTask()">Delete</button>`
        
    TasksContainer.append(liTag)
    // document.body.append(liTag)
    inputTag.value=""

    let editOption=liTag.querySelector(".editBtn");
    editOption.style.backgroundColor="yellow"


     let dlteOption=liTag.querySelector(".dlteBtn");
     console.log(dlteOption)
    dlteOption.style.backgroundColor="red"


    dlteOption.addEventListener("click",function (){
        DeleteTask(liTag)
    })
}


function DeleteTask(vamsi){
    let confirmation=confirm("are you sure wanna dlte the task???");
    if(confirmation){
        vamsi.remove()
    }
}