// Главная кнопка — прокрутка вниз
document.getElementById('startButton').addEventListener('click', () => {
    document.querySelector('.reasons').scrollIntoView({
        behavior: 'smooth'
    });
});

// Открытие письма
const modal = document.getElementById('letterModal');

document.getElementById('openLetter').addEventListener('click', () => {
    modal.classList.add('active');
});

document.getElementById('closeLetter').addEventListener('click', () => {
    modal.classList.remove('active');
});

// Закрытие письма по нажатию вне окна
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('active');
    }
});

// Закрытие письма клавишей Escape
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.classList.remove('active');
    }
});

// Сюрприз
const surpriseButton = document.getElementById('surpriseButton');
const surpriseMessage = document.getElementById('surpriseMessage');

surpriseButton.addEventListener('click', () => {
    surpriseMessage.classList.toggle('show');

    if (surpriseMessage.classList.contains('show')) {
        surpriseButton.textContent = 'Сюрприз открыт ❤️';
        createHearts(12);
    } else {
        surpriseButton.textContent = 'Открыть сюрприз 💗';
    }
});

// Список комплиментов
const compliments = [
    'Ты намного прекраснее, чем думаешь. ❤️',
    'Пусть у тебя всегда будет повод улыбаться!',
    'Ты заслуживаешь самого доброго отношения.',
    'Не позволяй плохому дню испортить твоё настроение.',
    'Твоя индивидуальность — это твоя особенность.',
    'Мир становится немного светлее благодаря таким людям, как ты.',
    'Никогда не забывай, насколько ты ценна.'
];

let complimentIndex = 0;

const complimentText = document.getElementById('compliment');

document.getElementById('complimentButton').addEventListener('click', () => {
    complimentIndex = (complimentIndex + 1) % compliments.length;

    complimentText.style.opacity = '0';

    setTimeout(() => {
        complimentText.textContent = compliments[complimentIndex];
        complimentText.style.opacity = '1';
    }, 200);

    createHearts(5);
});

// Сердечко в конце сайта
document.getElementById('heartButton').addEventListener('click', () => {
    createHearts(25);
});

// Создание плавающих сердечек
function createHearts(amount) {
    const container = document.getElementById('hearts');

    for (let i = 0; i < amount; i++) {
        const heart = document.createElement('div');

        heart.classList.add('floating-heart');

        heart.textContent = ['❤️', '💕', '💗', '💖', '🌸'][
            Math.floor(Math.random() * 5)
        ];

        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (15 + Math.random() * 20) + 'px';
        heart.style.animationDuration = (3 + Math.random() * 3) + 's';

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6500);
    }
}

// Небольшая фоновая анимация
setInterval(() => {
    if (document.hidden) return;

    const container = document.getElementById('hearts');
    const heart = document.createElement('div');

    heart.classList.add('floating-heart');
    heart.textContent = ['♡', '🌸', '💕'][
        Math.floor(Math.random() * 3)
    ];

    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (12 + Math.random() * 12) + 'px';
    heart.style.animationDuration = '7s';

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
}, 1800);
