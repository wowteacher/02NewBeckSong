var input;
var button;


function setup() {
	noCanvas();
	input = createInput('In the time of chimpanzees I was a monkey Butane in my veins');
	button = createButton ('Genera canzone');
	input.changed(processRita);
	button.mousePressed(processRita);
	input.size(400);

}

function processRita() {
	//console.log('event');
	var s = input.value();
	var rs = new RiString(s);
	var words = rs.words();
	var pos = rs.pos();
	console.log(words);
	console.log(pos);
	
	var output = " ";
	for (var i = 0; i < words.length; i++) {
		output += words[i];
		output += " ";


	}
	createP(output);
}
