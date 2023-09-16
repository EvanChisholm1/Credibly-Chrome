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

        closeButton.style = `
        border:none;
        cursor: pointer;
            position: fixed;
            top: 30px;
            left: 275px;
            background-color: transparent;
            padding:none;
            margin:none;
            font-family: 'Times New Roman', sans-serif;          
        `;
    grilledCheeseLoader.append(closeButton);

    grilledCheeseLoader.style = `
    top: 0;
    z-index: 10000;
    width: 300px;
    background-image: chrome.extension.getURL('breadBackground.svg');
    background-size: contain;
    padding: 20px;
    padding-right:30px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    overflow-y: auto;
    overflow-x: hidden;
    height: 400px;
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
    const informationPopUp = document.createElement("div");
    const text = informationPopUp.appendChild(document.createElement("div"));
    text.appendChild(factualness);
    text.appendChild(textbias);   
    informationPopUp.appendChild(text);

    informationPopUp.appendChild(closeButton);

    informationPopUp.style = `
            position: fixed; 
        z-index: 10000;
    display: block;
      background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="500" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="78fc619777"><path d="M 215 153 L 322 153 L 322 326 L 215 326 Z M 215 153 " clip-rule="nonzero"/></clipPath><clipPath id="7452edf664"><path d="M 391.738281 251.15625 L 286.445312 343.800781 L 187.359375 231.1875 L 292.652344 138.542969 Z M 391.738281 251.15625 " clip-rule="nonzero"/></clipPath><clipPath id="ea610ab2af"><path d="M 391.738281 251.15625 L 286.445312 343.800781 L 187.359375 231.1875 L 292.652344 138.542969 Z M 391.738281 251.15625 " clip-rule="nonzero"/></clipPath><clipPath id="4b29d89903"><path d="M 225 47.230469 L 337.5 47.230469 L 337.5 159.730469 L 225 159.730469 Z M 225 47.230469 " clip-rule="nonzero"/></clipPath><clipPath id="efaa60f946"><path d="M 281.25 47.230469 C 250.183594 47.230469 225 72.414062 225 103.480469 C 225 134.546875 250.183594 159.730469 281.25 159.730469 C 312.316406 159.730469 337.5 134.546875 337.5 103.480469 C 337.5 72.414062 312.316406 47.230469 281.25 47.230469 Z M 281.25 47.230469 " clip-rule="nonzero"/></clipPath><clipPath id="8f317e2446"><path d="M 57 150 L 161 150 L 161 322 L 57 322 Z M 57 150 " clip-rule="nonzero"/></clipPath><clipPath id="c4c7a0e87b"><path d="M -13.761719 220.796875 L 95.359375 132.6875 L 189.59375 249.390625 L 80.472656 337.5 Z M -13.761719 220.796875 " clip-rule="nonzero"/></clipPath><clipPath id="23fb323101"><path d="M -13.761719 220.796875 L 95.359375 132.6875 L 189.59375 249.390625 L 80.472656 337.5 Z M -13.761719 220.796875 " clip-rule="nonzero"/></clipPath><clipPath id="938f7a0566"><path d="M 37.5 47.230469 L 150 47.230469 L 150 159.730469 L 37.5 159.730469 Z M 37.5 47.230469 " clip-rule="nonzero"/></clipPath><clipPath id="870e6d5f95"><path d="M 93.75 47.230469 C 62.683594 47.230469 37.5 72.414062 37.5 103.480469 C 37.5 134.546875 62.683594 159.730469 93.75 159.730469 C 124.816406 159.730469 150 134.546875 150 103.480469 C 150 72.414062 124.816406 47.230469 93.75 47.230469 Z M 93.75 47.230469 " clip-rule="nonzero"/></clipPath><clipPath id="b37c71736c"><path d="M 85.101562 47.230469 L 293.792969 47.230469 L 293.792969 337.5 L 85.101562 337.5 Z M 85.101562 47.230469 " clip-rule="nonzero"/></clipPath><clipPath id="80d799570c"><path d="M 102.351562 47.230469 L 276.542969 47.230469 C 281.117188 47.230469 285.503906 49.046875 288.738281 52.28125 C 291.972656 55.519531 293.792969 59.90625 293.792969 64.480469 L 293.792969 320.25 C 293.792969 324.824219 291.972656 329.210938 288.738281 332.449219 C 285.503906 335.683594 281.117188 337.5 276.542969 337.5 L 102.351562 337.5 C 97.777344 337.5 93.386719 335.683594 90.152344 332.449219 C 86.917969 329.210938 85.101562 324.824219 85.101562 320.25 L 85.101562 64.480469 C 85.101562 59.90625 86.917969 55.519531 90.152344 52.28125 C 93.386719 49.046875 97.777344 47.230469 102.351562 47.230469 Z M 102.351562 47.230469 " clip-rule="nonzero"/></clipPath><clipPath id="b5d8b2f82c"><path d="M 64.375 60.667969 L 150 60.667969 L 150 146.292969 L 64.375 146.292969 Z M 64.375 60.667969 " clip-rule="nonzero"/></clipPath><clipPath id="184867a4e0"><path d="M 107.1875 60.667969 C 83.542969 60.667969 64.375 79.835938 64.375 103.480469 C 64.375 127.125 83.542969 146.292969 107.1875 146.292969 C 130.832031 146.292969 150 127.125 150 103.480469 C 150 79.835938 130.832031 60.667969 107.1875 60.667969 Z M 107.1875 60.667969 " clip-rule="nonzero"/></clipPath><clipPath id="63a34549e7"><path d="M 225 60.667969 L 310.625 60.667969 L 310.625 146.292969 L 225 146.292969 Z M 225 60.667969 " clip-rule="nonzero"/></clipPath><clipPath id="d025a71954"><path d="M 267.8125 60.667969 C 244.167969 60.667969 225 79.835938 225 103.480469 C 225 127.125 244.167969 146.292969 267.8125 146.292969 C 291.457031 146.292969 310.625 127.125 310.625 103.480469 C 310.625 79.835938 291.457031 60.667969 267.8125 60.667969 Z M 267.8125 60.667969 " clip-rule="nonzero"/></clipPath><clipPath id="90f5e2ee20"><path d="M 97.101562 60.667969 L 281.25 60.667969 L 281.25 315.367188 L 97.101562 315.367188 Z M 97.101562 60.667969 " clip-rule="nonzero"/></clipPath><clipPath id="a7df8e32a2"><path d="M 114.351562 60.667969 L 264 60.667969 C 268.574219 60.667969 272.960938 62.484375 276.199219 65.71875 C 279.433594 68.953125 281.25 73.34375 281.25 77.917969 L 281.25 298.117188 C 281.25 302.691406 279.433594 307.078125 276.199219 310.3125 C 272.960938 313.546875 268.574219 315.367188 264 315.367188 L 114.351562 315.367188 C 109.777344 315.367188 105.386719 313.546875 102.152344 310.3125 C 98.917969 307.078125 97.101562 302.691406 97.101562 298.117188 L 97.101562 77.917969 C 97.101562 73.34375 98.917969 68.953125 102.152344 65.71875 C 105.386719 62.484375 109.777344 60.667969 114.351562 60.667969 Z M 114.351562 60.667969 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(%2378fc619777)"><g clip-path="url(%237452edf664)"><g clip-path="url(%23ea610ab2af)"><path fill="%23ffa944" d="M 309.472656 158.316406 C 312.722656 161.433594 314.472656 166.144531 314.382812 170.589844 C 314.28125 176.335938 311.257812 180.328125 307.59375 184.378906 C 303.425781 189.058594 302.46875 195.921875 305.289062 201.535156 C 306.871094 204.691406 309.265625 207.363281 311.617188 209.984375 C 316.707031 215.714844 321.085938 222.160156 318.785156 230.113281 C 316.382812 238.527344 307.660156 240.59375 303.796875 247.761719 C 300.960938 253.015625 302.3125 259.734375 304.949219 264.769531 C 311.660156 277.527344 323.796875 287.8125 320.5 303.632812 C 318.652344 312.519531 313.15625 320.296875 304.671875 323.996094 C 297.015625 327.328125 288.300781 325.113281 281.945312 320.085938 C 278.59375 317.425781 275.753906 313.992188 273.746094 310.242188 C 271.496094 306.015625 269.679688 301.226562 265.019531 299.070312 C 260.859375 297.167969 255.933594 297.324219 251.570312 295.871094 C 246.417969 294.199219 241.5625 291.714844 237.777344 287.78125 C 230.96875 280.671875 230.71875 272.382812 233.066406 263.332031 C 234.371094 258.324219 236.023438 252.773438 233.175781 248.019531 C 230.675781 243.871094 226.300781 241.515625 223.074219 238.058594 C 220.507812 235.351562 218.625 231.953125 217.355469 228.46875 C 214.75 221.429688 215.042969 213.496094 219.082031 207.046875 C 224.21875 198.757812 234.421875 195.339844 243.25 192.449219 C 247.449219 191.050781 251.824219 189.269531 254.992188 186.070312 C 258.289062 182.753906 260.199219 178.59375 262.890625 174.796875 C 269.410156 165.570312 277.488281 158.324219 288.488281 155.128906 C 294.496094 153.378906 301.824219 153.230469 307.328125 156.660156 C 308.105469 157.125 308.804688 157.710938 309.472656 158.316406 Z M 309.472656 158.316406 " fill-opacity="1" fill-rule="nonzero"/></g></g></g><g clip-path="url(%234b29d89903)"><g clip-path="url(%23efaa60f946)"><path fill="%23d4a266" d="M 225 47.230469 L 337.5 47.230469 L 337.5 159.730469 L 225 159.730469 Z M 225 47.230469 " fill-opacity="1" fill-rule="nonzero"/></g></g><g clip-path="url(%238f317e2446)"><g clip-path="url(%23c4c7a0e87b)"><g clip-path="url(%2323fb323101)"><path fill="%23ffa944" d="M 64.503906 317.035156 C 61.390625 313.78125 59.839844 309 60.117188 304.5625 C 60.464844 298.824219 63.652344 294.964844 67.484375 291.070312 C 71.847656 286.574219 73.09375 279.753906 70.515625 274.03125 C 69.066406 270.808594 66.785156 268.035156 64.546875 265.320312 C 59.707031 259.378906 55.601562 252.757812 58.238281 244.90625 C 60.992188 236.601562 69.796875 234.90625 73.960938 227.90625 C 77.015625 222.777344 75.949219 216.007812 73.527344 210.867188 C 67.359375 197.835938 55.671875 187.046875 59.636719 171.378906 C 61.855469 162.578125 67.675781 155.039062 76.308594 151.707031 C 84.097656 148.699219 92.714844 151.28125 98.851562 156.570312 C 102.089844 159.371094 104.777344 162.921875 106.625 166.75 C 108.695312 171.070312 110.308594 175.933594 114.871094 178.28125 C 118.945312 180.359375 123.878906 180.414062 128.171875 182.046875 C 133.25 183.9375 138 186.625 141.613281 190.714844 C 148.113281 198.109375 148.011719 206.398438 145.285156 215.34375 C 143.773438 220.292969 141.882812 225.765625 144.527344 230.636719 C 146.847656 234.886719 151.121094 237.425781 154.199219 241.015625 C 156.648438 243.832031 158.386719 247.304688 159.507812 250.835938 C 161.8125 257.980469 161.183594 265.898438 156.875 272.171875 C 151.394531 280.234375 141.054688 283.214844 132.113281 285.734375 C 127.855469 286.953125 123.410156 288.542969 120.113281 291.609375 C 116.675781 294.78125 114.59375 298.859375 111.742188 302.535156 C 104.839844 311.480469 96.460938 318.378906 85.339844 321.105469 C 79.257812 322.597656 71.933594 322.4375 66.578125 318.777344 C 65.820312 318.277344 65.148438 317.667969 64.503906 317.035156 Z M 64.503906 317.035156 " fill-opacity="1" fill-rule="nonzero"/></g></g></g><g clip-path="url(%23938f7a0566)"><g clip-path="url(%23870e6d5f95)"><path fill="%23d4a266" d="M 37.5 47.230469 L 150 47.230469 L 150 159.730469 L 37.5 159.730469 Z M 37.5 47.230469 " fill-opacity="1" fill-rule="nonzero"/></g></g><g clip-path="url(%23b37c71736c)"><g clip-path="url(%2380d799570c)"><path fill="%23d4a266" d="M 85.101562 47.230469 L 293.792969 47.230469 L 293.792969 337.5 L 85.101562 337.5 Z M 85.101562 47.230469 " fill-opacity="1" fill-rule="nonzero"/></g></g><g clip-path="url(%23b5d8b2f82c)"><g clip-path="url(%23184867a4e0)"><path fill="%23ab773a" d="M 64.375 60.667969 L 150 60.667969 L 150 146.292969 L 64.375 146.292969 Z M 64.375 60.667969 " fill-opacity="1" fill-rule="nonzero"/></g></g><g clip-path="url(%2363a34549e7)"><g clip-path="url(%23d025a71954)"><path fill="%23ab773a" d="M 225 60.667969 L 310.625 60.667969 L 310.625 146.292969 L 225 146.292969 Z M 225 60.667969 " fill-opacity="1" fill-rule="nonzero"/></g></g><g clip-path="url(%2390f5e2ee20)"><g clip-path="url(%23a7df8e32a2)"><path fill="%23ab773a" d="M 97.101562 60.667969 L 281.25 60.667969 L 281.25 315.367188 L 97.101562 315.367188 Z M 97.101562 60.667969 " fill-opacity="1" fill-rule="nonzero"/></g></g></svg>');
    background-size: 500px 500px;
    background-repeat: no-repeat;
 background-position: top left 0;
 width: 500px;
 height: 500px;
    `;
    text.style = `
    display: block;
    width: 200px;
    height: 300px;
    z-index: 10000;
    margin: 150px;
    overflow-y: auto;
    overflow-x: hidden;
    position: fixed;
`;
console.log(chrome.runtime.getURL('./breadBackground.svg'));
    // information.textContent = "Hello world";
    grilledCheeseLoader.remove();
    document.body.appendChild(informationPopUp);
    document.body.insertBefore(informationPopUp, document.body.firstChild);

    console.log("----END OF FROM CREDIBLY----");
}

main();
