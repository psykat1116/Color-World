let options = document.querySelectorAll("span");

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
    copyHexCode();
}

window.addEventListener("load",initialize);

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