async function main() {
    console.log("----START OF FROM CREDIBLY----");
    // chrome.browserAction.setPopup({
    //     popup: "./index.html",
    // });
    console.log(window.location.href);
    const closeButton = document.createElement("button");
    closeButton.textContent = "x";
    closeButton.addEventListener("click", () => {
        informationPopUp.remove();
        //grilledCheeseLoader.remove();
    });
    const text = document.createElement("div");
    const informationPopUp = document.createElement("div");
    const loadingText = document.createElement("p");
    loadingText.innerHTML = "Analyzing Credibility...";
    text.appendChild(loadingText);
    informationPopUp.appendChild(text)

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
    informationPopUp.append(closeButton);
    informationPopUp.style = `
    position: fixed; 
    top:0;
    left:0;
z-index: 10000;
display: block;
background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="500" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="1542a667c5"><path d="M 178 106 L 285 106 L 285 279 L 178 279 Z M 178 106 " clip-rule="nonzero"/></clipPath><clipPath id="13beff1bbb"><path d="M 354.75 203.925781 L 249.453125 296.570312 L 150.371094 183.957031 L 255.664062 91.3125 Z M 354.75 203.925781 " clip-rule="nonzero"/></clipPath><clipPath id="b9692fff85"><path d="M 354.75 203.925781 L 249.453125 296.570312 L 150.371094 183.957031 L 255.664062 91.3125 Z M 354.75 203.925781 " clip-rule="nonzero"/></clipPath><clipPath id="b3dd41d297"><path d="M 188.011719 0 L 300.511719 0 L 300.511719 112.5 L 188.011719 112.5 Z M 188.011719 0 " clip-rule="nonzero"/></clipPath><clipPath id="7ae6f03153"><path d="M 244.261719 0 C 213.195312 0 188.011719 25.183594 188.011719 56.25 C 188.011719 87.316406 213.195312 112.5 244.261719 112.5 C 275.328125 112.5 300.511719 87.316406 300.511719 56.25 C 300.511719 25.183594 275.328125 0 244.261719 0 Z M 244.261719 0 " clip-rule="nonzero"/></clipPath><clipPath id="495eba9873"><path d="M 20 103 L 124 103 L 124 275 L 20 275 Z M 20 103 " clip-rule="nonzero"/></clipPath><clipPath id="34a8b69272"><path d="M -50.75 173.566406 L 58.367188 85.457031 L 152.601562 202.160156 L 43.484375 290.269531 Z M -50.75 173.566406 " clip-rule="nonzero"/></clipPath><clipPath id="f40b86d5c9"><path d="M -50.75 173.566406 L 58.367188 85.457031 L 152.601562 202.160156 L 43.484375 290.269531 Z M -50.75 173.566406 " clip-rule="nonzero"/></clipPath><clipPath id="a03d384470"><path d="M 0.511719 0 L 113.011719 0 L 113.011719 112.5 L 0.511719 112.5 Z M 0.511719 0 " clip-rule="nonzero"/></clipPath><clipPath id="f63394c769"><path d="M 56.761719 0 C 25.695312 0 0.511719 25.183594 0.511719 56.25 C 0.511719 87.316406 25.695312 112.5 56.761719 112.5 C 87.828125 112.5 113.011719 87.316406 113.011719 56.25 C 113.011719 25.183594 87.828125 0 56.761719 0 Z M 56.761719 0 " clip-rule="nonzero"/></clipPath><clipPath id="4fb37a8a20"><path d="M 48.113281 0 L 256.800781 0 L 256.800781 290.269531 L 48.113281 290.269531 Z M 48.113281 0 " clip-rule="nonzero"/></clipPath><clipPath id="75991615ae"><path d="M 65.363281 0 L 239.550781 0 C 244.125 0 248.515625 1.816406 251.75 5.050781 C 254.984375 8.289062 256.800781 12.675781 256.800781 17.25 L 256.800781 273.019531 C 256.800781 277.59375 254.984375 281.980469 251.75 285.21875 C 248.515625 288.453125 244.125 290.269531 239.550781 290.269531 L 65.363281 290.269531 C 60.785156 290.269531 56.398438 288.453125 53.164062 285.21875 C 49.929688 281.980469 48.113281 277.59375 48.113281 273.019531 L 48.113281 17.25 C 48.113281 12.675781 49.929688 8.289062 53.164062 5.050781 C 56.398438 1.816406 60.785156 0 65.363281 0 Z M 65.363281 0 " clip-rule="nonzero"/></clipPath><clipPath id="9d2f00bc7e"><path d="M 27.382812 13.4375 L 113.011719 13.4375 L 113.011719 99.0625 L 27.382812 99.0625 Z M 27.382812 13.4375 " clip-rule="nonzero"/></clipPath><clipPath id="a21096955f"><path d="M 70.199219 13.4375 C 46.550781 13.4375 27.382812 32.605469 27.382812 56.25 C 27.382812 79.894531 46.550781 99.0625 70.199219 99.0625 C 93.84375 99.0625 113.011719 79.894531 113.011719 56.25 C 113.011719 32.605469 93.84375 13.4375 70.199219 13.4375 Z M 70.199219 13.4375 " clip-rule="nonzero"/></clipPath><clipPath id="6f54b93b42"><path d="M 188.011719 13.4375 L 273.636719 13.4375 L 273.636719 99.0625 L 188.011719 99.0625 Z M 188.011719 13.4375 " clip-rule="nonzero"/></clipPath><clipPath id="ee8e43b073"><path d="M 230.824219 13.4375 C 207.179688 13.4375 188.011719 32.605469 188.011719 56.25 C 188.011719 79.894531 207.179688 99.0625 230.824219 99.0625 C 254.46875 99.0625 273.636719 79.894531 273.636719 56.25 C 273.636719 32.605469 254.46875 13.4375 230.824219 13.4375 Z M 230.824219 13.4375 " clip-rule="nonzero"/></clipPath><clipPath id="6e37459901"><path d="M 60.113281 13.4375 L 244.261719 13.4375 L 244.261719 268.136719 L 60.113281 268.136719 Z M 60.113281 13.4375 " clip-rule="nonzero"/></clipPath><clipPath id="80b51f9bbf"><path d="M 77.363281 13.4375 L 227.011719 13.4375 C 231.585938 13.4375 235.972656 15.253906 239.207031 18.488281 C 242.441406 21.722656 244.261719 26.113281 244.261719 30.6875 L 244.261719 250.886719 C 244.261719 255.460938 242.441406 259.847656 239.207031 263.082031 C 235.972656 266.316406 231.585938 268.136719 227.011719 268.136719 L 77.363281 268.136719 C 72.785156 268.136719 68.398438 266.316406 65.164062 263.082031 C 61.929688 259.847656 60.113281 255.460938 60.113281 250.886719 L 60.113281 30.6875 C 60.113281 26.113281 61.929688 21.722656 65.164062 18.488281 C 68.398438 15.253906 72.785156 13.4375 77.363281 13.4375 Z M 77.363281 13.4375 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(%231542a667c5)"><g clip-path="url(%2313beff1bbb)"><g clip-path="url(%23b9692fff85)"><path fill="%23ffa944" d="M 272.484375 111.085938 C 275.734375 114.203125 277.484375 118.914062 277.394531 123.359375 C 277.292969 129.105469 274.269531 133.097656 270.605469 137.148438 C 266.4375 141.828125 265.480469 148.691406 268.296875 154.304688 C 269.878906 157.460938 272.277344 160.132812 274.628906 162.753906 C 279.714844 168.484375 284.097656 174.929688 281.796875 182.882812 C 279.394531 191.296875 270.671875 193.363281 266.804688 200.53125 C 263.96875 205.785156 265.324219 212.503906 267.957031 217.539062 C 274.671875 230.296875 286.808594 240.582031 283.507812 256.402344 C 281.664062 265.289062 276.167969 273.066406 267.683594 276.765625 C 260.027344 280.097656 251.3125 277.882812 244.953125 272.855469 C 241.601562 270.195312 238.765625 266.761719 236.757812 263.015625 C 234.507812 258.785156 232.6875 253.996094 228.03125 251.839844 C 223.871094 249.9375 218.941406 250.09375 214.582031 248.640625 C 209.429688 246.96875 204.570312 244.484375 200.789062 240.550781 C 193.980469 233.441406 193.730469 225.152344 196.078125 216.101562 C 197.378906 211.09375 199.035156 205.546875 196.183594 200.789062 C 193.6875 196.640625 189.3125 194.285156 186.085938 190.828125 C 183.519531 188.121094 181.632812 184.722656 180.367188 181.238281 C 177.761719 174.199219 178.054688 166.265625 182.09375 159.816406 C 187.230469 151.527344 197.433594 148.109375 206.257812 145.21875 C 210.460938 143.820312 214.835938 142.039062 218.003906 138.839844 C 221.300781 135.523438 223.207031 131.363281 225.902344 127.566406 C 232.417969 118.339844 240.5 111.09375 251.496094 107.898438 C 257.507812 106.148438 264.835938 106 270.339844 109.429688 C 271.117188 109.898438 271.8125 110.480469 272.484375 111.085938 Z M 272.484375 111.085938 " fill-opacity="1" fill-rule="nonzero"/></g></g></g><g clip-path="url(%23b3dd41d297)"><g clip-path="url(%237ae6f03153)"><path fill="%23d4a266" d="M 188.011719 0 L 300.511719 0 L 300.511719 112.5 L 188.011719 112.5 Z M 188.011719 0 " fill-opacity="1" fill-rule="nonzero"/></g></g><g clip-path="url(%23495eba9873)"><g clip-path="url(%2334a8b69272)"><g clip-path="url(%23f40b86d5c9)"><path fill="%23ffa944" d="M 27.515625 269.804688 C 24.402344 266.550781 22.851562 261.769531 23.128906 257.332031 C 23.472656 251.597656 26.664062 247.734375 30.496094 243.84375 C 34.859375 239.34375 36.105469 232.523438 33.527344 226.800781 C 32.078125 223.578125 29.796875 220.804688 27.558594 218.089844 C 22.71875 212.148438 18.613281 205.527344 21.246094 197.675781 C 24.003906 189.371094 32.808594 187.675781 36.972656 180.675781 C 40.027344 175.546875 38.960938 168.78125 36.539062 163.636719 C 30.371094 150.605469 18.683594 139.816406 22.644531 124.148438 C 24.867188 115.347656 30.683594 107.808594 39.320312 104.476562 C 47.109375 101.46875 55.722656 104.050781 61.863281 109.339844 C 65.097656 112.140625 67.789062 115.691406 69.636719 119.519531 C 71.703125 123.839844 73.320312 128.703125 77.882812 131.050781 C 81.957031 133.128906 86.886719 133.183594 91.183594 134.816406 C 96.261719 136.707031 101.007812 139.394531 104.625 143.484375 C 111.125 150.878906 111.023438 159.167969 108.296875 168.113281 C 106.78125 173.0625 104.894531 178.535156 107.539062 183.40625 C 109.859375 187.65625 114.132812 190.195312 117.210938 193.785156 C 119.660156 196.601562 121.398438 200.074219 122.519531 203.605469 C 124.824219 210.75 124.195312 218.667969 119.886719 224.941406 C 114.40625 233.003906 104.0625 235.984375 95.125 238.503906 C 90.867188 239.722656 86.421875 241.3125 83.121094 244.378906 C 79.6875 247.550781 77.605469 251.628906 74.753906 255.304688 C 67.851562 264.25 59.472656 271.148438 48.347656 273.875 C 42.269531 275.367188 34.941406 275.207031 29.589844 271.546875 C 28.832031 271.046875 28.160156 270.4375 27.515625 269.804688 Z M 27.515625 269.804688 " fill-opacity="1" fill-rule="nonzero"/></g></g></g><g clip-path="url(%23a03d384470)"><g clip-path="url(%23f63394c769)"><path fill="%23d4a266" d="M 0.511719 0 L 113.011719 0 L 113.011719 112.5 L 0.511719 112.5 Z M 0.511719 0 " fill-opacity="1" fill-rule="nonzero"/></g></g><g clip-path="url(%234fb37a8a20)"><g clip-path="url(%2375991615ae)"><path fill="%23d4a266" d="M 48.113281 0 L 256.800781 0 L 256.800781 290.269531 L 48.113281 290.269531 Z M 48.113281 0 " fill-opacity="1" fill-rule="nonzero"/></g></g><g clip-path="url(%239d2f00bc7e)"><g clip-path="url(%23a21096955f)"><path fill="%23ab773a" d="M 27.382812 13.4375 L 113.011719 13.4375 L 113.011719 99.0625 L 27.382812 99.0625 Z M 27.382812 13.4375 " fill-opacity="1" fill-rule="nonzero"/></g></g><g clip-path="url(%236f54b93b42)"><g clip-path="url(%23ee8e43b073)"><path fill="%23ab773a" d="M 188.011719 13.4375 L 273.636719 13.4375 L 273.636719 99.0625 L 188.011719 99.0625 Z M 188.011719 13.4375 " fill-opacity="1" fill-rule="nonzero"/></g></g><g clip-path="url(%236e37459901)"><g clip-path="url(%2380b51f9bbf)"><path fill="%23ab773a" d="M 60.113281 13.4375 L 244.261719 13.4375 L 244.261719 268.136719 L 60.113281 268.136719 Z M 60.113281 13.4375 " fill-opacity="1" fill-rule="nonzero"/></g></g></svg>');
background-size: 500px 500px;
background-repeat: no-repeat;
background-position: top left 0;
width: 500px;
height: 500px;
`;

    text.style = `
font-family: 'Trebuchet MS', sans-serif;
color: white;
display: block;
width: 240px;
height: 240px;
z-index: 10000;
margin: 90px;
overflow-y: auto;
overflow-x: hidden;
position: fixed;
`;

    document.body.insertBefore(informationPopUp, document.body.firstChild);

    /* grilledCheeseLoader.style = `
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
 `;*/
    // document.body.appendChild(grilledCheeseLoader);
    // console.log(grilledCheeseLoader);
    // const CSS = `
    // .credibly_item {
    //     position: sticky;
    //     top: 0px;
    //     left: 0px;
    //     width: 500px;
    //     height: 500px;
    // }
    // `;

    // const cssItem = document.createElement("style");
    //cssItem.innerHTML = CSS;
    //document.body.appendChild(cssItem);

    const res = await fetch(`http://localhost:8080/?url=${window.location.href}`);

    if (!res.ok) {
        throw new Error(`Failed to fetch data (HTTP ${res.status})`);
    }

    const json = await res.json();
    console.log(json);

    // Update the popup content with fetched data
    const factualness = document.createElement("p");
    factualness.textContent = `Factualness: ${json.factualness}`;

    const textbias = document.createElement("p");
    textbias.textContent = `Bias: ${json.textBias}`;

    text.removeChild(loadingText);
    text.appendChild(factualness);
    text.appendChild(textbias);

    console.log("----END OF FROM CREDIBLY----");

    //informationPopUp.appendChild(closeButton);



    // information.textContent = "Hello world";
    // grilledCheeseLoader.remove();
    //document.body.appendChild(informationPopUp);
    //document.body.insertBefore(informationPopUp, document.body.firstChild);

    console.log("----END OF FROM CREDIBLY----");
}

main();
