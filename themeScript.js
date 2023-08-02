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
        copyThemeHexCode();
    })
})
