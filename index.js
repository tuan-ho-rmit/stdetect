window.onload = function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
};

document.addEventListener("DOMContentLoaded", function () {
  const aboutUsSection = document.getElementById("about-us");
  const items = document.querySelectorAll(".item");

  function handleIntersection(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        items.forEach(function (item) {
          item.classList.add("animation-visible");
        });
      }
    });
  }

  const aboutUsObserver = new IntersectionObserver(handleIntersection, {
    threshold: 0.1, 
  });

  aboutUsObserver.observe(aboutUsSection);
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const aboutUsSection = document.getElementById("about-us");

    if (isElementInViewport(aboutUsSection)) {
      document.querySelectorAll(".item").forEach(function (item) {
        item.classList.add("animation-visible");
      });
    } else {
      document.querySelectorAll(".item").forEach(function (item) {
        item.classList.remove("animation-visible");
      });
    }
  });

  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var overviewItems = document.querySelectorAll(".overview-item");

  function checkScroll() {
    overviewItems.forEach(function (item) {
      var itemPosition = item.getBoundingClientRect().top;
      var screenHeight = window.innerHeight;

      if (itemPosition < screenHeight * 0.8) {
        item.classList.add("animate");
      }
    });
  }

  checkScroll();

  window.addEventListener("scroll", function () {
    checkScroll();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var overviewItems = document.querySelectorAll(".overview-item");

  function checkScroll() {
    overviewItems.forEach(function (item) {
      var itemPosition = item.getBoundingClientRect().top;
      var itemHeight = item.offsetHeight;
      var screenHeight = window.innerHeight;

      if (itemPosition < screenHeight * 0.8 && itemPosition + itemHeight > 0) {
        item.classList.add("animate");
      } else {
        item.classList.remove("animate");
      }
    });
  }

  window.addEventListener("scroll", function () {
    checkScroll();
  });

  checkScroll();
});


document.addEventListener("DOMContentLoaded", function () {
    var missionContainer = document.querySelector(".mission-container");
    var visionContainer = document.querySelector(".vision-container");

    function handleIntersection(entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            } else {
                entry.target.classList.remove("animate");
            }
        });
    }

    var missionObserver = new IntersectionObserver(handleIntersection, {
        threshold: 0.4, 
    });

    var visionObserver = new IntersectionObserver(handleIntersection, {
        threshold: 0.4, 
    });

    missionObserver.observe(missionContainer);
    visionObserver.observe(visionContainer);


});
