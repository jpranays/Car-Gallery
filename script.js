window.addEventListener("load", () => {
	document.querySelector(".loader").style.display = "none";
	document.querySelector(".container").style.animationDelay = "4s";
	let counter = setTimeout(() => {
		counter = setInterval(anim, 100);
	}, 1000);
	inc = 0;
	function anim() {
		let image = document.querySelectorAll("img")[inc];
		inc++;
		image.style.transform = "rotate(360deg)";
		if (inc == 13) {
			clearInterval(counter);
		}
	}
});
