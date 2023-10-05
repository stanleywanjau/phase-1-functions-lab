// Code your solution in this file!
let distanceFromHqInBlocks=function (somevalue){
  if (somevalue>42){
    return somevalue-42
  }else 
  return Math.abs(somevalue- 42);  
}

function distanceFromHqInFeet(somevalue){
  console.log(distanceFromHqInBlocks(somevalue));
  return distanceFromHqInBlocks(somevalue)*264;
}

/*function distanceTravelledInFeet(somevalue){
  somevalue
}
distanceTravelledInFeet(d)*/
let Feet=distanceFromHqInBlocks()*264;
function distanceTravelledInFeet(number){
  return Feet;
}