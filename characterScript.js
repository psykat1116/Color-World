let characters = document.querySelectorAll("#letter span");

characters.forEach((elem) => {
  elem.addEventListener("click", () => {
    pallete.querySelectorAll("li").forEach((e) => {
      e.remove();
    });
    let ch = elem.innerHTML;
    if (ch == "Z") {
      letterZ.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.borderColor = e.color;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${letterZ.length}`;
    } else if (ch == "Y") {
      letterY.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.borderColor = e.color;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${letterY.length}`;
    } else if (ch == "X") {
      letterX.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.borderColor = e.color;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${letterX.length}`;
    } else if (ch == "W") {
      letterW.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.borderColor = e.color;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${letterW.length}`;
    } else if (ch == "V") {
      letterV.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.borderColor = e.color;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${letterV.length}`;
    } else if (ch == "U") {
      letterU.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.borderColor = e.color;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${letterU.length}`;
    } else if (ch == "T") {
      letterT.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${letterT.length}`;
    } else if (ch == "S") {
      letterS.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.borderColor = e.color;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${letterS.length}`;
    } else if (ch == "R") {
      letterR.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.borderColor = e.color;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${letterR.length}`;
    } else if (ch == "Q") {
      letterQ.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.borderColor = e.color;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${letterQ.length}`;
    } else if (ch == "P") {
      letterP.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${letterP.length}`;
    } else if (ch == "O") {
      letterO.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${letterO.length}`;
    } else if (ch == "N") {
      letterN.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.borderColor = e.color;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${letterN.length}`;
    } else if (ch == "M") {
      letterM.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${letterM.length}`;
    } else if (ch == "L") {
      letterL.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${letterL.length}`;
    } else if (ch == "K") {
      letterK.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${letterK.length}`;
    } else if (ch == "J") {
      letterJ.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${letterJ.length}`;
    } else if (ch == "I") {
      letterI.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${letterI.length}`;
    } else if (ch == "H") {
      letterH.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${letterH.length}`;
    } else if (ch == "G") {
      letterG.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${letterG.length}`;
    } else if (ch == "F") {
      letterF.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${letterF.length}`;
    } else if (ch == "E") {
      letterE.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${letterElength}`;
    } else if (ch == "D") {
      letterD.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${letterD.length}`;
    } else if (ch == "C") {
      letterC.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${letterC.length}`;
    } else if (ch == "B") {
      letterB.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${letterB.length}`;
    } else {
      letterA.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${letterA.length}`;
    }
    copyHexCode();
  });
});
