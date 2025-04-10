//so assets like the header, nav and footer can be reused for each page.

//nav
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header"); // Selects the existing <header> element
    if (header) {
        header.innerHTML = `
        <a id="logo" href="index.html">Amber <br> Sudworth</p></a>
        <nav class="desktop-nav">
            <ul class="nav-list">
                <li>
                    <a href=aboutme.html>About</a>
                </li>
                <li class="dropdown">
                    <p class="dropbutton">Projects&#x25BE</p>
                    <div class="dropcontent">
                        <a href="largetask.html">Aurum Landscapes</a>
                        <br>
                        <a href="smalltask.html">Fictional perfume</a>
                        <br>
                        <a href="endyearproject.html"> Final year project</a>
                    </div>
                </li>
                <li>
                    <a href=contact.html>Contact me</a>
                </li>
            </ul>
        </nav>
        <button class="mobile-nav-toggle" id="arrow">&#x25C2;</button>
        <nav class="mobile-nav">
        <br>
            <ul class="nodeco">
                <li>
                    <a href="contact.html">Contact</a>
                </li>
                <li>
                    <a href="aboutme.html">About</a>
                </li>
                <li>
                    <p class=mobile-list>Projects</p>
                    <section>
                        <a href="largetask.html">Aurum Landscapes</a>
                        <br>
                        <a href="smalltask.html">Fictional perfume</a>
                        <br>
                        <a href="endyearproject.html"> Final year project</a>
                    </section>
                </li>
            </ul>
        </nav>
        `;
    }
    const footer = document.querySelector("footer");
    if (footer) {
        footer.innerHTML = `
        <section>
            <ul class="nodeco">
                <li>
                    <a href=#logo>Back to top</a>
                </li>
                <li id="partytime">
                    Party mode?
                </li>
            </ul>
        </section>
        <section>
            <ul class="nodeco">
                <li>
                    <p> Made by Amber Sudworth © 2025.</p> <br>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/amber-sudworth-lee-4a1060220">
                        <img src="assets/images/InBug-White.png" id="linkedin">
                    </a>
                </li>
            </ul>
        </section>
        <img src="/assets/images/discoball.gif" alt="" id="discoBall">
        `;
    }
});

