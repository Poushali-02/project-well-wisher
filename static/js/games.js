document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
function startMeditation() { alert("Meditation Mode: Close your eyes and relax."); }
function startDeepBreathing() { alert("Deep Breathing: Inhale, hold, exhale."); }
function startPuzzle() { window.location.href = "https://www.jigsawexplorer.com/"; }
function startMemoryGame() { window.location.href = "https://www.memozor.com/memory-games/"; }
function startReactionTest() {
    alert("Get ready! Click when the screen turns red.");
    setTimeout(() => {
        document.body.style.background = "red";
        let startTime = new Date().getTime();
        document.body.onclick = function () {
            let reactionTime = new Date().getTime() - startTime;
            alert("Your reaction time: " + reactionTime + "ms");
            document.body.style.background = "";
            document.body.onclick = null;
        };
    }, Math.random() * 3000 + 1000);
}
function startWordSearch() { window.location.href = "https://thewordsearch.com/"; }
function startNumberChallenge() { alert("Find the missing number in the sequence: 2, 4, ?, 8, 10."); }
function startClickTarget() { alert("Click the moving target!"); }
function startTypingTest() { window.location.href = "https://10fastfingers.com/typing-test/"; }
function startColorMatch() { alert("Find the correct color from options."); }
function startMathQuiz() { alert("What is 8 × 7? (Hint: It's 56)"); }
function startMazeEscape() { window.location.href = "https://mazegenerator.net/"; }
function startPatternMatch() { alert("What comes next: O, T, T, F, F, S, S, ?"); }
function startSudoku() { window.location.href = "https://sudoku.com/"; }
function startQuickReflex() { alert("Tap the right button quickly!"); }
function startTriviaQuiz() { alert("Which planet is known as the Red Planet?"); }
function startSpotDifference() { window.location.href = "https://www.spotthedifference.com/"; }
function startWordScramble() { alert("Unscramble: L-O-E-V"); }
function start2048Game() { window.location.href = "https://play2048.co/"; }
function startBallBounce() { alert("Keep the ball bouncing!"); }
