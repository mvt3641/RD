function DigitalPal(hungry, sleepy, bored, age) {
  this.hungry = false;
  this.sleepy = false;
  this.bored = true;
  this.age = 0;
}

function feed() {
  if (this.hungry === true) {
    console.log("That was yummy!");
    this.hungry = false;
    this.sleepy = true;
  } else {
    console.log("No, thanks Im full");
  }
};

function sleep() {
  if (this.sleepy === true) {
    console.log("ZZZZZZzzzzz");
    this.sleepy = false;
    this.bored = true;
    this.increaseAge();
  }
};

function increaseAge() {
  if (this.sleepy === true) {
    this.age++;
    console.log("Happy Birthday to me! I am "+this.age+" old!")
  }
};

function play() {
  if (this.bored === true) {
    console.log("Yay! lets play");
    this.bored = false;
    this.hungry = true;
  } else {
    console.log("Not right now. Later?");
  }
};

var dog = new DigitalPal();
dog.outside = false;

function bark(){
  console.log("Woof! Woof!");
};

function goOutside(){
  if (this.outside === false){
    console.log("yay! Outdoors");
    this.outside = true;
    this.back();
  }
  else{
    console.log("We're already outside though...")
  }
};

function goInside(){
  if( this.outside){
    console.log("Do we have too?");
    this.outside = false;
  }
  else{
    console.log("Im already inside...");
  }
};

/////Cat///
var cat = new DigitalPal();
houseCondition = 100;
function meow(){
  console.log("Meow! Meow!");
};
