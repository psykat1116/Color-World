let themeColors = document.querySelectorAll("#theme span");

themeColors.forEach((theme) => {
    theme.addEventListener("click", () => {
        let th = theme.innerHTML;
        pallete.querySelectorAll("li").forEach((e) => {
            e.remove();
        });
        themepallete.querySelectorAll("li").forEach((e) => {
            e.remove();
        });
        if (th == "Halloween") {
            halloween.forEach((color) => {
                let li = document.createElement("li");
                li.style.width = "230px";
                li.style.height = "240px";
                let text = `
                    <section style="background: ${color.colorA};">${color.colorA}</section>
                    <section style="background: ${color.colorB};">${color.colorB}</section>
                    <section style="background: ${color.colorC};">${color.colorC}</section>
                    <section style="background: ${color.colorD};">${color.colorD}</section>
                `;
                li.innerHTML = text;
                themepallete.appendChild(li);
            })
            numOfColors.innerHTML = `Number of Palletes is ${halloween.length}`;
        }
        else if (th == "Christmas") {
            christmas.forEach((color) => {
                let li = document.createElement("li");
                li.style.width = "230px";
                li.style.height = "240px";
                let text = `
                    <section style="background: ${color.colorA};">${color.colorA}</section>
                    <section style="background: ${color.colorB};">${color.colorB}</section>
                    <section style="background: ${color.colorC};">${color.colorC}</section>
                    <section style="background: ${color.colorD};">${color.colorD}</section>
                `;
                li.innerHTML = text;
                themepallete.appendChild(li);
            })
            numOfColors.innerHTML = `Number of Palletes is ${christmas.length}`;
        }
        else if (th == "Wedding") {
            wedding.forEach((color) => {
                let li = document.createElement("li");
                li.style.width = "230px";
                li.style.height = "240px";
                let text = `
                    <section style="background: ${color.colorA};">${color.colorA}</section>
                    <section style="background: ${color.colorB};">${color.colorB}</section>
                    <section style="background: ${color.colorC};">${color.colorC}</section>
                    <section style="background: ${color.colorD};">${color.colorD}</section>
                `;
                li.innerHTML = text;
                themepallete.appendChild(li);
            })
            numOfColors.innerHTML = `Number of Palletes is ${wedding.length}`;
        }
        else if (th == "Sky") {
            sky.forEach((color) => {
                let li = document.createElement("li");
                li.style.width = "230px";
                li.style.height = "240px";
                let text = `
                    <section style="background: ${color.colorA};">${color.colorA}</section>
                    <section style="background: ${color.colorB};">${color.colorB}</section>
                    <section style="background: ${color.colorC};">${color.colorC}</section>
                    <section style="background: ${color.colorD};">${color.colorD}</section>
                `;
                li.innerHTML = text;
                themepallete.appendChild(li);
            })
            numOfColors.innerHTML = `Number of Palletes is ${sky.length}`;
        }
        else if (th == "Dark") {
            dark.forEach((color) => {
                let li = document.createElement("li");
                li.style.width = "230px";
                li.style.height = "240px";
                let text = `
                    <section style="background: ${color.colorA};">${color.colorA}</section>
                    <section style="background: ${color.colorB};">${color.colorB}</section>
                    <section style="background: ${color.colorC};">${color.colorC}</section>
                    <section style="background: ${color.colorD};">${color.colorD}</section>
                `;
                li.innerHTML = text;
                themepallete.appendChild(li);
            })
            numOfColors.innerHTML = `Number of Palletes is ${dark.length}`;
        }
        else if (th == "Rainbow") {
            rainbow.forEach((color) => {
                let li = document.createElement("li");
                li.style.width = "230px";
                li.style.height = "240px";
                let text = `
                    <section style="background: ${color.colorA};">${color.colorA}</section>
                    <section style="background: ${color.colorB};">${color.colorB}</section>
                    <section style="background: ${color.colorC};">${color.colorC}</section>
                    <section style="background: ${color.colorD};">${color.colorD}</section>
                `;
                li.innerHTML = text;
                themepallete.appendChild(li);
            })
            numOfColors.innerHTML = `Number of Palletes is ${rainbow.length}`;
        }
        else if (th == "Food") {
            food.forEach((color) => {
                let li = document.createElement("li");
                li.style.width = "230px";
                li.style.height = "240px";
                let text = `
                    <section style="background: ${color.colorA};">${color.colorA}</section>
                    <section style="background: ${color.colorB};">${color.colorB}</section>
                    <section style="background: ${color.colorC};">${color.colorC}</section>
                    <section style="background: ${color.colorD};">${color.colorD}</section>
                `;
                li.innerHTML = text;
                themepallete.appendChild(li);
            })
            numOfColors.innerHTML = `Number of Palletes is ${food.length}`;
        }
        else if (th == "Skin") {
            skin.forEach((color) => {
                let li = document.createElement("li");
                li.style.width = "230px";
                li.style.height = "240px";
                let text = `
                    <section style="background: ${color.colorA};">${color.colorA}</section>
                    <section style="background: ${color.colorB};">${color.colorB}</section>
                    <section style="background: ${color.colorC};">${color.colorC}</section>
                    <section style="background: ${color.colorD};">${color.colorD}</section>
                `;
                li.innerHTML = text;
                themepallete.appendChild(li);
            })
            numOfColors.innerHTML = `Number of Palletes is ${skin.length}`;
        }
        else if (th == "Coffee") {
            coffee.forEach((color) => {
                let li = document.createElement("li");
                li.style.width = "230px";
                li.style.height = "240px";
                let text = `
                    <section style="background: ${color.colorA};">${color.colorA}</section>
                    <section style="background: ${color.colorB};">${color.colorB}</section>
                    <section style="background: ${color.colorC};">${color.colorC}</section>
                    <section style="background: ${color.colorD};">${color.colorD}</section>
                `;
                li.innerHTML = text;
                themepallete.appendChild(li);
            })
            numOfColors.innerHTML = `Number of Palletes is ${coffee.length}`;
        }
        else if (th == "Cream") {
            cream.forEach((color) => {
                let li = document.createElement("li");
                li.style.width = "230px";
                li.style.height = "240px";
                let text = `
                    <section style="background: ${color.colorA};">${color.colorA}</section>
                    <section style="background: ${color.colorB};">${color.colorB}</section>
                    <section style="background: ${color.colorC};">${color.colorC}</section>
                    <section style="background: ${color.colorD};">${color.colorD}</section>
                `;
                li.innerHTML = text;
                themepallete.appendChild(li);
            })
            numOfColors.innerHTML = `Number of Palletes is ${cream.length}`;
        }
        else if (th == "Earth") {
            earth.forEach((color) => {
                let li = document.createElement("li");
                li.style.width = "230px";
                li.style.height = "240px";
                let text = `
                    <section style="background: ${color.colorA};">${color.colorA}</section>
                    <section style="background: ${color.colorB};">${color.colorB}</section>
                    <section style="background: ${color.colorC};">${color.colorC}</section>
                    <section style="background: ${color.colorD};">${color.colorD}</section>
                `;
                li.innerHTML = text;
                themepallete.appendChild(li);
            })
            numOfColors.innerHTML = `Number of Palletes is ${earth.length}`;
        }
        else if (th == "Pastel") {
            pastel.forEach((color) => {
                let li = document.createElement("li");
                li.style.width = "230px";
                li.style.height = "240px";
                let text = `
                    <section style="background: ${color.colorA};">${color.colorA}</section>
                    <section style="background: ${color.colorB};">${color.colorB}</section>
                    <section style="background: ${color.colorC};">${color.colorC}</section>
                    <section style="background: ${color.colorD};">${color.colorD}</section>
                `;
                li.innerHTML = text;
                themepallete.appendChild(li);
            })
            numOfColors.innerHTML = `Number of Palletes is ${pastel.length}`;
        }
        else if (th == "Retro") {
            retro.forEach((color) => {
                let li = document.createElement("li");
                li.style.width = "230px";
                li.style.height = "240px";
                let text = `
                    <section style="background: ${color.colorA};">${color.colorA}</section>
                    <section style="background: ${color.colorB};">${color.colorB}</section>
                    <section style="background: ${color.colorC};">${color.colorC}</section>
                    <section style="background: ${color.colorD};">${color.colorD}</section>
                `;
                li.innerHTML = text;
                themepallete.appendChild(li);
            })
            numOfColors.innerHTML = `Number of Palletes is ${retro.length}`;
        }
        else if (th == "Vintage") {
            vintage.forEach((color) => {
                let li = document.createElement("li");
                li.style.width = "230px";
                li.style.height = "240px";
                let text = `
                    <section style="background: ${color.colorA};">${color.colorA}</section>
                    <section style="background: ${color.colorB};">${color.colorB}</section>
                    <section style="background: ${color.colorC};">${color.colorC}</section>
                    <section style="background: ${color.colorD};">${color.colorD}</section>
                `;
                li.innerHTML = text;
                themepallete.appendChild(li);
            })
            numOfColors.innerHTML = `Number of Palletes is ${vintage.length}`;
        }
        else if (th == "Neon") {
            neon.forEach((color) => {
                let li = document.createElement("li");
                li.style.width = "230px";
                li.style.height = "240px";
                let text = `
                    <section style="background: ${color.colorA};">${color.colorA}</section>
                    <section style="background: ${color.colorB};">${color.colorB}</section>
                    <section style="background: ${color.colorC};">${color.colorC}</section>
                    <section style="background: ${color.colorD};">${color.colorD}</section>
                `;
                li.innerHTML = text;
                themepallete.appendChild(li);
            })
            numOfColors.innerHTML = `Number of Palletes is ${neon.length}`;
        }
        else if (th == "Gold") {
            gold.forEach((color) => {
                let li = document.createElement("li");
                li.style.width = "230px";
                li.style.height = "240px";
                let text = `
                    <section style="background: ${color.colorA};">${color.colorA}</section>
                    <section style="background: ${color.colorB};">${color.colorB}</section>
                    <section style="background: ${color.colorC};">${color.colorC}</section>
                    <section style="background: ${color.colorD};">${color.colorD}</section>
                `;
                li.innerHTML = text;
                themepallete.appendChild(li);
            })
            numOfColors.innerHTML = `Number of Palletes is ${gold.length}`;
        }
        else if (th == "Light") {
            light.forEach((color) => {
                let li = document.createElement("li");
                li.style.width = "230px";
                li.style.height = "240px";
                let text = `
                    <section style="background: ${color.colorA};">${color.colorA}</section>
                    <section style="background: ${color.colorB};">${color.colorB}</section>
                    <section style="background: ${color.colorC};">${color.colorC}</section>
                    <section style="background: ${color.colorD};">${color.colorD}</section>
                `;
                li.innerHTML = text;
                themepallete.appendChild(li);
            })
            numOfColors.innerHTML = `Number of Palletes is ${light.length}`;
        }
        else if (th == "Sunset") {
            sunset.forEach((color) => {
                let li = document.createElement("li");
                li.style.width = "230px";
                li.style.height = "240px";
                let text = `
                    <section style="background: ${color.colorA};">${color.colorA}</section>
                    <section style="background: ${color.colorB};">${color.colorB}</section>
                    <section style="background: ${color.colorC};">${color.colorC}</section>
                    <section style="background: ${color.colorD};">${color.colorD}</section>
                `;
                li.innerHTML = text;
                themepallete.appendChild(li);
            })
            numOfColors.innerHTML = `Number of Palletes is ${sunset.length}`;
        }
        else if (th == "Night") {
            night.forEach((color) => {
                let li = document.createElement("li");
                li.style.width = "230px";
                li.style.height = "240px";
                let text = `
                    <section style="background: ${color.colorA};">${color.colorA}</section>
                    <section style="background: ${color.colorB};">${color.colorB}</section>
                    <section style="background: ${color.colorC};">${color.colorC}</section>
                    <section style="background: ${color.colorD};">${color.colorD}</section>
                `;
                li.innerHTML = text;
                themepallete.appendChild(li);
            })
            numOfColors.innerHTML = `Number of Palletes is ${night.length}`;
        }
        else if (th == "Space") {
            space.forEach((color) => {
                let li = document.createElement("li");
                li.style.width = "230px";
                li.style.height = "240px";
                let text = `
                    <section style="background: ${color.colorA};">${color.colorA}</section>
                    <section style="background: ${color.colorB};">${color.colorB}</section>
                    <section style="background: ${color.colorC};">${color.colorC}</section>
                    <section style="background: ${color.colorD};">${color.colorD}</section>
                `;
                li.innerHTML = text;
                themepallete.appendChild(li);
            })
            numOfColors.innerHTML = `Number of Palletes is ${space.length}`;
        }
        else if (th == "Nature") {
            nature.forEach((color) => {
                let li = document.createElement("li");
                li.style.width = "230px";
                li.style.height = "240px";
                let text = `
                    <section style="background: ${color.colorA};">${color.colorA}</section>
                    <section style="background: ${color.colorB};">${color.colorB}</section>
                    <section style="background: ${color.colorC};">${color.colorC}</section>
                    <section style="background: ${color.colorD};">${color.colorD}</section>
                `;
                li.innerHTML = text;
                themepallete.appendChild(li);
            })
            numOfColors.innerHTML = `Number of Palletes is ${nature.length}`;
        }
        else if (th == "Winter") {
            winter.forEach((color) => {
                let li = document.createElement("li");
                li.style.width = "230px";
                li.style.height = "240px";
                let text = `
                    <section style="background: ${color.colorA};">${color.colorA}</section>
                    <section style="background: ${color.colorB};">${color.colorB}</section>
                    <section style="background: ${color.colorC};">${color.colorC}</section>
                    <section style="background: ${color.colorD};">${color.colorD}</section>
                `;
                li.innerHTML = text;
                themepallete.appendChild(li);
            })
            numOfColors.innerHTML = `Number of Palletes is ${winter.length}`;
        }
        else if (th == "Summer") {
            summer.forEach((color) => {
                let li = document.createElement("li");
                li.style.width = "230px";
                li.style.height = "240px";
                let text = `
                    <section style="background: ${color.colorA};">${color.colorA}</section>
                    <section style="background: ${color.colorB};">${color.colorB}</section>
                    <section style="background: ${color.colorC};">${color.colorC}</section>
                    <section style="background: ${color.colorD};">${color.colorD}</section>
                `;
                li.innerHTML = text;
                themepallete.appendChild(li);
            })
            numOfColors.innerHTML = `Number of Palletes is ${summer.length}`;
        }
        else if (th == "Warm") {
            warm.forEach((color) => {
                let li = document.createElement("li");
                li.style.width = "230px";
                li.style.height = "240px";
                let text = `
                    <section style="background: ${color.colorA};">${color.colorA}</section>
                    <section style="background: ${color.colorB};">${color.colorB}</section>
                    <section style="background: ${color.colorC};">${color.colorC}</section>
                    <section style="background: ${color.colorD};">${color.colorD}</section>
                `;
                li.innerHTML = text;
                themepallete.appendChild(li);
            })
            numOfColors.innerHTML = `Number of Palletes is ${warm.length}`;
        }
        else if (th == "Cold") {
            cold.forEach((color) => {
                let li = document.createElement("li");
                li.style.width = "230px";
                li.style.height = "240px";
                let text = `
                    <section style="background: ${color.colorA};">${color.colorA}</section>
                    <section style="background: ${color.colorB};">${color.colorB}</section>
                    <section style="background: ${color.colorC};">${color.colorC}</section>
                    <section style="background: ${color.colorD};">${color.colorD}</section>
                `;
                li.innerHTML = text;
                themepallete.appendChild(li);
            })
            numOfColors.innerHTML = `Number of Palletes is ${cold.length}`;
        }
        copyThemeHexCode();
    })
})
