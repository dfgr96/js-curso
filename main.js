const toDos = JSON.parse(localStorage.getItem('todosLS')) || [];

const render = () => {
    const toDoList = document.getElementById('toDo-list');

    const toDosTemplate = toDos.map(t => '<li>' + t + '</li>');

    toDoList.innerHTML = toDosTemplate.join('');

    const elements = document.querySelectorAll('#toDo-list li')
    elements.forEach((element, i) => {

        element.addEventListener('click', () => {
            console.log(element, i)
            element.parentNode.removeChild(element);
            toDos.splice(i, 1)
            updateToDos(toDos);
            render();

        })
    })
}

window.onload = () => {
    render();
    const form = document.getElementById('toDo-form');
    form.onsubmit = (e) => {
        e.preventDefault();

        const toDo = document.getElementById('toDo');
        const toDoText = toDo.value;
        toDo.value = '';

        toDos.push(toDoText);
        updateToDos(toDos);
        render();
        console.log(toDos)

    }
}

const updateToDos = (toDos) => {
    const toDosString = JSON.stringify(toDos);
    localStorage.setItem('todosLS', toDosString);
}