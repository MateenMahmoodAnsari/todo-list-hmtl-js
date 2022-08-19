const addToDo = () => {
	const myInputEle = document.getElementById('myToDo');
	const myNewToDoValue = myInputEle.value;
	const toDoList = document.getElementById('toDoList');
	const newListItem = document.createElement('li');
	if (myinput.ele.value.lenght > 0) {
		newListItem.innerHTML = myNewToDoValue;
		toDoList.appendChild(newListItem);
		myInputEle.value = '';
	}
};
