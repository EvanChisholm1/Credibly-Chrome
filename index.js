async function main() {
    console.log("----START OF FROM CREDIBLY----");
    // chrome.browserAction.setPopup({
    //     popup: "./index.html",
    // });
    console.log(window.location.href);

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
    information.appendChild(factualness);
    information.appendChild(textbias);
    // information.textContent = "Hello world";
    document.body.appendChild(information);
    document.body.insertBefore(information, document.body.firstChild);

    console.log("----END OF FROM CREDIBLY----");
}

main();
