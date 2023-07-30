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
        li.style.color = "#fff";
        pallete.appendChild(li);
      });
    } else if (ch == "Y") {
      letterY.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
    } else if (ch == "X") {
      letterX.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
    } else if (ch == "W") {
      letterW.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.borderColor = e.color;
        li.style.background = e.code;
        pallete.appendChild(li);
      });
    } else if (ch == "V") {
      letterV.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.borderColor = e.color;
        li.style.color = "#fff";
        pallete.appendChild(li);
      });
    } else if (ch == "U") {
      letterU.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
    } else if (ch == "T") {
      letterT.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = "#fff";
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
    } else if (ch == "S") {
      letterS.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.borderColor = e.color;
        li.style.color = "#fff";
        pallete.appendChild(li);
      });
    } else if (ch == "R") {
      letterR.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.borderColor = e.color;
        li.style.color = "#fff";
        pallete.appendChild(li);
      });
    } else if (ch == "Q") {
      letterQ.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
    } else if (ch == "P") {
      letterP.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = "#fff";
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
    } else if (ch == "O") {
      letterO.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = "#fff";
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
    } else if (ch == "N") {
      letterN.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
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
    }
    copyHexCode();
  });
});
