var isMouseDown = 0, loadInterval, pay = 10, autoPay = 15, deltaDeg = 0, action = 0;
const 
	startTime = 2000,
	deltaTime = 200,
	minTime = 700,
	moneyIcon = '<i class="fas fa-dollar-sign"></i>';
	moneyScore = 20;
	gameSpace = document.querySelector(".game-space"),
	loader = document.querySelector(".game-space .loader"),
	load = loader.querySelector(".load"),
	moneyField = gameSpace.querySelector(".header .money"),
	rot1 = document.getElementsByClassName('rotate')[0],
	rot2 = document.getElementsByClassName('rotate')[1],
	clickSl = document.getElementById("click-sl"),
	clickFlag = clickSl.querySelector(".flag-click-sl"),
	autoSl = document.getElementById("auto-sl"),
	autoFlag = autoSl.querySelector(".flag-auto-sl");

var decorDeg = deltaDeg;
var decorRotate = setInterval(() => {
	rot1.style.transform = "rotate(" + decorDeg + "deg)";
	rot2.style.transform = "rotate(" + decorDeg + "deg)";
	decorDeg += deltaDeg;
	decorDeg %= 360;
}, 20);

function sleep(milliseconds) {
	const date = Date.now();
	let currentDate = null;
	do {
    	currentDate = Date.now();
	} while (currentDate - date < milliseconds);
}

function moneyPlus(plus) {
	moneyScore += plus;
	if(moneyScore < 1000) {
		moneyField.innerHTML = moneyScore + moneyIcon;
	} else {
		moneyField.innerHTML = (Math.round(moneyScore / 100) / 10) + "K" + moneyIcon;
	}
}

setInterval(()=>{
	moneyPlus(autoPay);
}, 1000);

function loadAnimate() {
	var t = startTime;
	var loadW = 0;
	loadInterval = setInterval(()=>{
		var step = 1200 / t;
		loadW += step;
		load.style.width = loadW + 'px';
		if(loadW >= 120){
			loadW = 0;	
			load.style.width = '0px';
			if(t > minTime) {
				t -= deltaTime;
			}
		}
	}, 10);
}

function activate(elem) {


	var chId = 0;
	if(elem.id == "label2") {
		chId = "click-check";
	} else {
		chId = "auto-check";
	}
	if(!document.getElementById(chId).checked){
		$("#" + elem.id).css({height: 50});
	} else {
		$("#" + elem.id).css({height: "auto"});
	}

}

function scoreUp(t) {
	setTimeout(()=>{
		if(t > minTime) {
			t -= deltaTime;
			if(isMouseDown) {
				++deltaDeg;
			}
		}
		if(isMouseDown) {
			moneyPlus(pay);
			scoreUp(t);
		} else {
			clearTimeout(this);
		}
	}, t);
}

gameSpace.onmousedown = () => {
	sleep(100);
	deltaDeg = 1;
	isMouseDown = 1;
	loader.classList.add("active");
	loadAnimate();
	scoreUp(startTime);
}

gameSpace.onmouseup = () => {
	isMouseDown = 0;
	deltaDeg = 0;
	loader.classList.remove("active");
	clearInterval(loadInterval);
	load.style.width = "0px";
}

clickFlag.onmousedown = () => {
	console.log(clickSl.clientX)
}

gameSpace.onmousemove = (e) => {
	console.log(e.clientX, e.clientY)
}







