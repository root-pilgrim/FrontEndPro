
const scene = document.querySelector(".scene");
const ball = document.querySelector(".ball");
const sceneRect = scene.getBoundingClientRect();
const ballRect = ball.getBoundingClientRect();
const BORDER_WIDTH = 50;

let ballActive = false;

scene.addEventListener("mousemove", function (e) {
	if (!ballActive) return;
	
	const { clientX, clientY } = e;
	const left = clientX - sceneRect.left - BORDER_WIDTH - ballRect.width / 2;
	const stopzoneWidth = sceneRect.width - BORDER_WIDTH - ballRect.width * 2;
	const top = clientY - sceneRect.top - BORDER_WIDTH - ballRect.height / 2;
	const stopzoneHight = sceneRect.height - BORDER_WIDTH - ballRect.height * 2;
	console.log(left, sceneRect.x)
	
	if (stopzoneWidth >left && left > 0 && stopzoneHight > top && top > 0) {
		ball.style.transform = `translate(${left}px, ${top}px)`;
	} else return;
	
});
ball.addEventListener("click", () => {
	ballActive = !ballActive;
});
