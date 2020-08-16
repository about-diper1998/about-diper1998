const statuses = [
    `Сутенер игрушек. Начинающий вогер. Банкир.`,
    `Программист. Твичер. Задрот.`,
    `Дипломированный бульбазавр. Математик. Зануда.`,
    `Сын. Внук. Отшельник.`,
    `Самоизолировался до того как это стало мейнстримом.`,
    `Танцор. Певец. На укулеле игрец.`
];

const random = (min, max) => min + Math.round(Math.random() * (max - min));
const setStatus = () => element.innerHTML = statuses[random(0, statuses.length - 1)];

const element = document.getElementById("life-status");
setStatus();

const toggler = document.getElementById("life-status-toggler");
toggler.addEventListener("click", setStatus);