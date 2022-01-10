var field = document.querySelector("body .phone");

function show() {
	field.innerHTML = "<div class='content settings'>\n\t\t\t<div class='text title'>\n\t\t\t\tSettings\n\t\t\t</div>\n\t\t\t<div class='text condition'>IP: 127.0.0.1:666</div>\n\t\t\t<div class='text score'>Team: 1</div>\n\t\t\t<div class='btn-field back-field'>\n\t\t\t\t<div class='back' onclick='hide()'>Back</div>\n\t\t\t</div>\n\t\t</div> ";
}

function hide() {
	field.innerHTML = "<img src='set.png' alt='' class='set' onclick='show()'>\n\t\t<div class='content'>\n\t\t\t<div class='text title'>\n\t\t\t\tButton\n\t\t\t</div>\n\t\t\t<div class='text condition'>Condition: queue</div>\n\t\t\t<div class='text score'>Score: 9000</div>\n\t\t\t<div class='text place'>Place: 3</div>\n\t\t\t<div class='btn-field'>\n\t\t\t\t<div class='btn'></div>\n\t\t\t</div>\n\t\t</div> ";
}