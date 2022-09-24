const taskinput=document.querySelector(".upper input");
taskbox=document.querySelector(".show_list")

let todos=JSON.parse(localStorage.getItem("todo-list"));

function showToDo() {
	let li="";
	if(todos){
		todos.forEach((todo,id)=>{
		li+=`<li class="task">
				<label for="${id}">
					<p>${todo.name}</p>
					<li onclick="deleteTask(${id})"><button>del</button></li>
				</label>
			</li>`;
	});
	}
	taskbox.innerHTML=li;
}
showToDo();

function deleteTask(deleteId){
	todos.splice(deleteId,1);
	localStorage.setItem("todo-list",JSON.stringify(todos));
	showToDo();
}
taskinput.addEventListener("keyup",e=>{
	let usertask=taskinput.value;
	if(e.key=="Enter"){
		if(!todos){
			todos=[];
		}
		taskinput.value="";
		let taskinfo={name:usertask};
		todos.push(taskinfo);
		localStorage.setItem("todo-list",JSON.stringify(todos));
		showToDo()
	}
});