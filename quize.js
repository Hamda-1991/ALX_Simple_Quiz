// JavaScript Code: quiz.js

// Step 1: Define the function checkAnswer
function checkAnswer() {
    // Step 2: Identify the correct answer
    const correctAnswer = "4";
    
    // Step 3: Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;
    
    // Step 4: Check if userAnswer is null (in case no option was selected)
    if (!userAnswer) {
        document.getElementById("feedback").textContent = "Please select an answer!";
        return;
    }
    
    // Step 5: Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Step 6: Add an event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
