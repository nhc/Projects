
let eToTheNth = () => {

 var places = prompt("How many places would you like to display PI to?");
 let pi = Math.PI;
 return pi.toFixed(places);

}

console.log( eToTheNth() );