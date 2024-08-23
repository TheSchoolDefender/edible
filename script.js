document.addEventListener('DOMContentLoaded', function () {
    gsap.from('header', { duration: 1, opacity: 0, y: -50, ease: 'power2.out' });
    gsap.from('.nav-btn', { duration: 1, opacity: 0, y: 50, stagger: 0.2, ease: 'power2.out' });
    showQuestion(1);
});

function showQuestion(questionNumber) {
    gsap.to(`#q${questionNumber}`, { duration: 1, opacity: 1, y: 0, ease: 'power2.out' });
}

function nextQuestion(currentQuestionNumber, answer) {
    document.getElementById(`q${currentQuestionNumber}`).style.display = 'none';
    if (currentQuestionNumber < 5) {
        showQuestion(currentQuestionNumber + 1);
    } else {
        calculateResult();
    }
}

function updateSliderValue(questionNumber, value) {
    document.getElementById(`q${questionNumber}-value`).innerText = value;
}

function calculateResult() {
    const excitement = document.getElementById('q5-slider').value;
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';

    let resultText = '';
    let recommendedDishes = '';

    if (excitement > 7) {
        resultText = "You're an enthusiastic chef!";
        recommendedDishes = "Try making something adventurous like sushi or homemade pasta!";
    } else if (excitement > 4) {
        resultText = "You're a curious cook!";
        recommendedDishes = "Try experimenting with new recipes like stir-fry or tacos!";
    } else {
        resultText = "You're just starting out, but that's great!";
        recommendedDishes = "Start with something simple like scrambled eggs or a sandwich!";
    }

    document.getElementById('result').innerText = resultText;
    document.getElementById('recommended-dishes').innerText = recommendedDishes;
}

function showSection(section) {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('recipes').style.display = 'none';
    document.getElementById('cooks').style.display = 'none';
    document.getElementById('questions').style.display = 'none';

    document.getElementById(section).style.display = 'block';
}

particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js config loaded');
});
