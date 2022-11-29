let container = document.querySelector('.background')

function randomPosition() {
    return Math.floor(Math.random() * 85)
}


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


  function randomBubSize (){
    return Math.floor(Math.random() * 41) + 80
}


//This factory function can be used to create the bubble elements
function bubbleGeneratorOne() {
  size = randomBubSize()
  let bubble = document.createElement('div');
  bubble.style.width = size + 'px';
  bubble.style.height = size + 'px';
  bubble.style.position = 'absolute';
  bubble.style.top = randomPosition() + '%';
  bubble.style.left = randomPosition() + "%";
  bubble.style.borderRadius = "50%";
  bubble.style.boxShadow = 'inset 0 0 35px rgba(255, 255, 255, 0.25)'
  container.appendChild(bubble);
  bubble.addEventListener("click", delayMem);
  bubble.addEventListener("click", popRemove);

  let reflect = document.createElement('span')
  reflect.style.position = 'absolute';
  reflect.style.top = '25px';
  reflect.style.left = '20px';
  reflect.style.width = '20px';
  reflect.style.height = '20px';
  reflect.style.borderRadius = '50%';
  reflect.style.background = '#fff'
  reflect.style.zIndex = '10'
  reflect.style.filter = 'blur(2px)'
  bubble.appendChild(reflect);

  let reflectTwo = document.createElement('span')
  reflectTwo.style.position = 'absolute';
  reflectTwo.style.top = '45px';
  reflectTwo.style.left = '40px';
  reflectTwo.style.width = '10px';
  reflectTwo.style.height = '10px';
  reflectTwo.style.borderRadius = '50%';
  reflectTwo.style.background = '#fff'
  reflectTwo.style.zIndex = '10'
  reflectTwo.style.filter = 'blur(2px)'
  bubble.appendChild(reflectTwo);

  let span = document.createElement('span');
  span.style.position = 'absolute';
  span.style.borderRadius = '50%'
  span.style.inset = '5px'
  span.style.borderLeft = '8px solid #0fb4ff'
  span.style.filter = 'blur(5px)'
  bubble.appendChild(span)

  let spanTwo = document.createElement('spanTwo');
  spanTwo.style.position = 'absolute';
  spanTwo.style.borderRadius = '50%'
  spanTwo.style.inset = '5px'
  spanTwo.style.borderRight = '8px solid #ff4484'
  spanTwo.style.filter = 'blur(5px)'
  bubble.appendChild(spanTwo)

  let spanThree = document.createElement('spanThree');
  spanThree.style.position = 'absolute';
  spanThree.style.borderRadius = '50%'
  spanThree.style.inset = '10px'
  spanThree.style.borderTop = '8px solid #ffeb3b'
  spanThree.style.filter = 'blur(5px)'
  bubble.appendChild(spanThree)

  let spanFour = document.createElement('spanFive');
  spanFour.style.position = 'absolute';
  spanFour.style.borderRadius = '50%'
  spanFour.style.inset = '15px'
  spanFour.style.borderLeft = '8px solid #ff4484'
  spanFour.style.filter = 'blur(8px)'
  bubble.appendChild(spanFour)

  let spanFive = document.createElement('spanFour');
  spanFive.style.position = 'absolute';
  spanFive.style.borderRadius = '50%'
  spanFive.style.inset = '5px'
  spanFive.style.borderBottom = '6px solid #fff'
  spanFive.style.filter = 'blur(5px)'
  spanFive.style.transform = 'rotate(330deg)'
  bubble.appendChild(spanFive)


  bubble.style.animation = 'bubbleFade 9s ease';

  function removeBub() {
    container.removeChild(bubble)
  }

  function popRemove() {
    setTimeout(removeBub, 500)
  }

  setTimeout(removeBub, 9000);
        
}

function bubbleGeneratorTwo() {
  size = randomBubSize()
  let bubbleTwo = document.createElement('div');
  bubbleTwo.style.width = size + 'px';
  bubbleTwo.style.height = size + 'px';
  bubbleTwo.style.position = 'absolute';
  bubbleTwo.style.top = randomPosition() + '%';
  bubbleTwo.style.left = randomPosition() + "%";
  bubbleTwo.style.animationName = 'move'
  bubbleTwo.style.borderRadius = "50%";
  bubbleTwo.style.boxShadow = 'inset 0 0 35px rgba(255, 255, 255, 0.25)'
  container.appendChild(bubbleTwo);
  bubbleTwo.addEventListener("click", delayMem);
  bubbleTwo.addEventListener("click", popRemove);

  let reflect = document.createElement('span')
  reflect.style.position = 'absolute';
  reflect.style.top = '25px';
  reflect.style.left = '20px';
  reflect.style.width = '20px';
  reflect.style.height = '20px';
  reflect.style.borderRadius = '50%';
  reflect.style.background = '#fff'
  reflect.style.zIndex = '10'
  reflect.style.filter = 'blur(2px)'
  bubbleTwo.appendChild(reflect);

  let reflectTwo = document.createElement('span')
  reflectTwo.style.position = 'absolute';
  reflectTwo.style.top = '45px';
  reflectTwo.style.left = '40px';
  reflectTwo.style.width = '10px';
  reflectTwo.style.height = '10px';
  reflectTwo.style.borderRadius = '50%';
  reflectTwo.style.background = '#fff'
  reflectTwo.style.zIndex = '10'
  reflectTwo.style.filter = 'blur(2px)'
  bubbleTwo.appendChild(reflectTwo);

  let span = document.createElement('span');
  span.style.position = 'absolute';
  span.style.borderRadius = '50%'
  span.style.inset = '5px'
  span.style.borderLeft = '8px solid #0fb4ff'
  span.style.filter = 'blur(5px)'
  bubbleTwo.appendChild(span)

  let spanTwo = document.createElement('spanTwo');
  spanTwo.style.position = 'absolute';
  spanTwo.style.borderRadius = '50%'
  spanTwo.style.inset = '5px'
  spanTwo.style.borderRight = '8px solid #ff4484'
  spanTwo.style.filter = 'blur(5px)'
  bubbleTwo.appendChild(spanTwo)

  let spanThree = document.createElement('spanThree');
  spanThree.style.position = 'absolute';
  spanThree.style.borderRadius = '50%'
  spanThree.style.inset = '10px'
  spanThree.style.borderTop = '8px solid #ffeb3b'
  spanThree.style.filter = 'blur(5px)'
  bubbleTwo.appendChild(spanThree)

  let spanFour = document.createElement('spanFive');
  spanFour.style.position = 'absolute';
  spanFour.style.borderRadius = '50%'
  spanFour.style.inset = '15px'
  spanFour.style.borderLeft = '8px solid #ff4484'
  spanFour.style.filter = 'blur(8px)'
  bubbleTwo.appendChild(spanFour)

  let spanFive = document.createElement('spanFour');
  spanFive.style.position = 'absolute';
  spanFive.style.borderRadius = '50%'
  spanFive.style.inset = '5px'
  spanFive.style.borderBottom = '6px solid #fff'
  spanFive.style.filter = 'blur(5px)'
  spanFive.style.transform = 'rotate(330deg)'
  bubbleTwo.appendChild(spanFive)

  bubbleTwo.style.animation = 'bubbleFade 7s ease';

  function removeBub() {
    container.removeChild(bubbleTwo)
  }

  function popRemove() {
    setTimeout(removeBub, 500)
  }

  setTimeout(removeBub, 7000);
        
}

function bubbleGeneratorThree() {
  size = randomBubSize()
  let bubbleThree = document.createElement('div');
  bubbleThree.style.width = size + 'px';
  bubbleThree.style.height = size + 'px';
  bubbleThree.style.position = 'absolute';
  bubbleThree.style.top = randomPosition() + '%';
  bubbleThree.style.left = randomPosition() + "%";
  bubbleThree.style.animationName = 'move'
  bubbleThree.style.borderRadius = "50%";
  bubbleThree.style.boxShadow = 'inset 0 0 35px rgba(255, 255, 255, 0.25)'
  container.appendChild(bubbleThree);
  bubbleThree.addEventListener("click", delayMem);
  bubbleThree.addEventListener("click", popRemove);

  let reflect = document.createElement('span')
  reflect.style.position = 'absolute';
  reflect.style.top = '25px';
  reflect.style.left = '20px';
  reflect.style.width = '20px';
  reflect.style.height = '20px';
  reflect.style.borderRadius = '50%';
  reflect.style.background = '#fff'
  reflect.style.zIndex = '10'
  reflect.style.filter = 'blur(2px)'
  bubbleThree.appendChild(reflect);

  let reflectTwo = document.createElement('span')
  reflectTwo.style.position = 'absolute';
  reflectTwo.style.top = '45px';
  reflectTwo.style.left = '40px';
  reflectTwo.style.width = '10px';
  reflectTwo.style.height = '10px';
  reflectTwo.style.borderRadius = '50%';
  reflectTwo.style.background = '#fff'
  reflectTwo.style.zIndex = '10'
  reflectTwo.style.filter = 'blur(2px)'
  bubbleThree.appendChild(reflectTwo);

  let span = document.createElement('span');
  span.style.position = 'absolute';
  span.style.borderRadius = '50%'
  span.style.inset = '5px'
  span.style.borderLeft = '8px solid #0fb4ff'
  span.style.filter = 'blur(5px)'
  bubbleThree.appendChild(span)

  let spanTwo = document.createElement('spanTwo');
  spanTwo.style.position = 'absolute';
  spanTwo.style.borderRadius = '50%'
  spanTwo.style.inset = '5px'
  spanTwo.style.borderRight = '8px solid #ff4484'
  spanTwo.style.filter = 'blur(5px)'
  bubbleThree.appendChild(spanTwo)

  let spanThree = document.createElement('spanThree');
  spanThree.style.position = 'absolute';
  spanThree.style.borderRadius = '50%'
  spanThree.style.inset = '10px'
  spanThree.style.borderTop = '8px solid #ffeb3b'
  spanThree.style.filter = 'blur(5px)'
  bubbleThree.appendChild(spanThree)

  let spanFour = document.createElement('spanFive');
  spanFour.style.position = 'absolute';
  spanFour.style.borderRadius = '50%'
  spanFour.style.inset = '15px'
  spanFour.style.borderLeft = '8px solid #ff4484'
  spanFour.style.filter = 'blur(8px)'
  bubbleThree.appendChild(spanFour)

  let spanFive = document.createElement('spanFour');
  spanFive.style.position = 'absolute';
  spanFive.style.borderRadius = '50%'
  spanFive.style.inset = '5px'
  spanFive.style.borderBottom = '6px solid #fff'
  spanFive.style.filter = 'blur(5px)'
  spanFive.style.transform = 'rotate(330deg)'
  bubbleThree.appendChild(spanFive)

  bubbleThree.style.animation = 'bubbleFade 4s ease';

  function removeBub() {
    container.removeChild(bubbleThree)
  }

  function popRemove() {
    setTimeout(removeBub, 500)
  }

  setTimeout(removeBub, 4000);
        
}

function bubbleGeneratorFour() {
  size = randomBubSize();
  let bubbleFour = document.createElement('div');
  bubbleFour.style.width = size + 'px';
  bubbleFour.style.height = size + 'px';
  bubbleFour.style.position = 'absolute';
  bubbleFour.style.top = randomPosition() + '%';
  bubbleFour.style.left = randomPosition() + "%";
  bubbleFour.style.animationName = 'move'
  bubbleFour.style.borderRadius = "50%";
  bubbleFour.style.boxShadow = 'inset 0 0 35px rgba(255, 255, 255, 0.25)'
  container.appendChild(bubbleFour);
  bubbleFour.addEventListener("click", delayMem);
  bubbleFour.addEventListener("click", popRemove);

  let reflect = document.createElement('span')
  reflect.style.position = 'absolute';
  reflect.style.top = '25px';
  reflect.style.left = '20px';
  reflect.style.width = '20px';
  reflect.style.height = '20px';
  reflect.style.borderRadius = '50%';
  reflect.style.background = '#fff'
  reflect.style.zIndex = '10'
  reflect.style.filter = 'blur(2px)'
  bubbleFour.appendChild(reflect);

  let reflectTwo = document.createElement('span')
  reflectTwo.style.position = 'absolute';
  reflectTwo.style.top = '45px';
  reflectTwo.style.left = '40px';
  reflectTwo.style.width = '10px';
  reflectTwo.style.height = '10px';
  reflectTwo.style.borderRadius = '50%';
  reflectTwo.style.background = '#fff'
  reflectTwo.style.zIndex = '10'
  reflectTwo.style.filter = 'blur(2px)'
  bubbleFour.appendChild(reflectTwo);

  let span = document.createElement('span');
  span.style.position = 'absolute';
  span.style.borderRadius = '50%'
  span.style.inset = '5px'
  span.style.borderLeft = '8px solid #0fb4ff'
  span.style.filter = 'blur(5px)'
  bubbleFour.appendChild(span)

  let spanTwo = document.createElement('spanTwo');
  spanTwo.style.position = 'absolute';
  spanTwo.style.borderRadius = '50%'
  spanTwo.style.inset = '5px'
  spanTwo.style.borderRight = '8px solid #ff4484'
  spanTwo.style.filter = 'blur(5px)'
  bubbleFour.appendChild(spanTwo)

  let spanThree = document.createElement('spanThree');
  spanThree.style.position = 'absolute';
  spanThree.style.borderRadius = '50%'
  spanThree.style.inset = '10px'
  spanThree.style.borderTop = '8px solid #ffeb3b'
  spanThree.style.filter = 'blur(5px)'
  bubbleFour.appendChild(spanThree)

  let spanFour = document.createElement('spanFive');
  spanFour.style.position = 'absolute';
  spanFour.style.borderRadius = '50%'
  spanFour.style.inset = '15px'
  spanFour.style.borderLeft = '8px solid #ff4484'
  spanFour.style.filter = 'blur(8px)'
  bubbleFour.appendChild(spanFour)

  let spanFive = document.createElement('spanFour');
  spanFive.style.position = 'absolute';
  spanFive.style.borderRadius = '50%'
  spanFive.style.inset = '5px'
  spanFive.style.borderBottom = '6px solid #fff'
  spanFive.style.filter = 'blur(5px)'
  spanFive.style.transform = 'rotate(330deg)'
  bubbleFour.appendChild(spanFive)

  bubbleFour.style.animation = 'bubbleFade 5s ease';

  function removeBub() {
    container.removeChild(bubbleFour)
  }

  function popRemove() {
    setTimeout(removeBub, 500)
  }

  setTimeout(removeBub, 5000);
        
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


//Set the delay for the pop animation
function delayMem(){
  setTimeout(openMemory, 500)
  this.style.animation = 'pop .5s ease'
}

//Once bubble is clicked, this opens the div container for image
function openMemory () {

//the container
let memory = document.createElement('div');
memory.style.width = .8 * getWidth() + 'px';
memory.style.height = .8 * getHeight() + 'px'
memory.style.position = 'absolute';
memory.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
memory.style.display = 'flex';
memory.style.justifyContent = 'center';
memory.style.alignItems = 'center';
memory.style.flexDirection = 'column';
memory.style.animation = 'popUp .5s ease'

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

function welcome () {
  let welcome = document.createElement('div')
  welcome.style.width = getWidth() + 'px';
  welcome.style.height = getHeight() / 3 + 'px';
  welcome.style.zIndex = 10;
  welcome.style.position = 'absolute';
  welcome.style.backgroundColor = 'black';
  welcome.style.fontSize = "25px";
  welcome.innerHTML = '<h1>Happy Two Years</h1>';
  welcome.style.color = 'white';
  welcome.style.display = 'flex';
  welcome.style.alignItems = 'center';
  welcome.style.justifyContent = 'center';
  welcome.style.animation = 'introFade 8s ease'
  container.appendChild(welcome);

  function removeWelcome() {
    container.removeChild(welcome);
  }
  setTimeout(removeWelcome, 8000)
}

welcome()


function first(){
  bubbleGeneratorOne()
}

function second() {
  bubbleGeneratorTwo()
}

function third() {
  bubbleGeneratorThree()
}

function fourth() {
  bubbleGeneratorFour()
}



function init() {
  setInterval(first ,1000)
  setInterval(second, 2000)
  setInterval(third, 3000)
  setInterval(fourth, 4000)
}


init()