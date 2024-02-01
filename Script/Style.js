// navigation script
wafari = document.querySelector(".wafari");
wafari.onclick = function () {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

// navigation scroll
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 600)


})

// beranda
if(window.innerWidth < 1000) {
    new Swiper(".swiper-container",{
        direction: "horizontal",
        slidesPerView: 1,
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        paginationClickable: !0,
        spaceBetween: 0,
        autoplay: 2500,
        loop: !0
    })
} else {
    new Swiper(".swiper-container",{
        direction: "horizontal",
        slidesPerView: 1,
        parallax: !0,
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        paginationClickable: !0,
        spaceBetween: 0,
        speed: 1500,
        parallax: !0,
        autoplay: 2500,
        loop: !0
    })
}


// close beranda
// navigation script
wafari = document.querySelector(".wafari");
wafari.onclick = function () {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

// navigation scroll
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 600)


})

// canvas script
window.onload = function () {
    Particles.init({
        selector: ".background"
    });
};
const particles = Particles.init({
    selector: ".background",
    color: ["#03dac6", "#ff0266", "#000000"],
    connectParticles: true,
    responsive: [
        {
            breakpoint: 768,
            options: {
                color: ["#faebd7", "#03dac6", "#ff0266"],
                maxParticles: 43,
                connectParticles: false
            }
        }
    ]
});

class NavigationPage {
    constructor() {
        this.currentId = null;
        this.currentTab = null;
        this.tabContainerHeight = 70;
        this.lastScroll = 0;
        let self = this;
        $(".nav-tab").click(function () {
            self.onTabClick(event, $(this));
        });
        $(window).scroll(() => {
            this.onScroll();
        });
        $(window).resize(() => {
            this.onResize();
        });
    }

    onTabClick(event, element) {
        event.preventDefault();
        let scrollTop =
            $(element.attr("href")).offset().top - this.tabContainerHeight + 1;
        $("html, body").animate({ scrollTop: scrollTop }, 600);
    }

    onScroll() {
        this.checkHeaderPosition();
        this.findCurrentTabSelector();
        this.lastScroll = $(window).scrollTop();
    }

    onResize() {
        if (this.currentId) {
            this.setSliderCss();
        }
    }

    checkHeaderPosition() {
        const headerHeight = 75;
        if ($(window).scrollTop() > headerHeight) {
            $(".nav-container").addClass("nav-container--scrolled");
        } else {
            $(".nav-container").removeClass("nav-container--scrolled");
        }
        let offset =
            $(".nav").offset().top +
            $(".nav").height() -
            this.tabContainerHeight -
            headerHeight;
        if (
            $(window).scrollTop() > this.lastScroll &&
            $(window).scrollTop() > offset
        ) {
            $(".nav-container").addClass("nav-container--move-up");
            $(".nav-container").removeClass("nav-container--top-first");
            $(".nav-container").addClass("nav-container--top-second");
        } else if (
            $(window).scrollTop() < this.lastScroll &&
            $(window).scrollTop() > offset
        ) {
            $(".nav-container").removeClass("nav-container--move-up");
            $(".nav-container").removeClass("nav-container--top-second");
            $(".nav-container-container").addClass("nav-container--top-first");
        } else {
            $(".nav-container").removeClass("nav-container--move-up");
            $(".nav-container").removeClass("nav-container--top-first");
            $(".nav-container").removeClass("nav-container--top-second");
        }
    }

    findCurrentTabSelector(element) {
        let newCurrentId;
        let newCurrentTab;
        let self = this;
        $(".nav-tab").each(function () {
            let id = $(this).attr("href");
            let offsetTop = $(id).offset().top - self.tabContainerHeight;
            let offsetBottom =
                $(id).offset().top + $(id).height() - self.tabContainerHeight;
            if (
                $(window).scrollTop() > offsetTop &&
                $(window).scrollTop() < offsetBottom
            ) {
                newCurrentId = id;
                newCurrentTab = $(this);
            }
        });
        if (this.currentId != newCurrentId || this.currentId === null) {
            this.currentId = newCurrentId;
            this.currentTab = newCurrentTab;
            this.setSliderCss();
        }
    }

    setSliderCss() {
        let width = 0;
        let left = 0;
        if (this.currentTab) {
            width = this.currentTab.css("width");
            left = this.currentTab.offset().left;
        }
        $(".nav-tab-slider").css("width", width);
        $(".nav-tab-slider").css("left", left);
    }
}

// profil
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".cards").forEach((row) => {
    const tl = gsap.timeline();
    const cards = row.querySelectorAll(".card");
    const title = row.parentNode.querySelector(".page-section__title");

    ScrollTrigger.create({
        trigger: row,
        start: "+=200px bottom",
        animation: tl
            .to(title, {
                duration: 0.5,
                opacity: 1,
                x: 0,
                ease: "back.out(1.4)"
            })
            .to(cards, {
                duration: 1,
                opacity: 1,
                x: 0,
                ease: "elastic.out(1, 0.75)",
                stagger: { axis: "x", each: 0.04 }
            }, "-=0.2")
    });
});
// close profil

