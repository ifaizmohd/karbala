const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    //Toggle Navigation on mobile
    burger.addEventListener("click", () => {
      //Toggle nav bar
      nav.classList.toggle("nav-active");
  
      //Animation
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.2
          }s`;
        }
      });
  
      //Burger Animations
      burger.classList.toggle("toggle");
    });
  };
  navSlide();
  
  const handleScroll = () => {
    const next = document.querySelector("#next");
    const prev = document.querySelector("#prev");
  
    const handleScrollNext = (direction) => {
      const cards = document.querySelector(".con-cards");
      cards.scrollLeft = cards.scrollLeft +=
        window.innerWidth / 2 > 600
          ? window.innerWidth / 2
          : window.innerWidth - 100;
    };
    const handleScrollPrev = (direction) => {
      const cards = document.querySelector(".con-cards");
      cards.scrollLeft = cards.scrollLeft +=
        window.innerWidth / 2 > 600
          ? window.innerWidth / 2
          : window.innerWidth - 100;
    };
  
    next.addEventListener("click", handleScrollNext);
    prev.addEventListener("click", handleScrollPrev);
  };
  
  handleScroll();
  