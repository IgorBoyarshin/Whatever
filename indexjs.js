function calc() {
	var x = document.getElementById("primes_in");
	var val = x.value;
	var res = "1";
	var del = 2;
	var pred = Math.sqrt(val);
	
	
	while (val > 1) {
		while ((val % del) == 0) {
			val = val / del;
			res = res + '*' + del;
		}
		
		del = del + 1;
	}
	
	document.getElementById("primes_out").value = res;
}
