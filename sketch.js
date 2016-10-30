var input;


function setup() {
	noCanvas();
	input = createInput('In the time of chimpanzees I was a monkey Butane in my veins');
	input.changed(processRita);
	input.size(400);

}

function processRita() {
	console.log('event');
	var s = input.value();
	createP(s);
}