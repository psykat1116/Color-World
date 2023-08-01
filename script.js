let options = document.querySelectorAll("span");
let pallete = document.getElementById("pallete");
let navBtn = document.querySelector("nav button");
let colorPallete = document.getElementById("color-pallete");
let palleteBtn = colorPallete.querySelector("button");
let navbar = document.querySelector("nav");
let numOfColors = document.querySelector("#details p");

let screenWidth, navWidth;

function screenChange() {
    screenWidth = screen.width;
    if (screenWidth < 500) {
        navWidth = "60vw";
    }
    else if (screenWidth >= 500 && screenWidth < 760) {
        navWidth = "50vw";
    }
    else if (screenWidth >= 760 && screenWidth <= 1023) {
        navWidth = "35vw";
    }
    else if (screenWidth > 1023 && screenWidth < 1200) {
        navWidth = "30vw";
    }
    else {
        navWidth = "20vw";
    }
}

options.forEach((tag) => {
    tag.addEventListener("click", () => {
        document.querySelector("span.active").classList.remove("active");
        tag.classList.add("active");
    })
});

function initialize() {
    letterA.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        pallete.appendChild(li);
    });
    numOfColors.innerHTML = `Number of Colors is ${letterA.length}`;
    copyHexCode();
    screenChange();
}

function copyHexCode() {
    pallete.querySelectorAll("li").forEach((e) => {
        let colorNode = e.childNodes[0],
            colorCode = colorNode.innerText;
        e.addEventListener("click", () => {
            navigator.clipboard.writeText(colorCode);
            colorNode.innerHTML = `<i class="fa-solid fa-check"></i>`;
            setTimeout(() => {
                colorNode.innerText = colorCode;
            }, 1000);
        });
    });
}

navBtn.addEventListener("click", () => {
    navbar.style.width = `0px`;
})

palleteBtn.addEventListener("click", () => {
    navbar.style.width = `${navWidth}`;
})

window.addEventListener("load", initialize);
window.addEventListener("resize", screenChange);