let container = document.querySelector('.background')

let randomPositionOne = Math.floor(Math.random() * 90); 
let randomPositionTwo = Math.floor(Math.random() * 90); 



//Used to find width and height of browser window for sizing purposes
function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }
  
  function getHeight() {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight
    );
  }



//This factory function can be used to create the bubble elements
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
        bubble.addEventListener("click", openMemory);
}


let largeBubble = {
    width: '100px',
    height: '100px'
}

//Picks which image to use randomly for openMemory
function memoryImage() {
    let pick = Math.floor(Math.random() * 2)
    if(pick == 0) {
        return "./images/IMG_4232.PNG"
    } else if(pick == 1) {
        return "./images/IMG_4233.PNG"
    }
    console.log(pick)
}




//Once bubble is clicked, this opens the div container for image
function openMemory () {

//the container
let memory = document.createElement('div');
memory.style.width = .8 * getWidth() + 'px';
memory.style.height = .8 * getHeight() + 'px'
memory.style.position = 'absolute';
memory.style.backgroundColor = 'black'
memory.style.top = '10%';
memory.style.left = '10%';
memory.style.display = 'flex';
memory.style.justifyContent = 'center';
memory.style.alignItems = 'center';
memory.style.flexDirection = 'column';

//close button
let closer = document.createElement('div');
closer.style.width = '30px';
closer.style.height = '30px';
closer.style.borderRadius = '50%';
closer.style.backgroundColor = 'red';
closer.style.alignSelf = 'end';
closer.addEventListener("click", function() {
    memory.remove();
})
memory.appendChild(closer);


//the image
let memImage = document.createElement('img')
memImage.id = 'imgId';
memImage.src = memoryImage();
memImage.style.maxWidth = '90%'
memImage.style.maxHeight = '90%'
memory.appendChild(memImage);


container.appendChild(memory);
}

const bubble = new bubbleGenerator(largeBubble);
