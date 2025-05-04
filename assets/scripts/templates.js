//so assets like the header, nav and footer can be reused for each page.

//nav
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header"); // Selects the existing <header> element
    if (header) {
        const isHome = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";

        header.innerHTML = `
        <nav id="desktopnav" class="big-ish">
            <ul class="nodecolist">
                <li class="logoitem">
                <a id="logo" href="/index.html#bigtext">Amber Sudworth</a>
                </li>
                <li>
                    <a href="/index.html#projectheader">Projects</a>
                </li>
                <li>
                    <button id="contactbutton"><a href="/index.html#contactcontainer">Contact</a></button>
                </li>
            </ul>
        </nav>
        <button id="hamburger">&#9776;</button>
        <nav class="mobilenav">
            <button id="removenav">&times;</button>
            <ul class="nodecolist big">
                <li>
                    <a href="/index.html#aboutmecontainer">About</a>
                </li>
                <li>
                    <a href="/index.html#projectcontainer">Projects</a>
                </li>
                <li>
                    <a href="/index.html#contactcontainer">Contact</a>
                </li>
            </ul>
        </nav>
        `;
    }
    const footer = document.querySelector("footer");
    if (footer) {
        footer.innerHTML = `
        <section class="small">
            <ul class="nodecolist">
                <li>
                    <a href="#pageheader">&#11205 Back to top</a>
                </li>
                <li>
                    Made by Amber Sudworth © 2025.
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/amber-sudworth-lee-4a1060220">
                        <img src="/assets/images/InBug-White.png" id="linkedin">
                    </a>
                </li>
            </ul>
        </section>
        `;
    }
});

