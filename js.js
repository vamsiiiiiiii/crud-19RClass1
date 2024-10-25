// function addTask(){
//     let tasks=document.getElementById("tasks")
//     let ul=document.createElement("ul");
//     let li=document.createElement("li")
//      let inputValue=document.getElementById("inputTask")
//      let inputText=inputValue.value.trim()

//      if(inputText === ""){
//         alert("enter valid data")
//         return
//      }
   
//      li.innerHTML = `${inputText} <button class="edit">Edit</button> <button class="dlte" onclcik="dleteTask()">Delete</button>`
//      ul.appendChild(li)
     

//      tasks.appendChild(ul)
//        inputValue.value=""
//      let editBtn=li.querySelector(".edit");
//      editBtn.style.backgroundColor="blue"
//       let dlteBtn=li.querySelector(".dlte");
//      dlteBtn.style.backgroundColor="red"

//      dlteBtn.addEventListener("click",()=>{
//         dleteTask(li)
//      })

//      editBtn.addEventListener("click",()=>{
//         editTask(li)
//      })
// }

// function dleteTask(taskItem){
//     let confirmation=confirm("are you sure?")
//    if(confirmation){
//     taskItem.remove()
//    }
// }
// function editTask(taskItem){
//     console.log(taskItem)
//     let currentText=taskItem.firstChild.textContent;
//     let newText=prompt("edit the task",currentText)

//    setTimeout(()=>{
//     if(newText !==null && newText.trim() !=""){
//         taskItem.firstChild.textContent=newText
//     }
//    },2000)
// }


function addTask(){
   let inputValue=document.getElementById("inputTask");  //    vamsi
   let inputData=inputValue.value.trim();  // vamsi

   if(inputData === ""){
      alert("enter task")
      return;
   }

   let tasksList=document.getElementById("tasksList");

   let taskItem=document.createElement("li");

   taskItem.innerHTML =`${inputData} <button class="edit">Edit</button> <button class="dlte">D</button>`

   tasksList.appendChild(taskItem)

 inputValue.value=""
let edit=taskItem.querySelector(".edit")
edit.style.backgroundColor="blue"

let dlte=taskItem.querySelector(".dlte")
dlte.style.backgroundColor="red"


edit.addEventListener("click", ()=>{
   Edit(taskItem)
})

dlte.addEventListener("click",()=>{
   Delete(taskItem)
})
 

}

function Edit(item){
   console.log(item)
   let currentTask=item.firstChild.textContent;
 let newTask=prompt("edit the text",currentTask)

 if(newTask !==null && newTask.trim()!==""){
   item.firstChild.textContent=newTask;
 }

}

function Delete(item){
  let confirmation=confirm("are you sure")
  if(confirmation){
   item.remove()
  }
}