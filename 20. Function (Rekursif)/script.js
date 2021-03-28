function tampilaAngka(n) {
	if (n === 0 ) return;
	console.log(n);
	return tampilaAngka(n-1)
}

tampilaAngka(10);