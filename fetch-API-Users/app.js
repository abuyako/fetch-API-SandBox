function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('authors');
const url = 'https://randomuser.me/api/?results=10';

fetch(url)
.then((res) => res.json())
.then((data) => {
    let authors = data.results;
    return authors.map((author) => {
        let li = createNode('li'),
            img = createNode('img'),
            span = createNode('span');
    })
})