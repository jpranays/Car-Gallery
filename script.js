window.addEventListener("load", () => {
	document.querySelector(".loader").style.display = "none";
	let container = document.querySelector(".container");
	// 	document.querySelector(".container").style.animationDelay = "4s";
	// 	let counter = setTimeout(() => {
	// 		counter = setInterval(anim, 100);
	// 	}, 500);
	// 	inc = 0;
	// 	function anim() {
	// 		let image = document.querySelectorAll("img")[inc];
	// 		inc++;
	// 		image.style.transform = "rotate(360deg)";
	// 		if (inc == 13) {
	// 			clearInterval(counter);
	// 		}
	// 	}
	setInterval(function () {
		$("#mycar").shake();
	}, 3000);
	let i = 0;
	$.shake({
		callback: function () {
			i++;
			navigator.vibrate(200);
			if ($(container).css("animation-play-state") == "paused") {
				$(container).css("animation-play-state", "running");
								alert("hurray");

			}
			if (i == 10) {
				alert("gotcha");
			}
		},
	});
});
