let options = document.querySelectorAll("span");
let pallete = document.getElementById("pallete");
let themepallete = document.getElementById("themepallete");
let navBtn = document.querySelector("nav button");
let colorPallete = document.getElementById("color-pallete");
let palleteBtn = colorPallete.querySelector("button");
let navbar = document.querySelector("nav");
let numOfColors = document.querySelector("#details p");
let letterOpt = document.getElementById("letter");
let shadeOpt = document.getElementById("color");
let themeOpt = document.getElementById("type");

// *-------------------------Declareing All The Necessary variables and arrays----------------------------------*

let screenWidth, navWidth = "20vw";
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const shades = ["Black", "White", "Red", "Blue", "Purple", "Orange", "Green", "Brown", "Pink", "Yellow", "Gray"];
const themes = ["Halloween", "Sky", "Wedding", "Coffee", "Cream", "Skin", "Sunset", "Night", "Space", "Food", "Rainbow", "Earth", "Nature", "Winter", "Summer", "Warm", "Cold", "Dark", "Light", "Neon", "Pastel", "Vintage"];

// *-------------------Function For Changing Side Navbar Width While The Device Width is Changing-----------------------*

const screenChange = () => {
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

// *------------------Function For Chnaging Active Class When Clicked On Different Options---------------------*

options.forEach((tag) => {
    tag.addEventListener("click", () => {
        document.querySelector("span.active").classList.remove("active");
        tag.classList.add("active");
    })
});

// *-----------------Function For Initialize All The Necessary options in the navbar and colors in the pallete-------------------*

const initialize = () => {
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

// *----------------------Function For Copying The Hex Color Code----------------------------* 

const copyHexCode = () => {
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

// *----------------------Function For Copying The Theme Hex Color Codes----------------------------* 

const copyThemeHexCode = () => {
    themepallete.querySelectorAll("li section").forEach((e) => {
        let colorCode = e.innerText;
        e.addEventListener("click", () => {
            navigator.clipboard.writeText(colorCode);
            e.innerHTML = `<i class="fa-solid fa-check"></i>`;
            setTimeout(() => {
                e.innerText = colorCode;
            }, 1000);
        })
    })
}

// *-------------------Event Firing For collapsing and Expanding Navbar----------------------*

navBtn.addEventListener("click", () => {
    navbar.style.width = `0px`;
})

palleteBtn.addEventListener("click", () => {
    navbar.style.width = `${navWidth}`;
})

// *------------------Event Firing For Initializing The Content and resizing the screen-------------------*

window.addEventListener("load", initialize);
window.addEventListener("resize", screenChange);