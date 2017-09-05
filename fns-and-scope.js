//////////////////PROBLEM 1////////////////////


//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  function isTyler(name){
if (name==='Tyler'){
  return true;
} else {
  return false;
}
  }isTyler('Tyler')

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  function getName(name){
return name;
  }prompt("Braydon");


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  function welcome(){
alert("welcome, "+ getName);
  };


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  A parameter is just a placeholder for a function.
   An argument is the value that is passed into the functions parameter when the function is invoked.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  null,false,"",NaN,0,undefined you could check by val ==true or val !==true



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  function myName(){
    return "Braydon";
  }
  


//Now save the function definition of myName into a new variable called newMyName

  var newMyName = myName;

//Now alert the result of invoking newMyName

alert("Braydon");

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  function outerFn(){
    return function(){
      return "Braydon";
    };
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  var innerFn = outerFn();

//Now invoke innerFn.
innerFn();