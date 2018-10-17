var moving = true
var name = " Dean Vass"
var position = 1
var direction = true
var changeCounter = 0

function setup() {
  createCanvas(400, 200)
}

function draw() {
  background(100)
  rect(position, 30, 10, 10)
  // console.log('The value of moving is ' + moving)
  text('My name is' + name, 10, 30)

  if (direction == true){
    position = position + 6
  }
  else {
    position = position - 6
  }

  if (position>400){
    direction = false
    changeCounter += 1
  }

  if (position<0){
    direction = true
    changeCounter += 1
  }

  text(changeCounter, 10, 50)
  
}


    

