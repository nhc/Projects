
//1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 14

// we will use 
// F(n) = F(n-1) + F(n-2)

let fib = (seq) => {

	if (seq <= 1) return 1;

	return fib(seq - 1) + fib(seq - 2);

}

console.log( fib(5) );