const giscus_collection = document.getElementsByClassName("giscus");
const giscus = giscus_collection.item(0);

var config = { attributes: true, childList: true, subtree: true };
var callback = function() {
    const giscus_collection = document.getElementsByClassName("giscus");
    const giscus = giscus_collection.item(0);
    const footer = document.getElementById("footer");

    document.documentElement.style.setProperty(
        "--rantsona-offset",
        (giscus.offsetHeight + footer.offsetHeight) + "px"
    );
}

const observer = new MutationObserver(callback);
observer.observe(giscus, config);