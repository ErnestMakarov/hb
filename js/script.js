const clk = document.querySelector(".btn");
const image = document.querySelector(".birthday-image");
const caption = document.querySelector(".caption");

// Массив с названиями файлов
const images = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg",
    "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg",
    "Untitled.jpg"
];

// Подписи к каждой картинке (добавь свои тексты!)
const captions = [
    "Чтоб никогда не болел!", "Чтоб всегда был веселым!", "Чтоб всегда был модным!", "Чтобы был умным!", "Чтобы всегда оставался красаучиком!",
    "Чтоб женщины контактик давали!", "Чтоб снимался в лучших фильмах!", "Чтобы еда всегда была медом!", "Сигма!", "Чтоб глазки всегда были четкие!",
    "Чтоб не писался!", "Чтоб программирование хорошо шло!", "С ДНЕМ РОЖДЕНИЯ! от Эрнеста и Юли"
];

let current = 0;

clk.addEventListener("click", function () {
    if (current < images.length) {
        image.src = "./img/" + images[current];
        image.style.display = "block";
        caption.textContent = captions[current];
        current++;
    } else {
        clk.disabled = true;
        clk.textContent = "Все!";
    }
});

const musicBtn = document.querySelector(".music-btn");
const audio = document.getElementById("birthday-audio");

musicBtn.addEventListener("click", function () {
    audio.play();
});
