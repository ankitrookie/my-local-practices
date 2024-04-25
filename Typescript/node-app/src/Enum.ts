// if lets say we have one function that take some arguments. and do something base on that 
// parameter, but if i want to restrict that the argument that someone is sending and that parameter 
// that function is exprecting, need to be in specific way, that in tthat senerio we use enum right.

// 1st solution
type pressed = "up" | "down" | "right" | "down";


// const gamePlay = (keyPressed: pressed) => {

// }

// gamePlay("up");
// gamePlay("down");
// gamePlay("name"); // this line will give error, caue it wont accept name string

// 2nd solution
enum Direction {
  Up,
  Down,
  Right,
  Left
};

const gamePlay = (keyPressed: Direction) => {
  if (keyPressed === Direction.Up) {
    // do something here
  } else if (keyPressed === Direction.Down) {
    // then do somthing here 
  } else if (keyPressed === Direction.Left) {
    // do somthinmg
  } else if (keyPressed === Direction.Right) {
    // do somthing 
  }
}


gamePlay(Direction.Up);
gamePlay(Direction.Down);
// we use this enum, when we no there are lemited set of input that the function take, so enum then comes in that picture
