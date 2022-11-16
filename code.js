let container = document.querySelector('.background')

let randomPositionOne = Math.floor(Math.random() * 90); 
let randomPositionTwo = Math.floor(Math.random() * 90); 


function bubbleGenerator(type) {
        let bubble = document.createElement('div');
        bubble.style.width = type.width;
        bubble.style.height = type.height;
        bubble.style.position = 'absolute';
        bubble.style.top = randomPositionOne + '%';
        bubble.style.left = randomPositionTwo + "%";
        bubble.style.borderRadius = "50%";
        bubble.style.backgroundColor = 'black';
        container.appendChild(bubble);
}


let largeBubble = {
    width: '100px',
    height: '100px'
}

const bubble = new bubbleGenerator(largeBubble);

console.log(bubble)

/*
let bubbleTest = document.createElement('div');
bubbleTest.style.width = '100px';
bubbleTest.style.height = '100px';
bubbleTest.style.position = 'absolute';
bubbleTest.style.top = '100px';
bubbleTest.style.backgroundColor = 'black'
container.appendChild(bubbleTest);
*/
console.log(randomPosition);