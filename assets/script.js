// timer logic
function startQuiz(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer / 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}


// timer

// minus time for incorrect answer

// loop through the array of questions

// display the questions

// display the choices

// check the answer

// click listner
// window.onload = function () {
//     var fiveMinutes = 60 * 5,
//         display = document.querySelector('#time');
//     startTimer(fiveMinutes, display);
// };