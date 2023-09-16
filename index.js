async function main() {
    console.log("----START OF FROM CREDIBLY----");
    console.log(window.location.href);

    const res = await fetch(
        `http://localhost:8080/?url=${window.location.href}`
    );
    const json = await res.json();
    console.log(json);

    console.log("----END OF FROM CREDIBLY----");
}

main();
