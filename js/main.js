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

/* =========================================================
   LIVE PURCHASE ACTIVITY
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const popup = document.getElementById("livePurchasePopup");

    const popupName = document.getElementById("livePopupName");
    const popupLocation = document.getElementById("livePopupLocation");
    const popupAction = document.getElementById("livePopupAction");
    const popupIcon = document.getElementById("livePopupIcon");
    const popupTime = document.getElementById("livePopupTime");

    const closeButton = document.getElementById("livePopupClose");


    if (!popup) {
        return;
    }


    /*
     * SAMPLE / DEMO ACTIVITY DATA
     *
     * Replace these entries with genuine customer/order
     * activity before presenting them as real purchases.
     */

    const activityData = [

        {
            name: "आशीष शर्मा",
            location: "Jaipur",
            product: "Pranav Mudra",
            icon: "🪷"
        },

        {
            name: "नेहा अग्रवाल",
            location: "Delhi",
            product: "Laxmi-Ganesh Mudra",
            icon: "🪔"
        },

        {
            name: "राकेश वर्मा",
            location: "Agra",
            product: "Ganesh Mudra",
            icon: "🙏"
        },

        {
            name: "पूजा जैन",
            location: "Udaipur",
            product: "Laxmi Mudra",
            icon: "✨"
        },

        {
            name: "अमित गुप्ता",
            location: "Kota",
            product: "Pranav Mudra",
            icon: "🪙"
        },

        {
            name: "कविता शर्मा",
            location: "Mumbai",
            product: "Laxmi-Ganesh Mudra",
            icon: "🌸"
        },

        {
            name: "मनीष मीणा",
            location: "Jaipur",
            product: "Ganesh Mudra",
            icon: "🙏"
        },

        {
            name: "सोनिया गुप्ता",
            location: "Delhi",
            product: "Pranav Mudra",
            icon: "🪷"
        },

        {
            name: "दीपक शर्मा",
            location: "Jodhpur",
            product: "Laxmi Mudra",
            icon: "🪔"
        },

        {
            name: "अंजलि वर्मा",
            location: "Lucknow",
            product: "Ganesh Mudra",
            icon: "✨"
        },

        {
            name: "विवेक सोनी",
            location: "Indore",
            product: "Laxmi-Ganesh Mudra",
            icon: "🪙"
        },

        {
            name: "रितु अग्रवाल",
            location: "Bhopal",
            product: "Pranav Mudra",
            icon: "🌺"
        },

        {
            name: "सुरेश यादव",
            location: "Agra",
            product: "Ganesh Mudra",
            icon: "🙏"
        },

        {
            name: "मोहित जैन",
            location: "Ajmer",
            product: "Laxmi Mudra",
            icon: "🪷"
        },

        {
            name: "श्वेता गुप्ता",
            location: "Delhi",
            product: "Pranav Mudra",
            icon: "🪔"
        },

        {
            name: "राजेश मीणा",
            location: "Kota",
            product: "Laxmi-Ganesh Mudra",
            icon: "✨"
        },

        {
            name: "प्रिया शर्मा",
            location: "Udaipur",
            product: "Ganesh Mudra",
            icon: "🌸"
        }

    ];


    let currentIndex = 0;
    let popupTimer = null;


    /* =====================================================
       SHOW POPUP
    ===================================================== */

    function showPopup() {

        const customer = activityData[currentIndex];

        if (!customer) {
            return;
        }


        popupName.textContent = customer.name;

        popupLocation.textContent = customer.location;

        popupAction.textContent =
            `ने अभी ${customer.product} खरीदा`;

        popupIcon.textContent = customer.icon;


        /* Randomize small time label */

        const timeLabels = [
            "अभी",
            "अभी कुछ देर पहले",
            "कुछ मिनट पहले"
        ];

        popupTime.textContent =
            timeLabels[
                Math.floor(Math.random() * timeLabels.length)
            ];


        /* Show */

        popup.classList.add("show");


        /* Next customer */

        currentIndex++;

        if (currentIndex >= activityData.length) {
            currentIndex = 0;
        }


        /* Automatically hide */

        setTimeout(function () {

            popup.classList.remove("show");

        }, 4300);

    }


    /* =====================================================
       FIRST POPUP
    ===================================================== */

    setTimeout(function () {

        showPopup();

    }, 3500);


    /* =====================================================
       NEXT POPUP
       Every 5–6 seconds
    ===================================================== */

   function scheduleNextPopup() {

    const delay =
        Math.floor(
            Math.random() * 3000
        ) + 7000;

    popupTimer = setTimeout(function () {

        showPopup();

        scheduleNextPopup();

    }, delay);

}

scheduleNextPopup();

    /* =====================================================
       CLOSE BUTTON
    ===================================================== */

    closeButton.addEventListener("click", function () {

        popup.classList.remove("show");

    });


});
/* =========================================
   LIMITED TIME OFFER COUNTDOWN
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const hoursEl = document.getElementById("offer-hours");
    const minutesEl = document.getElementById("offer-minutes");
    const secondsEl = document.getElementById("offer-seconds");

    // =====================================
    // SET OFFER END DATE & TIME HERE
    // =====================================
    // Example: 15 September 2026, 8:00 PM
    const offerEndTime = new Date(
        "2026-09-15T20:00:00"
    ).getTime();


    function updateCountdown() {

        const currentTime = Date.now();

        const difference = offerEndTime - currentTime;


        // If offer has expired
        if (difference <= 0) {

            hoursEl.textContent = "00";
            minutesEl.textContent = "00";
            secondsEl.textContent = "00";

            return;
        }


        // Calculate remaining time
        const totalSeconds = Math.floor(difference / 1000);

        const hours = Math.floor(totalSeconds / 3600);

        const minutes = Math.floor(
            (totalSeconds % 3600) / 60
        );

        const seconds = totalSeconds % 60;


        // Update countdown
        hoursEl.textContent = String(hours).padStart(2, "0");

        minutesEl.textContent = String(minutes).padStart(2, "0");

        secondsEl.textContent = String(seconds).padStart(2, "0");
    }


    // Run immediately
    updateCountdown();


    // Update every second
    setInterval(updateCountdown, 1000);

});