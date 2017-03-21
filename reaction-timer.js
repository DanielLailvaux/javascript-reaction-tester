// Global variables
var startTimer = 0,
		delay = 0,
		score = 0,
		highScore = 0;

// Returns a random size
var randomSize = function() {

	// Size between 100 and 300px
	var min = 100,
			max = 300;
	
	return Math.floor(Math.random() * max) + min;
};

// Returns border radius size
var randomShape = function() {
	// 0 or 1;
	var binary = Math.round(Math.random());
	
	if (binary === 1) {
		// Circle
		return = "50%";
	} else {
		// Square
		return "0";
	}
};

// Randomly picks color
var randomColor = function() {
 
	var hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'], hexPick = 0, colorNumLen = 6, color = '';
	
	for (var i = 0; i < colorNumLen; i++) {
		
		hexPick = Math.floor(Math.random() * 15);
		color += hex[hexPick];
	}
	return color;
};

// Randomly positions element with id
var randomPosition = function(id) {
	var left = Math.floor(Math.random() * 1030),
			top = Math.floor(Math.random() * 210);
	
	document.getElementById(id).style.left = left + "px";
	document.getElementById(id).style.top = top + "px";
};

// Reaction game
document.getElementById("start").onclick = function() {
	
	setInterval(function() {
		
		// Hide div
		document.getElementById("theDiv").style.visibility = "hidden";
	
		// Get random size
		var size = randomSize();
	
		// Random size
		document.getElementById("theDiv").style.height = size + "px";
		document.getElementById("theDiv").style.width = size + "px";
	
	// Random color
		document.getElementById("theDiv").style.borderRadius = randomShape();
	
		// 1 of 10 colors
		document.getElementById("theDiv").style.backgroundColor = 	randomColor();
	
		// Random postion
		randomPosition("theDiv");
	
		// Set delay
		delay = Math.floor(Math.random() * 1000) + 500;
	
		// Show div with 1500ms time delay
		setTimeout(function() {
			document.getElementById("theDiv").style.visibility = "visible";
			}, 1);
	
		// Start timer
		startTimer = Date.now();
	}, 1000);
};

    // If its not first try
		

document.getElementById("theDiv").onclick = function() {
	
	// To calculate reaction time
		var endTimer = Date.now();
	
	if (startTimer !== 0) {
			// get rid of time delay
			//endTimer -= 1000;
		
			// Calculate reaction and cahnge to seconds
			var time = ((endTimer - startTimer) / 1000)
		
			// Update time
			document.getElementById("time").innerHTML = "Your time: " + time + "s";
		}
	
	// Check if cirlce or square
	if (document.getElementById("theDiv").style.borderRadius === 		"50%") {
		if (score > highScore) {
			highScore = score;
			document.getElementById("high-score").innerHTML = "High Score: " + highScore;
			console.log(highScore);
		}
		
		score = 0;
	} else {
		
		score++;
	}
	
	document.getElementById("score").innerHTML = "Score: " + score;
};
