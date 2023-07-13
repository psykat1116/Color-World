let pallete = document.getElementById("pallete");
let shadeColors = document.querySelectorAll("#color span");

shadeColors.forEach((elem) => {
  elem.addEventListener("click", () => {
    let color = elem.innerHTML;
    pallete.querySelectorAll("li").forEach((e) => {
      e.remove();
    });
    if (color == "Red") {
      shadesOfRed.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        pallete.appendChild(li);
      });
    } else if (color == "Blue") {
      shadesOfBlue.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        pallete.appendChild(li);
      });
    } else if (color == "Black") {
      shadesOfBlack.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = "#fff";
        pallete.appendChild(li);
      });
    } else if (color == "White") {
      shadesOfWhite.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        pallete.appendChild(li);
      });
    } else if (color == "Pink") {
      shadesOfPink.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        pallete.appendChild(li);
      });
    } else if (color == "Green") {
      shadesOfGreen.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        pallete.appendChild(li);
      });
    } else if (color == "Orange") {
      shadesOfOrange.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        pallete.appendChild(li);
      });
    } else if (color == "Gray") {
      shadesOfGray.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = "#fff";
        pallete.appendChild(li);
      });
    } else if (color == "Purple") {
      shadesOfPurple.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = "#fff";
        pallete.appendChild(li);
      });
    } else if (color == "Brown") {
      shadesOfBrown.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = "#fff";
        pallete.appendChild(li);
      });
    } else {
      shadesOfYellow.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        pallete.appendChild(li);
      });
    }
    copyHexCode();
  });
});

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
