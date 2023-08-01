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
        li.style.borderColor = e.color;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${shadesOfRed.length}`;
    } else if (color == "Blue") {
      shadesOfBlue.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.borderColor = e.color;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${shadesOfBlue.length}`;
    } else if (color == "Black") {
      shadesOfBlack.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.borderColor = "#fff";
        li.style.color = "#fff";
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${shadesOfBlack.length}`;
    } else if (color == "White") {
      shadesOfWhite.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.borderColor = "#000";
        li.style.color = "#000";
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${shadesOfWhite.length}`;
    } else if (color == "Pink") {
      shadesOfPink.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.borderColor = e.color;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${shadesOfPink.length}`;
    } else if (color == "Green") {
      shadesOfGreen.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.borderColor = e.color;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${shadesOfGreen.length}`;
    } else if (color == "Orange") {
      shadesOfOrange.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.borderColor = e.color;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${shadesOfOrange.length}`;
    } else if (color == "Gray") {
      shadesOfGray.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${shadesOfGray.length}`;
    } else if (color == "Purple") {
      shadesOfPurple.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${shadesOfPurple.length}`;
    } else if (color == "Brown") {
      shadesOfBrown.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${shadesOfBrown.length}`;
    } else {
      shadesOfYellow.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.borderColor = "#000";
        li.style.color = "#000";
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${shadesOfYellow.length}`;
    }
    copyHexCode();
  });
});
