function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('authors');
const url = 'https://randomuser.me/api/?results=1000';

fetch(url)
.then((res) => res.json())
.then((data) => {
    let authors = data.results;
    return authors.map((author) => {
        let li = createNode('li'),
            img = createNode('img'),
            span = createNode('span');
        img.src = author.picture.large;
        span.innerHTML = `${author.name.first} ${author.name.last}`;
    
        append(li, img);
        append(li, span);
        append(ul, li);
    })
})
.catch((error) => {
    console.log(JSON.stringify(error));
});