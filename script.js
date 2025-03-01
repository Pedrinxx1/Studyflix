const scroll = document.querySelector(".scroll"),
  firstImg = scroll.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 17;

arrowIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    scroll.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
  });
});

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = scroll.scrollLeft;
}

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();

  let positionDiff = e.pageX - prevPageX;
  scroll.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
  isDragStart = false;
}

scroll.addEventListener("mousedown", dragStart);
scroll.addEventListener("mousemove", dragging);
scroll.addEventListener("mouseup", dragStop);

