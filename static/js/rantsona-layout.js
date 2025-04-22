function callback() {
    const giscus = document.querySelector(".giscus");
    const footer = document.getElementById("footer");

    if (!giscus || !footer) {
        // Retry after a slight delay if elements aren't ready
        setTimeout(callback, 100); // Retry after 100ms
        return;
    }

    console.log("Giscus loaded:", giscus);

    document.documentElement.style.setProperty(
        "--rantsona-offset",
        (giscus.offsetHeight + footer.offsetHeight) + "px"
    );

    if (
        localStorage.getItem('color-theme') === 'dark' ||
        (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        setCommentTheme('dark');
    } else {
        setCommentTheme('light');
    }
}

window.onload = callback;