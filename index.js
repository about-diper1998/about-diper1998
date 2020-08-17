const statuses = [
    `Сутенер игрушек. Начинающий вогер. Банкир.`,
    `Программист. Твичер. Задрот.`,
    `Дипломированный бульбазавр. Математик. Зануда.`,
    `Сын. Внук. Отшельник.`,
    `Танцор. Певец. На укулеле игрец.`
];

const random = (min, max) => min + Math.round(Math.random() * (max - min));
const setStatus = () => {
    element.innerHTML = statuses[random(0, statuses.length - 1)];
    element.animate([
        { color: "transparent" },
        { color: "white" }
    ],
    {
        duration: 300,
        iterations: 1,
        easing: "ease",
        fill: "both",    
    }
    );
}

const element = document.getElementById("life-status");
setStatus();

const toggler = document.getElementById("life-status-toggler");
toggler.addEventListener("click", setStatus);

const photoListLength = 5;
const photoCarouselElement = document.getElementById("photo-carousel");
const photoCarouselBackground = document.getElementById("photo-carousel-background");
photoCarouselBackground.style.backgroundImage = `url("./content/photos/id-${2}.jpg")`;

const createPhoto = (id, hidden) => {
    const photo = document.createElement("div");
    photo.className = "main-image";
    photo.id = `photo-${id}`;

    if (hidden) {
        photo.style.width = 0
        return photo;
    }
    
    photo.style.backgroundImage = `url("./content/photos/id-${id}.jpg")`;

    photo.addEventListener("click", () => {
        photoCarouselBackground.style.backgroundImage = `url("./content/photos/id-${id}.jpg")`;
    })

    return photo;
}

const setPhotoCarouselBackground = (url) => {
    photoCarouselBackground.style.backgroundImage = url;
}

photoCarouselElement.appendChild(createPhoto(0, true));

for (let i = 1; i < (photoListLength > 5 ? 5 : photoListLength); i += 1) {
    photoCarouselElement.appendChild(createPhoto(i));
}

photoCarouselElement.appendChild(createPhoto(5, true));

document.getElementById("prev-photo-button").addEventListener("click", () => {
    const minID = +photoCarouselElement.children[0].id.match(/\d+/)[0];
    let newNode;
    if (minID - 1 < 0) {
        photoCarouselElement.children[0].id = photoListLength - 1;
        newNode = createPhoto(photoListLength);
        newNode.style.width = 0;
        photoCarouselElement.children[0].after(newNode);
    } else {
        photoCarouselElement.children[0].id = minID - 1;
        newNode = createPhoto(minID);
        newNode.style.width = 0;
        photoCarouselElement.children[0].after(newNode);
    }
    photoCarouselElement.children[photoCarouselElement.children.length - 2].animate([
        { width: "250px" },
        { width: "0" }
    ],
        {
            duration: 500,
            iterations: 1,
            fill: "both",
            easing: "ease"
    });
    photoCarouselElement.children[photoCarouselElement.children.length - 1].remove();
    newNode.animate([
        { width: "0" },
        { width: "250px" }
    ],
        {
            duration: 500,
            iterations: 1,
            fill: "both",
            easing: "ease"
    });
    setPhotoCarouselBackground(photoCarouselElement.children[2].style.backgroundImage);
});

document.getElementById("next-photo-button").addEventListener("click", () => {
    const maxID = +photoCarouselElement.children[photoCarouselElement.children.length - 1].id.match(/\d+/)[0];
    let newNode;
    if (maxID > photoListLength) {
        photoCarouselElement.children[photoCarouselElement.children.length - 1].id = 2;
        newNode = createPhoto(1);
        newNode.style.width = 0;
        photoCarouselElement.children[photoCarouselElement.children.length - 1].before(newNode)
    } else {
        photoCarouselElement.children[photoCarouselElement.children.length - 1].id = maxID + 1;
        newNode = createPhoto(maxID);
        newNode.style.width = 0;
        photoCarouselElement.children[photoCarouselElement.children.length - 1].before(newNode)
    }
    photoCarouselElement.children[1].animate([
        { width: "250px" },
        { width: "0" }
    ],
        {
            duration: 500,
            iterations: 1,
            fill: "both",
            easing: "ease"
    });

    photoCarouselElement.children[0].remove();
    newNode.animate([
        { width: "0" },
        { width: "250px" }
    ],
        {
            duration: 500,
            iterations: 1,
            fill: "both",
            easing: "ease"
    });
    setPhotoCarouselBackground(photoCarouselElement.children[2].style.backgroundImage);
});