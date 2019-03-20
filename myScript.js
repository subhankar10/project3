var count = 0,  
      zCount = 0, 
      yCount = 0, 
      sumPoints = 0, 
      aQuestion, 
      allQuest, 
      aChoices, 
      bChoices, 
      allQuestions, 
      finishedDoc,
      someValue;

allQuestions = [
		{
		question: "What is the capital of Peru?",
		choices: ["Buenos Aires", "La Paz", "Lima", "Quito"], 
		correctAnswer: 2
	},
		{
		question: "What is the capital of Bolivia?",
		choices: ["La Paz", "Buenos Aires", "Quito", "Lima"], 
		correctAnswer: 0
	},
		{
		question: "What is the capital of Ecuador?",
		choices: ["Lima", "Quito", "Buenos Aires", "La Paz"], 
		correctAnswer: 1
	},
		{
		question: "What is the capital of Argentina?",
		choices: ["Quito", "La Paz", "Lima", "Buenos Aires"], 
		correctAnswer: 3
	}
];

function renderQuestions() {
	aQuestion = document.getElementById("thisQuestion");
	aChoices = document.getElementsByTagName("label");
	bChoices = document.getElementsByTagName("input");
	if(count < allQuestions.length){
		allQuest = allQuestions[count].question;
		count++;
	}
	else{
		alert("You have a total of " + sumPoints + "/4" + " correct answers!");
		finished();
	}
	aQuestion.innerHTML = allQuest;
	//render the choices and structure
	for(var i = 0; i < allQuestions.length; i++){
		aChoices[i].innerHTML = allQuestions[zCount].choices[i];
	}
	zCount++;


}
renderQuestions(); //render first question
function checkAnswer() {

	someValue = allQuestions[yCount].correctAnswer;
	if(bChoices[someValue].checked === true){
		//alert("That's correct!");
		sumPoints += 1;
	}
	else{
		//alert("Nope, sorry!");
	}
	yCount++;
	renderQuestions();
}

function finished(){
	finishedDoc = document.getElementById("thisCont");
	finishedDoc.innerHTML = "<h1>Finished!<\/h1>";
}