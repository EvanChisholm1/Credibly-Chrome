async function main() {
    console.log("----START OF FROM CREDIBLY----");
    // chrome.browserAction.setPopup({
    //     popup: "./index.html",
    // });
    console.log(window.location.href);
     const closeButton = document.createElement("button");
    closeButton.textContent = "x";
    closeButton.addEventListener("click", () => {
        information.remove();
    });
    const grilledCheeseLoader = document.createElement("div");
    grilledCheeseLoader.innerHTML =
        '<iframe src="https://giphy.com/embed/RSGPJWYgaxxgz3Zg7Q" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p>Generating credibility check...</p>';
    grilledCheeseLoader.append(closeButton);

    grilledCheeseLoader.style = `
        top: 0;
        z-index: 10000;
        background: white;
        width: 300px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  overflow-y:auto; 
    overflow-x:hidden;
  height:400px;
  position: fixed;
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
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10000;
    background: purple;
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

   
    information.appendChild(closeButton);

    closeButton.style = `
    border:none;
    cursor: pointer;
        position: fixed;
        top: 30px;
        left: 270px;
    `


    information.style = `
        position: fixed; 
        top: 0;
        z-index: 10000;
        background: white;
        margin: 20px;
        width: 300px;
    display: block;
      padding: 20px;
      padding-right:30px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  overflow-y:auto; 
  overflow-x:hidden;
  height:400px;
    `;

    // information.textContent = "Hello world";
    grilledCheeseLoader.remove();
    document.body.appendChild(information);
    document.body.insertBefore(information, document.body.firstChild);

    console.log("----END OF FROM CREDIBLY----");
}

main();
