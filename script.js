let pallete = document.getElementById("pallete");
let showRed = document.getElementById("red");
let showBlack = document.getElementById("black");
let showBlue = document.getElementById("blue");
let showWhite = document.getElementById("white");
let showPink = document.getElementById("pink");
let showGreen = document.getElementById("green");
let showYellow = document.getElementById("yellow");
let showBrown = document.getElementById("brown");
let showPurple = document.getElementById("purple");
let showGray = document.getElementById("gray");
let showOrange = document.getElementById("orange");

showRed.onclick = () => {
  pallete.querySelectorAll("li").forEach((e) => {
    e.remove();
  });
  shadesOfRed.forEach((e) => {
    let li = document.createElement("li");
    let text = `<p>${e.code}</p><label>${e.name}</label>`;
    li.innerHTML = text;
    li.style.background = e.code;
    pallete.appendChild(li);
  });
  copyHexCode();
};

showBlack.onclick = () => {
  pallete.querySelectorAll("li").forEach((e) => {
    e.remove();
  });
  shadesOfBlack.forEach((e) => {
    let li = document.createElement("li");
    let text = `<p>${e.code}</p><label>${e.name}</label>`;
    li.innerHTML = text;
    li.style.background = e.code;
    li.style.color = "#fff";
    pallete.appendChild(li);
  });
  copyHexCode();
};

showBlue.onclick = () => {
  pallete.querySelectorAll("li").forEach((e) => {
    e.remove();
  });
  shadesOfBlue.forEach((e) => {
    let li = document.createElement("li");
    let text = `<p>${e.code}</p><label>${e.name}</label>`;
    li.innerHTML = text;
    li.style.background = e.code;
    pallete.appendChild(li);
  });
  copyHexCode();
};

showWhite.onclick = () => {
  pallete.querySelectorAll("li").forEach((e) => {
    e.remove();
  });
  shadesOfWhite.forEach((e) => {
    let li = document.createElement("li");
    let text = `<p>${e.code}</p><label>${e.name}</label>`;
    li.innerHTML = text;
    li.style.background = e.code;
    pallete.appendChild(li);
  });
  copyHexCode();
};

showPink.onclick = () => {
  pallete.querySelectorAll("li").forEach((e) => {
    e.remove();
  });
  shadesOfPink.forEach((e) => {
    let li = document.createElement("li");
    let text = `<p>${e.code}</p><label>${e.name}</label>`;
    li.innerHTML = text;
    li.style.background = e.code;
    pallete.appendChild(li);
  });
  copyHexCode();
};

showGreen.onclick = () => {
  pallete.querySelectorAll("li").forEach((e) => {
    e.remove();
  });
  shadesOfGreen.forEach((e) => {
    let li = document.createElement("li");
    let text = `<p>${e.code}</p><label>${e.name}</label>`;
    li.innerHTML = text;
    li.style.background = e.code;
    pallete.appendChild(li);
  });
  copyHexCode();
};

showGray.onclick = () => {
  pallete.querySelectorAll("li").forEach((e) => {
    e.remove();
  });
  shadesOfGray.forEach((e) => {
    let li = document.createElement("li");
    let text = `<p>${e.code}</p><label>${e.name}</label>`;
    li.innerHTML = text;
    li.style.background = e.code;
    li.style.color = "#fff";
    pallete.appendChild(li);
  });
  copyHexCode();
};

showPurple.onclick = () => {
  pallete.querySelectorAll("li").forEach((e) => {
    e.remove();
  });
  shadesOfPurple.forEach((e) => {
    let li = document.createElement("li");
    let text = `<p>${e.code}</p><label>${e.name}</label>`;
    li.innerHTML = text;
    li.style.background = e.code;
    li.style.color = "#fff";
    pallete.appendChild(li);
  });
  copyHexCode();
};

showYellow.onclick = () => {
  pallete.querySelectorAll("li").forEach((e) => {
    e.remove();
  });
  shadesOfYellow.forEach((e) => {
    let li = document.createElement("li");
    let text = `<p>${e.code}</p><label>${e.name}</label>`;
    li.innerHTML = text;
    li.style.background = e.code;
    pallete.appendChild(li);
  });
  copyHexCode();
};

showBrown.onclick = () => {
  pallete.querySelectorAll("li").forEach((e) => {
    e.remove();
  });
  shadesOfBrown.forEach((e) => {
    let li = document.createElement("li");
    let text = `<p>${e.code}</p><label>${e.name}</label>`;
    li.innerHTML = text;
    li.style.background = e.code;
    li.style.color = "#fff";
    pallete.appendChild(li);
  });
  copyHexCode();
};

showOrange.onclick = () => {
  pallete.querySelectorAll("li").forEach((e) => {
    e.remove();
  });
  shadesOfOrange.forEach((e) => {
    let li = document.createElement("li");
    let text = `<p>${e.code}</p><label>${e.name}</label>`;
    li.innerHTML = text;
    li.style.background = e.code;
    pallete.appendChild(li);
  });
  copyHexCode();
};

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

copyHexCode();
