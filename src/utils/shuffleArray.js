function shuffleArray(d) {
	for (var c = d.length - 1; c > 0; c--) {
		let b = Math.floor(Math.random() * (c + 1));
		let a = d[c];
		d[c] = d[b];
		d[b] = a;
	}
	return d
}

export default shuffleArray