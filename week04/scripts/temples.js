const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Dallas Texas",
        location: "Dallas, Texas, United States",
        dedicated: "1984, October, 19",
        area: 44207,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/04c5ccd688ef6e90411807dfb131604e78e9dc72/full/800%2C/0/default"
    },
    {
        templeName: "Red Cliffs Utah",
        location: "St. George, Utah, United States",
        dedicated: "2024, March, 24",
        area: 96000,
        imageUrl:
            "https://newsroom.churchofjesuschrist.org/media/960x540/27b23f63840511eeabe2eeeeac1e3dbe234e66cd_w3840.jpeg"
    },
    {
        templeName: "Draper Utah",
        location: "Draper, Utah, United States",
        dedicated: "2009, March, 20",
        area: 58174,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/6e7912cc090537c8bd7aeb165f37200f14a25e50/full/800%2C/0/default"
    }
];

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#primary-nav");
const templeGrid = document.querySelector(".temple-grid");

menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
    });
});

function displayTemples(templeList) {
    templeGrid.innerHTML = "";

    templeList.forEach((temple) => {
        const card = document.createElement("figure");

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} Temple`;
        image.width = 400;
        image.height = 250;
        image.loading = "lazy";

        const caption = document.createElement("figcaption");

        const name = document.createElement("h2");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;

        const area = document.createElement("p");
        area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

        caption.appendChild(name);
        caption.appendChild(location);
        caption.appendChild(dedicated);
        caption.appendChild(area);

        card.appendChild(image);
        card.appendChild(caption);

        templeGrid.appendChild(card);
    });
}

function filterTemples(filter) {
    let filteredTemples = temples;

    if (filter === "old") {
        filteredTemples = temples.filter(
            (temple) => Number(temple.dedicated.split(",")[0]) < 1900
        );
    } else if (filter === "new") {
        filteredTemples = temples.filter(
            (temple) => Number(temple.dedicated.split(",")[0]) > 2000
        );
    } else if (filter === "large") {
        filteredTemples = temples.filter(
            (temple) => temple.area > 90000
        );
    } else if (filter === "small") {
        filteredTemples = temples.filter(
            (temple) => temple.area < 10000
        );
    }

    displayTemples(filteredTemples);
}

navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (event) => {
        const filter = link.textContent.trim().toLowerCase();
        filterTemples(filter);

        if (filter !== "home") {
            event.preventDefault();
        }
    });
});

document.querySelector("#currentyear").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;

displayTemples(temples);