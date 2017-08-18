//Crystal object containing crystalls values
var crystals = {
	blue:
		{
			value: 0
		},
	red:
		{
			value: 0
		},
	yellow:
		{
			value: 0
		},
	green:
		{
			value: 0
		}
};

//Score variables
var currentPoints = 0;
var targetPoints = 0;

//Win/Losses Variables
var winCount = 0;
var lossCount = 0;

//Functions
var takeRandom =  function(min, max){
	return Math.floor(Math.random() * (max - min+ 1)) + min;
}

var startGame = function(){

	//starts current score off at 0
	currentPoints = 0;

	//sets a new score to achieve when playing the game
	targetPoints = takeRandom(19, 120);

	//sets value to crystals
	crystals.blue.value = takeRandom(1,12);
	crystals.red.value = takeRandom(1,12);
	crystals.yellow.value = takeRandom(1,12);
	crystals.green.value = takeRandom(1,12);

	//change html to reflect
	$('#yourPoints').html(currentPoints);
	$('#targetPoints').html(targetPoints);
	
}

var addValues = function(crystals){

	currentPoints = currentPoints + crystals.value;

	$('#yourPoints').html(currentPoints);

	win();
}

var win = function(){

	if(currentPoints > targetPoints){
		alert("You Lost");

		lossCount++;
		$("#loss").html(lossCount);

		startGame();

	} else if (currentPoints === targetPoints){
		alert("You Win");

		winCount++;
		$("#win").html(winCount);

		startGame();
	}

}



//Click Process
$('#blue').click(function(){
	addValues(crystals.blue);
});

$('#red').click(function(){
	addValues(crystals.red);
});

$('#yellow').click(function(){
	addValues(crystals.yellow);
});

$('#green').click(function(){
	addValues(crystals.green);
});

startGame();

