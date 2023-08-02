let brands = document.querySelectorAll("#logo span");

brands.forEach((elem) => {
  elem.addEventListener("click", () => {
    pallete.querySelectorAll("li").forEach((e) => {
      e.remove();
    });
    themepallete.querySelectorAll("li").forEach((e) => {
      e.remove();
    });
    let ch = elem.childNodes[0].classList[1];
    if (ch == "fa-facebook") {
      facebookShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${facebookShades.length}`;
    } else if (ch == "fa-twitter") {
      twitterShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${twitterShades.length}`;
    } else if (ch == "fa-instagram") {
      instagramShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${instagramShades.length}`;
    } else if (ch == "fa-youtube") {
      youtubeShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${youtubeShades.length}`;
    } else if (ch == "fa-amazon") {
      amazonShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${amazonShades.length}`;
    } else if (ch == "fa-facebook-messenger") {
      messengerShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${messengerShades.length}`;
    } else if (ch == "fa-slack") {
      slackShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${slackShades.length}`;
    } else if (ch == "fa-pinterest") {
      pinterestShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${pinterestShades.length}`;
    } else if (ch == "fa-airbnb") {
      airbnbShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${airbnbShades.length}`;
    } else if (ch == "fa-google") {
      googleShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${googleShades.length}`;
    } else if (ch == "fa-whatsapp") {
      whatsappShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${whatsappShades.length}`;
    } else if (ch == "fa-spotify") {
      spotifyShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${spotifyShades.length}`;
    } else if (ch == "fa-tiktok") {
      tiktokShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${tiktokShades.length}`;
    } else if (ch == "fa-lyft") {
      lyftShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${lyftShades.length}`;
    } else if (ch == "fa-android") {
      androidShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${androidShades.length}`;
    } else if (ch == "fa-apple") {
      appleShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${appleShades.length}`;
    } else if (ch == "fa-microsoft") {
      microsoftShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${microsoftShades.length}`;
    } else if (ch == "fa-snapchat") {
      snapchatShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${snapchatShades.length}`;
    } else if (ch == "fa-xbox") {
      xboxShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${xboxShades.length}`;
    } else if (ch == "fa-linkedin") {
      linkedinShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${linkedinShades.length}`;
    } else if (ch == "fa-discord") {
      discordShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${discordShades.length}`;
    } else if (ch == "fa-telegram") {
      telegramShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${telegramShades.length}`;
    } else if (ch == "fa-google-play") {
      playstoreShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${playstoreShades.length}`;
    } else if (ch == "fa-paypal") {
      paypalShades.forEach((e) => {
        let li = document.createElement("li");
        let text = `<p>${e.code}</p><label>${e.name}</label>`;
        li.innerHTML = text;
        li.style.background = e.code;
        li.style.color = e.color;
        li.style.borderColor = e.color;
        pallete.appendChild(li);
      });
      numOfColors.innerHTML = `Number of Colors is ${paypalShades.length}`;
    }
    copyHexCode();
  });
});