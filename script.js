const color = document.getElementById('color');
const rambow = document.getElementById('rambow');
const erase = document.getElementById('erase');
const clear = document.getElementById('clear');

const container = document.getElementById('container');
for (let i=0; i<256; i++) {
    const div = document.createElement('div');
    div.className = 'border';
    container.appendChild(div);
}

const border = document.querySelectorAll('.border');
border.forEach((element) => {
    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = 'black';
        console.log("hello");
    });
});

const buttons = document.querySelectorAll('.btn');
buttons.forEach (button => {
    button.addEventListener('click', () => {
        seatFunction(button);
    });
});

color.addEventListener('click', () => {
    const border = document.querySelectorAll('.border');
    border.forEach((element) => {
    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = 'black';
        console.log("hello");
    });
});
});

rambow.addEventListener('click', () => {
    const border = document.querySelectorAll('.border');
    border.forEach((element) => {
    element.addEventListener('mouseover', () => {
        const rambowColor = setRambowColor();
        element.style.backgroundColor = rambowColor;
        console.log("hello");
    });
});
});

erase.addEventListener('click', () => {
    const border = document.querySelectorAll('.border');
    border.forEach((element) => {
    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = 'white';
        console.log("hello");
    });
});
});

clear.addEventListener('click', () => {
    const border = document.querySelectorAll('.border');
    border.forEach((element) => {
    element.style.backgroundColor = 'white';
    console.log("hello");
});
});

function seatFunction (a) {
    buttons.forEach (button => {
        button.style.cssText = `
        background-color: white;
        color: black;
        `;
    });
    a.style.cssText = `
        background-color: #727171;
        color: white;
        `;
}

function setRambowColor () {
    const array = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9200d3'];
    let colors = Math.floor(Math.random() * array.length);
    return array[colors];
}