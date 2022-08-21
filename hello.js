const addToDo = () => {
	const myInputEle = document.getElementById('myToDo');
	const myNewToDoValue = myInputEle.value;
	if (myNewToDoValue.length > 0) {
		const toDoList = document.getElementById('toDoList');
		const newListItem = document.createElement('li');
		newListItem.innerHTML = myNewToDoValue;
		toDoList.appendChild(newListItem);
		myInputEle.value = '';
	}
};
