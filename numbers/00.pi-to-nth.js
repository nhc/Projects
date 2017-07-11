
let piToThe = (n) => {

 if(n>20) return 'Sorry but precision in JS is 20 decimal places'; 

 let pi = Math.PI;
 return pi.toFixed(n);

}

console.log( piToThe(21) );