(function() {
  const scrollContainerr = document.querySelector(".scrolll"),
    firstImage = scrollContainerr.querySelectorAll("img")[0],
    arrowIcons = document.querySelectorAll(".wrapperrr i");

  let isDragStart = false, prevPageX, prevScrollLeft;
  let firstImgWidth = firstImage.clientWidth + 18;

  arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
      scrollContainerr.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    });
  });

  const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = scrollContainerr.scrollLeft;
  }

  const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();

    let positionDiff = e.pageX - prevPageX;
    scrollContainerr.scrollLeft = prevScrollLeft - positionDiff;
  }

  const dragStop = () => {
    isDragStart = false;
  }

  scrollContainerr.addEventListener("mousedown", dragStart);
  scrollContainerr.addEventListener("mousemove", dragging);
  scrollContainerr.addEventListener("mouseup", dragStop);
})();
