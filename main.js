const toDos = JSON.parse(localStorage.getItem('todosLS')) || [];

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
    }

    createImage();
}

const render = () => {
    const toDoList = document.getElementById('toDo-list');

    const toDosTemplate = toDos.map(t => '<li>' + t + '</li>');

    toDoList.innerHTML = toDosTemplate.join('');

    const elements = document.querySelectorAll('#toDo-list li')
    elements.forEach((element, i) => {

        element.addEventListener('click', () => {

            element.parentNode.removeChild(element);
            toDos.splice(i, 1)
            updateToDos(toDos);
            render();

        })
    })
}

const updateToDos = (toDos) => {
    const toDosString = JSON.stringify(toDos);
    localStorage.setItem('todosLS', toDosString);
}

const createImage = () =>{
    const image = document.createElement("IMG");
    image.setAttribute("src", "assets/bilardo.jpg");
    image.setAttribute("width", "220");
    image.setAttribute("height", "220");
    image.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(image);
}