//so assets like the header, nav and footer can be reused for each page.

//nav
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header"); // Selects the existing <header> element
    if (header) {
        const isHome = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";

        header.innerHTML = `
        ${!isHome ? `<a id="logo" class="big-ish gradient nodeco" href="index.html">Amber Sudworth</p></a>` : ""}
        <nav id="desktopnav" class="big-ish">
            <ul class="nodecolist">
                <li>
                    <a href=aboutme.html>About</a>
                </li>
                <li>
                    <a href="projects.html">Projects</a>
                </li>
                <li>
                    <button id="contactbutton"><a href="contact.html">Contact</a></button>
                </li>
            </ul>
        </nav>
        <button id="hamburger" class="big">&#9776;</button>
        <nav class="mobilenav">
            <button id="removenav" class="huge">&times;</button>
            <ul class="nodecolist big">
                <li>
                    <a href="contact.html">Contact</a>
                </li>
                <li>
                    <a href="projects.html">Projects</a>
                </li>
                <li>
                    <a href="aboutme.html">About</a>
                </li>
            </ul>
        </nav>
        `;
    }
    const footer = document.querySelector("footer");
    if (footer) {
        footer.innerHTML = `
        <section>
            <ul class="nodecolist">
                <li class="big-ish">Quick Links</li>
                <li>
                    <a href=aboutme.html>About</a>
                </li>
                <li>
                    <a href=services.html>Projects</a>
                </li>
                <li>
                    <a href=contact.html>Contact</a>
                </li>
            </ul>
        </section>
        <section>
            <ul class="nodecolist">
                <li>
                    <a href=#desktopnav class="big-ish">&#11205 Back to top</a>
                </li>
                <li>
                    Made by Amber Sudworth © 2025.
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/amber-sudworth-lee-4a1060220">
                        <img src="assets/images/InBug-White.png" id="linkedin">
                    </a>
                </li>
            </ul>
        </section>
        `;
    }
});

