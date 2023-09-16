async function main() {
    console.log("----START OF FROM CREDIBLY----");
    // chrome.browserAction.setPopup({
    //     popup: "./index.html",
    // });
    console.log(window.location.href);
    const grilledCheeseLoader = document.createElement("div");
    grilledCheeseLoader.innerHTML =
        '<iframe src="https://giphy.com/embed/RSGPJWYgaxxgz3Zg7Q" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p>Generating credibility check...</p>';

    grilledCheeseLoader.style = `
        position: sticky; 
        top: 0;
        z-index: 10000;
        background: white;
    `;

    // document.body.appendChild(grilledCheeseLoader);
    console.log(grilledCheeseLoader);
    document.body.insertBefore(grilledCheeseLoader, document.body.firstChild);
    // const CSS = `
    // .credibly_item {
    //     position: sticky;
    //     top: 0px;
    //     left: 0px;
    //     width: 500px;
    //     height: 500px;
    // }
    // `;
    const CSS = `.credibly_item {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 10000;
    padding: 20px;
    background: purple;
    margin: 20px;
    display: block;
}`;

    const cssItem = document.createElement("style");
    cssItem.innerHTML = CSS;
    document.body.appendChild(cssItem);

    const res = await fetch(
        `http://localhost:8080/?url=${window.location.href}`
    );
    const json = await res.json();
    console.log(json);
    const factualness = document.createElement("p");
    factualness.textContent = `Factualness: ${json.factualness}`;

    const textbias = document.createElement("p");
    textbias.textContent = `Bias: ${json.textBias}`;
    const information = document.createElement("div");
    information.classList.add(".credibly_item");
    information.appendChild(factualness);
    information.appendChild(textbias);

    const closeButton = document.createElement("button");
    closeButton.textContent = "close";
    closeButton.addEventListener("click", () => {
        information.remove();
    });
    information.appendChild(closeButton);

    information.style = `
        position: sticky; 
        top: 0;
        z-index: 10000;
        background: white;
    `;

    // information.textContent = "Hello world";
    grilledCheeseLoader.remove();
    document.body.appendChild(information);
    document.body.insertBefore(information, document.body.firstChild);

    console.log("----END OF FROM CREDIBLY----");
}

main();
