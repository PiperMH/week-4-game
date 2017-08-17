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
var currentPoints =0;
var targetPoints =0;

//Win/Losses Variables
var winCount = 0;
var lossCount = 0;

//Functions
var random =  function(min, max){
	targetPoints = Math.floor(Math.random() * (max - min+ 1)) + min;
}

var startGame = function(){

	//starts current score off at 0
	currentPoints = 0;

	//sets a new score to achieve when playing the game
	targetPoints = Random(19, 120);

	//sets value to crystals
	crystals.blue.value = random(1,12);
	crystals.red.value = random(1,12);
	crystals.yellow.value = random(1,12);
	crystals.green.value = random(1,12);

	//change html to reflect
	$('#yourPoints').html(currentPoints);
	$('#targetPoints').html(targetPoints);

	
}

//Click Process
$('#blue').click(function(){

});

$('#red').click(function(){

});

$('#yellow').click(function(){

});

$('#green').click(function(){

});


