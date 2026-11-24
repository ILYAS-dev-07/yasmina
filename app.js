document.getElementById('startButton').addEventListener('click', () => {
    document.querySelector('.reasons').scrollIntoView({
        behavior: 'smooth'
    });
});

const modal = document.getElementById('letterModal')
document.getElementById('openLetter').addEventListener('click', () => {
    modal.classList.add('active');
});

document.getElementById('openLetter').addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove(active)
    };
});

const surpriseButton = document.getElementById('surpriseButton');
const surpriseMessage = document.getElementById('surpriseMessage');

surpriseButton.addEventListener('click', () => {
    surpriseMessage.classList.toggle('show');
    if (surpriseMessage.classList.contains('show')) {
        surpriseButton.textContent = 'Сюрприз открыт 🤍';
        createHearts(12);
    } else {
        surpriseButton.textContent = 'Открыть сюрприз ❤'
    }
});

const compliments = [
    'Ты намного прекраснее чем думаешь',
    'Пусть у тебя всегда будет повод улыбаться',
    'Ты заслуживаешь самого доброго отношения',
    'Не позволяй плохому дню испортить настроение',
    'Мир становится светлее благодаря людям как ты',
    'Никогда не забывай на сколько ты ценна'
];

let complimentIndex = 0;

const complimentText = document.getElementById('compliment');

document.getElementById('complimentButton').addEventListener('click', () => {
    complimentIndex =
    (complimentIndex + 1) % compliments.length;
    complimentText.style.opacity = '0'

    setTimeout(() => {
        complimentText.textContent = compliments[complimentIndex];
        complimentText.style.opacity = '1'
    }, 200);
    createHearts(5);
});

document.getElementById('heartButton').addEventListener('click', () => {
    createHearts(25);
});

function createHearts(amount) {
    const container = document.getElementById('hearts');

    for (let i = 0; i < amount; i++) {
        const heart = document.createElement('div');

        heart.classList.add('floating-heart');

        heart.textContent = [
            '❤',
            '🤍',
            '💕',
            '💗',
            '💓',
            '🌸'
        ][Math.floor(Math.random() * 5)];

        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (15 + Math.random() * 20) + 'px';
        heart.style.animationDuration = (3 + Math.random() * 3) +'s';

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6500);
    }
}

setInterval(() => {
    if (document.hidden) return;

    const container = document.getElementById('hearts');
    const heart = document.createElement('div');

    heart.classList.add('floating-heart');
    heart.textContent = [
        '❤', '🤍', '💕'
    ][
        Math.floor(Math.random() * 3)
    ];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (12 + Math.random() * 12) + 'px'
    heart.style.animationDuration = '7s';

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
}, 1800);