function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 2) + fibonacci(n - 1);
}

function bench(n) {
	var start = new Date().getTime();
	
	console.log(fibonacci(n));

	var end = new Date().getTime();
	console.log("result:" + (end - start) + " ms");
}

console.log(bench(43));