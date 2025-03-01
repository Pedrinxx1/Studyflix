(function() {
  const scrollContainerrr = document.querySelector(".scrol"),
    firstImage = scrollContainerrr.querySelectorAll("img")[0],
    arrowIcons = document.querySelectorAll(".wrapperr i");

  let isDragStart = false, prevPageX, prevScrollLeft;
  let firstImgWidth = firstImage.clientWidth + 18;

  arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
      scrollContainerrr.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    });
  });

  const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = scrollContainerrr.scrollLeft;
  }

  const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();

    let positionDiff = e.pageX - prevPageX;
    scrollContainerrr.scrollLeft = prevScrollLeft - positionDiff;
  }

  const dragStop = () => {
    isDragStart = false;
  }

  scrollContainerrr.addEventListener("mousedown", dragStart);
  scrollContainerrr.addEventListener("mousemove", dragging);
  scrollContainerrr.addEventListener("mouseup", dragStop);
})();
