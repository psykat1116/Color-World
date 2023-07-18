let brands = document.querySelectorAll("#logo span");

brands.forEach((elem) => {
  elem.addEventListener("click", () => {
    pallete.querySelectorAll("li").forEach((e) => {
      e.remove();
    });
    console.log(elem.childNodes[0].classList[1]);
    let ch = elem.childNodes[0].classList[1];
    if (ch == "fa-facebook") {
      facebookShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
    } else if (ch == "fa-twitter") {
      twitterShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
    } else if (ch == "fa-instagram") {
      instagramShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
    } else if (ch == "fa-youtube") {
      youtubeShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
    } else if (ch == "fa-amazon") {
      amazonShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
    } else if (ch == "fa-facebook-messenger") {
      messengerShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
    } else if (ch == "fa-slack") {
      slackShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
    } else if (ch == "fa-pinterest") {
      pinterestShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
    } else if (ch == "fa-airbnb") {
      airbnbShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
    } else if (ch == "fa-google") {
      googleShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
    } else if (ch == "fa-whatsapp") {
      whatsappShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
    } else if (ch == "fa-spotify") {
      spotifyShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
    } else if (ch == "fa-tiktok") {
      tiktokShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
    } else if (ch == "fa-lyft") {
      lyftShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
    } else if (ch == "fa-android") {
      androidShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
    } else if (ch == "fa-apple") {
      appleShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
    } else if (ch == "fa-microsoft") {
      microsoftShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
    } else if (ch == "fa-snapchat") {
      snapchatShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
    } else if (ch == "fa-xbox") {
      xboxShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
    } else if (ch == "fa-linkedin") {
      linkedinShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
    } else if (ch == "fa-discord") {
      discordShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
    } else if (ch == "fa-telegram") {
      telegramShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
    } else if (ch == "fa-google-play") {
      playstoreShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
    } else if (ch == "fa-paypal") {
      paypalShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        pallete.appendChild(li);
      });
    }
  });
});
