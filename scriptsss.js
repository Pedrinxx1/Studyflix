(function() {
  const scrollContaine = document.querySelector(".rotation"),
    firstImage = scrollContaine.querySelectorAll("img")[0],
    arrowIcons = document.querySelectorAll(".min i");

  let isDragStart = false, prevPageX, prevScrollLeft;
  let firstImgWidth = firstImage.clientWidth + 18;

  arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
      scrollContaine.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    });
  });

  const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = scrollContaine.scrollLeft;
  }

  const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();

    let positionDiff = e.pageX - prevPageX;
    scrollContaine.scrollLeft = prevScrollLeft - positionDiff;
  }

  const dragStop = () => {
    isDragStart = false;
  }

  scrollContaine.addEventListener("mousedown", dragStart);
  scrollContaine.addEventListener("mousemove", dragging);
  scrollContaine.addEventListener("mouseup", dragStop);
})();
