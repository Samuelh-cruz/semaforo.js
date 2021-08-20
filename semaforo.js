
const luz = document.querySelector('.luz')
const backRed = luz.style;
const luz1 = document.querySelector('.luz1')
const backYellow = luz1.style ; 
const luz2 = document.querySelector('.luz2')
const backGreen = luz2.style;

backRed.background = 'red'
setInterval(() => {
	mudarluz();
}, 1000);

function mudarluz() {
	if(backRed.background == 'red') {
		backRed.background = "rgba(0, 0, 0, 0.3)";
		backGreen.background = "green";
		return;
	} else if (backGreen.background == "green" ) {
		backGreen.background = "rgba(0, 0, 0, 0.3)";
		backYellow.background = "yellow";
		return;
	} 
	backYellow.background = "rgba(0, 0, 0, 0.3)";
	backRed.background = 'red';

}
