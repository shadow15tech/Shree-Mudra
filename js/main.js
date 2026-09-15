document.addEventListener("DOMContentLoaded", function () {

    const menuButton =
        document.querySelector(".mobile-menu-button");

    const mobileNavigation =
        document.querySelector(".mobile-navigation");


    /* =========================================
       MOBILE MENU
    ========================================== */

    if (menuButton && mobileNavigation) {

        menuButton.addEventListener("click", function () {

            const isOpen =
                mobileNavigation.classList.toggle("open");


            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );


            menuButton.classList.toggle(
                "active",
                isOpen
            );

        });


        /* Close menu after clicking a link */

        mobileNavigation
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener("click", function () {

                    mobileNavigation.classList.remove("open");

                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    menuButton.classList.remove("active");

                });

            });

    }


    /* =========================================
       SMOOTH SCROLL
    ========================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(function (link) {

            link.addEventListener("click", function (event) {

                const targetId =
                    link.getAttribute("href");

                const target =
                    document.querySelector(targetId);

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            });

        });

});

/* =========================================================
   MOBILE NAVIGATION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector(".navbar");
    const menuButton = document.querySelector(".mobile-menu-button");
    const mobileNavigation = document.querySelector(".mobile-navigation");

    if (!navbar || !menuButton || !mobileNavigation) {
        return;
    }

    menuButton.addEventListener("click", function () {

        const isOpen = navbar.classList.toggle("menu-open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close menu" : "Open menu"
        );

    });


    /* Close menu after clicking a mobile link */

    mobileNavigation.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("menu-open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Open menu"
            );

        });

    });


    /* Close mobile menu if screen becomes desktop */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 767) {

            navbar.classList.remove("menu-open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

});

/* =========================================
   FAQ ACCORDION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {

        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {

            const isActive = item.classList.contains("active");


            /* Close all other FAQs */
            faqItems.forEach((faq) => {

                faq.classList.remove("active");

                const button = faq.querySelector(".faq-question");

                if (button) {
                    button.setAttribute("aria-expanded", "false");
                }

            });


            /* Open clicked FAQ */
            if (!isActive) {

                item.classList.add("active");

                question.setAttribute("aria-expanded", "true");

            }

        });

    });

});