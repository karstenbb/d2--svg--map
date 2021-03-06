document.querySelectorAll(`[id^="terminal_"]`).forEach(function (terminalElem) {
  console.log(terminalElem.id, terminalElem);
  // create popupId based on terminal ID
  const popupId = "popup_" + terminalElem.id.split("_")[1];

  // select the popup from the page
  const popupElem = document.getElementById(popupId);

  // set up hover events
  terminalElem.addEventListener("mouseover", function (event) {
    popupElem.classList.add("popup-open");
  });
  terminalElem.addEventListener("mouseout", function (event) {
    popupElem.classList.remove("popup-open");
  });
});

document.querySelectorAll(`[id^="route_"]`).forEach(function (route) {
  route.addEventListener("mouseover", function (event) {
    // move this line to the front
    event.currentTarget.parentElement.append(event.currentTarget);
  });
});

const stop = document
  .querySelectorAll(`[id^="stop_"]`)
  .forEach(function (element) {
    element.addEventListener("mouseover", function (event) {
      element.classList.add("active");
    });
    element.addEventListener("mouseout", function (event) {
      element.classList.remove("active");
    });
  });
