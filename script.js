window.addEventListener("load", () => {
	document.querySelector(".loader").style.display = "none";
	let container = document.querySelector(".container");
	$(".container > img").css("animation-play-state", "running");
	let middleCar = setInterval(function () {
		$("#mycar").shake();
	}, 3000);
	let i = 0;
	$.shake({
		callback: function () {
			i++;
			navigator.vibrate(200);
			if ($(container).css("animation")) {
				if ($(container).css("animation-play-state") == "paused") {
					$(container).css("animation-play-state", "running");
					setTimeout(() => {
						$(container).css("animation-play-state", "paused");
					}, 2500);
				}
			}
			if (i == 3) {
				clearInterval(middleCar);
				alert("Spread");
				$(container).css("animation", "none");
				counter = setInterval(anim, 100);
				inc = 0;

				function anim() {
					let image = document.querySelectorAll("img")[inc];
					inc++;
					image.style.transform = "rotate(360deg)";
					if (inc == 13) {
						clearInterval(counter);
					}
				}
			}
		},
	});
});
